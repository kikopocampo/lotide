const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🥲Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!results[item] && itemsToCount[item] === true) results[item] = 1;
    else if (results[item] && itemsToCount[item] === true) results[item] ++;
    // console.log(item)
  }
  return results;
};

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

const result1 = countOnly(firstNames, {'Jason':true,'Karima':true,'Fang':true,'Agouhanna':false});
console.log(result1);
assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
