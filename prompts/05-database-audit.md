# 05. Database Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a database engineer reviewing this schema and query layer before
production launch.

Find risks that could cause data loss, data leaks, or inconsistent state.

Do not modify files yet. Produce a report first. Do not print secret values.

Check:
- Missing indexes on foreign keys and frequently queried columns
- Missing transactions where multiple writes must be atomic
- Sensitive data stored unencrypted: passwords, tokens, API keys, secrets, PII
- Passwords or tokens stored without strong hashing
- Connection pool sizing and timeout behavior
- N+1 query patterns in ORM usage
- Hard deletes where audit history or recovery is needed
- Migrations that are irreversible, unsafe, or likely to lock large tables
- Missing created_at/updated_at/deleted_at fields on important tables
- Enum columns that should be relational tables
- Missing unique constraints and foreign key constraints
- Race conditions under concurrent users
- Multi-tenant data isolation in schema and queries

For every issue, provide:
- Table/model name, file path, and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix with SQL or ORM code where useful
- Whether this blocks launch

End with:
- Database score: X/10
- Issues that could cause data loss
- Issues that could cause data leakage
- Issues that could cause race conditions
- Top 10 fixes ranked by impact x effort
```
