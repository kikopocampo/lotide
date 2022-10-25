const assertEqual = require('./assertEqual')

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

module.exports = countOnly;
