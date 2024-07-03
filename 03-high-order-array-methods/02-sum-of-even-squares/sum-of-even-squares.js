function sumOfEvenSquares(numbers) {
  return numbers.filter(num => num % 2 === 0).map(num => num * num).reduce((num, acc) => num + acc, 0)
}

module.exports = sumOfEvenSquares;
