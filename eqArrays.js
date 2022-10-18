const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲 Assertion Failed: ${actual} !== ${expected}`);
};

const lenCheck = function(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false;
  } else return true;
};

const eqArrays = function(arr1,arr2){
  if (lenCheck(arr1,arr2) === false) return false;
  for (let i = 0 ; i < arr1.length ; i++){
    if (arr1[i] !== arr2[i]) return false;
  };
  return true;
};

assertEqual('Bootcamp', 'Bootcamp');
assertEqual(2,1);
assertEqual(eqArrays([1,4,3],[4,1,3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);