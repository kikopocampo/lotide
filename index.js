const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const min = require('./min');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head : head,
  tail : tail,
  middle : middle,
  without : without,
  takeUntil : takeUntil,
  min : min,
  map : map,
  letterPositions : letterPositions,
  flatten : flatten,
  findKeyByValue : findKeyByValue,
  findKey : findKey,
  eqObjects : eqObjects,
  eqArrays : eqArrays,
  countOnly : countOnly,
  countLetters : countLetters,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  assertObjectsEqual : assertObjectsEqual,
};