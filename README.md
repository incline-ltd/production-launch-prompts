# Production Launch Prompts for Solo Founders

20 audit-first prompts for Claude Code, Codex, and other codebase-aware agents
before real users, real money, or production traffic are involved.

This is for solo founders who need a practical launch review without enterprise
process. It is strongest for SaaS, fintech, marketplaces, AI products, and other
apps where security, data integrity, payments, and trust matter.

## Why This Exists

Most prompt collections are generic. Production launch work is not generic.

Before launch, a solo founder needs to know:

- Can one user access another user's data?
- Are secrets, tokens, or payment webhooks exposed?
- Will the app lose data under concurrent writes?
- Are critical flows tested?
- Can the product recover from failure?
- Is the app good enough for a first real user?

These prompts turn that uncertainty into a repeatable launch checklist.

## What's Inside

### Part 1: Pre-Launch Audit

Run these before your first real user.

| # | Prompt | What It Catches |
| --- | --- | --- |
| 01 | Architecture Audit | Tight coupling, dead code, unclear boundaries |
| 02 | Security Audit | IDOR, auth gaps, hardcoded secrets, injection, XSS |
| 03 | Performance Audit | N+1 queries, missing indexes, memory leaks, slow UX |
| 04 | Code Quality Audit | Unsafe types, long functions, swallowed errors |
| 05 | Database Audit | Missing transactions, weak constraints, data-loss risk |
| 06 | API Design Audit | Validation, response, and versioning risk |
| 07 | Testing Audit | Untested critical paths and missing failure cases |
| 08 | DevOps Audit | Weak CI, no rollback, poor logging, backup gaps |
| 09 | Frontend and UX Audit | Mobile, forms, accessibility, empty states |
| 10 | Launch Verdict | Final go/no-go scorecard and top fixes |

### Part 2: Product and Operations Readiness

Run these after critical launch blockers are fixed.

| # | Prompt | What It Improves |
| --- | --- | --- |
| 11 | Privacy and Compliance | PII, consent, retention, payments |
| 12 | Repository and Developer Experience | README, docs, templates, setup |
| 13 | Onboarding and Activation | First-run flow, empty states, activation |
| 14 | Passwordless Auth | Magic links, OTPs, replay protection, lockouts |
| 15 | Error Handling and Resilience | Retries, timeouts, recovery |
| 16 | Analytics and User Behavior | Funnel events, activation, churn signals |
| 17 | Notifications and Communication | Email, in-app, duplicate prevention |
| 18 | Payment and Subscription Flow | Webhooks, pricing, failed payments |
| 19 | Documentation and Knowledge Base | User docs, FAQ, troubleshooting |
| 20 | Mobile Responsiveness | 360px through desktop readiness |

## How to Use

Work from a clean branch in the target app:

```bash
git status --short --branch
```

Then copy one prompt from [PROMPTS.md](PROMPTS.md) into your agent. Do not run
the entire file at once.

With Codex:

```bash
codex "<paste one prompt from PROMPTS.md>"
```

With Claude Code, paste one prompt into the session or pass it through your
normal Claude Code CLI workflow.

Recommended order:

1. Run 02 Security Audit first.
2. Run 05 Database Audit second.
3. Run 07 Testing Audit and 08 DevOps Audit before any launch decision.
4. Run 01, 03, 04, 06, and 09 in any order.
5. Run 10 Launch Verdict last.
6. Run 11-20 after all critical launch blockers are resolved.

Do not go live while prompts 02, 05, 07, 08, or 10 report CRITICAL issues.
For fintech, payment, or regulated products, also clear prompts 11 and 18.

## Output Contract

Each prompt asks the agent to return:

- file path and line number
- severity: CRITICAL, HIGH, MEDIUM, LOW
- attack or failure scenario in plain English
- exact recommended fix
- ranked next actions
- final score for that area

Prompt 10 produces the launch scorecard:

```text
Overall verdict: PRODUCTION READY / NOT READY
Score: X/100

Category          Score   Biggest Issue
Architecture      X/10    ...
Security          X/10    ...
Performance       X/10    ...
Code Quality      X/10    ...
Database          X/10    ...
API Design        X/10    ...
Testing           X/10    ...
DevOps            X/10    ...
Frontend          X/10    ...
Scalability       X/10    ...

Critical issues blocking deployment: ...
High priority fixes for this week: ...
Top 10 fixes ranked by risk x effort: ...
```

## What Makes This Different

- Audit-first, so agents do not rewrite your app before you understand the risk.
- Built for founder-speed launches, not enterprise checklists.
- Fintech and payment-aware without assuming every app is a trading app.
- Cross-tool: works with Claude Code, Codex, Cursor, and most repo-aware agents.
- Output-focused: every prompt demands file paths, severity, impact, and fixes.

## Safety Notes

These prompts are not a replacement for professional security review, legal
advice, compliance review, or production incident planning. They are a fast way
to catch obvious and high-risk launch issues before users find them.

Never paste real secrets, private keys, customer data, payment credentials, or
production logs into an AI tool. If a prompt finds a secret, rotate it.

## Author

Maintained by [Ashish Kaloge](https://github.com/ashishkaloge).

## Contributing

Good contributions are practical:

- a prompt that found a real launch bug
- a sharper check for solo-founder production risk
- a better output format
- a safer way to run these prompts in real repos

Keep the repo focused. Do not submit private project files, logs, screenshots
with customer data, credentials, or production configuration.

## License

MIT. See [LICENSE](LICENSE).
