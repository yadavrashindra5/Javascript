function debounce(func, delay) {
  let timerOut = null;
  return () => {
    if (timerOut) {
      clearTimeout(timerOut);
    }
    timerOut = setTimeout(() => fun(), delay);
  };
}

const fun = () => {
  console.log("fun");
};

const returnFunc = debounce(fun, 1000);
// returnFunc();

document.getElementById("hello").addEventListener("input", () => returnFunc());

// document
//   .getElementById("button")
//   .addEventListener("click", () => console.log("click"));
