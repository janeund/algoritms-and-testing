function generateHashtag(str) {
  let words = str.split(' ');
  if (str.trim() === '' || str.length > 140) {
    return false 
  } else {
    return '#' + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') 
  }
  
}


const result = generateHashtag(' ');

console.log(result);
module.exports = generateHashtag;
