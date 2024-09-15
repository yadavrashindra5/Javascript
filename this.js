// console.log(this);//this always refers to the window object

// function referThis(){ //this function also refer to the window object because this function lexically present in the window object
//     console.log(this);
// }

// referThis();

// const x=()=>{
//     console.log(this);
// }
// x();

// const person={
//     name:"rashindra",
//     address:"Janakpur",
//     sayName:function(){
//         console.log(this);//in this case this will refer to the person object bcoz sayName is lexically present in person object
//     }
// }

// person.sayName();

// const person1={
//     name:"rashindra",
//     address:"Janakpur",
//     sayName1:()=>{
//         console.log(this);
//         function add(){
//             console.log(this);
//         }
//         add();
//     }
// }

// person1.sayName1();

//sachin

//behavior of this in normal and arrow function
// var y=30;
// function add(){
//     var x=30;
//     console.log(x);
// }
// // const addx=()=>{
// //     var x=20;
// //     console.log(x);
// // }

// add();
// addx();

const object = {
  name: "rashindra",
  address: "janakpur",
  getName: function () {
    console.log(this);
  },
  getAddress: () => {
    console.log(this);
  },
};

object.getName();
object.getAddress();
