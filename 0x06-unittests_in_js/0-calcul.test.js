const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
  it(`sum and round numbers`, function() {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it(`sum and round numbers`, function() {
    assert.strictEqual(calculateNumber(1.4, 2.2), 3);
  });
  it(`sum and round numbers`, function() {
    assert.strictEqual(calculateNumber(1.6, 2.7), 5);
  });
  it(`sum and round numbers`, function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it(`sum and round numbers`, function() {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
  });
  it(`sum and round numbers`, function() {
	  assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });
});
