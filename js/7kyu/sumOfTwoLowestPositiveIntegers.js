// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(nums) {  
    
    // make new array that can be modified
    let numbers = nums
    
    // get the lowest integer in array
    let lowest = Math.min(...numbers)
    
    // remove lowest from array
    numbers.splice(numbers.indexOf(lowest),1) 
    
    // get the lowest integer in array again
    let secondLowest = Math.min(...numbers)
    
    // reutrn sum of the two lowest
    return lowest + secondLowest
     
  }


//  The best practice / clever solution from codewars
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b) => a - b);
//     return numbers[0] + numbers[1];
//   };