const { subtract, add, multiply, divide } = require('../math');

var assert = require('assert');
describe('Array', function () {
  it('should add two numbers', function () {
    const actual = add(2, 3);
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('should not add two numbers with invalid x', function () {
    const actual = () => add('asd', 3)
    const expected = Error("Parameter x value 'asd' is not a number.");
    assert.throws(actual, expected);
  });

  it('should not add two numbers with invalid y', function () {
    const actual = () => add(6, 'rgf')
    const expected = Error("Parameter y value 'rgf' is not a number.");
    assert.throws(actual, expected);
  });

  it('should subtract two numbers', function () {
    const actual = subtract(2, 3);
    const expected = -1;
    assert.equal(actual, expected);
  });

  it('should multiply two numbers', function () {
    const actual = multiply(7, 3);
    const expected = 21;
    assert.equal(actual, expected);
  });

  it('should divide two numbers', function () {
    const actual = divide(20, 4);
    const expected = 5;
    assert.equal(actual, expected);
  });
});
