import { describe, expect, it } from 'vitest'
import { add } from './index.js'

describe('incubyte-tdd-assessment: Kata 1: String Calculator', () => {
  // my bad 😐, I forgot to make this test fail before creating the function signature. Let me do that now
  it('test 01: should export and import the function without errors', () => {
    expect(typeof add).toBe('function')
  })
})
