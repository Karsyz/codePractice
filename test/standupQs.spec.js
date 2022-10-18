const assert = require('assert')

const { sumMix } = require('../js/standupQs/sumMixedArr')

describe("A function that takes in an array of numbers and string-numbers, converts strings to integers and returns the sum of all the integers", () => {
  it(`sumMix Input [9, 3, '7', '3'] should strictly equal 22`, () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
  });
});
