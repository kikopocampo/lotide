const tail = require('../tail.js');
const assert = require('chai').assert;


describe("#tail", () => {

  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("returns ['house','labs'] for ['light','house','labs']", () => {
    assert.deepEqual(tail(['light','house','labs']),['house','labs']);
  });
  it("returns [3] for [2,3]", () => {
    assert.deepEqual(tail([2,3]),[3]);
  });
  it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]);
  });
  it("returns arr.length - 1 for any length of the array", () => {
    const length = tail([1,2,3,4,5]).length; //5
    assert.strictEqual(length, 4);
  });
  
});
