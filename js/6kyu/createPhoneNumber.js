// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let areaCode = '';
    let prefix = '';
    let lineNum = '';
    const areaCodeFun = numbers.slice(0,3).forEach( (item) => (areaCode += item) );
    const prefixFun = numbers.slice(3,6 ).forEach( (item) => prefix += item );
    const lineNumFun = numbers.slice(6,10 ).forEach( (item) => lineNum += item );
    return `(${areaCode}) ${prefix}-${lineNum}`;
}


console.log( createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) )


//best short best practice
// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//  }