/*30.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
 */

const usernames3: string[] =["Admin","Sohail"];

if (usernames3.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames3.length; i++) {
    const username = usernames3[i];
    console.log(`Hello ${username}, thank you for logging in.`);
  }
}
