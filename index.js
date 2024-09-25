//  largest Number
function findLargestNumber(arr) {
  return Math.max(...arr);
}
const numbers = [10, 50, 30, 5, 100, 60];
console.log(findLargestNumber(numbers));
// Even Numbers

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const evenNums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEvenNumbers(evenNums));
// Reverse text
function reverseString(str) {
  return str.split("").reverse().join("");
}
const text = "hello";
console.log(reverseString(text));
// Remmove Duplicate
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const dupNums = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
