function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // append each character to the empty string
    reversedStr += str[i];
  }
  return reversedStr;
}

module.exports = reverseString;
