// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    return Math.min(...s.split(' ').map(e => e.length) )
  
  }

// original function using forEach instead of map
//function findShort(s) {
//     let sArr = s.split(' ')
//     let nums = []
//     sArr.forEach(e => nums.push(e.length))
//     return Math.min(...nums)
//   }