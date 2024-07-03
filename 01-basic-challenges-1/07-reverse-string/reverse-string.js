function reverseString(str) {
 let result = '';
 for (let i = str.length - 1; i >= 0; i--) {
  result += str[i]
 }
 return result
}


const result = reverseString('hello world');

console.log(result);

module.exports = reverseString;
