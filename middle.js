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

module.exports = middle



