//Create a function flatten which will take in an array containing elements including nested arrays of elements
//and return a "flattened" version of the array.
//As you loop through the outer array, each element could either be an array or not
const flatten = function (arr) {
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

module.exports = flatten;
