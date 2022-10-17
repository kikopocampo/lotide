const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const tail = arr => arr.slice(1);


const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words);

assertEqual(words.length, 3);// to make sure the original array wasn't modified.
assertEqual(output.length, 2);
assertEqual(output[0], "Lighthouse");
assertEqual(output[1], "Labs");