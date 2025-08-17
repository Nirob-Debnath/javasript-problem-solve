// Problem 3: Check for Palindrome
function isPalindrome(str) {
    let reversed = "";                  // Variable to store reversed string
    for (let i = str.length - 1; i >= 0; i--)  // Loop backwards
    {
        reversed += str[i];               // Add characters in reverse order
    }
    return str === reversed;            // Compare original with reversed
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false