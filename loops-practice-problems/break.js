/* for (var i = 1; i <= 20; i++) {
     console.log(i);
     if (i > 10) {
          break;
     }
} */


/* var roastGiven = 0;
while (roastGiven < 10) {
     console.log('Roast Den, gift item ansi');
     roastGiven++;
     if(roastGiven > 4){
          break;
     }
} */


var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i = 0; i < items.length ; i++ ){
     var item = items[i];
     if(item == 'pen'){
          break;
     };
     console.log(item);
}