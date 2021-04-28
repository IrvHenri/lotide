const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      return true;
    }
  }
  return true;
};

const eqObjects = function(objectOne, objectTwo) {
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

// Assert Objects Equal!!!

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

/// Test Cases - Primitives as Values

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc);
assertObjectsEqual(ab, ba);

/// Test Cases - Arrays as Values

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd2, dc);
