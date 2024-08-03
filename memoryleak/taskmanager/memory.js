document.getElementById("delete").addEventListener("click", () => {
  //   console.log(document.querySelectorAll("[node]"));
  let list = document.querySelectorAll("[node]");
  for (let i = 0; i < 10000; ++i) {
    list[i].remove();
  }
  list = null;
});

document.getElementById("grow").addEventListener("click", () => {
  for (let i = 0; i < 10000; ++i) {
    let div = document.createElement("div");
    div.innerHTML = "Rashindra yadav";
    div.setAttribute("node", "node1");
    document.body.appendChild(div);
    div = null;
  }
});
