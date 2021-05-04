const assert = require("chai").assert.deepEqual;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true  ", () => {
    const ab = [1, 2, 3];
    const ba = [1, 2, 3];
    let result = eqArrays(ab, ba);
    assert(result, true);
  });
  it("should return false  ", () => {
    const ab = [1, 2, [3, 4], 5];
    const ba = [1, 2, [3, 4, 5]];
    let result = eqArrays(ab, ba);
    assert(result, false);
  });
});
