// conditions

// if
let age = 20;
if (age > 18) {
    console.log("You are eligible to vote.");
}


// if-else


let marks = 15;
if (marks > 35) {
    console.log("A grade");
} else {
    console.log("you are fail");
}


// Nested if-else

let number = -5;
if (number > 0) {
    if (number % 2 == 0) {
        console.log("Even number");
    }
    else {
        console.log("odd number");
    }
} else {
    console.log("Negative Number is not Accepted");
}



// if-else-if ladder

let number1 =10;
let number2=20;
let number3=30;
if (number1 > number2 && number1 > number3) {
    console.log("number1 is greater");
} else if (number2 > number1 && number2 > number3) {
    console.log("number2 is greater");
} else {
    console.log("number3 is greater");
}

// switch case

let n=1;
switch (5) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
     default:
        console.log("Invalid day");
        break;     
}