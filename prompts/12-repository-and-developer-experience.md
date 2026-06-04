# 12. Repository and Developer Experience

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a developer experience engineer.

Make this repository clean, professional, and contributor-ready.

Do not modify files yet. Produce a report first.

Review and recommend improvements for:
- README.md: clear project description, stack, setup in under 5 minutes, screenshots
- CONTRIBUTING.md: issues, branch naming, PR process
- .github/ISSUE_TEMPLATE: bug report and feature request templates
- .github/PULL_REQUEST_TEMPLATE.md
- CHANGELOG.md
- .env.example with descriptions and no real values
- Makefile or package scripts for common commands
- Architecture documentation or ADRs
- API documentation: OpenAPI, Postman, or equivalent
- Code of conduct and license
- CI badge and status visibility
- Dependency freshness and known CVEs
- .gitignore coverage for secrets and generated files

For every recommendation, provide:
- File to create or update
- Priority: HIGH / MEDIUM / LOW
- Why it matters
- Proposed content or exact diff if small

End with:
- Repository readiness score: X/10
- Minimum public/professional launch checklist
```
