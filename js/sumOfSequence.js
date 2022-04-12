// Your task is to make a function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


const sequenceSum = (begin, end, step) => {
    if (begin > end)
        return 0
    let sum = 0
    for (i = begin; i <= end; i += step) {
        sum += i
    }
    alert(sum)
    return sum

  }



let sumOfSequence = [   "Sum Of a Sequence", 

                        "// Your task is to make a function, which returns the sum of a sequence of integers.<br><br>// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).<br><br>// If begin value is greater than the end, function should returns 0<br><br>// Examples<br>// 2,2,2 --> 2<br>// 2,6,2 --> 12 (2 + 4 + 6)<br>// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)<br>// 1,5,3  --> 5 (1 + 4)",

                        "const sequenceSum = (begin, end, step) => {<br>    if (begin > end)<br>        return 0<br>    let sum = 0<br> for (i = begin; i <= end; i += step) {<br>      sum += i<br>}<br>   return sum<br>}<br><br> sequenceSum(2,8,2) // returns 20", 

                        "sequenceSum(2,8,2)"]

challengeData.push(sumOfSequence)