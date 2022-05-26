function whiteBlackAreas(cols, rows) {
    let colsWhite = 0
    let colsBlack = 0
    let rowsWhite = 0
    let rowsBlack = 0
    
    // const lengthCols = cols.reduce( (a, b) => a + b )
    // const lengthRows = rows.reduce( (a, b) => a + b )
    // const colsLengths = cols.forEach( (a,b) => b % 2 === 0 ? colsWhite += a: colsBlack += a )
    // const rowsLengths = rows.forEach( (a,b) => b % 2 === 0 ? rowsWhite += a : rowsBlack += a )

    const colsLengths = cols.forEach( (a,b) => b % 2 === 0 ? console.log('white') : console.log('black') )
    // const rowsLengths = rows.forEach( (a,b) => b % 2 === 0 ? rowsWhite += a : rowsBlack += a )
    
    // let totalWhite = colsWhite * rowsWhite
    // let totalBlack = colsBlack * rowsBlack

    // return [totalWhite, totalBlack]

  }

  

  console.log( whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2]) )




//   for (i = 0; i < rows.length; i += 2) {
//     for (j = 0; j < cols.length; j++) {
//      if (j % 2 === i % 2) {
//        white += cols[j] * rows[i]

//      }else {
//        black += cols[j] * rows[i]

//      }   
//    }
//  }
     
//  return [white, black]
// }