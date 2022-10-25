const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {

  it('return [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])
  });
  it('return [1,2,3,4,5,6,7] for [[1, 2], [3, 4], 5, [6, 7]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])
  });
  it('return [1,2,3,3,2,3,4,4,5] for [1,[2,[3]],3,[[2,3,4],4],5]', () => {
    assert.deepEqual(flatten([1, [2], [3, 4, 5], [6]]), [1,2,3,4,5,6])
  });
  it('return [1] for [[[[[[[[1]]]]]]]]', () => {
    assert.deepEqual(flatten([[[[[[[[1]]]]]]]]), [1])
  });

});