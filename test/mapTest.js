const assert = require('chai').assert.deepEqual
const map = require("../map");


describe('#map',()=>{
  it('should equal ["g", "c", "t", "m", "t"] ',()=>{
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, (word) => word[0]);
    assert(results1,["g", "c", "t", "m", "t"])
  }),
  it('should equal ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"] ',()=>{
    const words = ["ground", "control", "to", "major", "tom"];
    const results2 = map(words, (word) => word.toUpperCase());
    assert(results2,["GROUND", "CONTROL", "TO", "MAJOR", "TOM"])
  }),
  it('should equal [1, 1, 1, 1, 1] ',()=>{
    const words = ["ground", "control", "to", "major", "tom"];
    const results3 = map(words, (word) => (word = 1));
    assert(results3,[1, 1, 1, 1, 1])
  })
  
  })
