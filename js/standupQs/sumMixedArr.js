// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix (arr) {
  return arr.map(e => e * 1).reduce( (a,c) => a + c, 0)
}

module.exports = {
  sumMix,
};