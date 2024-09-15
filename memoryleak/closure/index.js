const callbackFunction = (arr) => {
  console.log("callback function");
  arr.push(new Array(50000).fill("rashindra"));
};

let func = () => {
  const arr = [];
  return () => callbackFunction(arr);
};

let handler = func();

document.getElementById("grow").addEventListener("click", handler);

document.getElementById("delete").addEventListener("click", () => {
  document.getElementById("grow").removeEventListener("click", handler);
  handler = null;
});
