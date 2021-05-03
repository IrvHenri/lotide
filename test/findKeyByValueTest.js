const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("should return comedy", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };

    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
      "comedy"
    );
  });
  it("should return drama", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };

    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "The Wire"),
      "drama"
    );
  });
  it("should return undefined", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };

    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});

