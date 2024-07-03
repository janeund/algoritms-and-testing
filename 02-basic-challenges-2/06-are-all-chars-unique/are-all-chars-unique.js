// function areAllCharactersUnique(str) {
//  const charCount = {};
//  for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (charCount[char]) {
//     return false
//   }
//   charCount[char] = true;
//  }
//  return true
// }
function areAllCharactersUnique(str) {
 const charCount = new Set();
 for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charCount.has(char)) {
    return false
  }
  charCount.add(char);
 }
 return true
}



const result1 = areAllCharactersUnique('abcdefga');
console.log(result1);
module.exports = areAllCharactersUnique;
