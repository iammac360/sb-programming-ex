/**
* spend() returns cashback awarded rounded to 2 decimal places
* based on amounts array
*
* @param [String] amounts
* @return String
*/
function spend(amounts) {
  const highest = Math.max.apply(Math, amounts)
  const percentage = getPercentage(amounts.map((v) => parseInt(v)))
  const computed = Math.ceil(highest * percentage).toFixed(2)

  function getPercentage(amounts) {
    if (amounts.every((e) => e >= 50)) return 0.2
    if (amounts.every((e) => e >= 20)) return 0.15
    if (amounts.every((e) => e >= 10)) return 0.1
    return 0.05
  }

  if (isNaN(computed)) {
    return 'Invalid type in amounts array. Value must be numeric.'
  }

  return computed == 0 ? "No cashback" : `Award cashback: ${computed}`
}

module.exports = spend


