// In JavaScript, an array is a data structure that allows you to store and organize multiple values in a single variable. 
// Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays. 
// They are one of the most commonly used data structures in JavaScript and provide various built-in functions (methods) 
// to manipulate and work with their elements.

// Here's a brief overview of some commonly used array functions in JavaScript:

// push(): Adds one or more elements to the end of an array.

// pop(): Removes and returns the last element of an array.

// unshift(): Adds one or more elements to the beginning of an array.

// shift(): Removes and returns the first element of an array.

// splice(): Adds or removes elements at a specific index in the array.

// slice(): Returns a shallow copy of a portion of an array into a new array.

// concat(): Joins two or more arrays and returns a new array.

// indexOf(): Returns the first index at which a given element is found in the array, or -1 if not present.

// find(): Returns the value of the first element in the array that satisfies the provided testing function.

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// map(): Creates a new array with the results of calling a provided function on every element in the calling array.

// forEach(): Executes a provided function once for each array element.

// Let's see an example of an array and how to use some of these functions:


// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using push() to add elements to the end of the array
numbers.push(6, 7, 8);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Using pop() to remove the last element from the array
const lastElement = numbers.pop();
console.log(lastElement); // Output: 8
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

// Using unshift() to add elements to the beginning of the array
numbers.unshift(-1, 0);
console.log(numbers); // Output: [-1, 0, 1, 2, 3, 4, 5, 6, 7]

// Using shift() to remove the first element from the array
const firstElement = numbers.shift();
console.log(firstElement); // Output: -1
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// Using splice() to add and remove elements at a specific index
numbers.splice(2, 2, "a", "b");
console.log(numbers); // Output: [0, 1, "a", "b", 4, 5, 6, 7]

// Using slice() to create a new array from a portion of the original array
const slicedArray = numbers.slice(2, 5);
console.log(slicedArray); // Output: ["a", "b", 4]

// Using indexOf() to find the index of a specific element
const index = numbers.indexOf(5);
console.log(index); // Output: 5

// Using find() to find the first element that satisfies a condition
const foundElement = numbers.find((element) => element > 4);
console.log(foundElement); // Output: "b"

// Using filter() to create a new array with elements that satisfy a condition
const filteredArray = numbers.filter((element) => typeof element === "number");
console.log(filteredArray); // Output: [0, 1, 4, 5, 6, 7]

// Using map() to create a new array with modified elements
const mappedArray = numbers.map((element) => element * 2);
console.log(mappedArray); // Output: [0, 2, NaN, NaN, 8, 10, 12, 14]

// Using forEach() to perform an action on each element of the array
numbers.forEach((element) => {
  console.log(`Element: ${element}`);
});
// Output:
// Element: 0
// Element: 1
// Element: NaN
// Element: NaN
// Element: 8
// Element: 10
// Element: 12
// Element: 14
