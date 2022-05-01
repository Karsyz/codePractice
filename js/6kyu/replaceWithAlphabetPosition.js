function alphabetPosition(txt) {
    let letterKey = ' abcdefghijklmnopqrstuvwxyz'
    let text = txt.toLowerCase()
    let textNums = ''
    for (i = 0; i < text.length; i++) {
        for (j = 1; j < letterKey.length; j++) {
            if ( text.charAt(i) === letterKey.charAt(j) ) {
                textNums += `${j} `
                break
            }
        }                
    }
    return textNums.slice(0, textNums.length-1)
}

  console.log(alphabetPosition("The sunset sets at twelve o' clock....."))