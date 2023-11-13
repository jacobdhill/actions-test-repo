const { subtract, add } = require('../math');

var assert = require('assert');
describe('Array', function () {
  it('should add 1 and 3 together to equal 4', function () {
    const actual = add(1, 3);
    const expected = 4;

    assert.equal(actual, expected);
  });

  it('should subtract 2 and 3 together to equal -1', function () {
    const actual = subtract(2, 3);
    const expected = -1;

    assert.equal(actual, expected);
  });
});
