// 1. for loop
for (let i = 1; i <= 5; i++) {
	console.log("for loop:", i);
}

// 2. while loop
let count = 1;

while (count <= 3) {
	console.log("while loop:", count);
	count++;
}

// 3. do...while loop
let number = 5;

do {
	console.log("do...while loop:", number);
	number++;
} while (number < 5);

// 4. for...of loop: loops through array values
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
	console.log("fruit:", fruit);
}

// 5. break stops the loop
for (let i = 1; i <= 5; i++) {
	if (i === 3) {
		break;
	}

	console.log("break example:", i);
}

// 6. continue skips the current iteration
for (let i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}

	console.log("continue example:", i);
}
