import type { ShfmtAst, ShfmtAstFile } from '../index'

export const createFakeShfmtAst = (file: ShfmtAstFile = { type: 'File', statements: [] }): ShfmtAst => ({
  parse: () => file,
})
