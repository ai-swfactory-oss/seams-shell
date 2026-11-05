export interface ShellcheckFinding {
  readonly code: number
  readonly line: number
  readonly message: string
}

export interface ShellcheckResult {
  readonly findings: readonly ShellcheckFinding[]
}

export interface Shellcheck {
  readonly check: () => ShellcheckResult
}

export const createShellcheck = (): Shellcheck => ({
  check: () => ({ findings: [] }),
})
