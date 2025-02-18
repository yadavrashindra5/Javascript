let counter = 0;
let limit = 3;
const iteratorObjectProtocol = {
  next: function () {
    if (counter >= limit) {
      return { value: undefined, done: true };
    } else {
      return { value: counter++, done: false };
    }
  },
};

const myCustomObject = {
  [Symbol.iterator]: function () {
    return iteratorObjectProtocol;
  },
};

for (let x of myCustomObject) {
  console.log(x);
}

function* generator() {
  yield 1;
}

console.log("generator", generator());
