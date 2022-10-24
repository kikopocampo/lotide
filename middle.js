//Gets the middle element/s of a given array.
const lenCheck = function(arr1,num) {
    return arr1.length === num ? true : false;
};

const middle = function(arr) {
  if (lenCheck(arr,1) || lenCheck(arr,2)) return [];
  let midLength = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? [arr[midLength - 1],arr[midLength]] : [arr[midLength]];
};

module.exports = middle;