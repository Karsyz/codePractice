//  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.  exmaple: 99 = 18

function sumDigits(num) {
    let numAbs = Math.abs(num)
    let numTxt = `${numAbs}`
    let numSummed = 0
    for (i = 0; i < numTxt.length; i++ ) {
        numSummed = numSummed + Number(numTxt[i])
    }
    return numSummed
}

sumDigits(123)