# 15. Error Handling and Resilience

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a reliability engineer reviewing error handling in this codebase.

Find places where errors are swallowed, hidden, or handled poorly.

Do not modify files yet. Produce a report first.

Check:
- Empty catch blocks
- Generic user messages with no recovery path
- Missing frontend error boundaries
- External API calls with no timeout
- Missing retry logic for transient failures
- Unhandled promise rejections
- Missing fallback UI for failed data loads
- Error logging with too little context or too much sensitive data
- User error vs system error vs external service error
- WebSocket disconnect and reconnect behavior
- Queue failures and retry/dead-letter handling
- Billing, order, booking, approval, upload, or domain-critical failures

For every issue, provide:
- File path and line number
- What currently happens when this fails
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix with before/after code where useful
- How to verify the fix

End with:
- Resilience score: X/10
- Failures most likely to cause support tickets
- Failures most likely to cause data or revenue loss
```
