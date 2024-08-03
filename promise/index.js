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
  });
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
