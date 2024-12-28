
// // Prototype Example
// const parent = {
//     greet() {
//         console.log("Hello from the parent!");
//     }
// };

// const child = Object.create(parent); // child inherits from parent
// child.greet(); // Output: Hello from the parent!

// // Prototype Example
// const obj = {};
// console.log(obj.__proto__); // Logs the prototype object (Object.prototype)

// // Prototype Inheritance
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name}.`);
// };

// const person1 = new Person("Alice");
// person1.greet(); // Output: Hi, I'm Alice.

// // Inheritance with Constructor Functions
// function Animal(type) {
//     this.type = type;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.type} makes a sound.`);
// };

// function Dog(name) {
//     Animal.call(this, "Dog"); // Call parent constructor
//     this.name = name;
// }

// // Set prototype inheritance
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log(`${this.name} barks!`);
// };

// const myDog = new Dog("Buddy");
// myDog.speak(); // Output: Dog makes a sound.
// myDog.bark();  // Output: Buddy barks!

// // Inheritance with Classes (ES6)
// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     speak() {
//         console.log(`${this.type} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super("Dog"); // Call parent constructor
//         this.name = name;
//     }
//     bark() {
//         console.log(`${this.name} barks!`);
//     }
// }

// const myDog = new Dog("Buddy");
// myDog.speak(); // Output: Dog makes a sound.
// myDog.bark();  // Output: Buddy barks!

// // Object.create() for Inheritance
// const parent = {
//     greet() {
//         console.log("Hello from parent!");
//     }
// };

// const child = Object.create(parent); // Create a new object with 'parent' as its prototype
// child.sayHi = function() {
//     console.log("Hi from child!");
// };

// child.greet(); // Output: Hello from parent!
// child.sayHi(); // Output: Hi from child!

// // Prototype Chain
// const grandParent = { greet() { console.log("Hello from grandparent!"); } };
// const parent = Object.create(grandParent);
// const child = Object.create(parent);

// child.greet(); // Output: Hello from grandparent!
