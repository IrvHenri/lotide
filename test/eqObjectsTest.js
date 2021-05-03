const assert = require("chai").assert.deepEqual;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true  ", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    let result = eqObjects(ab, ba);
    assert(result, true);
  });
  it("should return false  ", () => {
    const cd = { c: "1", d: ["2", 3] };

    const dc = { d: ["2", 3, 4], c: "1" };
    let result = eqObjects(cd, dc);
    assert(result, false);
  });
});
