// String - A string is a sequence of characters used to store text

console.log('Welcome to "Credo Systemz"');
console.log(`Welcome to "Credo Systemz" - Welcome to 'JavaScript' Session`);

let name = "Sridhar";
let course = "JavaScript";
let message = "Welcome to JavaScript Session";

console.log(`Student Name: ${name} | Course Details: ${course} | Message: ${message}`);
console.log("Student Name: " + name + " | Course Details: " + course + " | Message: " + message);

// 1. Creating a String
let firstName = "Sridhar";
console.log(firstName);
console.log(typeof firstName);

// 2. String Length
// length - 1, position or index - 0
let jsName = "JavaScript";
console.log(jsName.length);

// 3. charAt() - Returns the character at a specified index
console.log(jsName.charAt(0));
console.log(jsName.charAt(4));

// 4. toUpperCase() - Converts a string to uppercase
console.log(jsName.toUpperCase());

// 5. toLowerCase() - Converts a string to lowercase
console.log(jsName.toLowerCase());

// 6. trim() - Removes spaces from the beginning and end of a string
let spacedName = " JavaScript ";
console.log(spacedName);
console.log(spacedName.trim());

// 7. trimStart() - Removes spaces from the beginning
let startName = " JavaScript ";
console.log(startName);
console.log(startName.trimStart());

// 8. trimEnd() - Removes spaces from the end
let endName = " JavaScript";
console.log(endName);
console.log(endName.trimEnd());

// 9. includes() - Checks whether a string contains a specified value
let welcomeMessage = "Welcome to JavaScript";
console.log(welcomeMessage.includes("Java"));
console.log(welcomeMessage.includes("Python"));

// 10. startsWith() - Checks whether a string starts with a specified value
// 11. endsWith() - Checks whether a string ends with a specified value
let sampleName = "JavaScript";
console.log(sampleName.startsWith("J"));
console.log(sampleName.endsWith("pt"));

let email = "psridharraj@gmail.com";
if (email.includes("@") && email.endsWith(".com")) {
    console.log("Valid");
} else {
    console.log("Invalid");
}

// 12. indexOf() - Returns the first index where a value is found. If not found, it returns -1
// 13. lastIndexOf() - Returns the last occurrence of a specified value
let programming = "Programming";
console.log(programming.indexOf("g"));
console.log(programming.lastIndexOf("g"));
// console.log(programming.indexOf("Z"));

// 14. search() - Searches a string and returns the index of the match
let searchName = "JavaScript";
console.log(searchName.search("Scr"));

// 15. slice() - Extracts a part of a string
let sliceName = "JavaScript";
console.log(sliceName.slice(-6));
console.log(sliceName.slice(0, 4));
console.log(sliceName.slice(4, 10));

// 16. replace() - Replaces the first matching occurrence
// 17. replaceAll() - Replaces all matching occurrences
let animalName = "Cat Call";
console.log(animalName.replace("C", "B"));
console.log(animalName.replaceAll("C", "B"));

// 18. concat() - Combines two or more strings
let first = "Sridhar";
let last = "Raj";
let fullName = first.concat(" ", last);
console.log(fullName);

// 19. split() - Converts a string into an array
let fruits = "Apple Banana Mango Orange";
let answer = fruits.split(" ");
console.log(answer);

// 20. repeat() - Repeats a string a specified number of times
let repeatedName = "JavaScript ";
console.log(repeatedName.repeat(5));

// Loop through characters
let loopName = "Java";
for (let i = 0; i < loopName.length; i++) {
    console.log(loopName.charAt(i));
}

// Practice
// 1. Reverse a String
// 2. Count Vowels
// 3. Check Palindrome
