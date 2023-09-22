function isPalindrome(str) {
  const string = removeNonAlphanumeric(str.toLowerCase());
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  while (leftPointer !== rightPointer || leftPointer < rightPointer) {
    if (string[leftPointer] !== string[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

// Helper functions
function removeNonAlphanumeric(str) {
  // Declare a variable to store the formatted string
  let formattedStr = "";
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is alphanumeric, add it to the formatted string
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  // Get the character code
  const code = char.charCodeAt(0);
  // Return whether the character is alphanumeric
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

module.exports = isPalindrome;
