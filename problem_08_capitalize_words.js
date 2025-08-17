// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");          // Split string into an array of words
  let capitalized = [];                // Array to hold capitalized words
  for (let word of words) {            // Loop through each word
    capitalized.push(                  // Add the modified word to new array
      word[0].toUpperCase() + word.slice(1) // Capitalize first letter + rest unchanged
    );
  }
  return capitalized.join(" ");        // Join words back into a single string
}

// Example
console.log(capitalizeWords("hello world")); // "Hello World"
