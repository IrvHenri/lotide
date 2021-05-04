const assert = require("chai").assert;

const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("should return 2", () => {
    let string = "Irving";
    let output = countLetters(string);
    assert.strictEqual(output["i"], 2);
  }),
    it("should return 3", () => {
      let string2 = "Hello World";
      let output2 = countLetters(string2);
      assert.strictEqual(output2["l"], 3);
    });
});
