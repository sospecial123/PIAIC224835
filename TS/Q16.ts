//16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//      • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//      • Add one new guest to the beginning of your array.
//      • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//      • Print a new set of invitation messages, one for each person in your list.

const guestList3 = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
console.log("Sorry, we can only invite two people for dinner.");

while (guestList3.length > 2) {
  const removedGuest = guestList3.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (const guest of guestList3) {
  console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`);
}

guestList3.length = 0;  // Empty the guest list
console.log(guestList3);  // Output: []

