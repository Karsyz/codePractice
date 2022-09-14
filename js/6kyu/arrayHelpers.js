// numbers.square();  // must return [1, 4, 9, 16, 25]
Array.prototype.square = function() { 
    return this.map( e => e * e ) 
  }
  
  // numbers.cube();    // must return [1, 8, 27, 64, 125]
  Array.prototype.cube = function() { 
    return this.map( e => e * e * e ) 
  }
                    
  // numbers.average(); // must return 3
  Array.prototype.average = function() { 
    return this.reduce( (a, c) => a + c, 0) / this.length
  }
                    
  // numbers.sum();     // must return 15
  Array.prototype.sum = function() { 
    return this.reduce( (a, c) => a + c, 0) 
  }
  
  // numbers.even();    // must return [2, 4]
  Array.prototype.even = function() { 
    return this.filter( e => e % 2 === 0 )
  }
  
  // numbers.odd();     // must return [1, 3, 5]
  Array.prototype.odd = function() { 
    return this.filter( e => e % 2 !== 0 )
  }


  const numbers = [1, 2, 3, 4, 5];
    
  console.log( numbers.square() )
  console.log( numbers.cube() )
  console.log( numbers.average() )
  console.log( numbers.sum() )
  console.log( numbers.even() )
  console.log( numbers.odd() )