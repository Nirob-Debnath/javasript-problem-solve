// Problem 1: Reverse a String
function reverseString(str) {
  let reversed = "";                           // Start with an empty string to store the reversed text
  for (let i = str.length - 1; i >= 0; i--)    // Loop backwards from the last character
    { 
    reversed += str[i];                        // Add each character to the new string
  }
  return reversed;                             // Return the reversed string
}

// Example
console.log(reverseString("hello"));           // "olleh"