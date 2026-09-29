// Creating a student object with basic properties
let Student = {
    id: 1,
    name: "John Doe",
    age: 20,
};

// Display the whole object
console.log(Student);

// Access object properties using dot notation
console.log(Student.name);
console.log(Student.age);
console.log(Student.id);

// Access object properties using bracket notation
console.log(Student["name"]);
console.log(Student["age"]);
console.log(Student["id"]);

// Add a new property to the object
Student.marks = 95;
console.log(Student.marks);

// Get all keys of the object
console.log(Object.keys(Student));

// Get all values of the object
console.log(Object.values(Student));

// Delete a property from the object
delete Student.age;
console.log(Object.keys(Student));

// Check if a property exists in the object
console.log("age" in Student);
console.log("marks" in Student);

let person={
    name:"John",
    age:30,
    city:"Chennai",
    email:"john.doe@example.com",
    address:{
        street:"123 Main St",
        city:"Chennai",
        state:"Tamilnadu",
        zip:"10001"
    }
  };
  console.log(Object.entries(person));
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.keys(person.address));
  console.log(Object.values(person.address));


// Separate examples of for, for...of, and for...in loops.
const personDetails = {
  id: 301,
  name: "Asha",
  age: 22,
  city: "Madurai"
};

// for loop: access array items by their index.
console.log("for loop:");
let subjects = ["HTML", "CSS", "JavaScript"];
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

// for...of loop: access each value directly.
console.log("for...of loop:");
for (let  value of Object.values(personDetails)) {
  console.log(value);
}

// for...in loop: access each property name of an object.
console.log("for...in loop:");
for (const key in personDetails) {
  console.log(key, ":", personDetails[key]);
}


// Object method example

// Create an object with a method.
let StudentMethod = {
  Name: "Priya",
  Greet: function () {
    console.log("Welcome to JavaScript Session");
  }
};

console.log(StudentMethod);
// Call the object's method.
StudentMethod.Greet();

const StudentInfo = {
  ID: 102,
  Name: "Raja",
  Age: 23,
  Email: "raja.kumar@gmail.com"
};

const Marks = {
  HTML: 88,
  CSS: 92,
  BS: 90,
  JS: 95,
  RJS: 89
};

// Merge student details and marks into a new object using spread syntax.
const answer = { ...StudentInfo, ...Marks };
console.log(answer);

// Nested object example with an address object.
const StudentProfile = {
  ID: 102,
  Name: "Ravi",
  Address: {
    City: "Trichy",
    PinCode: 620001
  }
};

console.log(StudentProfile);
console.log(StudentProfile.Name);
console.log(StudentProfile.Address);
console.log(StudentProfile.Address.City);

// Iterate through the nested Address object's properties.
for (const key in StudentProfile.Address) {
  console.log(key, " : ", StudentProfile.Address[key]);
}


