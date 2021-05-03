const assert = require('chai').assert.deepEqual
const letterPositions = require('../letterPositions')

describe('#letterPositions',()=>{
  it('should equal { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } ',()=>{
    assert(letterPositions('hello'),{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
  })
  
  })
