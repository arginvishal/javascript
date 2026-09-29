
// JavaScript Data Types

// 1. String
let firstName = "Argin";
console.log(firstName);
console.log(typeof firstName);

// 2. Number: integer
let age = 25;
console.log(age);
console.log(typeof age);

// 3. Number: decimal
let salary = 50000.50;
console.log(salary);
console.log(typeof salary);

// 4. Number: constant value
const pi = 3.14;
console.log(pi);
console.log(typeof pi);

// 5. Boolean
let isActive = true;
console.log(isActive);
console.log(typeof isActive);

// 6. Undefined
let userName;
console.log(userName);
console.log(typeof userName);

// 7. Null
let address = null;
console.log(address);
console.log(typeof address); // Object: a historical JavaScript behavior

// 8. BigInt
let population = 1000000n;
console.log(population);
console.log(typeof population);

// 9. Object
let employee = {
    id: 1,
    name: "John",
    age: 30,
    salary: 50000.50
};
console.log(employee);
console.log(employee.id);
console.log(typeof employee);

// 10. Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(typeof fruits); // Object: arrays are objects in JavaScript
