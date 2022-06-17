// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    // create an array with two new arrays and then flatten
    let newArr = []
    newArr[0] = arr.filter(e => e !== 0)
    newArr[1] = arr.filter(e => e === 0)
    return newArr.flat()
}


//another way
// const moveZeros = (arr) => arr.filter(e => e !== 0).concat( arr.filter(e => e === 0) )


console.log( moveZeros([1,2,0,1,0,1,0,3,0,1]) ) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

