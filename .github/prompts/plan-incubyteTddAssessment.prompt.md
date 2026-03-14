## Plan: String Calculator TDD Stages

Apply strict Three Laws of TDD sequencing (write one small failing test, write minimal production code to pass, then refactor) to deliver the requested String Calculator behavior incrementally in TypeScript + Vitest.

**Steps**

1. Commit protocol for the whole kata: after every red, green, and refactor micro-step, create a commit using semantic format type(scope): subject.
2. Phase 1 - Harness and first red-green cycle.
3. Create first failing spec in src/index.test.ts for empty input returning 0, then run tests to see red.
   Commit: test(calculator): add failing spec for empty input returning zero
4. Implement the smallest code in src/index.ts to pass only that test.
   Commit: feat(calculator): return zero for empty input
5. Refactor names or tiny structure without behavior changes.
   Commit: refactor(calculator): tidy empty-input flow
6. Phase 2 - Core parsing growth (depends on Phase 1).
7. Add failing test for a single number input.
   Commit: test(calculator): add failing spec for single number
8. Implement minimal logic to pass single number.
   Commit: feat(calculator): return value for single number input
9. Refactor if needed without changing behavior.
   Commit: refactor(calculator): simplify single-number branch
10. Add failing test for two comma-separated numbers.
    Commit: test(calculator): add failing spec for two comma-separated numbers
11. Implement minimal logic to pass two-number sum.
    Commit: feat(calculator): sum two comma-separated numbers
12. Add failing test for any amount of comma-separated numbers.
    Commit: test(calculator): add failing spec for many comma-separated numbers
13. Implement minimal loop/split logic for many values.
    Commit: feat(calculator): support summing any number of comma-separated values
14. Refactor parsing/sum structure if duplication appears.
    Commit: refactor(calculator): extract shared comma parsing logic
15. Phase 3 - Mixed delimiters with newline (depends on Phase 2).
16. Add failing test for mixed comma and newline delimiters, for example 1\n2,3 returns 6.
    Commit: test(calculator): add failing spec for newline and comma delimiters
17. Implement minimal tokenization update to support newline plus comma.
    Commit: feat(calculator): support newline as an additional default delimiter
18. Refactor tokenization readability with no behavior change.
    Commit: refactor(calculator): clarify default delimiter tokenization
19. Phase 4 - Custom delimiter header (depends on Phase 3).
20. Add failing test for custom delimiter declaration format //[delimiter]\n[numbers], starting with //;\n1;2.
    Commit: test(calculator): add failing spec for single custom delimiter header
21. Implement minimal header parsing and delimiter switching.
    Commit: feat(calculator): parse custom delimiter header and sum payload
22. Add failing test for another custom-delimiter example to confirm any-amount summing still works.
    Commit: test(calculator): add failing spec for repeated use of declared delimiter
23. Implement minimal update needed for robustness while keeping defaults intact.
    Commit: feat(calculator): handle custom delimiter payload with variable length inputs
24. Refactor parser boundaries between header parsing and number extraction.
    Commit: refactor(calculator): separate header parsing from number tokenization
25. Phase 5 - Negative number rule (depends on Phase 4).
26. Add failing test for one negative value that must throw with exact message negative numbers not allowed <n>.
    Commit: test(calculator): add failing spec for single negative number rejection
27. Implement minimal negative detection and exception throw.
    Commit: feat(calculator): throw when input contains a negative number
28. Add failing test for multiple negatives requiring all values in one message separated by commas.
    Commit: test(calculator): add failing spec for reporting all negative numbers
29. Implement minimal collection of all negatives and compose exact error message.
    Commit: feat(calculator): include all negative numbers in exception message
30. Refactor error creation if needed.
    Commit: refactor(calculator): centralize negative-number error formatting
31. Phase 6 - Stabilization and assessment polish (depends on Phases 1-5).
32. Run complete test suite repeatedly; confirm all scenarios pass and no regressions.
    Commit: test(calculator): verify full suite passes after core requirements
33. Run static checks via package scripts to ensure lint and types are clean; apply only non-behavior fixes if required.
    Commit: chore(quality): satisfy lint and type checks
34. Perform final refactor constrained by tests: remove incidental complexity, improve naming, keep API unchanged.
    Commit: refactor(calculator): final cleanup after all acceptance tests pass
35. Add or update prompt documentation to summarize the TDD journey and commit map.
    Commit: docs(tdd): document red-green-refactor history and commit milestones

**Relevant files**

- e:/Projects/01 Assessments/incubyte-tdd-assessment/src/index.test.ts - Add the full incremental TDD test sequence; each test corresponds to exactly one behavior increment.
- e:/Projects/01 Assessments/incubyte-tdd-assessment/src/index.ts - Implement add(numbers: string): number in micro-steps, preserving minimal-change discipline.
- e:/Projects/01 Assessments/incubyte-tdd-assessment/package.json - Reuse scripts test, check, lint, and build for fast red/green feedback and final validation.

**Verification**

1. During each cycle: run pnpm test after adding each single new test and again after minimal production change.
2. At phase boundaries: run pnpm test to ensure full suite remains green.
3. Before completion: run pnpm check for lint + type-check validation.
4. Optional final confidence pass: run pnpm build and rerun pnpm test.

**Decisions**

- Included scope: exactly the requirements listed by the assessment prompt (empty/single/many, newline support, custom delimiter format, negative rejection with all negatives listed).
- Excluded scope (unless later requested): advanced kata extensions not listed in prompt (e.g., ignoring numbers >1000, bracketed multiple delimiters, delimiter length variants beyond provided format).
- Methodology constraint: no implementation leapfrogging; every behavior must originate from a failing test first.

**Further Considerations**

1. Error message strictness recommendation: assert exact string in tests to prevent ambiguous exception formatting.
2. Refactor discipline recommendation: prefer tiny pure helper functions only when duplication appears in at least two tests/cycles.
3. Commit strategy recommendation: keep commits small and chronological, ideally one commit per red, green, and refactor micro-step so git history clearly narrates the TDD journey.
