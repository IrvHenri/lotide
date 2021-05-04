
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
module.exports = takeUntil


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

console.log(results2)

