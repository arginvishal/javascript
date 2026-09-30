// Array Methods Practice

// 1. map() - transform every element and return a new array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multipliedNumbers = numbers.map((number) => number * 5);
console.log("Map result:", multipliedNumbers);

// 2. filter() - keep only elements that match a condition
let prices = [10, 15, 20, 25, 30];
let filteredPrices = prices.filter((price) => price >= 20);
console.log("Filter result:", filteredPrices);

// 3. reduce() - reduce an array to a single value
let scores = [10, 50, 20, 80, 30];
let maximum = scores.reduce((max, number) => (number > max ? number : max), scores[0]);
console.log("Maximum value:", maximum);

let total = scores.reduce((sum, number) => sum + number, 0);
console.log("Total sum:", total);

// 4. forEach() - iterate without creating a new array
let marks = [80, 45, 90, 65, 30];
marks.forEach((mark) => {
  if (mark >= 50) {
    console.log(mark, "- Pass");
  } else {
    console.log(mark, "- Fail");
  }
});

// 5. Even and odd numbers using filter()
let values = [10, 15, 20, 25, 30, 35];
let evenNumbers = values.filter((number) => number % 2 === 0);
let oddNumbers = values.filter((number) => number % 2 !== 0);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

// 6. Map with square values
let inputNumbers = [2, 3, 4, 5];
let squaredNumbers = inputNumbers.map((n) => n * n);
console.log("Squared numbers:", squaredNumbers);

// 7. Convert names to uppercase
let names = ["arun", "priya", "sri", "sam", "ram", "john", "kumar", "priya"];
let upperNames = names.map((name) => name.toUpperCase());
console.log("Uppercase names:", upperNames);

// 8. Increase salary values
let salaries = [20000, 25000, 30000, 35000, 40000, 45000];
let updatedSalaries = salaries.map((salary) => salary + 5000);
console.log("Updated salaries:", updatedSalaries);

// 9. Filter names starting with 'S'
let studentNames = ["Arun", "Arul", "Sridhar", "Sai", "Sasi", "Sam", "Ram", "Raja", "Kumar", "Priya", "Abi"];
let sNames = studentNames.filter((name) => name.startsWith("S"));
console.log("Names starting with S:", sNames);

// 10. Count even numbers using reduce()
let countNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = countNumbers.reduce((count, number) => (number % 2 === 0 ? count + 1 : count), 0);
console.log("Even count:", evenCount);

// 11. Student marks total and average
let studentMarks = [80, 75, 90, 85, 70];
let totalMarks = studentMarks.reduce((sum, mark) => sum + mark, 0);
let averageMarks = totalMarks / studentMarks.length;
console.log("Total marks:", totalMarks);
console.log("Average marks:", averageMarks);

// 12. Additional array methods
let numbersList = [1, 2, 3, 4, 5];
console.log("toReversed:", numbersList.toReversed());
console.log("sort:", [...numbersList].sort((a, b) => b - a));
console.log("toSorted:", numbersList.toSorted((a, b) => a - b));
console.log("find:", numbersList.find((n) => n > 3));
console.log("findIndex:", numbersList.findIndex((n) => n === 4));
console.log("some:", numbersList.some((n) => n % 2 === 0));
console.log("every:", numbersList.every((n) => n > 0));
console.log("flat:", [[1, 2], [3, 4]].flat());
console.log("flatMap:", numbersList.flatMap((n) => [n, n * 2]));
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 2, 5);
console.log("fill:", fillArray);