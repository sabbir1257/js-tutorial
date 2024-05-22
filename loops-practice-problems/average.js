// var mathMarks = 75.25;
// var biologyMarks = 65;
// var chemistryMarks = 80;
// var physisMarks = 35.45;
// var banglaMarks = 99.50;

// var totalMarks = mathMarks + biologyMarks + chemistryMarks + physisMarks + banglaMarks;
// console.log(totalMarks);
// var average = totalMarks / 5;
// var averageTwoDecimal = average.toFixed(2);
// console.log(averageTwoDecimal);


// Declare variables for marks in each subject
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physisMarks = 35.45;
var banglaMarks = 99.50;

// Calculate the total marks by summing up all the marks
var totalMarks = parseFloat(mathMarks) + parseFloat(biologyMarks) + parseFloat(chemistryMarks) + parseFloat(physisMarks) + parseFloat(banglaMarks);
console.log('Total Marks:', totalMarks);

// Calculate the average marks
var average = totalMarks / 5;

// Format the average to two decimal places
var averageTwoDecimal = average.toFixed(2);
console.log('Average Marks:', averageTwoDecimal);
