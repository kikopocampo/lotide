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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,4]);