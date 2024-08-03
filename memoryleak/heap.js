// var x = [];
// var y=["Hello","world","HI","HO","JK"]

// function grow() {
//   x.push(new Array(1000000).join('x'));
// }

//class object

// class Student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }
// const students = [];
// function grow() {
//   students.push(new Student("Hello", new Array(5000).fill("Rashindra"), "Hi"));
// }
// document.getElementById("grow").addEventListener("click", grow);

// function add() {
//   let x = 20;
//   let y = 30;
//   return () => {
//     console.log(x + y);
//     return x + y;
//   };
// }

// const xyz = add();

// document.getElementById("grow").addEventListener("click", xyz);

// class Student {
//   constructor() {
//     this.array = new Array(100000).fill("Hello");
//     this.name = "Rashindra";
//     this.createClick();
//   }

//   createClick() {
//     const y = this.name;
//     document.getElementById("grow").addEventListener("click", () => {
//       console.log(y);
//     });
//   }
// }
// let s1 = new Student();
// s1 = undefined;

/**
 * (array) category
 *
 *
 */

// const storeObject = []; //array

// const objectx = {
//   name: "rashindra",
//   address: "janakpur",
// };
// function add() {
//   const xyz = new Array(500000).fill("Hello");
//   return function () {
//     storeObject.push(new Array(50000).fill(objectx));
//   };
// }
// const grow = add();

// a[99999999] = "Hello";
// b[99999999] = "Hello";
// c[99999999] = "Hello";
// d[99999999] = "Hello";
// e[99999999] = "Hello";
// f[99999999] = "Hello";
// g[99999999] = "Hello";
// h[99999999] = "Hello";

// a[i] = "Hello";
// b[i] = "Hello";
// c[i] = "Hello";
// d[i] = "Hello";
// e[i] = "Hello";
// f[i] = "Hello";
// g[i] = "Hello";
// h[i] = "Hello";

// document.getElementById("grow").addEventListener("click", grow);

// function outerFunction() {
//   let outerVariable = "Hello";
//   let unUsedVariable=new Array(1000000).fill("Hello world");

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const inner = outerFunction();
// inner();
