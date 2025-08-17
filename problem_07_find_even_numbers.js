// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];                      // Empty array to hold even numbers
  for (let num of arr) {               // Loop through array
    if (num % 2 === 0) {               // Check if number is divisible by 2
      evens.push(num);                 // Add even number to the array
    }
  }
  return evens;                        // Return array of even numbers
}

// Example
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]