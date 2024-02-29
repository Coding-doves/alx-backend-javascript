const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("SUM", 1, 2), 3);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("SUM", 1.4, 2.2), -1);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("SUBTRACT", 4.9, 2.7), 2);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("DIVIDE", 1.7, 0), "Error");
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.6), 0.2);
  });
});
