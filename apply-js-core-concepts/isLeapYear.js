/* function isLeapYear(year) {
     const remainder = year % 4;
     if (remainder === 0) {
          return true;
     }
     else {
          return false;
     }
} */


/* function isLeapYear(year) {
     const remainder = year % 4;
     if (remainder === 0) {
          return true;
     }
     return false;
}


const leap = isLeapYear(1960);
console.log(leap); */


function isLeapYear(year) {
     if (year % 4 === 0) {
          if (year % 100 === 0) {
               if (year % 400 === 0) {
                    return true;
               } else {
                    return false;
               }
          } else {
               return true;
          }
     } else {
          return false;
     }
}

// Test the function
let year = 1990; // Example year
if (isLeapYear(year)) {
     console.log(year + " is a leap year.");
} else {
     console.log(year + " is not a leap year.");
}
