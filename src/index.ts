const delimiterPattern = /[,|\n]+/
export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  return numbers.split(delimiterPattern).reduce((sum, num) => sum + Number.parseInt(num, 10), 0)
}
