const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const compressSentence = sentence => sentence.replace(/ /g,'');

const countLetters = function(sentence) {
  let output = {};
  for (const letters of sentence) {
    output[letters] ? output[letters] ++ : output[letters] = 1;
  }
  return output;
};

// const test1 = (countLetters(compressSentence('lighthouse in the house')));
// const test2 = (countLetters(compressSentence('aabb')));
// console.log(test1);
// console.log(test2);
// assertEqual(test1['l'], 1);
// assertEqual(test1['e'], 3);
// assertEqual(test2['a'], 2);
// assertEqual(test2['b'], 2);

module.exports = countLetters;