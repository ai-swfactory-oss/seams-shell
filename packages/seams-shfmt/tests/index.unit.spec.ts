import { describe, expect, it } from 'vitest'

import { createShfmt } from '../src/index'
import { createFakeShfmt } from '../src/testing/index'

describe('createShfmt', () => {
  it('formats to empty text while the seam is a skeleton', () => {
    expect(createShfmt().format()).toEqual({ formatted: '' })
  })
})

describe('createFakeShfmt', () => {
  it('formats to empty text by default', () => {
    expect(createFakeShfmt().format()).toEqual({ formatted: '' })
  })

  it('returns the result it was given', () => {
    const result = { formatted: 'echo hi\n' }
    expect(createFakeShfmt(result).format()).toBe(result)
  })
})
