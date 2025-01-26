// const debounceFunction = function (func, delay) {
//   let timeout = null;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// document.addEventListener(
//   "mousemove",
//   debounceFunction(() => console.log("debounce"), 1000)
// );

// /**
//  *
//  * call the function immediately
//  * stop the function from execution for certain period of time
//  * call the function again after time period is passed
//  */
// const throttleFunction = function (func, delay) {
//   let timeout = null;
//   return () => {
//     if (!timeout) {
//       func();
//       timeout = setTimeout(() => {
//         timeout = null;
//       }, delay);
//     }
//   };
// };

// document.addEventListener(
//   "mousemove",
//   throttleFunction(() => console.log("throttle"), 1000)
// );

/**
 * call function after delay if the function call within that delay the clear the first timer and set new one
 *
 */
const debounceFun = (callback, delay) => {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
};

// document.addEventListener(
//   "mousemove",
//   debounceFun(() => {
//     console.log("debounce function");
//   }, 1000)
// );

//1000
// function debounceFunction() {
//   console.log("debouceFunction");
// }

// function debounce(callback, timer) {
//   let timeout = null;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//       timeout = null;
//     }
//     timeout = setTimeout(() => {
//       callback();
//     }, timer);
//   };
// }

// document.addEventListener("mousemove", debounce(debounceFunction, 1000));

//throttle

//call function immediately
//delay

function throttleFunction() {
  console.log("debouceFunction");
}

function throttle(callback, delay) {
  let timer = null;
  return () => {
    if (!timer) {
      callback();
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}

document.addEventListener("mousemove", throttle(throttleFunction, 5000));
