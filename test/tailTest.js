const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// TEST CODES:

const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words);

assertEqual(words.length, 3);
assertEqual(output.length, 2);
assertEqual(output[0], "Lighthouse");
assertEqual(output[1], "Labs");