import type { Bash, BashResult } from '../index'

export const createFakeBash = (result: BashResult = { exitCode: 0, stdout: '', stderr: '' }): Bash => ({
  run: () => result,
})
