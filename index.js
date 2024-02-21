// const obj={
//     name:"Ajay Suneja",
//     getName:function(){
//         return this.name;
//     },
//     getRoll:function(){
//         return this.roll;
//     }
// }

// const { response } = require("express");

// console.log(obj);

// const obj2={
//     roll:1,
//     __proto__:obj
// }

// console.log(obj2);
// console.log(obj2.name)

// const obj3={
//     class:"MCA",
//     // name:"tejas",
//     __proto__:obj2
// }

// console.log(obj3.getName())

// const arr=["ajay","somnath"];
// Array.prototype.lengthz=function(){
//     return this.length;
// }

// Array.prototype.convertIntoObject=function(){
//     const obj=new Object();
//     this.forEach((element,index)=>{
//         obj[index]=element
//     });
//     return obj;
// }
// console.log(arr);

// function MyPrototype(name){
//     this.name=name;
// };

// MyPrototype.prototype=obj;

// const z=new MyPrototype("rashindra");
// console.log(z.getName());
// console.log(z);

// function MyPrototype(name){
//     this.name=name;
// }

// MyPrototype.prototype.calculateLength=function(){
//     return this.name.length;
// };

// const x=new MyPrototype("rashindra");
// console.log(x.calculateLength());

// function MyPrototype(name){
//     this.name=name;
// }

// MyPrototype.prototype.getName=function(){
//     return this.name;
// }

// const x=new MyPrototype("rashindra");
// console.log(x.getName())

// const promise=new Promise((resolve,reject)=>{
//     if(false){
//         resolve('Data is called');
//     }
//     else{
//         reject('reject is called');
//     }
// });

// promise.then((message)=>{
//     console.log("the given message is",message);
// }).catch((message)=>{
//     console.log("the catch message is",message);
// })

// const datas = [
//   {
//     name: "ajay",
//     profression: "Software Engineer",
//   },
//   {
//     name: "anuj",
//     profression: "software Engineer",
//   },
// ];

// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li> ${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }

// getDatas();

// const promisex=fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
// promisex.then((response)=>response.json).then(response=>{
//   console.log(response)
// }).catch((error)=>{
//   console.log(error);
// })

// let obj1={
//   name:'rashi',
//   display:function(){
//     return this.name;
//   }
// };

// let obj2={
//   __proto__:obj1,
// }

// console.log(obj2.display());

// const obj={
//     name:'rashi',
//     getThis(){
//         const xyz=()=>{
//             console.log(this);
//         }
//         xyz();
//     },

// }

// obj.getThis()

// const person1={
//     name:'Pedro',
//     surname:'Sanchez',
//     sayName:function(city,country){
//         return this.name+" "+this.surname+" "+city+" "+country;
//     }
// }

// const person2={
//     name:'Jimena',
//     surname:'Juarez'
// }

// console.log(person1.sayName.call(person2,'kumar','yadav'))

//This concept

// var name="primathon";
// const object={
//     name:'primathon venture',
//     sayName:function(){
//         function innerFunction1(){
//             console.log(this.name)
//         }
//         const innerFunction2=()=>{
//           console.log(this.name);
//         }
//         innerFunction1();
//         innerFunction2();
//     },
//   getName:()=>{
//     console.log(this.name);
//   }
// }
// object.sayName();
// object.getName();

// var x=document.getElementById("hello");
// var ctx=x.getContext("2d");
// console.log(ctx);

// const datas = [
//   { name: "Ajay", Profression: "Software Engineer" },
//   { name: "Anuj", Profression: "Software Engineer" },
// ];
// function getDatas(){
//     let output="";
//     setTimeout(()=>{
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`
//         })
//         document.body.innerHTML=output
//     },2000)
// }

// function createData(newData,callbacks){
//     setTimeout(()=>{
//         datas.push(newData);
//         callbacks();
//     },1000)
// }

//promise

// function getDatas() {
//   let output = "";
//   setTimeout(() => {
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 2000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(newData);
//       let error=false;
//       if(!error){
//         resolve();
//       }
//       else{
//         reject("Kuch sahi nahi hai")
//       }
//     }, 1000);
//   });
// }

// createData({ name: "vivek", Profression: "software engineer" }).then(()=>{
//     getDatas();
// })


// function getDatas() {
//     console.log("world")
//   let output = "";
//   setTimeout(() => {
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 2000);
// }

// function createData(newData) {
//     setTimeout(() => {
//       datas.push(newData);
//       console.log("hello")
//     }, 1000);
//     getDatas();
// }

// createData({ name: "vivek", Profression: "software engineer" })

// let x=10;
// {
//     console.log(x);
// }
// console.log(x);
// let x=20;
// function add(){
//     let x=10;
//     if(true){
//         let x=20;
//     }
//     console.log(x);
// }
// add();
// console.log(x);

const object={
    name:'rashindra',
    getName:function(){
        console.log(this.name);
    }
}

console.log(object);