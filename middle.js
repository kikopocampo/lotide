const lenCheck = function(arr1,arr2) {
  if (!Array.isArray(arr2)){
    return arr1.length === arr2? true : false;
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

const middle = function(arr) {
  if (lenCheck(arr,1) || lenCheck(arr,2)) return [];
  let midLength = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? [arr[midLength-1],arr[midLength]] : [arr[midLength]];
};
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5])); 
console.log(middle([1]));
console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])