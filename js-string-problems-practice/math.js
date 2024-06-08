const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if (gap < 5) {
     console.log('you guys can be friends');
}
else {
     console.log('you guys stay apart');
}


// ---------------

const number = 2.5000;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result1 = Math.ceil(2.0001);
const result2 = Math.floor(454.246)
console.log(result2);

// --------------
// Random

// console.log(Math.random());


for (let i = 0; i < 20; i++) {
     const random = Math.round(Math.random() * 6);
     console.log(random);
}
