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

module.exports = eqObjects;