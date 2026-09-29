let fruits=["apple", "banana", "cherry", "date", "elderberry"];

console.log(fruits.push("fig")); // This will log the new length of the array (6) to the console.
console.log(fruits); // This will log the updated array to the console.
console.log(fruits.pop()); // This will log "fig" to the console, which is the last element removed from the array.
console.log(fruits); // This will log the updated array to the console.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.shift()); // This will log "1" to the console, which is the first element removed from the array.
console.log(numbers); // This will log the updated array to the console.
console.log(numbers.unshift(0)); // This will log the new length of the array (5) to the console.
console.log(numbers); // This will log the updated array to the console.

console.log(numbers.at(-1)); // This will log "5" to the console, which is the last element of the array.
console.log(numbers.indexOf(3)); // This will log "2" to the console, which is the index of the first occurrence of "3" in the array.
console.log(numbers.lastIndexOf(3)); // This will log "2" to the console, which is the index of the last occurrence of "3" in the array.
console.log(numbers.includes(3)); // This will log "true" to the console, indicating that "3" is present in the array.
console.log(numbers.slice(1, 4)); // This will log "[2, 3, 4]" to the console, which is a shallow copy of a portion of the array from index 1 to index 4 (not including index 4).

console.log(numbers.splice(1, 2, 6)); // This will log "[2, 3]" to the console, which are the elements removed from the array. The array is now modified to [1, 6, 7, 4, 5].
console.log(numbers); // This will log the updated array to the console.
console.log(numbers.reverse()); // This will log "[5, 4, 7, 6, 1]" to the console, which is the reversed array.
console.log(fruits.concat(numbers)); // This will log the concatenated array of fruits and numbers to the console.
console.log(numbers.join(",")); // This will log "5,4,7,6,1" to the console, which is a string representation of the array elements joined by commas.

for(let i=0; i < fruits.length; i++) {
    console.log(fruits[i]); // This will log each fruit in the array to the console.
}
for(let fruit of fruits) {
    console.log(fruit); // This will log each fruit in the array to the console.
}
// numbers.forEach((number) =>console.log(number)); // This will log each number in the array to the console.
numbers.forEach((number, index) => console.log(index, number));

for(let index in fruits){
    console.log(fruits[index]);
}