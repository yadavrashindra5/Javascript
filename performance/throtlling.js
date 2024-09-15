/**
 *
 * call the function immediately
 * stop the function from execution for certain period of time
 * call the function again after time period is passed
 */

function fun() {
  console.log("This is a function");
}

function throttle(fun, delay) {
  let timerOut = null;
  return () => {
    if (!timerOut) {
      fun();
      timerOut = setTimeout(() => (timerOut = null), delay);
    }
  };
}

// setInterval(() => fun(), 500);
document.getElementById("button").addEventListener("click", throttle(fun, 500));
