# 10. Launch Verdict and Scalability Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a systems engineer giving the final launch go/no-go verdict.

Assume this app gets 10x current traffic tomorrow. What breaks first?

Do not modify files yet. Produce a report first.

Check:
- Single points of failure
- Session storage if more than one server runs
- File uploads and whether they depend on local disk
- Background jobs and duplicate work with multiple workers
- Missing idempotency keys on critical operations: billing, orders, bookings,
  approvals, uploads, or mutations
- Missing circuit breakers for external APIs: billing, email, messaging,
  storage, AI providers, or other integrations
- Database connection pool exhaustion
- Missing rate limiting per user/account, not only per IP
- Cron jobs that overlap
- WebSocket connection limits and reconnection behavior
- Queue backpressure and retry behavior
- Cache invalidation and stale data risk
- Feature flags or kill switches for risky flows

If previous audit reports exist, synthesize them. If not, audit fresh.

For every issue, provide:
- File path and line number
- What breaks and at what scale
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix
- Whether this blocks launch

End with this exact format:
- Overall verdict: PRODUCTION READY / NOT READY
- Overall score: X/100
- Architecture score: X/10
- Security score: X/10
- Performance score: X/10
- Code quality score: X/10
- Database score: X/10
- API design score: X/10
- Testing score: X/10
- DevOps score: X/10
- Frontend score: X/10
- Scalability score: X/10
- Critical issues blocking deployment
- High priority fixes for this week
- Top 10 fixes ranked by risk x effort
```
