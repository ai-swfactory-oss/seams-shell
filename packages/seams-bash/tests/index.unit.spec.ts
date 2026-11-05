import { describe, expect, it } from 'vitest'

import { createBash } from '../src/index'
import { createFakeBash } from '../src/testing/index'

describe('createBash', () => {
  it('succeeds with no output while the seam is a skeleton', () => {
    expect(createBash().run()).toEqual({ exitCode: 0, stdout: '', stderr: '' })
  })
})

describe('createFakeBash', () => {
  it('succeeds with no output by default', () => {
    expect(createFakeBash().run()).toEqual({ exitCode: 0, stdout: '', stderr: '' })
  })

  it('returns the result it was given', () => {
    const result = { exitCode: 1, stdout: '', stderr: 'boom\n' }
    expect(createFakeBash(result).run()).toBe(result)
  })
})
