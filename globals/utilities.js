const nth = (n) => n + ['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || `${n}th`

export const pinFormation = ({ stringConcat, arraySplit }) => {
  const pinConfiguration = {}
  arraySplit.split('').forEach((value, index) => {
    pinConfiguration[stringConcat + nth(index + 1)] = value
  })
  return pinConfiguration
}
