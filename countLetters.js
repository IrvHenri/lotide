// should receive a string input
// return a count of each of the letters in that sentence.
const countLetters = function(string) {
  let lowerCaseString = string.toLowerCase()

  let results = {};

  for (let char of lowerCaseString) {
    if(char !== ' '){
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
    
  }

  return results;
};
module.exports = countLetters

