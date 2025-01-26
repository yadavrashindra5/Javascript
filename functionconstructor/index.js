function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return this;
}

let person = new Person("rashi", "yadav");
console.log(person);
