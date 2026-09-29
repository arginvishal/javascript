// Mathematical constants
console.log(Math.PI);
console.log(Math.E);

// Basic mathematical operations
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

// Find the largest and smallest values
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

// Round numbers in different ways
console.log(Math.floor(4.7));
console.log(Math.ceil(4.3));
console.log(Math.round(4.5));

// Absolute value, power, exponential, and logarithm
console.log(Math.abs(-10));
console.log(Math.pow(2, 3));
console.log(Math.exp(1));
console.log(Math.log(2.718281828459045));

// Generate a random decimal between 0 and 1
console.log(Math.random());

// Trigonometric functions use radians
console.log(Math.sin(50));
console.log(Math.tan(45));
console.log(Math.cos(60));


// Generate a random number from 0 to 99
let randomNum = Math.floor(Math.random() * 100);
console.log(`Random Number: ${randomNum}`);

// Generate a four-digit OTP

let otp = Math.floor(1000 + Math.random() * 9000);
console.log(`OTP: ${otp}`);

// Create a date object and display its details
let date = new Date();
console.log(date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// Display a greeting based on the time of day

let hours = date.getHours();
if (hours < 12) {
    console.log("Good Morning");
} else if (hours < 17) {
    console.log("Good Afternoon");
} else if (hours < 20) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}


// Calculate and display the area of a circle
function areaOfCircle(radius) {
    console.log(Math.floor(Math.PI * Math.pow(radius, 2)));
}
areaOfCircle(5);

// Calculate and display the area of a triangle
function areaOfTriangle(base, height) {
    console.log(Math.floor((base * height) / 2));
}
areaOfTriangle(10, 5);

// Display the squares from 1 through the given number
function square(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`Square of ${i} is ${Math.pow(i, 2)}`);
    }
}
square(5);

// Display the date in different formats
let dat = new Date();
console.log(dat.toDateString());
console.log(dat.toTimeString());
console.log(dat.toISOString());

// Display the date one week and one year from today
let dae = new Date();
dae.setDate(dae.getDate() + 7);
dae.setFullYear(dae.getFullYear() + 1);
console.log(dae.toLocaleDateString("en-IN"));


console.log(Math.imul(34,90));