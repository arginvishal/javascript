// functions 

function greet(){
    console.log("Hello, welcome to the program!");
}
greet(); // Calling the function

function add(a, b) {
    answer = a + b;
    console.log("The sum of", a, "and", b, "is:", answer);
}
add(5, 10); // Calling the function with arguments

function multiply(a, b) {
      return a * b;
}
console.log("The product of 5 and 10 is:", multiply(5, 10)); // Calling the function and logging the return value

const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }   
    return a / b;
};
console.log("The result of dividing 10 by 2 is:", divide(10, 2));


let subtract = function(a, b) {
    return a - b;
};
console.log("The difference between 10 and 5 is:", subtract(10, 5)); // Calling the function and logging the return value



const getsquare =(num) => num * num;
console.log("The square of 5 is:", getsquare(5)); // Calling the function and logging the return value
