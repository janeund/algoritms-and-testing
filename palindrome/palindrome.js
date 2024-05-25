// Solution 1
// function checkForPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// Solution 2
function checkForPalindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = checkForPalindrome;