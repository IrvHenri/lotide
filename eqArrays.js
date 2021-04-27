const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create function that takes two arrays
const eqArrays = function (arrOne, arrTwo) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
