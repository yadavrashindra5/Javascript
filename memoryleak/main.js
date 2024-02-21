//global variable create memory leak
function foo(arg) {
  bar = "this is a hidden global variable";
  console.log(bar);
}
foo("Hello");

//setTimeout and setInterval

function setCallback() {
  const data = {
    counter: 0,
    hugeString: new Array(100000).join("x"),
  };
  return function cb() {
    data.counter++; // data object is now part of the callback's scope                        console.log(data.counter);
  };
}
setInterval(setCallback(), 1000); // how do we stop it?

//closure

function outerFunction() {
  let data = "I am data";

  function innerFunction() {
    console.log(data);
  }

  return innerFunction;
}

const closure = outerFunction();
closure();

// If closure is stored and used repeatedly, it retains the reference to the data
// and prevents it from being garbage collected, potentially causing a memory leak.
