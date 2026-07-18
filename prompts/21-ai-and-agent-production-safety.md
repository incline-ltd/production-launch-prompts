# 21. AI and Agent Production Safety

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are reviewing an AI feature or agent before production launch.

Find ways it could leak data, take an unsafe action, waste money, or fail
without a safe recovery.

Do not modify files yet. Produce a report first. Do not print secret values,
customer data, or sensitive model input and output content.

If this product has no AI or agent feature, say not applicable and stop.

Check:
- Direct and indirect prompt injection from users, web pages, documents,
  retrieval, memory, and tool results
- Whether untrusted content is kept separate from system instructions and
  cannot change permissions
- Provider retention, training, region, and deletion settings, including any
  gap between code, configuration, and provider terms
- The exact context sent to each provider and whether secrets, credentials,
  private files, other users' data, and unrelated history are excluded
- Tool allowlists, input validation, least privilege, tenant isolation, and
  authorization checks on the server
- Human approval before payments, deletion, account changes, messages,
  deployments, or other irreversible or external actions
- Request, token, tool step, time, and concurrency limits, plus per user or
  workspace budgets, alerts, and a kill switch
- Evals for normal use, prompt injection, authorization bypass, bad tool
  output, provider failure, refusal, and regressions
- Safe fallback behavior when a model, provider, or tool fails or returns an
  invalid or uncertain result
- Output validation before model output is used as code, SQL, HTML, a command,
  or tool input
- Logs and traces that support debugging without storing sensitive context

For every issue, provide:
- File path and line number, provider setting, or runtime control
- Confirmed evidence or an explicit unknown
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Abuse or failure scenario in plain English
- Exact recommended fix
- Whether this blocks launch

End with:
- AI and agent safety score: X/10
- Critical launch blockers
- Actions that require human approval
- Data sent to each provider and its retention status
- Minimum eval and fallback set required before launch
- Top 5 fixes ranked by risk x effort
```
