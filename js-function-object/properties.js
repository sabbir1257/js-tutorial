var shoppingCart = {
     books: 3,
     sunglass: 1,
     keyboard: 5,
     mouse: 1,
     pen: 25,
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative System
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse'

var propertyValue = shoppingCart[propertyName];

console.log(propertyValue);

var properties = Object.keys(shoppingCart);

var propertyValue = Object.values(shoppingCart);

console.log(properties);
console.log(propertyValue);
// console.log(penCount2);


// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);