const obj = {
  name: "rashindra",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};

// function MyPrototype(name) {
//   this.name = name;
// }

// MyPrototype.prototype = obj;

// console.log(MyPrototype.prototype);

// const f1 = new MyPrototype("kumar");

function Foo() {}
Foo.prototype.bar = 1;
const a = new Foo();
console.log(a.bar); //1

Foo.prototype.bar = 2;
const b = new Foo();
console.log(a.bar); //2
console.log(b.bar); //2

Foo.prototype = { bar: 3 };
console.log(Foo.prototype);
const c = new Foo();
console.log(a.bar);
console.log(b.bar);
console.log(c.bar);

console.log(c);
