function XO(str) {
    //sanitized input to array
    strArr = str.toLowerCase().split('')
    //declare variables
    let x = 0
    let o = 0
    let other = 0
    //sort
    strArr.forEach(element => element === 'x' ? x++ : element === 'o' ? o++ : other++)
    //conditions
    return ( x == o || (x == 0 && o == 0) )
}  

console.log(XO('xo'))   //true
console.log(XO("xxOo")) //true
console.log(XO("xxxm")) //false
console.log(XO("Oo"))   //false
console.log(XO("ooom")) //false

// clever best practice 
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }