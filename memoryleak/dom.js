let largeArray = [];

let smallObject = {
  data: "This is a small object",
};

function grow() {
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(smallObject);
  }
}

function deletex() {
  smallObject = null;
  largeArray = null;
}

function remove() {
  //   document.getElementById("grow").removeEventListener("click", grow);
  const bx = document.getElementById("grow");
  bx.remove();
}

document.getElementById("free").addEventListener("click", deletex);
document.getElementById("grow").addEventListener("click", grow);
document.getElementById("remove").addEventListener("click", remove);
