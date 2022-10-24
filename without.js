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
// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that 
// are not present in the itemsToRemove array.

const without = function(initArr,remArr){
  const results =[];
  
  for(const item of initArr){
    if(!remArr.includes(item)){
    results.push(item);
    }
   
  }

  return results;
};

// const words = ["hello", "world", "lighthouse"];
// console.log(without([1,2,1,3,3,3,1,3,1,3,1] , [3,1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(['apple','banana','melon','banana'],['kiwi','banana']));
// console.log(without(words, ["lighthouse"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;