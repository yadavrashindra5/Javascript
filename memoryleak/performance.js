// var x = [];

// function grow() {
//   for (var i = 0; i < 10000; i++) {
//     document.body.appendChild(document.createElement('div'));
//   }
//   x.push(new Array(1000000).join('x'));
// }

// document.getElementById('grow').addEventListener('click', grow);

class student {
  add() {
    console.log("Hello");
  }
}
let obj = new student();
// document.getElementById("create").addEventListener("click", grow);
document.getElementById("call").addEventListener("click", () => {
  obj.add();
});
document.getElementById("remove").addEventListener("click", () => {
  obj = null;
});
