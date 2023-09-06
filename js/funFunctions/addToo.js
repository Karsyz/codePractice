function addtoo(target, source) {
  let obj = target
  for(let key in source) {
      obj[key] = source[key]
  }
  return obj
}

module.exports = {
  addtoo,
};