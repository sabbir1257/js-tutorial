function isEven(number) {
     const remainder = number % 2;
     if (remainder === 0) {
          return true;
     }
     else {
          return false
     }
}

const myNumber = isEven(31);
console.log(myNumber);
const myNumber1 = isEven(32);
console.log(myNumber1);