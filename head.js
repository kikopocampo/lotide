//Asserts that the first index "head" of two arrays are equal.
const assertEqual = require('./assertEqual')

const head = arr => {
  if (arr.length === 0) return "";
  return arr[0];
};
console.log(head([]))
module.exports = head;