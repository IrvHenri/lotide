const assert = require('chai').assert.deepEqual
const middle = require('../middle')

describe('#middle',()=>{
  it('should return []',()=>{
    assert(middle([1]), [])
  }),
  it('should return []',()=>{
    assert(middle([1, 2]), [])
  }),
  it('should return [2]',()=>{
    assert(middle([1, 2, 3]), [2])
  }),
  it('should return [2, 3]',()=>{
    assert(middle([1, 2, 3, 4]), [2, 3])
  })
})

