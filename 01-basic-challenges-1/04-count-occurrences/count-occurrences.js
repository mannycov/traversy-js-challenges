function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count += 1;
  }
  return count;
}

// Alternate solution
function countOccurences2(string, char) {
  return string.split(char).length - 1;
}

const countOccurences3 = (string, char) => string.split(char).length - 1;

module.exports = countOccurrences;
