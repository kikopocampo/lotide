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
  if (listKeys(object1).length !== listKeys(object2).length) return false;
  for (const key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      if (!eqObjects(object1[key],object2[key])) return false;
    }
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key],object2[key]) === false) return false;
    }
    if (typeof object1[key] !== 'object') {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};


//TESTS:
const cd = { c: "2", d: ["2", 3] };
const dc = { d: ["2", 3], c: "2" };
const ab = { a: "1", b: "2" , c: "3"};
const ba = { c: "3", a: "1" , b: "2"};
const cd1 = { c: "1", d: ["2", 3, 4] , a: {a: 0, b: 0}};
const cd2 = { c: "1", a: {a: 0, b: 0}, d: ["2", 3, 4] };
const test1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
const test2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
const test3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
console.log(eqObjects(ab,ba));
console.log(eqObjects(cd,dc));
console.log(eqObjects(cd1,cd2));
console.log(test1);
console.log(test2);
console.log(test3);