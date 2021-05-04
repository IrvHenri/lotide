const assert = require("chai").assert.deepEqual;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("should equal return true", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, (x) => x < 0);
    assert(results1, [1, 2, 5, 7, 2]);
  }),
    it("should return true", () => {
      const data2 = [
        "I've",
        "been",
        "to",
        "Hollywood",
        ",",
        "I've",
        "been",
        "to",
        "Redwood",
      ];
      const results2 = takeUntil(data2, (x) => x === ",");
      assert(results2, ["I've", "been", "to", "Hollywood"]);
    });
});
