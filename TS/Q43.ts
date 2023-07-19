/*43.	Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.* */

// Function to modify magician names and add 'the Great'
// Function to modify magician names and add 'the Great'
function make_great1(magicians: string[]): string[] {
    const great_magicians2: string[] = [];
  
    for (const magician of magicians) {
      great_magicians2.push(`${magician} the Great`);
    }
  
    return great_magicians2;
  }
  
  // Original array of magician names
  const original_magicians: string[] = ['Merlin', 'Gandalf', 'Houdini'];
  
  // Call the function with a copy of the original array
  const great_magicians2: string[] = make_great1([...original_magicians]);
  
  // Show both arrays to demonstrate the difference
  console.log(`Original Magicians: ${original_magicians}`);
  //show_magicians(original_magicians);
  console.log(`Great Magicians: ${great_magicians2}`);
  //show_magicians(great_magicians2);
  

