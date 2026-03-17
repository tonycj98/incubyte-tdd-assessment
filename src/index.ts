const DELIMITER_PATTERN = /[,\n]+/

export function reducerFn(sum: number, num: string, negativeNumbers: number[]): number {
  const parsedNum = Number.parseInt(num, 10)
  if (parsedNum < 0) {
    negativeNumbers.push(parsedNum)
    return sum
  } else if (parsedNum > 1000) {
    return sum
  }
  return sum + parsedNum
}

export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  let delimiter = DELIMITER_PATTERN
  let numbersToSum = numbers
  const negativeNumbers: number[] = []
  
  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n')
    delimiter = new RegExp(numbers.substring(2, newlineIndex))
    numbersToSum = numbers.substring(newlineIndex + 1)
  }

  const numbersSum = numbersToSum.split(delimiter).reduce((sum, num) => reducerFn(sum, num, negativeNumbers), 0)

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`)
  }

  return numbersSum
}
