
const readline = require('readline');
// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter number of number 1: ', (num1) => {
    rl.question('Enter number of number 2: ', (num2) => {
        // Convert input to numbers
        const num1Num = parseInt(num1);
        const num2Num = parseInt(num2);
        // Validate the numbers
        if (isNaN(num1Num) || isNaN(num2Num)) {
            console.log('Invalid number. Please enter valid numbers.');
            rl.close();
            return;
        }
        // Call the functions and print the results
        console.log(`The sum of ${num1Num} and ${num2Num} is ${add(num1Num, num2Num)}`);
        console.log(`The difference of ${num1Num} and ${num2Num} is ${subtract(num1Num, num2Num)}`);
        rl.close();
    }
    );
});
//function to add the numbers
function add(num1, num2) {
    return num1 + num2;
}
//function to subtract the numbers
function subtract(num1, num2) {
    return num1 - num2;
}
//ask the user for the name and number
rl.question('Enter your name: ',(name) => {
    rl.question('Enter a number: ', (num) => {
        // Convert input to numbers
        const numNum = parseInt(num);
        // Validate the number
        if (isNaN(numNum)) {
            console.log('Invalid number. Please enter a valid number.');
            rl.close();
            return;
        }
        // Call the functions and print the results
        console.log(greet(name));
        console.log(`The square of ${numNum} is ${square(numNum)}`);

        // Example usage of add and subtract functions
        const num1 = numNum;
        const num2 = 5; // You can change this to any number or prompt the user for another input

        console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
        console.log(`The difference of ${num1} and ${num2} is ${subtract(num1, num2)}`);

        rl.close();
    });
});
    