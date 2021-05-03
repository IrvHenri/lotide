const eqArrays = require("../eqArrays");
const assertArrayEqual = require("../assertArraysEqual");
const without = require('../without')

const words = ["hello", "world", "lighthouse"];


const result = without(words, ["lighthouse"]);
//Assert without function worked
assertArrayEqual(result, ["hello", "world"]);

// Assert Original array wasn't mutated
assertArrayEqual(words, ["hello", "world", "lighthouse"]);