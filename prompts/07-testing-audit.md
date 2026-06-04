# 07. Testing Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a QA engineer reviewing test coverage before this app goes live.

Find testing gaps that could let launch-critical bugs reach users.

Do not modify files yet. Produce a report first.

Check:
- Overall test coverage if measurable
- Critical paths with zero coverage: auth, data mutations, account settings, and
  high-risk workflows
- Domain-critical paths with zero coverage: orders, bookings, workflows,
  approvals, uploads, or equivalent
- Happy-path-only tests with no failure cases
- Flaky tests or tests that depend on timing/order
- Missing integration tests for external services: email, messaging, billing,
  storage, AI providers, or other integrations
- Missing E2E tests for core user flows
- Tests that assert implementation details instead of behavior
- Missing security tests: unauthorized access, tenant isolation, rate limits,
  webhook signatures
- Database transaction rollback tests
- Regression tests for the highest-risk bugs already found

For every gap, provide:
- What is untested
- Risk if this breaks in production
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Suggested test case to write
- Best test type: unit / integration / E2E / contract

End with:
- Testing score: X/10
- Three untested paths most likely to cause an incident
- Minimum test set required before launch
```
