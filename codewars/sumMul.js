function sumMul(n, m) {
  // First, check if the inputs are valid natural numbers
  if (n <= 0 || m <= 0) {
    return "Invalid input: n and m must be natural numbers (positive integers)";
  }

  let sum = 0;

  // Loop through all numbers starting from n, up to (but not including) m
  for (let i = n; i < m; i += n) {
    sum += i; // Add the current multiple to the sum
  }

  return sum;
}
