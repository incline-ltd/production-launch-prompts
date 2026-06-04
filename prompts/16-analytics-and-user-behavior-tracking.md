# 16. Analytics and User Behavior Tracking

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a growth analyst setting up product analytics for a new app.

Design meaningful analytics that tell the founder where users succeed and fail.

Do not modify files yet. Produce a report first. Do not include PII or secrets.

Set up or recommend:
- Page view tracking on key routes
- Core funnel events:
  - user_signed_up
  - onboarding_started
  - onboarding_completed
  - first_core_action_completed
  - trial_started or plan_selected
  - paid_plan_started or billing_succeeded
  - billing_failed
  - user_churn_risk_detected
- Domain events for this product's most important workflow
- Error events for failed critical actions
- Activation, retention, and revenue metrics
- Privacy-safe session recording only if appropriate
- Daily active users and weekly active users

For each event, provide:
- Event name in snake_case
- Properties to capture
- Properties to avoid
- Where in the codebase to instrument it
- Implementation approach

Also provide:
- Funnel definition
- Dashboard outline for a solo founder
- Best free or low-cost analytics tool for this app

End with:
- Analytics readiness score: X/10
- The 10 events to implement first
```
