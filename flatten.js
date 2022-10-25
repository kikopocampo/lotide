const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr){
  let result = [];
  for (const num of arr){
    if (Array.isArray(num)){
      flatten(num).forEach(num => result.push(num))
    } else result.push(num);

  }
  return result;
};

module.exports = flatten;