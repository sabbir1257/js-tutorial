/* const myInches = 18;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet:', dadaFeet); */


function incheToFeet (inches){
     const feet = inches / 12;
     return feet;
}

const dadaInches = 144;
const dadaFeet = incheToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = incheToFeet(nanaInches);
console.log('nana Feet:', nanaFeet);