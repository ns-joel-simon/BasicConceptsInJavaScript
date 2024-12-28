// Creating Objects

// Object Literal
const person = { name: "Alice", age: 30 };

// Using a Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person2 = new Person("Bob", 25);

// Accessing Object Properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Adding or Updating Properties
person.job = "Developer"; // Add new property
person.age = 31;          // Update existing property

// Deleting Properties
delete person.age;

// Object Methods
const calculator = {
    add(a, b) {
        return a + b;
    }
};
console.log(calculator.add(2, 3)); // Output: 5

// Iterating Over Objects
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object Destructuring
const { name, age } = person;
console.log(name, age); // Output: Alice 30

// Spread Operator
const newPerson = { ...person, hobby: "Reading" };

// Object Methods
// Merging objects
const merged = Object.assign({}, person, { city: "New York" });

// Freezing an object (makes it immutable)
Object.freeze(person);
