// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

function expressionMatter(a, b, c) {
    let cals = [
      a + b + c,
      a * b * c,
      a * b + c,
      a + b * c,
      (a + b) * c,
      a * (b + c),
      (a * b) + c,
      a + (b * c)
    ]
    return Math.max(...cals)
  }


// test
console.log( expressionMatter(2, 1, 1) === 4 )
console.log( expressionMatter(1, 1, 1) === 3 )
console.log( expressionMatter(1, 2, 3) === 9 )
console.log( expressionMatter(1, 3, 1) === 5 )
console.log( expressionMatter(2, 2, 2) === 8 )
