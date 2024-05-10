// //global variable create memory leak
// function foo(arg) {
//   bar = "this is a hidden global variable";
//   console.log(bar);
// }
// foo("Hello");

// //setTimeout and setInterval

// function setCallback() {
//   const data = {
//     counter: 0,
//     hugeString: new Array(100000).join("x"),
//   };
//   return function cb() {
//     data.counter++; // data object is now part of the callback's scope                        console.log(data.counter);
//   };
// }
// setInterval(setCallback(), 1000); // how do we stop it?

// //closure

// function outerFunction() {
//   let data = "I am data";

//   function innerFunction() {
//     console.log(data);
//   }

//   return innerFunction;
// }

// const closure = outerFunction();
// closure();

// // If closure is stored and used repeatedly, it retains the reference to the data
// // and prevents it from being garbage collected, potentially causing a memory leak.

/**
 * Think of memory as a graph with primitive types(like numbers and strings) and objects (associative arrays)
 *
 * An object can hold memory in two ways:-
 *
 * 1. Directly by the object itself
 * 2.Implicitly by holding references to other objects, and therefore preventing those objects from being automatically disposed by a garbage collector (GC for short).
 *
 *
 */

// let myArray = [];

// function createObjects() {
//   for (let i = 0; i < 1000; i++) {
//     myArray.push({ data: "some data" });
//   }
// }

// // Call createObjects repeatedly to simulate a memory leak
// setInterval(createObjects, 1000);

// const x=new Array();
// const arr = [];
// function grow() {
//   const obj1 = {
//     // name: new Array(1000000).fill("Hello"),
//     name: "Hello",
//   };
//   for (let i = 0; i < 1000000; ++i) {
//     arr.push(obj1);
//   }
// }

// document.getElementById("grow").addEventListener("click", grow);

function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement("div"));
  }
}

document.getElementById("dom").addEventListener("click", grow);
