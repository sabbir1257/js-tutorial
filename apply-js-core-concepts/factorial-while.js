function factorial(numbers) {
     let num = 1;
     let result = 1;
     while (num <= numbers) {
          result = result * num;
          num++
     }
     return result;
}

const result = factorial(9);
console.log(result);