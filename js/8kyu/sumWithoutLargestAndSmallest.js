// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


function sumArray(array) {
  
    // input validation
    if ( array === null || array === undefined || array === [ ] || array.length === 1 || array.length === 2 ) {
      return 0
    }else {
      
      // remove largest 
      array.splice( array.findIndex(e => e === Math.max(...array)), 1)
      
      // remove smallest 
      array.splice( array.findIndex(e => e === Math.min(...array)), 1)
      
      // sum
      return array.reduce( (a,c) => a + c, 0)
    
    }
  }


console.log( sumArray( [6, 2, 1, 8, 10] ) ) //16
console.log( sumArray( [1, 1, 11, 2, 3] ) ) //6