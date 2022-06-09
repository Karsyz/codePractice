// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


function isValidWalk(walk) {
    let n = walk.filter(x => x == 'n').length
    let s = walk.filter(x => x == 's').length
    let e = walk.filter(x => x == 'e').length
    let w = walk.filter(x => x == 'w').length
    return walk.length === 10 ? n === s && e === w ? true : false : false
  }


console.log( isValidWalk(['n','s','n','s','n','s','n','s','n','s']) ) // true
console.log( isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) ) // false
console.log( isValidWalk(['w']) ) // false
console.log( isValidWalk(['n','n','n','s','n','s','n','s','n','s']) ) // false


// The filter() method creates a new array, therefore you can use the .length on that method to get the amount of something in an array.