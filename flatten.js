const eqArrays = function(arrOne, arrTwo) {
  let result;
  //go through each value and compare to other array and strictly compare
  for (let val of arrOne) {
    for (let valTwo of arrTwo) {
      // returns true if there's a perfect match or false if not with strict comparison
      if (val === valTwo) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  // Returns true or false
  return result;
};

//will take two arrays and console.log appropriate message to console.

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
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