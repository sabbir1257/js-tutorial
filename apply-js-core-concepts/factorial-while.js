function factorial(numbers) {
     let num = 1;
     let result = 1;
     while (num <= numbers) {
          result = result * num;
          num++
     }
     return result;
}


console.log(factorial(7));