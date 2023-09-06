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


const { nameOfTheOldest } = require('../js/funFunctions/nameOfTheOldest')

describe("Should return the name of the oldest person", () => {
  const arrayOfPeople = [{name: 'sally', age: 18}, {name: 'henry', age: 21},{name: 'margret', age: 78},{name: 'joe', age: 25},{name: 'april', age: 68}]
  
  it('Should pass', () => {
    assert.deepEqual( nameOfTheOldest(arrayOfPeople), 'margret');
  });

});