/*43.	Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.* */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to modify magician names and add 'the Great'
// Function to modify magician names and add 'the Great'
function make_great1(magicians) {
    var great_magicians2 = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians2.push("".concat(magician, " the Great"));
    }
    return great_magicians2;
}
// Original array of magician names
var original_magicians = ['Merlin', 'Gandalf', 'Houdini'];
// Call the function with a copy of the original array
var great_magicians2 = make_great1(__spreadArray([], original_magicians, true));
// Show both arrays to demonstrate the difference
console.log("Original Magicians: ".concat(original_magicians));
//show_magicians(original_magicians);
console.log("Great Magicians: ".concat(great_magicians2));
//show_magicians(great_magicians2);
