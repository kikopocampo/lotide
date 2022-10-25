//Evaluates two arrays if equal.
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i],arr2[i])) return false;
    }
    if (!Array.isArray(arr1[i])){
      if (arr1[i] !== arr2[i]) return false;
    }
   
  }
  return true;
};

console.log(eqArrays([1, 2, 3, [3,4]], [1, 2, 3, [3,4]]))

module.exports = eqArrays;