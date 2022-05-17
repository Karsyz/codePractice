// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// make all lowercase and add an underscore at the front of the string to make the first letter index 1
  let str = `_${s.toLowerCase()}`
  console.log(str)
  // declare output variable
  let output = ""
  // make for loop to iterate through the given string
  for (i = 1; i < str.length; i++) {
    // make a new loop that loops the amount of times the same as each index if index is greater than 1
    for (j = 1; j <= i; j++) {
      // capitalize if first letter
      if (j === 1) {
        output += str[i].toUpperCase()
      }else {
        output += str[i]
      }
    }
    // add hyphen between loops
    output += '-'
  }
  //return output and remove last hyphen
  return output.slice(0,output.length-1)
}