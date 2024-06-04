function factorial(numbers) {
     let result = 1;
     for (let i = numbers; i >= 1; i--) {
          result = result * i;
          console.log(i);
     }
     return result;
}

console.log(factorial(9));