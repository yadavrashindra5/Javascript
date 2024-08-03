// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   console.log("HI");
//   // Expected output: "resolved"
// }

// asyncCall();

// Simulating an asynchronous function that fetches data from a source
// function fetchDataFromSource(source) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulating a successful API call
//         const data = `${source} data`;
//         resolve(data);
//       }, Math.random() * 1000); // Introducing random delay to simulate network latency
//     });
//   }

//   // Simulating an asynchronous function that processes data
//   function processData(data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simulating data processing
//         const processedData = `Processed ${data}`;
//         resolve(processedData);
//       }, Math.random() * 1000); // Introducing random delay to simulate processing time
//     });
//   }

//   // Async function that uses async/await to fetch and process data
//   async function fetchDataAndProcess() {
//     try {
//       console.log("Fetching and processing data...");

//       // Simulating fetching data from a source
//       const fetchedData = await fetchDataFromSource("Source 1");
//       console.log("Fetched data:", fetchedData);

//       // Simulating processing the fetched data
//       const processedData = await processData(fetchedData);
//       console.log("Processed data:", processedData);

//       // Further processing or actions can be performed here...

//       console.log("Process complete!");
//     } catch (error) {
//       console.error("Error fetching or processing data:", error);
//     }
//   }

//   // Call the async function
//   fetchDataAndProcess();

// const promise = new Promise(function (resolve, reject) {
//   reject("reject");
//   resolve("resolve");
// });

// promise.then((value) => console.log(value)).then((value)=>console.log(value)).catch((value)=>console.log(value))

// async function add(a, b) {
//   return Promise.resolve(a + b);
// }

// // console.log(x);
// async function get() {
//   const x = await add(8, 9);
//   console.log(x);
// }

// get();

// Does async await block javascript Main thread?

// async function getUserData() {
//   let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
//   let response2 = await fetch("https://jsonplaceholder.typicode.com/users");
//   let response3 = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log("inside");
// }
// getUserData();

// console.log("Hi");
// console.log("Hello");

/**
 * what is async?
 * what is await?
 * How async await works behind the scenes?
 * Example of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 *
 */

//always returns a promise
async function getData() {
  return "Namaste";
}

const data = getData();
console.log(data);
