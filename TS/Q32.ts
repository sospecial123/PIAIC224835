/*32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
* */





// List of current users
let current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];

// List of new users
let new_users: string[] = ['user2', 'user6', 'user7', 'user8', 'user9'];

// Convert both arrays to lowercase for case-insensitive comparison
let lowercased_current_users = current_users.map(user => user.toLowerCase());

for (const new_user of new_users) {
  const lowercased_new_user = new_user.toLowerCase();
  
  if (lowercased_current_users.includes(lowercased_new_user)) {
    console.log(`Username "${new_user}" is already taken. Please choose a different one.`);
  } else {
    console.log(`Username "${new_user}" is available.`);
  }
}
