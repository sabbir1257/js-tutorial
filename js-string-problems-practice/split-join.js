const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.'
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);


const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['Tumi bondhu kala Pakhi ami jeno ki',
     'Bosonto kale tomai bolte pari ni',
     'Kala kala sada',
     'Rong jomeche sada kala'
];

const newSong = lines.join('. ');
console.log(newSong);
