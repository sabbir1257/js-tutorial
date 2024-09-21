// option 1: directly set on the HTML element
{/* <button onclick="console.log(65)">Another button</button> */ }


// option 2: add onclick function on the html element 
// IMORTANR: we will use this 
{/* <button onclick="makeRed()">Make Red</button> */ }

function makeRed() {
     document.body.style.backgroundColor = 'red';
}

// option 3: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBule;

function makeBule() {
     document.body.style.backgroundColor = "blue";
}


// option 3: another 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
     document.body.style.backgroundColor = 'purple';
}


// oprion|: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
     document.body.style.backgroundColor = 'pink';
}


// option :4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
     document.body.style.backgroundColor = 'green';
})


// option :4 Final
// IMORTANR: we will use this sometime
document.getElementById('make-goldenrod').addEventListener('click', function(){
     document.body.style.backgroundColor='goldenrod';
    })
