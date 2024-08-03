const debounceFunction = function (func, delay) {
  let timeout = null;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

document.addEventListener(
  "mousemove",
  debounceFunction(() => console.log("debounce"), 1000)
);

/**
 *
 * call the function immediately
 * stop the function from execution for certain period of time
 * call the function again after time period is passed
 */
const throttleFunction = function (func, delay) {
  let timeout = null;
  return () => {
    if (!timeout) {
      func();
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
};

document.addEventListener(
  "mousemove",
  throttleFunction(() => console.log("throttle"), 1000)
);
