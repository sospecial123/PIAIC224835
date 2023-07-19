"use strict";
//11.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//      The text of each message should be the same, but each message should be personalized with the person’s name.
const names3 = ["Alice", "Bob", "Charlie"];
const message2 = "Hello, how are you today?";
for (const name of names3) {
    console.log(`${name}, ${message2}`);
}
