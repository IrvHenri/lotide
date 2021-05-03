const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (objectOne, objectTwo) {
  //they must have same number of keys
  let objectOneKeyLength = Object.keys(objectOne).length;
  let objectTwoKeyLength = Object.keys(objectTwo).length;
  let objectOneKeys = Object.keys(objectOne);

  if (objectOneKeyLength !== objectTwoKeyLength) {
    return false;
  }

  for (let key of objectOneKeys) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      return eqArrays(objectOne[key], objectTwo[key]);
    }
    if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }

  // the value for each key must be the same value in the other key
  return true;
};

module.exports = eqObjects;
