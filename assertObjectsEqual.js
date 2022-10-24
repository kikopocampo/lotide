const lenCheck = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else return true;
};

const eqArrays = function(arr1,arr2) {
  if (lenCheck(arr1,arr2) === false) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const listKeys = object => Object.keys(object);

const eqObjects = function(object1, object2) {
  let counter = 0;
  if (listKeys(object1).length !== listKeys(object2).length) return false;
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key],object2[key]) ? counter += 1 : counter += 0;
    }
    if (object1[key] === object2[key]) {
      counter += 1;
    }
  }
  if (counter === listKeys(object1).length) return true;
  else return false;
};

const assertObjectsEqual = function(obj1,obj2) {
  const inspect = require('util').inspect;
  eqObjects(obj1,obj2) ?
    console.log(`🤗 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`) :
    console.log(`🫣 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

// const ab = { a: "1", b: "2" , c: "3"};
// const ba = { c: "3", a: "1" , b: "2"};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(ab,ba));
// console.log(eqObjects(cd,dc));
// assertObjectsEqual(cd,dc);
// assertObjectsEqual(ba,dc);
// assertObjectsEqual(ba,ab);

module.exports = assertObjectsEqual;
