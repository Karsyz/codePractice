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



// function dontGiveMeFive(start, end) {
//     let totalCount = 0
    
//     // checks if start number has a 5 digit in it
//     let startNumArr = Array.from(`${start}`)
//     // console.log(startNumArr)
//     for (sn = 0; sn <= startNumArr.length; sn++) {
//         if (startNumArr[sn] == 5) {
//             totalCount++
//             // console.log("added one to total count from start number")
//             break
//         }
//     }
    
//     // get number

//     let theNumber = end - start + 1
//     // console.log(theNumber)

//     // make number array

//     let theNumberArr = Array.from(`${theNumber}`)
//     // console.log(theNumberArr)

//     // how many digits in number

//     let theNumberLength = Array.from(`${theNumber}`).length
//     // console.log(theNumberLength)


//     // find the 5's in a number
//     // count by 1, 10, 100, 1000

//     // 1        5   in  10      (1 + 0)
//     // 19       5's in  100     (9 + 10)
//     // 271      5's in  1000    (19 * 9 + 100)
//     // 3439     5's in  10000   (271 * 9 + 1000)

//     function soManyFives(noOfDigits) {
//         let arr = []
//         for (r = 10; r <= Math.pow(10,noOfDigits); r = r * 10) {
//             // console.log(r)
//             arr.unshift(howManyFives(r))
//         }
//         return arr
//     }
    
//     function howManyFives(x) {
//         let totalFives = 0
//         for (i = 0; i <= x; i++) {
//             // convert i into an array of numbers
//             let numArr = Array.from(`${i}`)
//             for (j = 0; j <= numArr.length; j++) {
//                 if (numArr[j] == 5) {
//                     totalFives++
//                     break
//                 }
//             }
//         }
//         return totalFives
//     }

//     // assign soManyFives to variable
//     let fivesArr = soManyFives(theNumberLength-1)
//     // console.log(fivesArr)


//     // count with array values from soManyFives()

//     for (k = 0; k <= theNumberLength-2; k++) {
//         totalCount += theNumberArr[k] * fivesArr[k]
//         // console.log(theNumberArr[k] * fivesArr[k])
//         // console.log(totalCount)
//     }

//     if (theNumberArr[theNumberLength-1] == 5) {
//         totalCount++
//         // console.log(totalCount)
//     }



//     // console.log(`There are ${totalCount} 5's in the range ${start}-${end}`)

//     return theNumber - totalCount

// }






function dontGiveMeFive(start, end) {
    let count = 0
    let total = end - start
    let totalArr = Array.from(total.toString())
    console.log(totalArr)
    // is five count++
    

    // count by 1000s?
    // use algorithm to just count by thousands

    // 45129645 the big total

    // 40000000 40x millions
    // 5000000 5x millions
    // 100000 100x thousands
    // 20000 20x thousands
    // 9000 9x thousands if > 6000 add 1000 for 5000-5999 range
    // 645 

    // 19
    // 271     
    // 3439


    // if (total < 10000) {
        // for(i = 1; i <= total; i++) {
        //     if ( ( i.toString().includes('5') ) ) {
        //         count++
        //     }
        // }
    // }else {
    //     console.log('wtf')
    // }   

    // return count;
}

// console.log(dontGiveMeFive(1, 10))
// console.log(dontGiveMeFive(1, 100))
console.log(dontGiveMeFive(0, 10000))
// console.log(dontGiveMeFive(1, 10000))
// console.log(dontGiveMeFive(1, 100000))
// console.log(dontGiveMeFive(1, 1000000))


// console.log(dontGiveMeFive(-17, 9))
// console.log(dontGiveMeFive(1, 9))
// console.log(dontGiveMeFive(4, 17))
// console.log(dontGiveMeFive(-17, -4))

// console.log(dontGiveMeFive(984, 4304))
// console.log(dontGiveMeFive(2313, 2317))
// console.log(dontGiveMeFive(-4045, 2575))
// console.log(dontGiveMeFive(-4436, -1429))

// console.log(dontGiveMeFive(0, 1))
// console.log(dontGiveMeFive(5, 15))
// console.log(dontGiveMeFive(-5, 4))
// console.log(dontGiveMeFive(51, 60))


// console.log(dontGiveMeFive(40076, 215151422963990))
// console.log(dontGiveMeFive(-206981731, 223575697903165))
// console.log(dontGiveMeFive(-249022878360451, -249022878219653))
// console.log(dontGiveMeFive(-90000000000000, 900000000000000))