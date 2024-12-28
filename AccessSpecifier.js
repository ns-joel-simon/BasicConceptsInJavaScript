// // 1. Public Properties and Methods

// class Person {
//     constructor(name, age) {
//         this.name = name; // Public
//         this.age = age;   // Public
//     }
//     greet() {
//         console.log(`Hello, I am ${this.name}.`); // Public method
//     }
// }

// const person = new Person("Alice", 25);
// console.log(person.name); // Accessible
// person.greet();           // Accessible

// // 2. Private Properties and Methods

// class Person {
//     #privateProperty = "This is private"; // Private field
//     constructor(name) {
//         this.name = name; // Public
//     }
//     #privateMethod() { // Private method
//         console.log("Accessing private method");
//     }
//     accessPrivate() {
//         this.#privateMethod(); // Allowed inside the class
//     }
// }

// const person = new Person("Alice");
// console.log(person.name);           // Public: Accessible
// // console.log(person.#privateProperty); // Error: Not accessible
// person.accessPrivate();             // Accesses private method

// // 3. Encapsulation with Closures

// function Person(name) {
//     let privateAge = 30; // Private variable
//     this.name = name;    // Public property

//     this.getAge = function() { // Public method to access private variable
//         return privateAge;
//     };

//     this.setAge = function(age) { // Public method to modify private variable
//         if (age > 0) privateAge = age;
//     };
// }

// const person = new Person("Alice");
// console.log(person.name);    // Public: Accessible
// console.log(person.getAge()); // Private: Access through a method
// person.setAge(35);           // Modify private variable
// console.log(person.getAge());

// // 4. Using Object.defineProperty for Controlled Access

// const person = {};
// Object.defineProperty(person, "name", {
//     value: "Alice",
//     writable: false,  // Prevent modification
//     enumerable: true, // Allows it to be listed
//     configurable: false // Prevent redefinition
// });
// console.log(person.name); // Output: Alice
// person.name = "Bob";      // No effect
