// This kata is the performance version of Don't give me five by user5036852.


// Your mission, should you accept it, is to return the count of all integers in a given range which do not contain the digit 5 (in base 10 representation).


// You are given the start and the end of the integer range. The start and the end are both inclusive.

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
// The result may contain fives. ;-)
// The start will always be smaller than the end. Both numbers can be also negative.

// The regions can be very large and there will be a large number of test cases. So brute force solutions will certainly time out!

// Good luck, warrior!

// https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/train/javascript


// find the 5's in a number

// count by 1, 10, 100, 1000

// 1        5   in  10      (1 + 0)
// 19       5's in  100     (9 + 10)
// 271      5's in  1000    (19 * 9 + 100)
// 3439     5's in  10000   (271 * 9 + 1000)

// find the 5's in a number
// count by 1, 10, 100, 1000



function dontGiveMeFive(start, end) {
    let totalCount = end - start + 1
    // console.log(totalCount)
    for (i = start; i <= end; i++) {
        // convert i into an array of numbers
        let numArr = Array.from(`${i}`)
        // console.log(numArr)
        for (j = 0; j <= numArr.length; j++) {
            if (numArr[j] == 5) {
                totalCount--
                // console.log(numArr[j])
                break
            }
        }
    }
    console.log(totalCount)
    return totalCount

}    


// function calculate(num) {
//     (((Math.pow(10,num.length-1) - (Math.pow(9, num.length-1))) * num[0]) + calculate(num.slice[1])
// }