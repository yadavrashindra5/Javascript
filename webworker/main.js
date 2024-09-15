// main.js
function createWorker(numbers) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("worker.js"); // Create a new Web Worker
    worker.onmessage = function (e) {
      resolve(e.data); // Resolve the promise with the worker's result
    };
    worker.onerror = reject; // Handle any errors
    worker.postMessage(numbers); // Send the array to the worker
  });
}

function divideArray(array, numChunks) {
  const chunkSize = Math.ceil(array.length / numChunks);
  const chunks = [];

  for (let i = 0; i < numChunks; i++) {
    chunks.push(array.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return chunks;
}

async function runParallelWorkers() {
  console.time("Total Time");

  const arraySize = 100000000; // Example large array size
  const largeArray = new Array(arraySize).fill(1); // Simulating a large array
  console.log("Hi");
  const numWorkers = 10; // Number of Web Workers to use
  const chunks = divideArray(largeArray, numWorkers); // Divide the large array into chunks

  // Start workers in parallel
  const promises = chunks.map((chunk) => createWorker(chunk));

  const results = await Promise.all(promises);
  console.log("Results:", results);

  console.timeEnd("Total Time");
}
console.log("Hello");
// Run the example
runParallelWorkers();
