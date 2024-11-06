function greeting (greetingHandler, name){
     greetingHandler(name);
};

// const name = 'Halim mama';
// const number = [45, 54,78];
// const laptop = {price: 45000 , brand: 'lenovo', mrmory: '8gb'};

function greetingHandler(name){
     console.log('Good Moring', name);
};

function greetEvening(name){
     console.log('Good Evening', name);
}

function greetNight(name){
     console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetNight, 'Tom Sabbir')


function submitHandler(){
     console.log('submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler);