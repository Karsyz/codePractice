// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044



function countPositivesSumNegatives(input) {
    let output = []
    
    if (input === [0,0] || input == null || input == 0) {
        return output
      }else {
        
        output = [0,0]
        
        for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          output[0] ++
        }else if (input[i] < 0) {
          output[1] += input[i]
        }
      }
        
    }
    return output ;
  }

  console.log(countPositivesSumNegatives([0,0]))

//   [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]