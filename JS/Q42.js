/**42.	Great Magicians: Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.


// Function to modify magician names and add 'the Great'
const magicians42: string[] = ['Merlin', 'Gandalf', 'Houdini'];
function make_great(magicians42: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const great_magicians of magicians42) {
      great_magicians.push(`${magicians42} the Great`);
    }
  
    return great_magicians;
  }
  
  // Call the function and store the result in a new array
 // const magicians42: string[] = ['Merlin', 'Gandalf', 'Houdini'];
  const great_magicians: string[] = make_great(magicians42);
  
  // Show the modified magician names
  show_magicians(great_magicians);*/
var magicians42 = ['Merlin', 'Gandalf', 'Houdini'];
function make_great(magicians42) {
    var great_magicians = [];
    for (var _i = 0, magicians42_1 = magicians42; _i < magicians42_1.length; _i++) {
        var magician = magicians42_1[_i];
        var great_magician = "".concat(magician, " the Great");
        great_magicians.push(great_magician);
    }
    return great_magicians;
}
// Function to show the magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function and store the result in a new array
var great_magicians = make_great(magicians42);
// Show the modified magician names
show_magicians(great_magicians);
