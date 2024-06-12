let first = 5;
let second = 7;
console.log(first, second);
// second = first;
// first = second;
const temp = first;
first = second;
second = temp; 
console.log( first, second );