const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {

  it('returns true for ([1, 2, 3], [1, 2, 3])', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns true for ([1, 2, [[1, 2, 3, 9], 3]], [1, 2, [[1, 2, 3, 9], 3]])', () => {
    assert.isTrue(eqArrays([1, 2, [[1, 2, 3, 9], 3]], [1, 2, [[1, 2, 3, 9], 3]]));
  });

  it('returns true for ([1, "a", 3], [1, "a", 3])', () => {
    assert.isTrue(eqArrays([1, "a", 3], [1, "a", 3]));
  });

});
// assertEqual('Bootcamp', 'Bootcamp');
// assertEqual(eqArrays([1,4,3],[4,1,3]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, [[1, 2, 3, 9], 3]], [1, 2, [[1, 2, 3, 9], 3]]), true);
// assertEqual(eqArrays([1, 'a', 3], [1, 'a', 3]), true);
