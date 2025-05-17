// This code demonstrates the use of nested loops to create a pattern of stars.
console .log("Nested Loop Pattern:");
for (let row = 1; row <= 3; row++) {
  let stars = "";
  for (let col = 1; col <= 5; col++) {
    stars += "* ";
  }
  console.log(stars);
}
// This code demonstrates the use of a for loop to iterate through an array.  
console .log("Using for loop:");  
const fruits = ["apple", "banana", "cherry"];
for (let k = 0; k < fruits.length; k++) {
  console.log(fruits[k]);
}
// This code demonstrates the use of a for-of loop to iterate through an array.
console.log("Using for-of loop:");
const vegetables = ["carrot", "broccoli", "spinach"];
for (const vegetable of vegetables) {
  console.log(vegetable);
}
//a for loop to iterate through an object 
console.log("Using for-in loop:");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
} 
//This code shows a nested for loop to create a multiplication table.
console.log("Multiplication Table:");
const size = 5;
for (let row = 1; row <= size; row++) {
  let line = "";
  for (let col = 1; col <= size; col++) {
    line += `${row * col}\t`;
  }
  console.log(line);
}

