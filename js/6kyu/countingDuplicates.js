// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(s) {
    // lowercase
    // split reorder join
    // how many matches
    // if string null return empty array.length from match
    return (s.toLowerCase().split("").sort().join("").match(/([a-z0-9])\1+/g) || []).length;
  }


console.log( duplicateCount("") ) // 0
console.log( duplicateCount("abcde") ) // 0
console.log( duplicateCount("aabbcde") ) // 2
console.log( duplicateCount("aabBcde") ) // 2
console.log( duplicateCount("Indivisibility") ) // 1
console.log( duplicateCount("Indivisibilities") ) // 2


// Regex Explanation
// /g search globally
// [a-z] range of items we are searching for
// () grouping, as in the /(foo)/ in foobar
// \+1 quantifier, matches more than one consecutive occurances of the preceeding value

// In a sentence:
// Search the string for characters in the range a-z that are in a group of 2 or more


