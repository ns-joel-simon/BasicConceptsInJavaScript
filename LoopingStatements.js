// FOR LOOP

for (let i = 0; i < 5; i++){
    console.log(i);
}

// WHILE LOOP

// let i = 0;
// while (i < 5) {
//   console.log(i);  // Outputs 0, 1, 2, 3, 4
//   i++;  // Increment the counter to avoid an infinite loop
// }

// DO WHILE
let i = 0;
do {
  console.log(i);  // Outputs 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// for...in Loop

let person = { name: 'Alice', age: 30, city: 'New York' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Output: 
// name: Alice
// age: 30
// city: New York

// for...of Loop

let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);  // Outputs 'apple', 'banana', 'cherry'
}

// forEach() Method (Array)

// let fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function(fruit) {
//   console.log(fruit);  // Outputs 'apple', 'banana', 'cherry'
// });
