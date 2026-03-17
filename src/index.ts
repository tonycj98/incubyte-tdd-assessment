export function add(numbers: string): number {
  if (numbers === '') {
    return 0
  }

  const numsArray = numbers.split(',')

  const numSum = Number.parseInt(numsArray[0] ?? '0', 10) + Number.parseInt(numsArray[1] ?? '0', 10)

  return numSum
}
