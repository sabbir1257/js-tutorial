/* function reverseWords(str){
     const words = str.split(' ');
     for(let i = words.length-1; i >= 0; i --){
          const element = words[i];
          word = words + element;
          console.log(element, word);
     }
     return word;
}
 */

function reverseWords(str) {
     const words = str.split(' ');
     const result = [];
     // ['I', 'am' , 'good', 'boy']
     for (let i = words.length - 1; i >= 0; i--) {
          const element = words[i];
          result.push(element);
     }
     const reversed = result.join(' ');
     return reversed;
}

const myString = 'I am a good boy';
const r = reverseWords(myString);
console.log(r);