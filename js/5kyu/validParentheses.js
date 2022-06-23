// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100



function validParentheses(parens) {
  let leftCount = 0
  let rightCount = 0
  
  // if first or last wrong direction
  if (parens[0] === ")" || parens[parens.length-1] === "(" ) {
   return false 
  }
 
  for ( i = 0; i < parens.length; i++ ) {
    // check left is applied before right
    if ( leftCount === rightCount && parens[i] === ')' ) {
      return false
    }
    // increment each
    if ( parens[i] === "(" ) {
      leftCount++ 
    } 
    if ( parens[i] === ")" ) {
      rightCount++ 
    } 
  }
  
  // check if left and right are equal
  if ( leftCount === rightCount) {
    return true
  }else {
    return false
  }
  
}




// ***tests***tests***tests***tests***tests***tests***tests***

console.log( validParentheses("()()((()") === false)
console.log( validParentheses("()")  === true)
console.log( validParentheses("()()")  === true)
console.log( validParentheses("(())")  === true)
console.log( validParentheses(")")  === false)
console.log( validParentheses("")  === true)
console.log( validParentheses("())")  === false)
console.log( validParentheses("((((()))))")  === true)
console.log( validParentheses("()))")  === false)
console.log( validParentheses("()()()())")  === false)
console.log( validParentheses("(()()()())(())")  === true)
console.log( validParentheses("((((((((")  === false)
console.log( validParentheses("(())((()((()))))")  === true)
console.log( validParentheses("())(") === false);
console.log( validParentheses(")()()()(") === false);
console.log( validParentheses("(()()))(")  === false)
console.log( validParentheses(")()(")  === false)
console.log( validParentheses("())(()")  === false)
console.log( validParentheses("())(()")  === false)

