/*45.	Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.* */
// Function to store information about a car in an object
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
var car4 = car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
var car5 = car_info('Honda', 'Civic', ['color', 'red'], ['hasSunroof', true]);
// Print the objects
console.log(car4);
console.log(car5);
