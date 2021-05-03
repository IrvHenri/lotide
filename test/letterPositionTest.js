
const assertObjectsEqual = require('../assertObjectsEqual')
const letterPositions = require('../letterPositions')

assertObjectsEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })