
// takins in an object AND a value
//iterate through object and RETURN FIRST key which contains given value.
// IF no value is found. RETURN undefined

const findKeyByValue = function (obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue


