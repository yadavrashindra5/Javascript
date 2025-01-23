const student = {
  name: "ram",
};

const person = {
  name: "shyam",
  getName: function () {
    return this.name;
  },
};

Object.prototype.myBind = function (bindObj) {
  bindObj.myMethod = this;
  return function () {
    return bindObj.myMethod();
  };
};

const x = person.getName.myBind(student);
console.log(x());
