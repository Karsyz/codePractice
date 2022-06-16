// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// make words into array
// check if just letters using regex
// slice litteral + ay
// join back into string

function pigIt(str){
    return str.split(' ').map(e => (/^[a-zA-Z]+$/.test(e)) ? `${e.slice(1)}${e.slice(0,1)}ay` : e).join(' ')
}

// method breakdowns
// split(' ') splits a string based on a pattern, this case its a space
// map(e => e) creates a new array after executing a function on each index
// slice() returns a portion of a string. slice(1) is from index 1 and later. slice(0,1) is from the start to including index 1. 
// join(' ') concatenates all array indexes back into one string based with (' ') in between, in this case a space.


//regex breakdown
// ^ assert position at beginning of the string
// [a-zA-Z] check for letters lowercase and uppercase
// + between one and unimited times, as many as possible, giving back as needed (greedy)
// $ assert position at the end of hte string (or before the line break at the end of thes string, if any)



// ***********************
// tests
// ***********************

  let base = [
    ['Acta est fabula', 'ctaAay steay abulafay'],
    ['Barba non facit philosophum', 'arbaBay onnay acitfay hilosophumpay'],
    ['Cucullus non facit monachum', 'ucullusCay onnay acitfay onachummay'],
    ['Dura lex sed lex', 'uraDay exlay edsay exlay'],
    ['Errare humanum est', 'rrareEay umanumhay steay'],
    ['Fluctuat nec mergitur', 'luctuatFay ecnay ergiturmay'],
    ['Gutta cavat lapidem', 'uttaGay avatcay apidemlay'],
    ['Hic et nunc', 'icHay teay uncnay'],
    ['In vino veritas', 'nIay inovay eritasvay'],
    ['Lux in tenebris lucet', 'uxLay niay enebristay ucetlay'],
    ['Morituri nolumus mori', 'orituriMay olumusnay orimay'],
    ['Nunc est bibendum', 'uncNay steay ibendumbay'],
    ['O tempora o mores !', 'Oay emporatay oay oresmay !'],
    ['Panem et circenses', 'anemPay teay ircensescay'],
    ['Quis custodiet ipsos custodes ?', 'uisQay ustodietcay psosiay ustodescay ?'],
    ['Requiescat in pace', 'equiescatRay niay acepay'],
    ['Sic transit gloria mundi', 'icSay ransittay loriagay undimay'],
    ['Timeo Danaos et dona ferentes', 'imeoTay anaosDay teay onaday erentesfay'],
    ['Ultima necat', 'ltimaUay ecatnay'],
    ['Veni vidi vici', 'eniVay idivay icivay']
  ];
  
base.forEach(e =>  console.log(  pigIt(e[0]) === e[1]) )