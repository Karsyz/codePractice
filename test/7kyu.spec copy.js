const assert = require('assert')
const { expect } = require('chai')

const { listFiltering } = require('../js/7kyu/listFiltering')

describe("A function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.", () => {
  it(`Input [1,2,"a","b"] should deeply equal [1,2]`, () => {
    assert.deepEqual( listFiltering( [1,2,'a','b'] ), [1,2] );
  });
});


const { sortByLength } = require('../js/7kyu/sortArraybyStringLength')

describe("Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.",function(){

  it("Test 1",function(){
    assert.deepEqual(sortByLength(["Dog", "Food", "A", "Of"]),["A", "Of", "Dog", "Food"]);
  });
  it("Test 2",function(){
    assert.deepEqual(sortByLength(["", "Dictionary", "Eloquent", "Bees"]),["", "Bees", "Eloquent", "Dictionary"]);
  });
  it("Test 3",function(){
    assert.deepEqual(sortByLength(["A longer sentence", "The longest sentence", "A short sentence"]),["A short sentence", "A longer sentence", "The longest sentence"]);
  });
});


const { getEvenNumbers} = require('../js/7kyu/jsArrayFilter')

describe("Write a function that takes an array of numbers and removes all odd numbers.", function(){

  it("Test 1",function(){
    assert.deepEqual( getEvenNumbers([2,3,4,5,6,7,8]),[2,4,6,8]);
  });
});