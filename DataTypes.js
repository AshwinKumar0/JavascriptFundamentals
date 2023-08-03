/*1. Primitive Data Types:
Primitive data types are immutable and represent simple values. They are directly stored in memory and have a fixed size.

Number: Represents numeric values, including integers and floating-point numbers.

String: Represents sequences of characters (text) and is enclosed in single ('') or double ("") quotes.
Boolean: Represents a logical value, either true or false.
Null: Represents an intentional absence of any value. It is a special value that signifies "no value" or "empty."
Undefined: Represents an uninitialized or undefined value. Variables that are declared but not assigned any value have an undefined value by default.
Symbol: Represents a unique, immutable value that can be used as the key of an object property. Symbols are introduced in ECMAScript 6 (ES6).


2. Reference Data Types:
Reference data types are objects and are stored by reference in memory. They can hold complex data and have varying sizes.

Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects or functions.
Array: Represents a list-like structure used to store multiple values, which can be of different data types.
Function: Represents a reusable block of code that can be called with specific arguments.


JavaScript is a dynamically-typed language, which means you don't need to explicitly declare the data type of a variable. The data type is automatically determined based on the value assigned to the variable. */



//Primitive Datatypes
let age = 25; // Number
let weight = 55.5 //Decimal Number
let Likes = 255555555555555555555555n //Long Number
let name = "John"; // String
let isActive = true; // Boolean
const mySymbol = Symbol('description'); //Symbol

//Reference Datatypes
let person = { firstName: "John", lastName: "Doe" }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
const myArray = [1, 'hello', true, { name: 'John', age: 25 }, [2, 4, 6]]; // Array having elements with different datatypes
function greet() { return "Hello!"; } // Function

// **********Output*******************

console.log(typeof age);  // "number"
console.log(typeof weight);  // "number"
console.log(typeof Likes);  // "bigint"
console.log(typeof name);  // "string"
console.log(typeof isActive);  // "boolean"
console.log(typeof mySymbol);  // "symbol"
console.log(typeof person);  // "object"
console.log(typeof numbers);  // "object"
console.log(typeof myArray);  // "object"
console.log(typeof greet);  // "function"



