const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// should receive a string input
// return a count of each of the letters in that sentence.
let string = "Irving";
let string2 = "Hello World";

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

let output = countLetters(string);
let output2 = countLetters(string2);

assertEqual(output["i"], 2);
assertEqual(output2["l"], 3);
