// option 1: directly set on the HTML element



// option 2: add onclick function 
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
purpleButton.onclick = function makePurple(){
     document.body.style.backgroundColor = 'purple';
}
