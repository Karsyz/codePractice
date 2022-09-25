// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.



function getLengthOfMissingArray(arrs) {

    //   check if array is undefined or zero
      if (arrs === undefined || arrs === null || arrs.length === 0 ) {
        return 0
      }
      
      // check if arrays in arrs are undefined empty or null
      for (let p = 0; p < arrs.length; p++) {
        if (arrs[p] === undefined || arrs[p] === null || arrs[p].length === 0) {
          return 0
        }
      }  
      
      // convert arrays in arrs to lengths and sort low to high
      const arrsL = arrs
        .map( e => e.length)
        .sort( (a,b) => a - b)
      
      
      // detect missing number
      for (let i = 1; i < arrsL.length; i++) {
        if ( arrsL[i] > arrsL[i-1] + 1 ) {
          return arrsL[i] - 1 
        }
      }
    }




    const chai = require("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;
    
    describe("FixedTests", function(){
      it("Should pass fixed tests", function(){
        assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
        assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
        assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
        assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
      });    
          
      it("Should pass fixed tests not starting with length 1", function(){    
        assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1, 5, 6], [ 1, 1 ], [ 5, 6, 7, 8, 9 ]] ), 4);
      });
      
      it("Should pass edge cases", function(){    
        assert.strictEqual(getLengthOfMissingArray([ ]), 0);
        assert.strictEqual(getLengthOfMissingArray(null), 0);
        
        assert.strictEqual(getLengthOfMissingArray([ [ ], [ 1, 2, 2 ] ] ), 0);
        assert.strictEqual(getLengthOfMissingArray([ [ 1, 2, 2 ], null] ), 0);
        assert.strictEqual(getLengthOfMissingArray([ null, [ 1, 2, 2 ] ] ), 0);
        assert.strictEqual(getLengthOfMissingArray([ [ 1, 2, 2 ], [ ]] ), 0);    
      });
    });  