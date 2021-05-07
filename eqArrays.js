const assertEqual = require("./assertEqual");

const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  let result = true;
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      result = eqArrays(arrOne[i], arrTwo[i]);
    } else if (arrOne[i] !== arrTwo[i]) {
      result = false;
    }
  }
  return result;
};

module.exports = eqArrays;

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
