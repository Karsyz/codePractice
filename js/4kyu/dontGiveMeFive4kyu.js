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

// use math

function dontGiveMeFive(start, end) {
    
    // sanatize input to positive only
    // arrays must be numbers only and not strings


    // count range start
    let arrStart = start.toString().split('').reverse()
    
    // count range end
    let arrEnd = end.toString().split('').reverse()
    
    // let arrNum = arr.map(e=> e * 1)

    let startCount = 0
    let endCount = 0
    
    // function that counts first up to 100
    function countFirst100 (arr) {
        let counting = 0
        for (h = 0; h < [arr[1],arr[0]].join('') * 1; h++) {
            if ( h.toString().search(/5/g) !== -1) {
                counting++
            }
        }
        return counting
    }

    // returns qty of five's per digit place
    // 100 (2) returns 19 for, 1000 (3) returns 271, etc
    function qtyMulti(num) {
        let qty = 19
        for (j = 2; j < num; j++) {
            qty = 9 * qty + Math.pow(10, j) 
        }
        return qty
    }
    
    //count occurances per place 100s+
    function count(arr) {
        let counting = 0
        for (i = 2; i < arr.length; i++) {
            counting += arr[i] * qtyMulti(i) 
            
            // add multiplier if arrNum[i] is greater than 5
            if (arr[i] > 5) {
                counting += Math.pow(10, i-1)
            }
            
            // add multiplier and minus qtyMulti(i) if arrNum[i] is equal to 5 
            if (arr[i] == 5) {
                counting += Math.pow(10, i-1)
                counting -= qtyMulti(i)
            }
            
        }
        return counting
    }
    
    // start count
    startCount = countFirst100(arrStart) + count(arrStart) 
    console.log(startCount)

    // end count
    endCount = countFirst100(arrEnd) + count(arrEnd) 
    console.log(endCount)

    // return
    // if count start positive, minus from end
    // if count start negative, add to end
    if (startCount > 0) {
        return (end - endCount) - (start - startCount)
    }else {
        return (end - endCount) + (start - startCount)
    }

}


// 0-216
//    ( 2 * ( (1 * 9) + 10) ) + ( 1 * 1 ) + (1)

// i
// 0 >= 5 = (1) 
// 1 1x 1 * 1 (1)  
// 2 1xx 9 * 1 + 10 (19)
// 3 1xxx 9 * 19 + 100 (271)
// 4 1xxxx 9 * 271 + 1000 (3439)
// 5 4xxxxx 9 * 3439 + 10000 (21439)



// console.log(dontGiveMeFive(1, 10))  // 1
// console.log(dontGiveMeFive(1, 100)) // 19

// console.log(dontGiveMeFive(0, 1000)) // 271
// console.log(dontGiveMeFive(1, 10000)) // 2194
// console.log(dontGiveMeFive(1, 100000))
// console.log(dontGiveMeFive(1, 1000000))

// console.log(dontGiveMeFive(-17, 9))  // 24
// console.log(dontGiveMeFive(1, 9))  // 8
// console.log(dontGiveMeFive(4, 17))  // 12
// console.log(dontGiveMeFive(-17, -4))  // 12

console.log(dontGiveMeFive(984, 4304)) // 2449
// console.log(dontGiveMeFive(2313, 2317)) // 4
// console.log(dontGiveMeFive(-4045, 2575)) // 4819
// console.log(dontGiveMeFive(-4436, -1429)) // 2194

// console.log(dontGiveMeFive(0, 1)) // 2
// console.log(dontGiveMeFive(5, 15)) // 9
// console.log(dontGiveMeFive(-5, 4)) // 9
// console.log(dontGiveMeFive(51, 60)) // 1

// console.log(dontGiveMeFive(40076, 215151422963990)) // 49707598394353
// console.log(dontGiveMeFive(-206981731, 223575697903165)) // 51841599744277
// console.log(dontGiveMeFive(-249022878360451, -249022878219653)) // 79380    
// console.log(dontGiveMeFive(-90000000000000, 900000000000000)) // 203349266266321


