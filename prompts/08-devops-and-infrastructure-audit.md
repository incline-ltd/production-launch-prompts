# 08. DevOps and Infrastructure Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a DevOps engineer reviewing this project before production launch.

Find deployment, monitoring, rollback, and operations risks.

Do not modify files yet. Produce a report first. Do not print secret values.

Check:
- Environment variables and hardcoded configuration
- Secrets in git, .env files, build logs, Docker layers, or CI config
- .gitignore coverage for local secrets and generated files
- Docker images: minimal, pinned, production-optimized, non-root where possible
- CI/CD pipeline: tests, lint, typecheck, security checks before deploy
- Deployment permissions and least privilege
- Logging with enough context but no sensitive data
- Monitoring, metrics, alerting, and health checks
- Error tracking and release tagging
- Graceful shutdown and SIGTERM handling
- Database backups that are automated and tested
- Rollback procedure that can restore a previous version quickly
- Environment parity between development, staging, and production
- Single points of failure with no redundancy

For every issue, provide:
- File path or config location
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix
- Verification step

End with:
- DevOps score: X/10
- What would happen if production failed at 3am
- Minimum launch-safe ops checklist
- Top 5 actions ranked by risk x effort
```
