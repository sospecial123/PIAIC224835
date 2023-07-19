// SOHAIL AKRAM 
// ROLL NO: PIAIC224835
// BATCH 48 - EVENING
//  EXERCISE NO. 2  ------- Comparators Assignment ---------
//  I used 3 types of operators 1) Logical, 2) Mathematical and 3) Relational.
//
//
//
//
//1. Logical Operators
var a = true;
var b = false;
if(a == true && b == false){
console.log(`result = a && b =`, a && b); // Output: false
console.log(`result = a || b =`, a || b);// Output: True
console.log(`result = !a  =`, !a ); // Output: false
}


//2. Mathematical Operators
//let result4;
var num1 = 5;
var num2 = 10;
var result4 = num1 + num2;
console.log(result4); // Output: 15
//Addition
var str1 = "Hello";
var str2 = " World";
var result2 = str1 + str2;
console.log(result2); // Output: HelloWorld

//Subtraction
var num1 = 10;
var num2 = 5;
var result4 = num1 - num2;
console.log(result4); // Output: 5

//Multiplication

var num1 = 5;
var num2 = 10;
var result4= num1 * num2;
console.log(result4); // Output: 50


// Division

var num1 = 10;
var num2 = 2;
var result4 = num1 / num2;
console.log(result4); // Output: 5


//3. Relational Comparators

//Equality

//var num1 = 5;
//var num2a = "5";
//var result = num1 != num2a;
// console.log(result); // Output: true


//Strict Equality

var num1 = 5;
var num2a = "5";
var result = num1 === num2;
console.log(result); // Output: false

//Inequality

var num1 = 5;
var num2a= "5";
var result = num1 != num2;
console.log(result); // Output: false


//Strict Inequality

var num1 = 5;
var num2a = "5";
var result = num1 !== num2;
console.log(result); // Output: true


//> Greater than

var num1 = 10;
var num2 = 5;
var result = num1 > num2;
console.log(result); // Output: true

//< Less than

var num1 = 10;
var num2 = 5;
var result = num1 < num2;
console.log(result); // Output: true

//>= Greater than equal to

var num1 = 10;
var num2 = 10;
var result = num1 >= num2;
console.log(result); // Output: true


// <= Less than equal to

var num1 = 5;
var num2 = 10;
var result = num1 <= num2;
console.log(result); // Output: true

