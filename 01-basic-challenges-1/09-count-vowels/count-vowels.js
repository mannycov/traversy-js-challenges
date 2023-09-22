function countVowels(str) {
  let vowelCount = 0;
  const formattedStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (formattedStr[i] === "a") {
      vowelCount += 1;
    } else if (formattedStr[i] === "e") {
      vowelCount += 1;
    } else if (formattedStr[i] === "i") {
      vowelCount += 1;
    } else if (formattedStr[i] === "o") {
      vowelCount += 1;
    } else if (formattedStr[i] === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

module.exports = countVowels;
