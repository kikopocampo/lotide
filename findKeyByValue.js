const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  cartoon: "The Simpsons",
  sitCom: "Schitt's Creek",
};

const listKeys = object => Object.keys(object);

const findKeyByValue = function(object,value) {
  let result;
  const keys = listKeys(object);
  for (let key of keys) {
    // console.log('key:',object[key],'value',value);
    if (value === object[key]) result = key;
  }
  
  return result;
};

// console.log(listKeys(bestTVShowsByGenre));
// console.log('sci_fi' === listKeys(bestTVShowsByGenre)[0]);
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Power Rangers"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Schitt's Creek"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;