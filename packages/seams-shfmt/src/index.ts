export interface ShfmtResult {
  readonly formatted: string
}

export interface Shfmt {
  readonly format: () => ShfmtResult
}

export const createShfmt = (): Shfmt => ({
  format: () => ({ formatted: '' }),
})
