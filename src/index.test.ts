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
})
