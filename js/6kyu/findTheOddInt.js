// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).





function findOdd(arr) {
    // returns the integer from an array that occurs an odd amount of times

    //get it sorted low to high
    arr.sort( (a,b) => a-b)
    
    // d'eclair some variables
    let singleNum = 0
    let count = 0

    // if there's only one number in the array
    if (arr.length == 1) {
        return arr[0] 
    }else {

    //count occurances
        for(i = 0; i < arr.length; i++) {
            // gimmie-da-loop gimmie-da-loop
            for(j = 0; j < arr.length; j++) {
                // increment count var when numbers are equal
                if ( arr[j] === arr[i] ) {
                    count ++
                }
            }
            // if there's only one number, put number into memory
            if (count === 1) {
                singleNum = arr[i]
                count = 0
            // return the number if the count is equal to or larger than 3 and an odd number
            }else if (count % 2 !== 0 && count >= 3 ) {
                return arr[i]
            // else make count 0 to start the process over again
            }else {
                count = 0
            }
        }          
    // if no odd quantity is found, return the single number from memory
    return singleNum
    }
}

  console.log( findOdd( [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] ) )  // 5
  console.log( findOdd( [1,1,2,-2,5,2,4,4,-1,-2,5], ) )  // -1
  console.log( findOdd( [20,1,1,2,2,3,3,5,5,4,20,4,5] ) )  // 5
  console.log( findOdd( [10] ) ) // 10
  console.log( findOdd( [1,1,1,1,1,1,10,1,1,1,1], ) ) // 10
  console.log( findOdd( [5,4,3,2,1,5,4,3,2,10,10] ) )  // 1




// simple one liner
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);