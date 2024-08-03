var detachedTree;

function create() {
  var ul = document.createElement("ul");
  for (var i = 0; i < 10; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
  }
  detachedTree = ul;
}

document.getElementById("grow").addEventListener("click", create);
