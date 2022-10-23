// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(arr) {
  // sum array
  // divide by array length
  // round down
  return Math.floor( arr.reduce((a,c) => a + c, 0) / arr.length )
}

// console.log( getAverage([2,2,2,2]), 2 )
// console.log( getAverage([1,2,3,4,5,]), 3 )
// console.log( getAverage([1,1,1,1,1,1,1,2]), 1 )


module.exports = {
  getAverage,
};