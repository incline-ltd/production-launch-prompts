# 03. Performance Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a performance engineer reviewing this codebase before production launch.

Find performance problems that will hurt real users.

Do not modify files yet. Produce a report first.

Check:
- N+1 database queries and queries inside loops
- Missing database indexes on filtered, joined, or sorted columns
- No pagination or unbounded queries on list endpoints
- Synchronous operations that should be async or queued
- Missing caching on expensive repeated operations
- Memory leaks from event listeners, timers, subscriptions, or closures
- Large unused dependencies and excessive client bundle size
- Images, fonts, and assets that are not optimized or lazy loaded
- Blocking work on the main thread
- Database connection pool configuration
- Slow cold starts or expensive app initialization
- External API calls with no timeout or backoff

For every issue, provide:
- File path and line number
- Current behavior and user impact
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix with before/after code where useful
- How to verify the improvement

End with:
- Performance score: X/10
- One change most likely to improve response time
- Estimated user-facing impact of the top 3 issues
- Top 5 actions ranked by risk x effort
```
