function add(number1 , numbre2) {
     console.log(number1 , numbre2);
     var sum = number1 + numbre2;
     // console.log(sum);
     return sum;
}

// add(10, 43);

var total = add(80, 20);
// console.log('total', total);

function bringSingara(mony) {
     var singaraPrice = 10;
     var quantity = mony / singaraPrice;
     return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singaras:',singaras);