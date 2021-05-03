const assert = require('chai').assert.deepEqual
const flatten = require('../flatten')



describe('#flatten',()=>{
  it('should equal [1, 2, 3, 4, 5, 6] ',()=>{
    let result = flatten([1, 2, [3, 4], 5, [6]],[1, 2, [3, 4], 5, [6]])
    assert(result, [1, 2, 3, 4, 5, 6])
  })
})
