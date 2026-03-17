import { describe, expect, it } from 'vitest'
import { add } from './index.js'

describe('incubyte-tdd-assessment: Kata 1: String Calculator', () => {
  // my bad 😐, I forgot to make this test fail before creating the function signature. Let me do that now
  /**
   * This test looks simple but it will confirm that there are no issues in the setup,
   * in ui testing this is similar to just render the ui without any assertions.
   */
  it('test 01: should export and import the function without errors', () => {
    expect(typeof add).toBe('function')
  })

  it('test 02: should return zero for an empty string', () => {
    expect(add('')).toBe(0)
  })

  it('test 03: should return the number itself for a single number string', () => {
    expect(add('1')).toBe(1)
  })

  it('test 04: should return the sum of two numbers in a string', () => {
    expect(add('1,2')).toBe(3)
  })

  it('test 05: should return the sum of multiple numbers in a string', () => {
    expect(add('1,2,3')).toBe(6)
  })

  it('test 06: should handle new lines between numbers (instead of commas)', () => {
    expect(add('1\n2,3')).toBe(6)
  })

  it('test 07: should support different delimiters of pattern: "//[delimiter]\\n[numbers…]"', () => {
    expect(add('//;\n1;2')).toBe(3)
  })

  it('test 08: should throw an exception when called with a negative number', () => {
    expect(() => add('1,2,-3,4')).toThrow('negative numbers not allowed: -3')
    expect(() => add('//;\n1;2;-3;4')).toThrow('negative numbers not allowed: -3')
  })

  it('test 09: should include all negative numbers in the exception message', () => {
    expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2,-4')
    expect(() => add('//;\n1;-2;3;-4')).toThrow('negative numbers not allowed: -2,-4')
  })

  it('test 10: should ignore numbers bigger than 1000', () => {
    expect(add('1,2,1001')).toBe(3)
    expect(add('//;\n1;2;1001')).toBe(3)
  })

  it('test 11: should support delimiters of any length of format: "//[delimiter]\\n"', () => {
    expect(add('//[***]\n1***2***3')).toBe(6)
    expect(() => add('//[***]\n1***2***-3')).toThrow('negative numbers not allowed: -3')
    expect(add('//[***]\n1***2***1001')).toBe(3)
  })
})
