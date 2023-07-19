// 13.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//      Make a list that includes at least three people you’d like to invite to dinner. 
//      Then use your list to print a message to each person, inviting them to dinner.

const guestList = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us.`);
}
