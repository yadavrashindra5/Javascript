// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   y();
// }
// x();


function add(a,b){
  function substract(){
    return a-b;
  }
  return substract;
}

const fun=add(5,3);
console.log(fun());