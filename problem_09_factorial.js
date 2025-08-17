// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;                      // Start with 1 (multiplication identity)
  for (let i = 1; i <= n; i++) {       // Loop from 1 to n
    result *= i;                       // Multiply result by current i
  }
  return result;                       // Return the factorial
}

// Example
console.log(factorial(5)); // 120
