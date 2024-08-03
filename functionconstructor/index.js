function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  return {name:"skjdfksjdlfkj"};
}

let person = new Person("rashi", "yadav");
console.log(person)
