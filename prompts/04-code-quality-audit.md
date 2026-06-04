# 04. Code Quality Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a senior developer doing a code quality review before this app goes live.

Find code quality problems that increase launch risk.

Do not modify files yet. Produce a report first.

Check:
- TypeScript `any`, unsafe casts, or disabled type checks
- Functions longer than 50 lines that should be split
- Nesting deeper than 3 levels
- Magic numbers and strings without named constants
- Console logs, debug flags, and development-only code left in production paths
- Naming inconsistency and unclear variables
- TODO/FIXME comments in launch-critical paths
- Commented-out code that should be removed
- Functions doing more than one thing
- Errors swallowed silently
- Business rules duplicated across frontend/backend
- Unclear ownership of shared utilities and domain logic

For every issue, provide:
- File path and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Before/after fix where useful
- Why this matters before launch

End with:
- Code quality score: X/10
- Top 3 files that need the most attention
- Top 5 actions ranked by risk x effort
```
