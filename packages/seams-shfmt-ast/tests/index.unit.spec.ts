import { describe, expect, it } from 'vitest'

import { createShfmtAst } from '../src/index'
import { createFakeShfmtAst } from '../src/testing/index'

describe('createShfmtAst', () => {
  it('parses to an empty file while the seam is a skeleton', () => {
    expect(createShfmtAst().parse()).toEqual({ type: 'File', statements: [] })
  })
})

describe('createFakeShfmtAst', () => {
  it('parses to an empty file by default', () => {
    expect(createFakeShfmtAst().parse()).toEqual({ type: 'File', statements: [] })
  })

  it('returns the file it was given', () => {
    const file = { type: 'File' as const, statements: [{ type: 'CallExpr' }] }
    expect(createFakeShfmtAst(file).parse()).toBe(file)
  })
})
