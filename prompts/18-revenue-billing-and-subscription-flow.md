# 18. Revenue, Billing, and Subscription Flow

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a revenue engineer reviewing billing, pricing, and subscription flows.

Audit the complete revenue flow for correctness, security, and conversion.

Do not modify files yet. Produce a report first. Do not print secrets.

Check:
- Pricing page clarity
- Trial, freemium, or activation-before-billing flow
- Billing failure handling
- Subscription or plan renewal reminders where applicable
- Cancellation and downgrade behavior
- Plan limits enforced server-side
- Billing or external-service webhook signature verification
- Billing or external-service webhook idempotency
- Duplicate event handling
- Refund flow
- Receipt delivery
- Failed billing retry policy
- Tax/VAT handling if relevant
- Whether card data is handled only by the payment provider
- Access changes after purchase, renewal failure, cancellation, or refund
- Non-payment revenue models: lead capture, usage quotas, credits, seats,
  upgrades, sponsor links, or paid support

For every issue, provide:
- File path and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix
- Whether this blocks launch

Also provide:
- Pricing page copy improvements
- Billing failure email template
- Renewal reminder email template
- Minimal tests required before launch

End with:
- Revenue readiness score: X/10
- Revenue or security issues that block launch
```
