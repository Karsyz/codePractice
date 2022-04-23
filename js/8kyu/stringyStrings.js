// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


function stringy(size) {
    let letters = '1'
    for (i = 1; i < size; i++) {
      if (letters.charAt(letters.length -1) === '1') {
        letters += '0'
      }else {
        letters += '1'  
      } 
    }
    return letters
  }


console.log( stringy(15) === '101010101010101') // 101010101010101