const eqArrays = require("../eqArrays");
const assertArrayEqual = require("../assertArraysEqual");
const map = require("../map");



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.toUpperCase());
const results3 = map(words, (word) => (word = 1));

assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);
assertArrayEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArrayEqual(results3, [1, 1, 1, 1, 1]);
