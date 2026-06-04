# Fictional SaaS Launch Scorecard

This is a fictional example. Do not copy real customer data, private URLs,
credentials, or production logs into a public scorecard.

## Project

```text
Product: Acme Notes
Repository: github.com/example/acme-notes
Branch: launch-review
Reviewer: Founder
Date: 2026-06-04
Target launch date: 2026-06-14
```

## Overall Verdict

```text
Verdict: NOT READY
Overall score: 68 / 100
Critical blockers: 2
High priority issues: 5
```

## Category Scores

| Category | Score | Verdict | Biggest Risk |
| --- | --- | --- | --- |
| Architecture | 7 / 10 | READY | Some duplicated business rules |
| Security | 5 / 10 | NOT READY | Notes API lacks object ownership checks |
| Performance | 7 / 10 | READY | Search endpoint has no pagination |
| Code Quality | 8 / 10 | READY | Minor debug logging remains |
| Database | 6 / 10 | NOT READY | Missing unique constraints on workspace slugs |
| API Design | 7 / 10 | READY | Inconsistent error responses |
| Testing | 5 / 10 | NOT READY | No authorization regression tests |
| DevOps | 6 / 10 | NOT READY | Rollback is undocumented |
| Frontend and UX | 8 / 10 | READY | Empty states need clearer next actions |
| Scalability | 7 / 10 | READY | Background export job needs idempotency |
| Privacy and Compliance | 7 / 10 | READY | Account deletion copy is unclear |
| Revenue or Billing | N/A | N/A | Free product at launch |

## Critical Blockers

| Issue | File / Area | Risk | Fix | Owner | Due |
| --- | --- | --- | --- | --- | --- |
| Missing note ownership check | `api/notes/[id]` | User can read another user's note | Enforce owner/workspace filter in query | Founder | 2026-06-06 |
| No authorization tests | `tests/api` | IDOR regression could return | Add tests for cross-user read/update/delete | Founder | 2026-06-06 |

## High Priority Fixes

| Issue | File / Area | Risk | Fix | Owner | Due |
| --- | --- | --- | --- | --- | --- |
| Search has no pagination | `api/search` | Large workspace can slow API | Add limit/cursor and index | Founder | 2026-06-08 |
| Rollback not documented | Deploy docs | Slow recovery during bad deploy | Add rollback checklist | Founder | 2026-06-08 |
| Export job can duplicate files | Background jobs | Duplicate user exports | Add idempotency key | Founder | 2026-06-09 |

## Launch Decision

```text
Decision: Do not launch yet.
Reason: Security and test blockers remain.
Risks accepted: Minor UX polish can wait.
Risks not accepted: Cross-user data access.
Rollback plan: Add documented revert-and-redeploy steps.
Monitoring plan: Add auth failure, API error, and export job alerts.
Next review date: 2026-06-07
```
