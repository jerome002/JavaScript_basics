const readline = require('readline');
// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//ask the user for the year and month
rl.question('Enter the year (e.g., 2023): ', (year) => {
  rl.question('Enter the month (1-12): ', (month) => {
    // Convert input to numbers
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);

    // Validate the month
    if (monthNum < 1 || monthNum > 12) {
      console.log('Invalid month. Please enter a number between 1 and 12.');
      rl.close();
      return;
    }

    // Create a Date object for the first day of the month
    const firstDay = new Date(yearNum, monthNum - 1, 1);
    const lastDay = new Date(yearNum, monthNum, 0);
    const daysInMonth = lastDay.getDate();

    // Get the day of the week for the first day of the month
    const startDay = firstDay.getDay();
    //print the month and year as specified
    console.log(`\n${firstDay.toLocaleString('default', { month: 'long' })} ${yearNum}`);

    // Print the calendar header
    console.log('Mo Tu We Th Fr Sa Su');
    
    // Print leading spaces for the first week
    let output = ' '.repeat(startDay * 3);
    
    // Print each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      output += (day < 10 ? ' ' : '') + day + ' ';
      if ((day + startDay) % 7 === 0 || day === daysInMonth) {
        console.log(output);
        output = '';
      }
    }

    rl.close();
  });
});