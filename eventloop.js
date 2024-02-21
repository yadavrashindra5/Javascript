const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 resolved");
    resolve("Promise 1");
  }, 100);
});
promise1.then((result) => console.log(result));
