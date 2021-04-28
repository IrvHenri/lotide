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

letterPositions("Hello");
assertArrayEqual(letterPositions('Hello').e, [1]);
