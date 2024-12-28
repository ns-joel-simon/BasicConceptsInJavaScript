// Basic Try-Catch
try {
    console.log("Start of try block");
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught an error:", error.message);
} finally {
    console.log("Finally block executed");
}

// Custom Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error!");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Catching Specific Error Types
try {
    JSON.parse("{ malformed JSON }");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Caught a SyntaxError:", error.message);
    } else {
        console.log("Caught some other error:", error.message);
    }
}

// Throwing Custom Errors
function validateAge(age) {
    if (age < 18) {
        throw new RangeError("Age must be 18 or above");
    }
    console.log("Valid age:", age);
}

try {
    validateAge(16);
} catch (error) {
    console.log("Error:", error.message);
}

// Using Finally for Cleanup
try {
    console.log("Trying to execute code...");
    throw new Error("An error occurred!");
} catch (error) {
    console.log("Handling error:", error.message);
} finally {
    console.log("Cleanup complete");
}

// Using Error Object Properties
try {
    throw new Error("Example error");
} catch (error) {
    console.log("Name:", error.name); // Error
    console.log("Message:", error.message); // Example error
    console.log("Stack trace:", error.stack); // Stack trace for debugging
}

// Handling Asynchronous Errors with try-catch
async function fetchData() {
    try {
        const response = await fetch("https://invalid.url");
        const data = await response.json();
    } catch (error) {
        console.log("Async error caught:", error.message);
    }
}

fetchData();
