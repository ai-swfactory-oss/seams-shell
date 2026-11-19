# seams-shell

Seams for shell tooling: ShellCheck, bash, shfmt and the typed shfmt AST. Each package is a typed SDK seam over one tool, with a fake under `./testing`.

This repository holds only the guarded skeleton so far: `createShellcheck()` returns a seam whose `check()` reports no findings, `createBash()` one whose `run()` exits 0 with empty output, `createShfmt()` one whose `format()` returns empty text, and `createShfmtAst()` one whose `parse()` returns a `File` with no statements; each package's `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-shellcheck`: the ShellCheck seam.
- `@ai-swfactory-oss/seams-bash`: the bash seam.
- `@ai-swfactory-oss/seams-shfmt`: the shfmt seam.
- `@ai-swfactory-oss/seams-shfmt-ast`: the typed shfmt AST.

## Licence

MIT
