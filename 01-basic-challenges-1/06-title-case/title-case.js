function titleCase(string) {
 return string.split(' ').map(el =>  el.slice(1)).join(' ')
}


const result = titleCase('the quick brown fox');

console.log(result);

module.exports = titleCase;
