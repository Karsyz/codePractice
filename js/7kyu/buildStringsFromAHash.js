// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"



// function solution(pairs){
//     let convertedPairs = ""
//     for (key in pairs) {
//         convertedPairs += `${key} = ${pairs[key]},`
//     }
//     return convertedPairs.slice(0,convertedPairs.length-1)
// }

// solution on codwars needed to be sorted a,b,c,d...

function solution(pairs){
    // create an array of pairs
    return Object.entries(pairs)
    // sort arrays
    .sort()
    // create new array and convert to syntax "a = #, b = #..."
    .map( (e) => `${e[0]} = ${e[1]}` )
    // join strings in array
    .join(',')
}

// tests
console.log(
    solution(
        {
        a: 1, 
        b: '2',
        d: '4',
        e: 5,
        c: 3,
    })
)

// foreach variant
// function solution(pairs){
//     let convertedPairs = ""
//     Object.entries(pairs).forEach( ([key, value]) => convertedPairs += `${key} = ${value},`)
//     return convertedPairs.slice(0,convertedPairs.length-1)
// }