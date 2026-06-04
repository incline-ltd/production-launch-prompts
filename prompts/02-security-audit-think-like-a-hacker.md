# 02. Security Audit - Think Like a Hacker

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a senior penetration tester. Think like an attacker, not a developer.

Audit this codebase for security vulnerabilities before production launch.

Do not modify files yet. Produce a report first. Do not print secret values.

Check:
- Hardcoded secrets, API keys, tokens, private keys, or credentials
- Authentication gaps: routes, APIs, background jobs, and admin paths
- Authorization gaps and IDOR: can user A access user B's data by changing an ID?
- Tenant isolation: can one tenant/account access another tenant/account?
- Mass assignment: can users submit extra fields to elevate privileges?
- XSS injection vectors
- SQL/NoSQL injection
- SSRF, open redirects, unsafe file upload, and unsafe deserialization
- CSRF protection where browser cookies are used
- Rate limiting on login, OTP, password reset, API keys, admin actions, and
  other sensitive workflows
- Security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options
- Session token entropy, storage, expiry, rotation, and logout behavior
- Whether secrets, internal paths, stack traces, or privileged fields leak in
  API responses
- Webhook signature verification for external services
- High-risk workflow abuse: account takeover, duplicate submissions, unauthorized
  actions, webhook replay, and automated abuse

For every vulnerability, provide:
- File path and line number
- Attack vector in plain English
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Exact recommended fix with before/after code where useful
- Whether this blocks launch

End with:
- Security score: X/10
- Issues that could cause immediate user data breach
- Issues that could allow account takeover or unauthorized sensitive action
- Top 10 fixes ranked by exploitability x impact
```
