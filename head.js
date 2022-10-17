const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(arr) {
  return arr[0];
};

console.log(head([1]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");