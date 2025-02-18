// async function delayAndLog() {
//     console.log('Start');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 2 seconds
//     console.log('End');
//   }

//   delayAndLog();

// const promise1 = new Promise((resolve, reject) => {
//   for (let i=0; i<1; i++) {
//     console.log(i)
//   }
//   if (Math.random() < 0.5) {
//     reject()
//   } else {
//     resolve()
//   }
// })

// console.log('before then handler');

// function main() {
//    promise1.then(function secondThen() {
//     console.log('inside then inside main');
//   }, function secondCatch() {
//     console.log('inside then inside main rejected')
//   })
//   promise1.then(function meranaamjoker() {
//   console.log('xyz');
// },function  firstCatch() {
//   console.log('ye kya ho gya');
// }
// )

// }

// main();

// const promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Hello world")
//   },2000)
// });

// promise.then((value)=>{
//   console.log(value);
// })

// console.log("Hi")

// function first() {
//   return Promise.resolve(1);
// }

// function second(value) {
//   return "Hello world";
// }

// first()
//   .then((valueOne) => Promise.reject("Hi"))
//   .then((valueTwo) => console.log(valueTwo))
//   .catch((value) => "Reject")
//   .then((value) => console.log(value));

// // promiseHooks.then(())
// // .catch(())

// function first() {
//   throw new Error("Okay, I am an error");
//   return Promise.resolve(1);
// }

// try {
//   first()
//     .then((value) => console.log(value))
//     .catch((error) => console.log("error", error));
// } catch (error) {
//   console.log(error, "outside");
// }




const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 244, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];

const subarray = [];

let i = 0;
while (i < arr.length) {
  const x = arr.slice(i, i + 10);
  subarray.push(x.filter(Boolean));
  i += 10;
}

console.log(subarray);

const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  const even = arr.filter((data) => data % 2 == 0);
  setTimeout(() => {
    resolve(even);
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  console.log("promise2");
  const odd = arr.map((data) => data % 2 != 0);
  resolve(odd);
});

const promise3 = new Promise((resolve, reject) => {
  console.log("promise3");
  const divideByf = arr.map((data) => data % 4);
  resolve(divideByf);
});

// promise1.then((data) => console.log(data));
// promise2.then((data) => console.log(data));
// promise3.then((data) => console.log(data));

Promise.all([promise1, promise2, promise3]).then((data) => console.log(data));
