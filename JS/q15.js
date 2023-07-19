"use strict";
const guestList2 = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
console.log("We found a bigger dinner table!");
guestList2.unshift("Nikola Tesla"); // Add new guest at the beginning
guestList2.splice(2, 0, "Galileo Galilei"); // Add new guest in the middle
guestList2.push("Thomas Edison"); // Add new guest at the end
for (const guest of guestList2) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us.`);
}
