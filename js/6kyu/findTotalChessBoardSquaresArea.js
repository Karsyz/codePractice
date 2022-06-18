// An eccentric chessboard maker likes to create strange N x N chessboards.

// Instead of making all the rows and the columns on his chessboards the same size, he likes to make chessboards with row and columns of varying sizes.

// The chessboard maker now wants to determine how much white and black wood he needs to cover the areas in a given chessboard, so is asking you to find the total white area and the total black area on his board.

// For example, here are the specifications of his latest 5x5 chessboard:

// cs = [ 3, 1, 2, 7, 1 ] contains the 5 widths of the 5 columns.

// rs = [ 1, 8, 4, 5, 2 ] contains the 5 heights of the 5 rows.

// Important convention
// All their chessboards start with a WHITE CELL IN THE "TOP LEFT", and then alternate black & white in the usual way.

function whiteBlackAreas(cols, rows) {
  let white = 0
  let black = 0
    
  // total area
  const totalArea = cols.reduce((a,c)=>a+c)*rows.reduce((a,c)=>a+c)

  // white area
  let colEvenWhite = cols.reduce((a,c,i)=> i % 2 === 0 ? a + c : a, 0)
  let rowEvenWhite = rows.reduce((a,c,i)=> i % 2 === 0 ? a + c : a, 0)
  let colOddWhite = cols.reduce((a,c,i)=> i % 2 !== 0 ? a + c : a, 0)
  let rowOddWhite = rows.reduce((a,c,i)=> i % 2 !== 0 ? a + c : a, 0)
  
  white = (colEvenWhite * rowEvenWhite) +  (colOddWhite * rowOddWhite)

  // black area
  black = totalArea - white
  
  return [white, black]
}

console.log( whiteBlackAreas( [3,1,2,7,1],[1,8,4,5,2]) )  // [146,134]

// console.log( whiteBlackAreas( [3, 1, 2, 7, 1, 11, 12, 3, 8, 1], [1, 8, 4, 5, 2, 21, 5, 2, 2, 17] ) )// [1583,1700]


  // double looping solution, not fast enough
  // add only white area
  // for (let i = 0; i < rows.length; i++) {
  //   for (i % 2 === 0 ? j = 0 : j = 1; j < cols.length; j += 2) {
  //     white += ( cols[i] * rows[j] )
  //   }
  // }  