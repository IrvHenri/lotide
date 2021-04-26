const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tail = arr.slice(1);
  return tail;
};
let nums = [1, 2, 3];
tail(nums);
assertEqual(nums.length, 3);
