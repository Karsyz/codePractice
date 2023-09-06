const nameOfTheOldest = (arr) => {
  const largest = arr.reduce( (a, c) => c.age > a.age ? c : a )
  return largest.name
}

module.exports = {
  nameOfTheOldest,
};
