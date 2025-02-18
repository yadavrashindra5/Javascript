//Prototype can be created in three ways

//1. constructor Functions
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// Car.prototype.getAge = function () {
//   const currentYear = new Date().getFullYear();
//   return currentYear - this.year;
// };
// const mycar=new Car("Tesla","Model S",2020);
// console.log(mycar.getAge());

//2. Object Literals
const person = {
  name: "John",
  age: 30,
};

person.__proto__.greet = function () {
  return `Hello, my name is ${this.name}`;
};

// console.log(person.greet());

//3. Class syntax (ES6)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// const a1=new Animal("Dog");

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

// const dog=new Dog("Buddy");
// dog.speak();

class Student {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student("Rashi", 45);
Student.prototype.getName = function () {
  return this.name;
};
console.log(s1.getName());

// Create a prototype for a "Car" object
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add a method to the prototype
  Car.prototype.startEngine = function () {
    console.log(`Starting the engine of a ${this.year} ${this.make} ${this.model}`);
  }

// Create instances of the Car object
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);
// car1.__proto__.startEngine = function () {
//   console.log(
//     `Starting the engine of a ${this.year} ${this.make} ${this.model}`
//   );
// };

// Both instances share the same prototype
car1.startEngine(); // Output: Starting the engine of a 2020 Toyota Camry
car2.startEngine(); // Output: Starting the engine of a 2019 Honda Accord

// Check if the objects share the same prototype
console.log(car1.__proto__ === car2.__proto__); // Output: true
