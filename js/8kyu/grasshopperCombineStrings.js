// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
// Example:
// combineNames('James', 'Stevens')
// returns:
// 'James Stevens'

function combineNames(a, b) {
    return a + ' ' + b
}

// tests (returns true)
console.log( combineNames('James', 'Stevens') === 'James Stevens')
