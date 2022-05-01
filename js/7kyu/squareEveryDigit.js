// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // convert num to a string
    let newNums = ""
    let numString = num.toString()
    // convert each index to a number, square the number, convert back to string, add to end
    for (i = 0; i < numString.length; i++) {
        newNums = newNums + Math.pow(numString[i],2).toString()
    }
    return newNums * 1
}

