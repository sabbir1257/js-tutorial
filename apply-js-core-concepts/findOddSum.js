function getSumOfAnArray(numbers) {
     let sum = 0;
     for (let i = 0; i < numbers.length; i++) {
          const index = i;
          const element = numbers[i];
          sum = sum + element;
          // console.log(index, element, sum);
     }
     return sum;
}

function getOddNumbersOfAnArray(numbers) {
     const oddNumber = [];
     for (let i = 0; i < numbers.length; i++) {
          const index = i;
          const element = numbers[index];
          if (element % 2 !== 0) {
               console.log(index, element);
               oddNumber.push(element);
          }
     }
     return oddNumber;
}

const myNumber = [12, 65, 45, 78, 32, 45, 61];
const oddNumbers = getOddNumbersOfAnArray(myNumber);
console.log(oddNumbers);
getSumOfAnArray(myNumber);