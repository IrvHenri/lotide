const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')


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

module.exports = assertObjectsEqual

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };




