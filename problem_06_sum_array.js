// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;                         // Start with sum = 0
  for (let num of arr) {               // Loop through each number
    sum += num;                        // Add each number to sum
  }
  return sum;                          // Return total sum
}

// Example
console.log(sumArray([1, 2, 3, 4]));    // 10