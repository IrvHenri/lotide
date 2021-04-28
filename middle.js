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

/*  MIDDLE FUNCTION */

const middle = function(arr) {
  let arrLength = arr.length;
  let middleIndex = Math.floor(arrLength / 2);

  if (arrLength < 3) {
    return [];
  }
  if (arrLength % 2 !== 0) {
    return [arr[middleIndex]];
  } else {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
