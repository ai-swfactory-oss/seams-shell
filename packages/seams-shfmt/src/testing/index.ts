import type { Shfmt, ShfmtResult } from '../index'

export const createFakeShfmt = (result: ShfmtResult = { formatted: '' }): Shfmt => ({
  format: () => result,
})
