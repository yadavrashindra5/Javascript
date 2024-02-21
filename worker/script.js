const sum = document.getElementById("sum");
const color = document.getElementById("color");

sum.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < 10000000000; ++i) {
    sum += i;
  }
  alert(`total sum is ${sum}`);
});

color.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgba(255,255,2)";
});
