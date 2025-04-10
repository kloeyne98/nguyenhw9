const moment = require('moment');

// Display the current date
console.log("Current date:", moment().format("MMMM Do YYYY, h:mm:ss a"));

// Compute years since November 26, 1976
const startDate = moment("1976-11-26", "YYYY-MM-DD");
const currentDate = moment();
const yearsSince = currentDate.diff(startDate, 'years');

console.log(`Years since November 26, 1976: ${yearsSince}`);
