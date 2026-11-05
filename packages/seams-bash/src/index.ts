export interface BashResult {
  readonly exitCode: number
  readonly stdout: string
  readonly stderr: string
}

export interface Bash {
  readonly run: () => BashResult
}

export const createBash = (): Bash => ({
  run: () => ({ exitCode: 0, stdout: '', stderr: '' }),
})
