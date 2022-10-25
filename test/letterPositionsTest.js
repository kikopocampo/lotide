const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it('return {a:0} for "a" ', () => {
    assert.deepEqual(letterPositions('a'), {a:[0]})
  });

  it('return {a:[0],p:[1,2],l:[3],e:[4]} for "apple" ', () => {
    assert.deepEqual(letterPositions('apple'), {a:[0],p:[1,2],l:[3],e:[4]});
  });

  it('return {h:[0],o:[1],u:[2],s:[3],e;[4]} for "house" ', () => {
    assert.deepEqual(letterPositions('house'), {h:[0],o:[1],u:[2],s:[3],e:[4]});
  });
})