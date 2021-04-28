const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
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

/// Test Cases - Primitives as Values

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

/// Test Cases - Arrays as Values

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

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

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd2), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, abc), false);
