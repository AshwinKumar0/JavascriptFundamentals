// JavaScript supports various numeric data types and provides
// built-in functions for performing common mathematical operations. 
// Here's a brief overview of numbers and math in JavaScript, along with some examples:

// Number Data Type:
// JavaScript has a single data type to represent both integers and floating-point numbers, 
// known as the "Number" data type. Numbers can be positive, negative, 
// or zero and can be written with or without decimals.

let integerNumber = 42;
let floatingPointNumber = 3.14;


// Mathematical Operations:
// JavaScript supports basic arithmetic operations like addition, subtraction, multiplication, division, and more.
// Example:

let a = 10;
let b = 5;

let sum = a + b;         // Addition: 10 + 5 = 15
let difference = a - b;  // Subtraction: 10 - 5 = 5
let product = a * b;     // Multiplication: 10 * 5 = 50
let quotient = a / b;    // Division: 10 / 5 = 2
let remainder = a % b;   // Modulus: 10 % 5 = 0 (remainder of division)
let exponentiation = a ** 2;  // Exponentiation: 10^2 = 100


// Math Object and Functions:
// JavaScript provides a built-in "Math" object that contains many useful math-related functions.
// Example:

// Math functions
let x = 4.7;
let y = -2.3;

let absoluteX = Math.abs(x);      // Absolute value: 4.7
let absoluteY = Math.abs(y);      // Absolute value: 2.3

let roundedX = Math.round(x);     // Round to the nearest integer: 5
let roundedDownX = Math.floor(x); // Round down to the nearest integer: 4
let roundedUpX = Math.ceil(x);    // Round up to the nearest integer: 5

let maxNumber = Math.max(10, 20, 5); // Find the maximum value: 20
let minNumber = Math.min(10, 20, 5); // Find the minimum value: 5

let randomNum = Math.random();   // Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomInRange = Math.random() * 10;  // Generate a random number between 0 and 10

let sqrtX = Math.sqrt(16);       // Square root: 4
let power = Math.pow(2, 3);      // Exponentiation: 2^3 = 8
let piValue = Math.PI;           // Value of PI: 3.141592653589793
