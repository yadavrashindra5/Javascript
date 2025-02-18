function User() {
  console.log(new.target);
}

User();

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

const d = new Dog("German Shepherd", "German");
console.log(d);

console.log(d.speak());
