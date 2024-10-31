// Js is a  dynamic typed Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const c = true;


// non-primitive 
const ages = [45, 65, 48];
const student = { id: 23, class: 7 }

// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
// console.log(x, y);
y = 7;
// console.log(x, y);

let p = {job: 'web developer'};
let q = p;
// q= {job: 'Backend end'};
q.job = 'front end developer';
console.log(p, q);
