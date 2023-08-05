// Strings in JavaScript:
// Strings are sequences of characters in JavaScript. 
// They are used to represent text and can contain letters, numbers, symbols, and whitespace.
//  Strings can be created using string literals (enclosed in single or double quotes)
//   or by using the String constructor with new.


// String created using string literal
const strLiteral = "Hello, World!";

// String created using String constructor
const strObject = new String("Hello, World!");
// Strings in Detail:

// Primitive Strings (Immutable): Primitive strings, created using string literals, are immutable. 
// Once a primitive string is created, its value cannot be changed. 
// Any operation that appears to modify the string actually creates a new string.


let name = "John";
name = "Jake"; // This creates a new string, not modifying the original "John"

// String Objects (Immutable): String objects, created using the String constructor with new, 
// are also immutable. Although they provide additional properties and methods,
//  they don't allow you to modify the original string value.
// javascript

const nameObject = new String("John");
nameObject[0] = "P"; // This won't modify the original string

// Common Functions of String Object:

// Here are some of the commonly used functions available in the String object:

// charAt(index): Returns the character at the specified index in the string.
// charCodeAt(index): Returns the Unicode value of the character at the specified index in the string.
// concat(str1, str2, ...strN): Concatenates one or more strings together.
// indexOf(substring, start): Returns the index of the first occurrence of the specified substring, starting from the specified index. Returns -1 if not found.
// lastIndexOf(substring, start): Returns the index of the last occurrence of the specified substring, starting from the specified index. Returns -1 if not found.
// startsWith(searchString, position): Checks if the string starts with the specified searchString. Returns true or false.
// endsWith(searchString, position): Checks if the string ends with the specified searchString. Returns true or false.
// includes(searchString, position): Checks if the string contains the specified searchString. Returns true or false.
// slice(start, end): Extracts a substring from the specified start index (inclusive) to the end index (exclusive).
// substring(start, end): Extracts a substring from the specified start index (inclusive) to the end index (exclusive).
// split(separator, limit): Splits the string into an array of substrings based on the specified separator.
// toLowerCase(): Converts the string to lowercase.
// toUpperCase(): Converts the string to uppercase.
// trim(): Removes leading and trailing whitespace characters from the string.
// repeat(count): Returns a new string with the original string repeated count times.