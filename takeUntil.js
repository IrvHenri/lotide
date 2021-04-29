// TESTING

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
const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
  }
};

// TAKE UNTIL FUNCTION

/*
It will take in two parameters:
The array to work with
The callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
*/

const takeUntil = function(array, callback) {
  // ...
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = array.slice(0, i);
    }
  }

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArrayEqual(results1, [1, 2, 5, 7, 2]);
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);
