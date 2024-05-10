/**
 * A node is said to be "detached" when it's
 * removed from the DOM tree but some javascript still references it.
 * 
 * Detached DOM nodes are a common cause of
 * memory leaks.
 * 
 * 
 * 
 */

var detachedTree;

function create() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }
  detachedTree = ul;
}

document.getElementById('create').addEventListener('click', create);