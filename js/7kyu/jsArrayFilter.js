// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


function getEvenNumbers(numbersArray){
    return numbersArray.filter(a => a % 2 === 0)
  }


module.exports = {
    getEvenNumbers,
}