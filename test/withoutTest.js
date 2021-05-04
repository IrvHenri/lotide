const assert = require("chai").assert.deepEqual;
const without = require("../without");


describe("#without", () => {
  it("should return true ", () => {
    const words1 = ["hello", "world", "lighthouse", "Irving"];
    const result1 = without(words1, ["lighthouse", "Irving"]);
    assert(result1, ["hello", "world"]);
  });
});
