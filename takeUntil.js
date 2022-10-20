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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["a", "b", "c", "d", "e", "f"];

const takeUntil = function(array, callback){
  const result = [];
  for (let element of array){
    if (!callback(element)) result.push(element);
    else return result;
  }
  
};

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const results3 = takeUntil(data3, x => x === 'e');
console.log(results3);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])
assertArraysEqual(results3,[ 'a', 'b', 'c', 'd' ])