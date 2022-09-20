const assert = require('assert')
const { expect } = require('chai')

const { listFiltering } = require('../js/7kyu/listFiltering')

describe("A function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.", () => {
  it(`Input [1,2,"a","b"] should deeply equal [1,2]`, () => {
    assert.deepEqual( listFiltering( [1,2,'a','b'] ), [1,2] );

    // assert.deepEqual(result).to.be.eq([1,2])
  });
});

