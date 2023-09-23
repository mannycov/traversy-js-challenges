// O(n^2)
// function removeDuplicates(arr) {
//   const uniqueChars = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = uniqueChars.length - 1; j >= 0; j--) {
//       if (arr[i] === uniqueChars[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       uniqueChars.push(arr[i]);
//     }
//   }
//   return uniqueChars;
// }

// O(n)
// function removeDuplicates(arr) {
//   const uniqueCharsSet = new Set();
//   const uniqueChars = [];

//   for (let i = 0; i < arr.length; i++) {
//     uniqueCharsSet.add(arr[i]);
//   }

//   for (const char of uniqueCharsSet) {
//     uniqueChars.push(char);
//   }
//   return uniqueChars;
// }

// O(n)
// function removeDuplicates(arr) {
//   const uniqueChars = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueChars.includes(arr[i])) uniqueChars.push(arr[i]);
//   }
//   return uniqueChars;
// }

// O(n)
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
