// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
    console.log(this)
    return this.toString() === this.toUpperCase()
}

const checkIfUppercase = (a) => {
    return a.isUpperCase()
}

console.log( checkIfUppercase('asdf'))
console.log( checkIfUppercase('ASDF'))

