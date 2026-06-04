# 06. API Design Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are an API design expert reviewing this codebase before it goes public.

Find API issues that will break clients, leak data, or create support burden.

Do not modify files yet. Produce a report first.

Check:
- REST or RPC design consistency
- HTTP methods and status codes
- API versioning and future breaking-change risk
- Inconsistent response shapes
- Missing server-side input validation
- Error responses that are inconsistent or not machine-readable
- Missing pagination, filtering limits, and request size limits
- Internal IDs or sensitive fields exposed in public responses
- Endpoints doing too much
- Missing rate limits for expensive or sensitive endpoints
- Missing idempotency keys for mutations, orders, bookings, billing, or external
  side effects
- Webhook endpoint design and replay protection

For every issue, provide:
- Endpoint path, file path, and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix with before/after code where useful
- Client impact if left unfixed

End with:
- API design score: X/10
- Biggest breaking-change risk for future users
- Top 5 actions ranked by risk x effort
```
