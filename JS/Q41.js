/**41.	Magicians: Make a array of magician’s names.
 *  Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
// Array of magician names
// Function to show magicians
var magicians = ['Merlin', 'Gandalf', 'Houdini'];
function show_magicians41(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Call the function
show_magicians41(magicians);
