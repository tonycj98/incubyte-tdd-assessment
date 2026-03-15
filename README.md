# Incubyte TDD Assessment

TypeScript implementation of the String Calculator kata using a test-driven development workflow.

(\*If you have some time to spend and eager to know my thought process (😶 slightly unprofessional) read [THOUGHT-PROCESS.md](./THOUGHT-PROCESS.md))

## Overview

This repository is set up to support a clean, iterative TDD process:

- Language: TypeScript (strict mode enabled)
- Test runner: Vitest
- Linting: ESLint (Antfu config)
- Package manager: pnpm
- Runtime/dev execution: tsx

The main function under development is:

- add(numbers: string): number

## Tech Stack

- TypeScript 5
- Vitest 4
- ESLint 10
- tsx
- pnpm

## Getting Started

### Prerequisites

- Node.js 24+ (recommended)
- pnpm 10+

### Install Dependencies

```bash
pnpm install
```

## Available Scripts

| Script      | Command        | Purpose                                 |
| ----------- | -------------- | --------------------------------------- |
| Development | pnpm dev       | Run source in watch mode via tsx        |
| Build       | pnpm build     | Compile TypeScript to dist              |
| Lint        | pnpm lint      | Run ESLint checks                       |
| Lint Fix    | pnpm lint:fix  | Auto-fix lint issues where possible     |
| Check       | pnpm check     | Run lint + TypeScript noEmit type check |
| Check Fix   | pnpm check:fix | Auto-fix lint + run type check          |
| Test        | pnpm test      | Run Vitest test suite                   |
| Coverage    | pnpm coverage  | Run tests with coverage report          |

## Project Structure

```text
src/
	index.ts        # add(numbers: string) implementation
	index.test.ts   # String Calculator test cases
dist/             # Build output (generated)
```

## TDD Workflow

Recommended cycle for each requirement:

1. Write one failing test for the next behavior.
2. Implement the smallest change needed to pass.
3. Refactor while keeping tests green.
4. Repeat.

You can run tests continuously during development with:

```bash
pnpm test
```

## Current Status

- Basic test scaffolding exists.
- add(numbers: string) is exported and currently returns 0.
- Initial tests include function export/import validation and empty-string behavior.

## Quality Gates

Before final submission, run:

```bash
pnpm check
pnpm test
pnpm coverage
```

## License

ISC
