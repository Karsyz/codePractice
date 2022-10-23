// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr) {
  // filter indexOf of each array element with the lastIndexOf of each array element
  // sum filtered
  return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n) ).reduce((a,c)=> a + c, 0)
}

// console.log( repeats([4, 5, 7, 5, 4, 8]), 15 )
// console.log( repeats([9, 10, 19, 13, 19, 13]),19 )
// console.log( repeats([16, 0, 11, 4, 8, 16, 0, 11]),12 )
// console.log( repeats([5, 17, 18, 11, 13, 18, 11, 13]),22 )
// console.log( repeats([5, 10, 19, 13, 10, 13]),24  )

module.exports = {
  repeats,
};