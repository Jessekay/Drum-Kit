function squareSum(numbers) {
   return numbers.reduce((sum, num) => sum + num *num, 0);
}

console.log(squareSum([1, 2, 2])); // 9
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
