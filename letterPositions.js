const lenCheck = function(arr1,arr2) {
  if (!Array.isArray(arr2)) {
    return arr1.length === arr2 ? true : false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  } else return true;
};

const eqArrays = function(arr1,arr2) {
  if (lenCheck(arr1,arr2) === false) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) console.log(`🙆🏻 Assertion Passed: ${arr1} === ${arr2}`);
  else console.log(`🙅🏻 Assertion Failed: ${arr1} !== ${arr2}`);
};

// const compressSentence = sentence => sentence.replace(/ /g,'');
const splitSentence = sentence => sentence.split('');
const letterPositions = function(sentence) {
  const results = {};
  splitSentence(sentence).forEach(function(letter,i) {
    if (letter !== ' ')results[letter] ? results[letter].push(i) : results[letter] = [i];
  });
  return results;
};
let test1 = (letterPositions('lighthouse in the house'));
console.log(test1);
assertArraysEqual(test1.i,[1,11]);
assertArraysEqual(test1.n,[12]);
assertArraysEqual(test1.e,[9,16,22]);
let test2 = (letterPositions('aabb ccdd'));
console.log(test2);
assertArraysEqual(test2.a,[0,1]);
assertArraysEqual(test2.b,[2,3]);
assertArraysEqual(test2.d,[7,8]);
// console.log('light'[0])
// console.log(splitSentence(compressSentence('lighthouse in the house')));
// console.log(lenCheck('light'.split(),'light'.split()))
