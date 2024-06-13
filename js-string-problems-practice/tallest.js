/* function maxInArray (numbers){
     let largest = numbers[0];
     for (let i = 0; i < numbers.length; i++) {
          const index = i;
          const element = numbers[index];
          if(element > largest){
               largest = element;
          }
     }
     return largest;
}
 */


// Homework: Write a function to get the lowest number in an array (ans: solve )
function lowOfArray(numbers) {
     let largest = numbers[0];
     for (let i = 0; i < numbers.length; i++) {
          const index = i;
          const element = numbers[index];
          if (element < largest) {
               largest = element;
          }
     }
     return largest;
}

const height = [167, 190, 10, 120, 165, 137, 265];
const tallests = lowOfArray(height);
console.log('tallests person is: ', tallests);