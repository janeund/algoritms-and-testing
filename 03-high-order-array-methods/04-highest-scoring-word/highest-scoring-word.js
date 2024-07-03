function highestScoringWord(str) {
  const words = str.split(' ');
  const scores = words.map(word => {
    return Array.from(word).reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
  });
  let highestScore = Math.max(...scores);
  let highestIndex = scores.indexOf(highestScore);
 
  return words[highestIndex];
}

const result = highestScoringWord('Hello my name is xavier');

console.log(result);
module.exports = highestScoringWord;
