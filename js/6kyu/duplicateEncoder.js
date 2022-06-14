// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    // check if character occurs more than once match
    // tolowercase split for filter join return
    // if more than once
    
    let letters = word.toLowerCase().split('')
    let arr = []
    
    for( i = 0; i < letters.length; i++ ) {
      if ( letters.filter( e => e == letters[i] ).length > 1 ) {
        arr.push(')')
        }else {
          arr.push('(')
        }
    }
    return arr.join('')
  }


  console.log(duplicateEncode("din") ) // (((
  console.log(duplicateEncode("recede") )  // ()()()
  console.log(duplicateEncode("Success") )  // )())())
  console.log(duplicateEncode("(( @") )  // ))((

  // filter is the find-all for arrays
  // match is the find-all for strings