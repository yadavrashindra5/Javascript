// // Indirect Memory Holding via References
// let person = {
//   name: "John",
//   age: 30,
// };
// console.log(person);
// // let company = {
// //     name: 'XYZ Corp',
// //     employees: [person] // 'company' object holds a reference to the 'person' object
// // };

// // 'person' object is indirectly held in memory by 'company' object

// // Define a small object
// let smallObject = {
//     data: 'This is a small object'
// };

// // Create a large array
// let largeArray = [];

// // Add a large number of objects to the array
// for (let i = 0; i < 1000000; i++) {
//     largeArray.push({}); // Adding empty objects to the array
// }

// // Add a reference to the small object in one of the objects in the large array
// largeArray[500000].reference = smallObject;

// // Remove the reference to the small object from the small object itself
// smallObject = null;

// // At this point, the 'smallObject' itself is no longer referenced by any variable,
// // so it becomes eligible for garbage collection. However, one of the objects in the
// // 'largeArray' still holds a reference to it, preventing it from being garbage collected.

// // Later in the code, if we try to reclaim memory by nullifying the 'largeArray' variable:
// largeArray = null;

// // Even though 'largeArray' itself is no longer referenced, one of its objects still
// // holds a reference to the 'smallObject', keeping it alive in memory.
// console.log(largeArray)

// const arr = [];
// let x = [];

// for (let i = 0; i < 10000000; ++i) {
//   x.push({
//     name: "rashindra",
//     age: 24,
//   });
// }

// const company = {
//   name: "primathon",
//   employee: [],
// };
// function pushx() {
//   company.employee.push(perons);
//   perons = null;
// }

// document.getElementById("grow").addEventListener("click", () => pushx());

// var x = [];

// const smallObject = {
//   data: "This is a small object",
// };

// const largeArray = [];

// function grow() {
//   // console.log("grow");
//   // for (var i = 0; i < 10000; i++) {
//   //   const div = document.createElement("div");
//   //   div.setAttribute("id", "div");
//   //   document.body.appendChild(div);
//   // }
//   // x.push(new Array(1000000).join("x"));
//   // console.log(x.length);

//   for (let i = 0; i < 1000000; i++) {
//     largeArray.push(smallObject);
//   }
// }

// function deletex() {
//   smallObject = null;
//   largeArray = null;
//   // const list = document.querySelectorAll("#div");
//   // for (var i = 0; i < 10000; ++i) {
//   //   list[i].remove();
//   // }
// }

// function remove() {
//   console.log("remove");
//   for (let i = 0; i < 1000000; ++i) {
//     largeArray[i] = null;
//   }
// }

// document.getElementById("free").addEventListener("click", deletex);
// document.getElementById("grow").addEventListener("click", grow);

// document.getElementById("remove").addEventListener("click", remove);

let x = [];

let smallObject = {
  data: "This is a small object",
};
//1000
//2000 10000
//2001->1000
//2001->1000

let largeArray = [];

function grow() {
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(smallObject);
  }
}

function deletex() {
  // smallObject = "Hello";
  // for (let i = 0; i < largeArray.length; i++) {
  //   largeArray[i] = null; // Nullify each element in the array
  // }
  // largeArray = undefined;
  smallObject = null;
  largeArray = null;
  // for (let i = 0; i < largeArray.length; i++) {
  //   // largeArray[i] = undefined; // Nullify each element in the array
  //   // largeArray[i]=;
  //   largeArray[i] = undefined;
  // }
}

function remove() {
  console.log("remove");
  for (let i = 0; i < largeArray.length; i++) {
    // largeArray[i] = undefined; // Nullify each element in the array
    // largeArray[i]=;
  }
}

document.getElementById("free").addEventListener("click", deletex);
document.getElementById("grow").addEventListener("click", grow);
document.getElementById("remove").addEventListener("click", remove);
