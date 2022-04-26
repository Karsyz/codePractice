// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = (n) => {
    let num = []
    for(i = n; i > 0; i--){
    num.push(i)
    }
    return num
}

console.log( reverseSeq(5) ) //[ 5, 4, 3, 2, 1 ]