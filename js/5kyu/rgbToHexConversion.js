// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b){
  
    // sanatize input
    const sani = (s) => { return s > 255 ? 255 : s < 0 ? 0 : s }
    
    // convert base 10 to base 16
    const convert = (e) => { return e.toString(16).padStart(2,"0").toUpperCase() }
    
    // return rgb through functions
    return `${convert(sani(r))}${convert(sani(g))}${convert(sani(b))}`
  }



  // ***tests***tests***tests***tests***tests***tests***tests***

  console.log( rgb(0, 0, 0) === '000000' )
  console.log( rgb(0, 0, -20) === '000000' )
  console.log( rgb(300,255,255) === 'FFFFFF' )
  console.log( rgb(173,255,47) === 'ADFF2F' )