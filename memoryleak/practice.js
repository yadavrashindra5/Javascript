// let x = {
//   x: new Array(5000000).fill("Rashindra yadav"),
//   a: {
//     b: 2,
//   },
// };

// let y = x;

// x = 1;

// let z = y.a;

// y = "mozilla";

// z = null;

// console.log("Hello");
// let b = {
//   b1: new Array(500000).fill("Rashindra Yadav"),
// };

// let a = {
//   a1: "rashindra",
//   b2: b,
// };

// a.b2 = null;
// let str = new String(
//   "jkdjkffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjjjjjlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksdddddddddddddddddddddkjllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrkjjjjjjjjjjjjjjjjjjjjjjjsdlfjsdkfjslkfjsdjfkljjfljsdkfjksjfdjksdfjjdsfkjsjdfkjskfjsjfkljslkjfshidghgidhdgihjdfishfishgnijdbisfiashfiuhasifhiasfoiasjlfkskjfnhisajfkljslkfkajdsjdfhksjfdbjsidfkhafijsfjshfisfhskdjfsifhasjfisdohfiashfiasfhisahfijasbvbdvhiadnfnakfnkjdnvkjbdjvnkjdnfkjnaskjfbjabfjhajfkbajkfndaijfnskjfhsjfhjasfklaslfhjsfh;askfhaiofasifdkndjuvjaddfjkasnjf;lasifjnasijfknas;iufnajfnsa;oifanofinkasfasidfkjnasdfiuhaafo;asdfiushdfasidhufjkasnfiubasjfkmas;fsiubjfkasfuijaskfisaoklfhaiusbfjklasfjkbhjxbvnkfdhujasnvhbddinvaijbvniubdgnaegvijkahsdiufhagiaohbgiausbdiusjgnviuuabiusdfkabsuvbuianiuabniaudjkfhaviubakjnsdfijk"
// );
// let a = {
//   a1: str,
// };

// // a.a1 = null;
// const b = {
//   b1: a,
// };
// console.log(b);

// document.getElementById("delete").addEventListener("click", () => {
//   a.a1 = null;
//   console.log(a);
// });

//questions type 1

// class Person {
//   constructor() {
//     this.p = new Array(500000).fill("Rashindra Yadav");
//   }
// }

// const p = new Person();
// const a = new Array(5000000).fill("Hello world");

// class Student {
//   constructor() {
//     this.name = a;
//     this.person = p;
//   }
// }

// let s = new Student();

// console.log(s);
// document.getElementById("delete").addEventListener("click", () => {
//   console.log("Hello world");
//   s.name = null;
//   s.person = null;
//   s = null;
// });

//Example 2
// class Person {
//   constructor() {
//     this.p = new Array(500000).fill("Rashindra Yadav");
//   }
// }

// const p = new Person();
// // const a = new Array(5000000).fill("Hello world");

// class Student {
//   constructor() {
//     this.name = new Array(5000000).fill("Hello world");
//     this.person = p;
//   }
// }

// let s = new Student();

// console.log(s);
// document.getElementById("delete").addEventListener("click", () => {
//   console.log("Hello world");
//   s.name = null;
//   // s.person = null;
//   s = null;
// });

const arr = [];

const func = () => {
  for (let i = 0; i < 5000; ++i) {
    arr.push("Hello world");
  }
};
document.getElementById("grow").addEventListener("click", func);
console.log(arr);
