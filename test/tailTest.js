const assert = require('chai').assert.deepEqual

const tail = require('../tail')



describe('#tail',()=>{
  it('returns 3 for [1,2,3]',()=>{
    assert(tail([1,2,3]),[2,3])
  })
  
  })