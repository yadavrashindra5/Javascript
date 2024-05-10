let arr = [];

const marks = {
  physics: "89",
  chemistry: "89",
};

function grow() {
  const object = { name: "rashindra", address: "Janakpur", marks: marks };
  for (let i = 0; i < 100000; ++i) {
    arr.push(object);
  }
}

document.getElementById("grow").addEventListener("click", grow);

function free() {
  arr = null;
  arr = [];
}

document.getElementById("free").addEventListener("click", free);
