const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const lenCheck = function(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false;
  } else return true;
};

const eqArrays = function(arr1,arr2){
  if (lenCheck(arr1,arr2) === false) return false;
  for (let i = 0 ; i < arr1.length ; i++){
    if (arr1[i] !== arr2[i]) return false;
  };
  return true;
};

const listKeys = object => Object.keys(object);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const ab = { a: "1", b: "2" , c: "3"};
const ba = { c: "3", a: "1" , b: "2"};
const cd2 = { c: "1", d: ["2", 3, 4] };

const eqObjects = function(object1, object2){
  let counter = 0;
  if(listKeys(object1).length !== listKeys(object2).length) return false;
  for(const key in object1){
   if (Array.isArray(object1[key])) {
    eqArrays(object1[key],object2[key]) ? counter += 1 : counter += 0;
   }
      if(object1[key]===object2[key]){
      counter += 1;
      }
  }
if(counter === listKeys(object1).length) return true;
else return false;
};
// console.log(eqObjects(cd,dc));
// console.log(listKeys(cd));
console.log(eqObjects(ab,ba));
console.log(eqObjects(cd,dc));
console.log(eqObjects(cd,cd2));