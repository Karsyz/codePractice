// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



// more readable?
// function squareSum(numbers) {
//     sum = 0
//     for (i = 0; i < numbers.length; i++) {
//         sum = sum + (numbers[i] * numbers[i])
//     }
//     return sum
// }


function squareSum(numbers) {
    return numbers.reduce((sum,num) => sum + (num*num), 0)
}

function runSquareSum() {
    let prmpt = prompt("Enter an array of numbers eg. 1,2,3,4").split(',')
    alert(squareSum(prmpt))
} 

let squareNSum = ["Square and Sum", 

                        "// Complete the square sum function so that it squares each number passed into it and then sums the results together.<br><br>// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.",

                        "function squareSum(numbers) {<br>     return numbers.reduce((sum,num) => sum + (num*num), 0)<br>}", 

                        "runSquareSum()"]

challengeData.push(squareNSum)
