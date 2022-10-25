const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('returns true for cd and dc', () => {
    const cd = { c: "2", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "2" };
    assert.isTrue(eqObjects(cd,dc))
  });

  it('returns true for ab and ba', () => {
    const ab = { a: "1", b: "2" , c: "3"};
    const ba = { c: "3", a: "1" , b: "2"};
    assert.isTrue(eqObjects(ab,ba))
  });

  it('returns false for cd1 and cd2', () => {
    const cd1 = { c: "1", d: ["2", 3, 4] , a: {a: 0, b: 0}};
    const cd2 = { c: 1, a: {a: 0, b: 0}, d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd1,cd2))
  });


});