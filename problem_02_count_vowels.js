// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiouAEIOU";          // Define both lowercase and uppercase vowels
  let count = 0;                      // Counter to track vowels found
  for (let char of str) {             // Loop through each character in the string
    if (vowels.includes(char)) {      // Check if the character is in the vowels list
      count++;                        // Increase counter if it's a vowel
    }
  }
  return count;                       // Return total vowels
}

// Example
console.log(countVowels("programming")); // 3