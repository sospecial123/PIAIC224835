/* 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
var favoriteFruits = ["apple", "banana", "orange"];
if (favoriteFruits.indexOf("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.indexOf("mango")) {
    console.log("You really like mangoes!");
}
if (favoriteFruits.indexOf("grape")) {
    console.log("You really like grapes!");
}
if (favoriteFruits.indexOf("kiwi")) {
    console.log("You really, dont't like kiwis!");
}
if (favoriteFruits.indexOf("apple")) {
    console.log("You really don't like apples!");
}
