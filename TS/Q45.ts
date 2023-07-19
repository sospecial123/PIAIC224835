/*45.	Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.* */


// Function to store information about a car in an object
function car_info(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    const car: Record<string, any> = {
      manufacturer,
      model
    };
  
    for (const [key, value] of extras) {
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required and optional information
  const car4 = car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
  const car5 = car_info('Honda', 'Civic', ['color', 'red'], ['hasSunroof', true]);
  
  // Print the objects
  console.log(car4);
  console.log(car5);
  
