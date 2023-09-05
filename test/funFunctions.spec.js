const assert = require('assert')

const { addtoo } = require('../js/funFunctions/addToo')

describe("Adds one object to another.  Will overwrite values if keys already exist", () => {
  it(`addToo inputs {a: 1, b: 2}, {c: 3, d: 4} should equal {a: 1, b: 2, c: 3, d: 4}`, () => {
    assert.deepEqual(addtoo({a: 1, b: 2}, {c: 3, d: 4}), {a: 1, b: 2, c: 3, d: 4});
  });
  it(`addToo inputs {a: 'asdf', b: 'asdf'}, {a: 'qwer', b: 4} should equal {a: 'qwer', b: 4}`, () => {
    assert.deepEqual(addtoo({a: 'asdf', b: 'asdf'}, {a: 'qwer', b: 4}), {a: 'qwer', b: 4});
  });
});
