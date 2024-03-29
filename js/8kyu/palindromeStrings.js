// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false



function isPalindrome(line) {
    const string = line.toString()
    return ( string === string.split('').reverse().join('') )
}




console.log( isPalindrome('anna') === true)  // true
console.log( isPalindrome('walter') === false)  // true
console.log( isPalindrome(12321) === true)  // true
console.log( isPalindrome(123456) === false)  // true