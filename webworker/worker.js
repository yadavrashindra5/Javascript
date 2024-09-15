// worker.js
self.onmessage = function (e) {
  const numbers = e.data;

  console.log("Worker started processing at:", new Date().toLocaleTimeString());

  let sum = 0;

  //   console.time("time");
  // Perform a CPU-intensive task
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 1000; ++j) {
      sum += numbers[i];
    }
  }
  //   console.timeEnd("time");
  console.log(
    "Worker finished processing at:",
    new Date().toLocaleTimeString(),
    "Sum:",
    sum
  );

  // Send the result back to the main thread
  self.postMessage(sum);
};
