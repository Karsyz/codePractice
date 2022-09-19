const assert = require('assert')
const { expect } = require('chai')

const { printArray } = require('../js/8kyu/arrayelementsCommaDelimiters')

describe("The printArray function should return an combined string delminted with commas", () => {
  it(`Test ["2","4","5","2"] === "2,4,5,2"`, () => {
    const result = printArray( [2,4,5,2] )
    expect(result).to.be.eq("2,4,5,2")
  });
});

const { areYouPlayingBanjo } = require('../js/8kyu/areYouPlayingTheBanjo')

describe(`Are you playing banjo? If your name starts with the letter "R" or "r", you are playing banjo!`, () => {
  it("Adam - Uppercase letter does not", () => {
    const result = areYouPlayingBanjo("Adam")
    expect(result).to.be.eq("Adam does not play banjo")
  });

  it("paul - Lowercase letter does not", () => {
    const result = areYouPlayingBanjo("paul")
    expect(result).to.be.eq("paul does not play banjo")
  });

  it("ringo - Uppercase does", () => {
    const result = areYouPlayingBanjo("Ringo")
    expect(result).to.be.eq("Ringo plays banjo")
  });

  it("rolf - Lowercase does", () => {
    const result = areYouPlayingBanjo("rolf")
    expect(result).to.be.eq("rolf plays banjo")
  });
});

