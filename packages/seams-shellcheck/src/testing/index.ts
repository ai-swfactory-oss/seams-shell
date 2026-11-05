import type { Shellcheck, ShellcheckResult } from '../index'

export const createFakeShellcheck = (result: ShellcheckResult = { findings: [] }): Shellcheck => ({
  check: () => result,
})
