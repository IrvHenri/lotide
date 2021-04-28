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

//will take two arrays and console.log appropriate message to console.

const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
  }
};

//Create a function flatten which will take in an array containing elements including nested arrays of elements
//and return a "flattened" version of the array.
//As you loop through the outer array, each element could either be an array or not
const flatten = function(arr) {
  let output = [];
  for (let val of arr) {
    if (!Array.isArray(val)) {
      output.push(val);
    } else {
      for (let i of val) {
        output.push(i);
      }
    }
  }

  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]],[1, 2, [3, 4], 5, [6]]));