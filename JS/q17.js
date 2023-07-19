"use strict";
//17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//      • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//      • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//      • Print a message to each of the two people still on your list, letting them know they’re still invited.
//      • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const placesToVisit = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
console.log("Original order:");
console.log(placesToVisit);
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());
console.log("Still in original order:");
console.log(placesToVisit);
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Still in original order:");
console.log(placesToVisit);
placesToVisit.reverse(); // Reverse the order
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse(); // Reverse the order again to get back to the original order
console.log("Back to original order:");
console.log(placesToVisit);
console.log("Sorted in alphabetical order:");
console.log(placesToVisit.sort());
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
