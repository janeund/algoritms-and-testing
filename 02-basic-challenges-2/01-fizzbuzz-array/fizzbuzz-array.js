function fizzBuzzArray(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push('Buzz')
    }
    else {
      arr.push(i)
    }
  }
}

module.exports = fizzBuzzArray;
