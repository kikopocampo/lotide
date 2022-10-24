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

const flatten = function(arr){
  let result = [];
  for (const num of arr){
    if (Array.isArray(num)){
      for (const n of num){
        result.push(n);
      }
    } else result.push(num);

    // console.log(num);
  }
  return result;
};
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([[1, 2], [3, 4], 5, [6, 7]]));
// console.log(flatten([1, [2], [3, 4, 5], [6]]));
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6])

module.exports = flatten;