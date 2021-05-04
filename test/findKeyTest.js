const assert = require("chai").assert;
const findKey = require('../findKey')

describe("#findKey", () => {
  it("should equal noma ", () => {
    let result1 = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 2
    );
    assert.strictEqual(result1, "noma");
  }),
    it("should equal Blue Hill ", () => {
      let result2 = findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 1
      );
      assert.strictEqual(result2, "Blue Hill");
    });
});
