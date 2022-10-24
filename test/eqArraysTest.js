const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
assertEqual('Bootcamp', 'Bootcamp');
assertEqual(eqArrays([1,4,3],[4,1,3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, [[1, 2, 3, 9], 3]], [1, 2, [[1, 2, 3, 9], 3]]), true);
assertEqual(eqArrays([1, 'a', 3], [1, 'a', 3]), true);
