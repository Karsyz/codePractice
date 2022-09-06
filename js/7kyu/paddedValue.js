// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"


function solution(value){
    const val = `${value}`
    let paddedVal = val.padStart(6, '0')
    return `Value is ${paddedVal}`
  }



  // tests
//   console.log( solution(5)  === 'Value is 00005')
//   console.log( solution(225)  === 'Value is 00225')
//   console.log( solution(5234)  === 'Value is 05234')
//   console.log( solution(54433)  === 'Value is 54433')
//   console.log( solution(0)  === 'Value is 00000')

const describe = require('describe')
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution(5),"Value is 00005")
    assert.strictEqual(solution(1204),"Value is 01204")
    assert.strictEqual(solution(109),"Value is 00109")
    assert.strictEqual(solution(0),"Value is 00000")
    })
  })