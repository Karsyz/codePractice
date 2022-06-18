// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.



function incrementString (strng) {
  
    // qualify input... if strng is empty return 1
    if (strng === "") {
      return "1"
    }
    
    // qualify input... if strng has no numbers return strng + "1"
    if (strng.search(/[0-9]/) === -1) {
      return `${strng}1`
    }
    
    // get string from strng with regex search
    let string = strng.slice( strng.search(/[a-z]/), strng.search(/[0-9]/) )
      
    // get number from strng with regex search else 0
    let nums = strng.slice( strng.search(/[0-9]/) )
      
    // convert to number and add one  
    let newNums = nums * 1 + 1
    
    // convert back to string add padding
    let newNumsWithPadding = newNums.toString().padStart(nums.length, "0")
    
    return `${string}${newNumsWithPadding}`
  
  }

console.log( incrementString("foobar000") )  // "foobar001"
console.log( incrementString("foobar999") )  // "foobar1000"
console.log( incrementString("foobar00999") )  // "foobar01000"
console.log( incrementString("foo") )  // "foo1"
console.log( incrementString("foobar001") )  // "foobar002"
console.log( incrementString("foobar1") )  // "foobar2"
console.log( incrementString("1") )  // "2"
console.log( incrementString("009") )  // "010"