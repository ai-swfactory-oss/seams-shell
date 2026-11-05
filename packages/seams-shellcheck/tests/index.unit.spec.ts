import { describe, expect, it } from 'vitest'

import { createShellcheck } from '../src/index'
import { createFakeShellcheck } from '../src/testing/index'

describe('createShellcheck', () => {
  it('reports no findings while the seam is a skeleton', () => {
    expect(createShellcheck().check()).toEqual({ findings: [] })
  })
})

describe('createFakeShellcheck', () => {
  it('reports no findings by default', () => {
    expect(createFakeShellcheck().check()).toEqual({ findings: [] })
  })

  it('returns the result it was given', () => {
    const result = { findings: [{ code: 2086, line: 1, message: 'Double quote to prevent globbing.' }] }
    expect(createFakeShellcheck(result).check()).toBe(result)
  })
})
