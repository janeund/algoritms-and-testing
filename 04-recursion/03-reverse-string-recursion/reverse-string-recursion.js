function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const result = reverseString('hello');

console.log(result);

module.exports = reverseString;
