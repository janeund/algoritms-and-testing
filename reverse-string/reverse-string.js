function reversedString(string) {
  // Solution 1
  // return string.split('').reverse().join('')

  // Solution 3
  // let reversed = '';
  // for (let char of string) {
  //   console.log(char)
  //   reversed = char + reversed;
  // }
  // return reversed;

  // Solution 4
  return string
    .split('')
    .reduce((revStr, char) => char + revStr, '')
}

console.log(reversedString('string'))

module.exports = reversedString;