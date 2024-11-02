/* 
     8 ways to get Undefine 
          1. variabel that is not initialized will give undefined
          2. function with no return 
          3. parameter that is not passed will be undefiend 
          4. if return has nothing on the right side will return undefined 
          5. property that doesn't exists on an object will give you undefined
          6. accessing array elements iutside of the index renge 
          7. deleting an element inside an array 
          8. set a value directly to  undefined
*/

// 1
let first;

// 2
function second(a, b) {
     const total = a + b;
}

const result = second();

// 3
function third(a, b, c, d) {
     const total = a + b + c + d;
     console.log(total);
}

// third(2, 4);

// 4
function noNegative(a, b) {
     if (a < 0 || b < 0) {
          return
     }
     return a + b;
}

const total = noNegative(2, -5);
// console.log(total);

// 5
const fifth = { id: 2, name: 'ponchom', age: 40 };
// console.log(fifth.age, fifth.salary);

// 6
const sixth = [4, 89, 87, 56, 54];

// 7
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

// 8
const eighth = undefined;
const ninth = null;
const data = {result: [], updated: null};

// console.log(typeof undefined);
console.log(typeof null);