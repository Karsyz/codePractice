// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// function filterList(list) { 
//     return list.filter(e => e*1 && typeof e === 'number' || e === 0)
// }

// other variation from another 7kyu

function listFiltering(l) {
    return l.filter(a => typeof a !== 'string' )
}


// console.log( filterList( [1,2,'a','b'] ) ) // Returns [1,2]
// console.log( filterList( [1,'a','b',0,15] ) ) // Returns [1,0,15]
// console.log( filterList( [1,2,'aasf','1','123',123] ) ) // Returns [1,2,123]

module.exports = {
    listFiltering,
}