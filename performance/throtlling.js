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
