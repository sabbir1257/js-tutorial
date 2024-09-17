const nayok = {
     name: "Sakib Khan",
     id: 121,
     address : "movie cinema",
     isSingle : true,
     friends : ["Mahmoud", "Jamal", "Faruk"],
     movies: [{name: 'om. 1', year: 201,}, {name: 'king khan', year: 201,}],
     act: function(){
          console.log('acting like Sakib khan');
     },
     car: {
          brand: "Toyota",
          model: "Camry",
          year: 2010,
          manufacturer: {
                name: "Toyota",
                ceo: "Elon Mask",
                country: "Japan"
          }
     }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();