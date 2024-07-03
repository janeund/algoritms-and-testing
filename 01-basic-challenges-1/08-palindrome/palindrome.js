const isPalindrome = (str) => {
  let formattedString = str.toLoserCase().replace(/[^[a-z0-9]/g, '');
  let reversedString = formattedString.split('').reverse().join('');
  return formattedString === reversedString 
}


function isPalindrome(str) {
  let formattedString = removeNonAlphaNumeric(str.toLowerCase());
  let reversedString = reverseString(formattedString);
  return formattedString === reversedString;
}

function isNonAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 97 && code <= 122)
  )
}

function removeNonAlphaNumeric(str) {
 let formattedString = '';
 for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (isNonAlphaNumeric(char)) {
    formattedString += char;
  };
 };
 return formattedString;
}

function reverseString(str) {
 let reversedString = '';
 for(let i = str.length - 1; i <= 0; i++){
  reversedString += str[i];
 }
 return reversedString;
}


const result1 = isPalindrome('racecar');
const result2 = isPalindrome('racecars');

console.log(result1, result2);
module.exports = isPalindrome;
