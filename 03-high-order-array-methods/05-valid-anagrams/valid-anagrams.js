function validAnagrams(str1, str2) {
  let letters1 = [...str1];
  let letters2 = [...str2];

  let obj1 = letters1.reduce((total, letter) => total + letter, {})
  return obj1
}


const result = validAnagrams('app', 'ppa');

console.log(result);
module.exports = validAnagrams;
