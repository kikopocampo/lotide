const splitSentence = sentence => sentence.split('');
const letterPositions = function(sentence) {
  const results = {};
  splitSentence(sentence).forEach(function(letter,i) {
    if (letter !== ' ')results[letter] ? results[letter].push(i) : results[letter] = [i];
  });
  return results;
};

module.exports = letterPositions;
