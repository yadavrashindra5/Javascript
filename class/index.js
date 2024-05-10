// class Student {
//   constructor(callback) {
//     console.log(this.__proto__);
//     this.state = "pending";
//   }

//   changeState(state) {
//     if (state == "fullfill") {
//       this.state = state;
//     } else if (state == "reject") {
//       this.state = state;
//     }
//   }
// }

// const resolve = () => {
//   console.log("resolve", this);
//   student.changeState("fullfill");
// };

// const reject = () => {
//   console.log("reject");
//   student.changeState("reject");
// };

// const student = new Student((xyz) => {
//   console.log(xyz);
//   resolve();
//   //   reject();
// });
// // student.changeState("fullfill");
// console.log(student);

// const promise = new Promise(callback);
// console.log(promise);

// promise
//   .then(() => {
//     console.log("resolve");
//   })
//   .catch(() => {
//     console.log("reject");
//   });

function callback(resolve, reject) {
  resolve();
}

function resolve() {
  console.log("resolve", this);
}

function reject() {
  console.log("reject", this);
}

class Student {
  constructor(callback) {
    console.log(this);
    callback.call(this);
  }
  resolve() {
    console.log("resolve");
  }
}

const student = new Student(callback);
