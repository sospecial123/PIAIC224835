/*44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.* */
// Function to create a summary of the sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich order summary:');
    console.log('- Bread');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log('- Bread\n');
}
// Call the function with different number of arguments
make_sandwich('Cheese', 'Tomato');
make_sandwich('Egg', 'Bacon', 'Lettuce', 'Mayonnaise');
make_sandwich('Ham', 'Cheese', 'Mustard', 'Pickles', 'Lettuce');
