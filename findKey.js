const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (object,callback) => {
  for (let key of Object.keys(object)) {
    let numStars = (object[key]);
    if (callback(numStars)) return key;
  }
};



const test1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

const test2 = (findKey({
  "Kiko":       { age: 27 },
  "Justin":     { age: 29 },
  "Aya":        { age: 27 },
  "Yves":       { age: 27 },
  "Daischiell": { age: 27 },
  "Denise":     { age: 26 }
}, x => x.age === 26));

assertEqual(test1,'noma');
assertEqual(test2,'Denise');