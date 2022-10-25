const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  cartoon: "The Simpsons",
  sitCom: "Schitt's Creek",
};

describe('#findKeyByValue', () => {

  it('return sci-fi for The Expanse', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sciFi');
  });

  it('return sitCom for Schitt\'s Creek', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Schitt's Creek"), 'sitCom');
  });

  it('return cartoon for The Simpsons', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Simpsons'), 'cartoon');
  });
 

});