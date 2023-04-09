// complete this js code
// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor with the same arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor of the Employee prototype to be Employee
Employee.prototype.constructor = Employee;

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Create a new Person and call the greet method
const person = new Person('Alice', 30);
person.greet(); // Output: Hello, my name is Alice, I am 30 years old.

// Create a new Employee and call the greet and jobGreet methods
const employee = new Employee('Bob', 40, 'Manager');
employee.greet(); // Output: Hello, my name is Bob, I am 40 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 40 years old, and my job title is Manager.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
