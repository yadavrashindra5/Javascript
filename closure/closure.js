// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   y();
// }
// x();

// Hoisting

//declare
//initialize
//access

//Closure

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
