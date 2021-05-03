const eqArrays = require("../eqArrays");
const assertArrayEqual = require("../assertArraysEqual");
const without = require('../without')

// const words = ["hello", "world", "lighthouse"];
const words1 = ["hello", "world", "lighthouse",'Irving'];
const result1 = without(words1, ["lighthouse",'Irving']);

assertArrayEqual(result1, ["hello", "world"]);

// // Assert Original array wasn't mutated
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);