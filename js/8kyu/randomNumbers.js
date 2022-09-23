// generate an array of numbers that takes in a number as the length of the array


function randomNumbers(arrayLength) {
    let array = []
    for (let index = 0; index < arrayLength; index++) {
        array.push( Math.floor( Math.random() * 100 ) )
    }
    console.log(array) 
    return array
}

randomNumbers(100)