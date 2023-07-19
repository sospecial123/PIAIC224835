/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.* */


// Modified make_shirt function with default parameters
function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`Size: ${size}, Message: ${message}`);
  }
  
  // Call the function with different parameters
  make_shirt(); // Default large shirt with default message
  make_shirt('M'); // Medium shirt with default message
  make_shirt('S', 'Hello, World!'); // Custom small shirt with custom message

  
  