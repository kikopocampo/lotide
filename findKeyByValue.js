const listKeys = object => Object.keys(object);

const findKeyByValue = function(object,value) {
  let result;
  const keys = listKeys(object);
  for (let key of keys) {
    if (value === object[key]) result = key;
  }
  
  return result;
};

module.exports = findKeyByValue;