const delimiterPattern = /[,|\n]+/

export function reducerFn(sum: number, num: string): number {
  const parsedNum = Number.parseInt(num, 10)
  if (parsedNum < 0) {
    throw new Error(`negative numbers not allowed: ${parsedNum}`)
  }
  return sum + parsedNum
}

export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n')
    const delimiter = numbers.substring(2, newlineIndex)
    const numbersPart = numbers.substring(newlineIndex + 1)
    return numbersPart.split(delimiter).reduce(reducerFn, 0)
  }

  return numbers.split(delimiterPattern).reduce(reducerFn, 0)
}
