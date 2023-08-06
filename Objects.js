// In JavaScript, objects are one of the fundamental data types used to represent and store collections of key-value pairs. An object is a non-primitive data type, and it can hold various types of data, including other objects, arrays, functions, and primitive data types like numbers and strings. Objects allow you to organize and group related data together, making it easy to access and manipulate the data using descriptive keys (properties).

// In JavaScript, objects are defined using curly braces {} and can have zero or more key-value pairs. Each key in the object is a unique identifier, and the associated value can be of any valid data type.

// Here's an example of an object with some properties:

// Creating an object representing a person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "gaming"],
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
    },
    sayHello: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
  };
  
  // Accessing properties of the object
  console.log(person.firstName); // Output: "John"
  console.log(person.age); // Output: 30
  console.log(person.hobbies[1]); // Output: "traveling"
  console.log(person.address.city); // Output: "New York"
  
  // Calling a method from the object
  person.sayHello(); // Output: "Hello, my name is John Doe."
  

  const movie = {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genres: [],
  };
  
  // Function to add genre to the movie
  function addGenre(movie, genre) {
    // Your code here
  }
  
  // Function to get movie information
  function getMovieInfo(movie) {
    // Your code here
  }
  
  // Add genres to the movie using the addGenre function
  addGenre(movie, "Action");
  addGenre(movie, "Adventure");
  addGenre(movie, "Sci-Fi");
  
  // Call the getMovieInfo function and log the movie's information
  console.log(getMovieInfo(movie));
  // Expected output: "Title: Inception, Year: 2010, Director: Christopher Nolan, Genres: Action, Adventure, Sci-Fi"
  

//   In JavaScript, Object.assign() is a built-in static method used to copy the values of all enumerable properties from one or more source objects into a target object. It is commonly used for object cloning and merging multiple objects into one.

// The syntax for Object.assign() is as follows:

// Object.assign(target, ...sources);

const originalObj = { firstName: "John", lastName: "Doe" };

// Cloning the originalObj into newObj
const newObj = Object.assign({}, originalObj);

console.log(newObj); // Output: { firstName: "John", lastName: "Doe" }
console.log(newObj === originalObj); // Output: false (they are different objects)


const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

// Merging obj2 and obj3 into obj1
const mergedObj = Object.assign(obj1, obj2, obj3);

console.log(mergedObj); // Output: { a: 1, b: 2, c: 3 }
console.log(obj1); // Output: { a: 1, b: 2, c: 3 } (obj1 has been modified)

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
      country: "USA",
    },
    contact: {
      email: "john.doe@example.com",
      phone: "555-123-4567",
    },
  };
  

  // Destructure top-level properties
const { firstName, lastName, age } = person2;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"
console.log(age); // Output: 30

// Destructure nested address object
const { address } = person2;
console.log(address);
// Output:
// {
//   street: "123 Main St",
//   city: "New York",
//   zipCode: "10001",
//   country: "USA"
// }

// Destructure properties from the nested address object
const { street, city, zipCode, country } = person2.address;
console.log(street); // Output: "123 Main St"
console.log(city); // Output: "New York"
console.log(zipCode); // Output: "10001"
console.log(country); // Output: "USA"

// Destructure nested contact object
const { contact } = person2;
console.log(contact);
// Output:
// {
//   email: "john.doe@example.com",
//   phone: "555-123-4567"
// }

// Destructure properties from the nested contact object
const { email, phone } = person2.contact;
console.log(email); // Output: "john.doe@example.com"
console.log(phone); // Output: "555-123-4567"
