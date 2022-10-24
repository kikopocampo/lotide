const assertEqual = require('./assertEqual.js')

const lenCheck = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } return true;
};

const eqArrays = function(arr1,arr2) {
  if (lenCheck(arr1,arr2) === false) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i],arr2[i])) return false;
    }
    if (!Array.isArray(arr1[i])) {
      if (arr1[i] !== arr2[i]) return false;
    }
  }
  return true;
};

module.exports = eqArrays;