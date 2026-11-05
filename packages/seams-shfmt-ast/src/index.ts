export interface ShfmtAstStatement {
  readonly type: string
}

export interface ShfmtAstFile {
  readonly type: 'File'
  readonly statements: readonly ShfmtAstStatement[]
}

export interface ShfmtAst {
  readonly parse: () => ShfmtAstFile
}

export const createShfmtAst = (): ShfmtAst => ({
  parse: () => ({ type: 'File', statements: [] }),
})
