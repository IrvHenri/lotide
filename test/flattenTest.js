const eqArrays = require('../eqArrays')
const assertArrayEqual = require('../assertArraysEqual')
const flatten = require('../flatten')
let result = flatten([1, 2, [3, 4], 5, [6]],[1, 2, [3, 4], 5, [6]])
assertArrayEqual(result,[1, 2, 3, 4, 5, 6]);
