// Method Overriding
class Parent {
    greet() {
        console.log("Hello from the parent!");
    }
}

class Child extends Parent {
    greet() {
        console.log("Hello from the child!");
    }
}

const child = new Child();
child.greet(); // Output: Hello from the child!

// Calling parent method using super
class ChildWithSuper extends Parent {
    greet() {
        super.greet(); // Calls the parent's greet method
        console.log("And hello from the child!");
    }
}

const childWithSuper = new ChildWithSuper();
childWithSuper.greet();
// Output:
// Hello from the parent!
// And hello from the child!

// Method Overloading (Mimicked)
class Calculator {
    calculate(a, b) {
        if (b !== undefined) {
            return a + b; // Two arguments
        }
        return a * a; // Single argument (treat as square)
    }
}

const calc = new Calculator();
console.log(calc.calculate(5));    // Output: 25 (square)
console.log(calc.calculate(5, 3)); // Output: 8 (addition)

// Using rest parameters for method overloading
class CalculatorWithRest {
    calculate(...args) {
        if (args.length === 1) {
            return args[0] * args[0]; // Square
        } else if (args.length === 2) {
            return args[0] + args[1]; // Addition
        }
    }
}

const calcWithRest = new CalculatorWithRest();
console.log(calcWithRest.calculate(5));    // Output: 25
console.log(calcWithRest.calculate(5, 3)); // Output: 8

// Function Overloading with Standalone Functions
function greet() {
    console.log("Hello!");
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet();        // Output: Hello, undefined!
greet("Alice"); // Output: Hello, Alice!

// Dynamic argument handling for function overloading
function greetDynamic(name) {
    if (name === undefined) {
        console.log("Hello!");
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greetDynamic();        // Output: Hello!
greetDynamic("Alice"); // Output: Hello, Alice!
