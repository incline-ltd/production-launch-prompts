# 14. Passwordless Auth - Magic Link and OTP

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a security and UX engineer improving the authentication flow.

Audit the current passwordless authentication implementation.

Do not modify files yet. Produce a report first. Do not print token values.

Check:
- OTP expiry, maximum 10 minutes unless there is a strong reason
- OTP length and entropy
- Brute force protection and lockout
- Magic link expiry and single-use behavior
- Replay attack prevention
- Whether OTP or magic links can be reused
- Timing attack protection on token comparison
- OTP and magic link tokens stored hashed, not plaintext
- Whether requesting a new OTP invalidates the previous one
- Session creation after verification
- Device/session revocation
- User-facing copy for "if you did not request this, ignore it"
- Rate limiting per account, IP, and destination

For every issue, provide:
- File path and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix with before/after code where useful
- Whether this blocks launch

Also provide:
- Ideal OTP email template
- Ideal magic link email template
- Minimal tests required before launch

End with:
- Passwordless auth readiness score: X/10
- Top 5 actions ranked by security impact
```
