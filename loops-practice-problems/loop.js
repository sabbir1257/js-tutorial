/* 
--------------------------
LOOP
---------------------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623 
5. Difference between while loop and for loop 
6. Declare an array for all the topices that you have learned last few days display then as output
7. Create an array for all the mobile phones. Display all the elements of the by using while loop
8. RUn a loop from 30 to 86 . this loop will stop if the valuse get higher then
9.Write the price of the books that you have. Display the prices if the price is lower than 200
10.
*/


// 1 solve 
var loop = "Ajke amar mon valo nei";
var i = 0;
while (i <= 39) {
     // console.log(loop);
     i++;
}


// 3 solve
var even = 412;
while (even < 456) {
     // console.log(even);
     even += 2
}


// 4 solve
var odd = 581;
while (odd < 623) {
     // console.log(odd);
     odd += 2
}


let a = 1;
while (a < 7) {
     if (a % 2 == 0) {
          console.log(a, "is even");
     }
     else {
          console.log(a, 'si odd');
     }
     a += 1;
}
