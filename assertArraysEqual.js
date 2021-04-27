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

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
