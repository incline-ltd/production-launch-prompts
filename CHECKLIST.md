# Production Launch Checklist

Use this before putting any product or app in front of real users.

Mark an item as blocked if it is unknown. Unknown production risk is still risk.

## Go / No-Go Rule

Do not launch if any of these are true:

- A user can access another user's data.
- A non-admin can perform admin-only actions.
- Secrets, tokens, customer data, or production logs are exposed.
- Critical writes can happen twice or partially fail without recovery.
- There is no tested rollback path.
- There is no way to notice a production failure.
- The core user journey is untested.

## Core Product

- [ ] The first user journey works from signup to first meaningful action.
- [ ] Loading, error, and empty states exist for every core screen.
- [ ] Destructive actions require confirmation.
- [ ] Mobile layout works at 360px, 390px, 768px, and desktop widths.
- [ ] Public pages have useful titles, descriptions, and share previews.

## Security

- [ ] Authentication protects every private route and API.
- [ ] Authorization is checked for every object access.
- [ ] Admin routes and privileged actions are separately protected.
- [ ] Inputs are validated on the server.
- [ ] API responses do not expose private fields.
- [ ] Rate limits protect login, OTP, password reset, and expensive workflows.
- [ ] Webhooks verify signatures and reject replays.
- [ ] Security headers are configured.

## Data

- [ ] Critical writes use transactions or equivalent atomic guarantees.
- [ ] Unique constraints protect duplicate records where needed.
- [ ] Frequently filtered, joined, and sorted columns have indexes.
- [ ] Sensitive data is encrypted, hashed, or avoided where appropriate.
- [ ] Backups exist and restore has been tested.
- [ ] Account deletion, retention, and export behavior are clear.

## Reliability

- [ ] External API calls have timeouts.
- [ ] Transient failures have retry or recovery behavior.
- [ ] Background jobs are idempotent.
- [ ] Cron jobs cannot overlap dangerously.
- [ ] The app shuts down gracefully.
- [ ] A rollback can be completed quickly.

## Observability

- [ ] Health checks exist.
- [ ] Errors are logged without leaking sensitive data.
- [ ] Critical failures trigger alerts.
- [ ] Core funnel events are tracked without PII.
- [ ] Release/version information is visible in logs or monitoring.

## Repository and Delivery

- [ ] `README.md` explains setup and purpose.
- [ ] `.env.example` documents required configuration without real values.
- [ ] CI runs tests, lint, typecheck, or equivalent checks.
- [ ] Dependency and secret scanning are enabled where available.
- [ ] `SECURITY.md` explains how to report sensitive issues.
- [ ] The production deploy process is documented.

## Launch Verdict

```text
Verdict: READY / NOT READY
Critical blockers:
High priority fixes:
Launch owner:
Rollback owner:
Launch date:
```
