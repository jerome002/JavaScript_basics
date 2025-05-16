//understanding if/else statements and switch statements with input and output
// This is a simple program that takes a number as input and checks if it is even or odd
// It uses if/else statements to determine the result and prints it to the console
// It also uses a switch statement to check the value of the number and print a different message
// based on the value
// The program uses the readline module to take input from the user
console.log('script is running');
// Importing the readline module to take input from the user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to check if a number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
// Function to check the value of the number and print a different message
function checkValue(num) {
  switch (num) {
    case 1:
      console.log('The number is one');
      break;
    case 2:
      console.log('The number is two');
      break;
    case 3:
      console.log('The number is three');
      break;
    default:
      console.log('The number is not one, two, or three');
  }
}
// Function to take input from the user
function getInput() {
  rl.question('Enter a number: ', (input) => {
    const num = parseInt(input);
    if (isNaN(num)) {
      console.log('Please enter a valid number');
      getInput();
    } else {
      checkEvenOdd(num);
      checkValue(num);
      rl.close();
    }
  });
}
rl.on('close', function() {
  console.log('Goodbye!');
 setTimeout(() => process.exit(0), 10000); // waits 10 seconds
}
);  
getInput();
// This program demonstrates the use of if/else statements and switch statements