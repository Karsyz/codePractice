// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
  
    // if empty
    if (str === "") {
      return ""
    }
  
    // declare new array
    let strs = []
    
    // make new array from str, choose spliting character
    if (str.search(/-/g) !== -1 ) {
      strs = str.split('-')
    }else if (str.search(/_/g) !== -1 ) {
      strs = str.split('_')
    }else if (str.search(/ /g) !== -1 ) {
      strs = str.split(' ')
    }
       
    // captialize all words after first index
    for(i = 1; i < strs.length; i++) {
      strs[i] = strs[i].slice(0,1).toUpperCase() + strs[i].slice(1)
    }
   
    // return joined words
    return strs.join('')
    
  }


  // ***tests***tests***tests***tests***tests***tests***tests***
  console.log( toCamelCase('') === '' )
  console.log( toCamelCase("the_stealth_warrior") === "theStealthWarrior" )
  console.log( toCamelCase("The_stealth_warrior") === "TheStealthWarrior" )
  console.log( toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior" )
  console.log( toCamelCase("the-Stealth-Warrior") === "theStealthWarrior" )
  console.log( toCamelCase("A-B-C") === "ABC" )
  console.log( toCamelCase("I-am-a-programmer") === "IAmAProgrammer" )
  console.log( toCamelCase("i-am-a-programmer") === "iAmAProgrammer" )