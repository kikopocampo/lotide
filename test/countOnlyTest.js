const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

describe('#countOnly', () => {
  it("returns {Fang: 2, Jason: 1} for firstNames, {'Jason':true,'Karima':true,'Fang':true,'Agouhanna':false}", () => {
    const result1 = countOnly(firstNames, {'Jason':true,'Karima':true,'Fang':true,'Agouhanna':false});
    assert.deepEqual(result1,{Fang: 2, Jason: 1})
  });

  it("returns {Agouhanna: 1, Salima: 2} for firstNames, {'Salima':true, 'Agouhanna':true}", () => {
    const result2 = countOnly(firstNames, {'Agouhanna':true, 'Salima':true});
    assert.deepEqual(result2,{Agouhanna: 1, Salima: 2})
  });


})