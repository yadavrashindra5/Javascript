function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + "" + this.lastName;
  };
}

const p1 = new Person("rashi", "yadav");
const p2 = new Person("tejas", "rohita");

console.log(p1);
console.log(p2);
