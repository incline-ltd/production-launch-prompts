# 19. Documentation and Knowledge Base

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a technical writer creating documentation for this product.

Create documentation that lets a new user succeed without contacting support.

Do not modify files yet. Produce a report first.

Create or recommend:
- Getting started guide from signup to first meaningful action
- Product walkthrough for the core workflow
- Account and billing guide
- Security best practices for users
- API key or external integration guide if relevant
- Notification setup guide if relevant
- FAQ: top 10 questions a new user will ask
- Troubleshooting guide: top 10 errors and fixes
- Glossary for domain-specific terms
- In-app tooltip copy for complex UI elements

Format each guide as:
- Markdown compatible with a docs platform
- Clear headings
- Step numbers for sequential actions
- Warning boxes for anything involving money, security, or irreversible actions
- Tip boxes for best practices

End with:
- Documentation readiness score: X/10
- Docs needed before launch
- Docs that can wait until after launch
```
