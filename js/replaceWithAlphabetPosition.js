function alphabetPosition(txt) {
    let letterKey = ' abcdefghijklmnopqrstuvwxyz'
    let text = txt.toLowerCase()
    let textNums = ''
    for (i = 0; i < text.length; i++) {
        
        for (j = 1; j < letterKey.length; j++) {
            if ( text.charAt(i) === letterKey.charAt(j) ) {
                textNums += `${j}x`
                break
            }
        }
    }

    console.log(textNums.charAt(textNums.length-1))
    
    if (textNums.charAt(textNums.length-1) === 'x') {
        textNums.replaceAll('x', 'y')
    }

    return textNums
}

  console.log(alphabetPosition("The sunset sets at twelve o' clock"))
