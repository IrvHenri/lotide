
/*
Will recieve a string.
Will iterate through each letter
whichW will return all the indices (zero-based positions) in the string where each character is found.
Result Will be an object with key the letter and their indices of occurance
*/

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  //turn string into an array
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
module.exports = letterPositions

