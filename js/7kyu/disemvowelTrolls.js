// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    let vowels = 'aeiouAEIOU'
    let strNoVowels = ""
    let flag = false
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if ( str[i] === vowels[j] ) {
               flag = true
               break
          }
        }
        if (!flag) {
            strNoVowels += str[i]
        }
        flag = false
    }
    return strNoVowels;
  }

  console.log(disemvowel("This website is for losers LOL!")) //Ths wbst s fr lsrs LL!

  // regex and replace solution
  // return str.replace(/[aeiou]/ig, "");