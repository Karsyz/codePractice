// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


const arr = (N) => {
    if (N === undefined) {
      return []
      
    }else {
        let theArr = []
        for (i = 0; i < N; i++) {
          theArr.push(i)
        }
      return theArr
    }
  }

// tests
console.log( arr() )
<<<<<<< HEAD

=======
>>>>>>> 49442615fbad4bdb845c700c39d9d4c43d915b64
console.log( arr(5) )

