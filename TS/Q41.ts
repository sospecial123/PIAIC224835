/**41.	Magicians: Make a array of magician’s names.
 *  Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */


// Array of magician names
// Function to show magicians
 const magicians: string[] = ['Merlin', 'Gandalf', 'Houdini'];
function show_magicians41(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Call the function
  show_magicians41(magicians);

  
  