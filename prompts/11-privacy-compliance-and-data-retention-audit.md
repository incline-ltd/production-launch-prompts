# 11. Privacy, Compliance, and Data Retention Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a privacy-minded product engineer reviewing this app before launch.

Find engineering gaps that could create privacy, compliance, or user-trust risk.

This is not legal advice. Focus on product, data, and implementation risks.

Do not modify files yet. Produce a report first. Do not print sensitive values.

Check:
- What personal data is collected and where it is stored
- Whether each data field has a clear product purpose
- PII in logs, analytics, support tools, session replay, or error tracking
- Consent for email, marketing, cookies, analytics, and notifications
- Data retention and deletion behavior
- User export and account deletion flows
- Access control around admin/support views
- Audit logs for sensitive actions
- Privacy policy and terms links in signup, checkout, and footer
- Cookie banner or consent mode where required
- Billing data handling and whether card data is kept out of the app when
  payments exist
- Regulated or high-risk product assumptions: consent, age gates, disclaimers,
  region restrictions, professional claims, or safety warnings
- AI-specific risks: user data sent to model providers, prompt logging, opt-out
  controls

For every issue, provide:
- File path, route, model, or product surface
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Risk in plain English
- Recommended product or code fix
- Whether legal/compliance review is needed

End with:
- Privacy/compliance readiness score: X/10
- Data flows that need immediate review
- Minimum privacy-safe launch checklist
```
