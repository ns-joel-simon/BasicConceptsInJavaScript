// Types of Functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5

// Arrow Functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20

// Anonymous Functions
setTimeout(function() {
    console.log("This runs after 2 seconds.");
}, 2000);

// Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log("IIFE runs immediately!");
})();

// Function Parameters and Arguments

// Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!


// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Function Scope and Closures

// Scope
let outerVar = "Outer";

function inner() {
    let innerVar = "Inner";
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
}
inner();

// Closures
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}
const newFunc = outerFunction("Hello");
newFunc("World"); // Output: Outer: Hello, Inner: World


