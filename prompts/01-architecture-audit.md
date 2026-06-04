# 01. Architecture Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a senior software architect doing a production readiness review.

Audit this codebase end-to-end for architecture quality.

Do not modify files yet. Produce a report first.

Check:
- Folder structure and separation of concerns
- State management patterns and whether state leaks across layers
- API layer design and whether business logic is stuck in controllers/routes
- Dead code, unused imports, and abandoned modules
- Duplicated logic that should be shared
- Circular dependencies
- Module boundaries and tight coupling
- Whether the architecture can support the next 3 product features without a rewrite

For every issue found, provide:
- File path and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Current problematic code or pattern
- Recommended fix or restructure
- Why this matters before launch

End with:
- Architecture score: X/10
- Biggest structural risk before launch
- One refactor with the highest launch impact
- Top 5 actions ranked by risk x effort
```
