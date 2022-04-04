String.prototype.toJadenCase = function () {
    let newString = ""
  for (i = 0; i < this.length; i++) {
    if (i === 0) {
      newString += this.charAt(i).toUpperCase()
    }else if (this.charAt(i) === " ") {
      newString += this.charAt(i)
      newString += this.charAt(i + 1).toUpperCase()
      i++
    }else {
      newString += this.charAt(i)
    }
  }
    return newString
  }
  
  let uppercased = "Abcd efgh ijkl mnop qrst uvwx yz".toJadenCase()
  
  console.log(uppercased)