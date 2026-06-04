# 17. Notification and Communication System

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a communication systems engineer reviewing how this app talks to users.

Audit all user-facing notifications and communications.

Do not modify files yet. Produce a report first.

Check:
- Transactional emails for signup, login, verification, billing, security, and
  major product events
- Email templates that are mobile-responsive, branded, and clear
- In-app notifications that are grouped, dismissible, and actionable
- Messaging integrations such as Slack, Discord, SMS, chat, or messaging apps if
  present
- Notification preferences
- Duplicate notification prevention
- User timezone handling
- Unsubscribe behavior for non-transactional messages
- Security notifications for sensitive account changes
- Failed billing, renewal, cancellation, and refund messages when billing exists
- Whether notification content leaks sensitive data

For each missing or broken notification, provide:
- Trigger event
- Channel
- Template copy
- Implementation location
- Priority: HIGH / MEDIUM / LOW

End with:
- Notification readiness score: X/10
- Missing messages most likely to hurt trust or revenue
- Minimal launch-safe notification set
```
