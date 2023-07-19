"use strict";
//23.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
//      Have at least one True and one False result for each of the following:
/*      • Tests for equality and inequality with strings
        • Tests using the lower case function
        • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
        • Tests using "and" and "or" operators
        • Test whether an item is in a array
        • Test whether an item is not in a array*/
console.log(`Tests for equality and inequality with strings:`);
console.log(`'apple' == 'apple' --> ${'apple' == 'apple'}`);
//console.log(`'apple' == 'orange' --> ${'apple' == 'orange'}`);
//console.log(`'apple' != 'orange' --> ${'apple' != 'orange'}`);
console.log(`'apple' != 'apple' --> ${'apple' != 'apple'}`);
console.log(`Tests using the lower case function:`);
console.log(`'apple'.toLowerCase() == 'apple' --> ${'apple'.toLowerCase() == 'apple'}`);
console.log(`'apple'.toLowerCase() == 'APPLE' --> ${'apple'.toLowerCase() == 'APPLE'}`);
console.log(`'apple'.toLowerCase() != 'APPLE' --> ${'apple'.toLowerCase() != 'APPLE'}`);
//console.log(`Numerical tests:`);
//console.log(`5 > 3 --> ${5 > 3}`);
//console.log(`5 < 3 --> ${5 < 3}`);
//console.log(`5 >= 3 --> ${5 >= 3}`);
//console.log(`5 <= 3 --> ${5 <= 3}`);
//console.log(`Tests using "and" and "or" operators:`);
//console.log(`(5 > 3) && (5 < 10) --> ${(5 > 3) && (5 < 10)}`);
//console.log(`(5 > 3) && (5 > 10) --> ${(5 > 3) && (5 > 10)}`);
//console.log(`(5 > 3) || (5 > 10) --> ${(5 > 3) || (5 > 10)}`);
//console.log(`(5 < 3) || (5 > 10) --> ${(5 < 3) || (5 > 10)}`);
/*console.log(`Test whether an item is in an array:`);
console.log(`[1, 2, 3, 4, 5].includes(3) --> ${[1, 2, 3, 4, 5].includes(3)}`);
console.log(`[1, 2, 3, 4, 5].includes(6) --> ${[1, 2, 3, 4, 5].includes(6)}`);*/
console.log(`Test whether an item is not in an array:`);
console.log(`!['apple', 'banana', 'orange'].includes('grape') --> ${!['apple', 'banana', 'orange']}`);
console.log(`!['apple', 'banana', 'orange'].includes('apple') --> ${!['apple', 'banana', 'orange']}`);
