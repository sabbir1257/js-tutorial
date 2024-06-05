const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.'

const searchString = 'Pakhi';
/* Case sensitive */
// const doseExist = lyrics.includes('pakhi');
// const doseExist = lyrics.includes('Pakhi');
// const doseExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doseExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doseExist = lyricsLowerCase.includes(searchString);

const doseExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doseExist);
// console.log(doseExistOneLine);



// ----------------------------------------------------------
/* indexOf */

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));


if (lyrics.indexOf('kala') !== -1) {
     console.log('exists inside the string');
}
else {
     console.log('cannot find it');
}


/* startsWith */
console.log(lyrics.startsWith('tumi'));


/* endsWith */
const fileName = 'mybiodata.pdf';
const otherFile = 'myoic.png';
console.log(fileName.endsWith('.pdf'));