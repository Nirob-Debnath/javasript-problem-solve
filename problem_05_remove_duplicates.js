// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];                     // Empty array for unique numbers
  for (let num of arr) {               // Loop through each element
    if (!unique.includes(num)) {       // Check if number not already added
      unique.push(num);                // Add number if it's not a duplicate
    }
  }
  return unique;                       // Return the array without duplicates
}

// Example
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
