const lenCheck = function(arr1,arr2) {
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const getFirstLet = word => word[0];
const capitalize = word => word.toUpperCase();


// console.log(map(words,capitalize));
// console.log(map(words,getFirstLet));
// assertArraysEqual(map(words,getFirstLet), ['g','c','t','m','t'])
// assertArraysEqual(map(words,capitalize), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])

module.exports = map;