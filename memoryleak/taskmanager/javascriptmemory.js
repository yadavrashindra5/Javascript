/**
 * Javascript memory represent the how much memory the reachable objects on your page are using
 *
 * If this number is increaing, either new objects are being created, or the existing objects are growing
 *
 */

//this is the example of creating new objects

/*document.getElementById("grow").addEventListener("click", () => {
  const x = new Array(100000).fill("Rashindra Yadav");
});*/

const arr = [];

document.getElementById("grow").addEventListener("click", () => {
  for (let i = 0; i < 10000; ++i) {
    arr.push("Rashindra");
  }
});
