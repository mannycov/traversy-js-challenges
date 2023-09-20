function titleCase(str) {
  // create an array of words where all words are lower case and where they are separated by a space character
  const words = str.toLowerCase().split(" ");

  // loop through the words array and grab the first letter of each word to convert into upper case
  // append the rest of the words in that array to the the new upper case letter using the slice method where you pass in the #1 to cut off the first letter and append the rest of the letters in that word
  // reassign the first word to the new concatenated word described above
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  // Use the join method to convert the array back to a string where the words are joined at the space (separator to use to separate each element)
  return words.join(" ");
}

module.exports = titleCase;
