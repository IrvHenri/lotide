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

/// Map Implementation

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);
const results2 = map(words, (word) => word.toUpperCase());
console.log(results2);
const results3 = map(words, (word) => word = 1);
console.log(results3);


assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArrayEqual(results3, [1, 1, 1, 1, 1]);



