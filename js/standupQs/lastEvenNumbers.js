// Given an array of digital numbers, 
// return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.

function lastEvenNums(arr, qty) {
  // for loop
  // let count = 0
  // let nums = []
  // for (let i = arr.length; i >= 0; i--) {
  //   if (arr[i] % 2 === 0) {
  //     nums.unshift(arr[i])
  //     count++
  //     if (count === qty) {
  //       return nums
  //     }
  //   }
  // }
  // console.log(newArr)

  //one liner
  return arr.filter(el => el % 2 === 0).slice(-qty)

}

console.log( lastEvenNums( [1, 2, 3, 4, 5, 6, 7, 8, 9], 3) ) // [4, 6, 8]
console.log( lastEvenNums( [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) ) // [-8, 26]
console.log( lastEvenNums( [6, -25, 3, 7, 5, 5, 7, -3, 23], 1) ) // [6]