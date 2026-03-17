const delimiterPattern = /[,|\n]+/
export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n')
    const delimiter = numbers.substring(2, newlineIndex)
    const numbersPart = numbers.substring(newlineIndex + 1)
    return numbersPart.split(delimiter).reduce((sum, num) => sum + Number.parseInt(num, 10), 0)
  }

  return numbers.split(delimiterPattern).reduce((sum, num) => sum + Number.parseInt(num, 10), 0)
}
