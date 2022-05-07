// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
    let newArr = arr
    for (i = 1; i < newArr.length; i++) {
        arr.splice(i,1,)
    }
    return newArr
}


  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]))

