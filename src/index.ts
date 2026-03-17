const DELIMITER_PATTERN = /[,\n]+/
const ESCAPE_REGEX = /[-/\\^$*+?.()|[\]{}]/g

function escapeRegExp(input: string): string {
  return input.replace(ESCAPE_REGEX, '\\$&')
}

export function reducerFn(sum: number, num: string, negativeNumbers: number[]): number {
  const parsedNum = Number.parseInt(num, 10)
  if (parsedNum < 0) {
    negativeNumbers.push(parsedNum)
    return sum
  }
  else if (parsedNum > 1000) {
    return sum
  }
  return sum + parsedNum
}

export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  let delimiter: RegExp = DELIMITER_PATTERN
  let numbersToSum = numbers
  const negativeNumbers: number[] = []

  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n')
    const delimiterPattern = numbers.substring(2, newlineIndex)
    if (delimiterPattern.startsWith('[') && delimiterPattern.endsWith(']')) {
      delimiter = new RegExp(
        delimiterPattern
          .slice(1, -1)
          .split('][')
          .map(d => escapeRegExp(d))
          .join('|'),
      )
    }
    else {
      delimiter = new RegExp(escapeRegExp(delimiterPattern))
    }
    numbersToSum = numbers.substring(newlineIndex + 1)
  }

  const numbersSum = numbersToSum.split(delimiter).reduce((sum, num) => reducerFn(sum, num, negativeNumbers), 0)

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`)
  }

  return numbersSum
}
