const eqArrays = require('./eqArrays')


//will take two arrays and console.log appropriate message to console.

const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
  }
};

module.exports = assertArrayEqual

