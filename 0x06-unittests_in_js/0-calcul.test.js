const assert = require("assert");
const calculateNumber = require("./0-calcul");
const {it, describe} = require("mocha");

describe('calculateNumber()', () => {
  it('return the sum of whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 2) ,3);
  });
  it('return the sum of whole negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -2) ,-3);
  });
  it('return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6) ,4);
  });
  it('return the sum of negative and positive rounded numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.6) ,1);
  });
  it('return the sum of zeros', () => {
    assert.strictEqual(calculateNumber(0, 0) ,0);
  });
  it('return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6) ,-4);
  });
  it('return the sum of whole and rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.6) ,5);
  });
});
