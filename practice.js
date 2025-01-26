// const largeArray = new Array(1e6).fill(0).map((_, i) => i);

// const processBatch = async (batch) => {
//   const promise = batch.map((item) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`processed item ${item}`);
//       }, 2000);
//     });
//   });
//   return Promise.all(promise);
// };

// const processLargeArray = async (array, batchSize) => {
//   for (let i = 0; i < array.length; i += batchSize) {
//     const batch = array.slice(i, i + batchSize);
//     try {
//       console.log("HI");
//       const results = await processBatch(batch);
//       // console.log(`Batch ${i / batchSize + 1} results:`, results);
//     } catch (error) {
//       console.error(`Error processing batch ${i / batchSize + 1}:`, error);
//     }
//   }
// };

// processLargeArray(largeArray, 1000);

// const arr = [1, 0, 1, 0, 1, 0];
// let i = 0,
//   j = arr.length - 1;
// while (i < j) {
//   if (arr[i] == 0) {
//     i++;
//   } else if (arr[j] == 1) {
//     j--;
//   } else {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// console.log(arr);

//three states
//state=fulfill
//pending
//
//G

// const p = new Promise((resolve, reject) => {
//   console.log("hello1");
//   setTimeout(() => {
//     console.log("Hello4");
//     resolve("helllo");
//     console.log("Hello5");
//   }, 2000);
//   console.log("Hello2");
// });

// p.then((data) => {
//   console.log(data);
// }).catch(() => {
//   console.log("hello");
// });

// console.log("Hi");

const obj = {
  name: "primathon",
  normal: function () {
    return () => {
      console.log(this);
    };
  },
  arrow: () => {
    console.log(this);
  },
};

const x = obj.normal();
x();
