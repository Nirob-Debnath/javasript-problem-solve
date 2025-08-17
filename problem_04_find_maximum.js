// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];                   // Assume first number is the max
  for (let num of arr) {              // Loop through each number
    if (num > max) {                  // If current number is greater than max
      max = num;                      // Update max
    }
  }
  return max;                         // Return the largest number
}

// Example
console.log(findMax([5, 1, 9, 3])); // 9
