# Standards Map

This repository is not a formal certification framework. It maps practical
launch prompts to public standards so users understand why each review area
matters.

## References

- [OWASP Application Security Verification Standard](https://devguide.owasp.org/en/03-requirements/05-asvs/)
- [OWASP API Security Top 10 2023](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [Google SRE Launch Coordination Checklist](https://sre.google/sre-book/launch-checklist/)
- [Twelve-Factor App: Config](https://www.12factor.net/config)
- [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features/)
- [OpenSSF Scorecard](https://github.com/ossf/scorecard)
- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)

## Prompt Coverage

| Prompt | Main Coverage | Public Standard Signals |
| --- | --- | --- |
| 01 Architecture | Boundaries, coupling, design risk | ASVS architecture and threat modeling |
| 02 Security | Auth, authorization, injection, secrets | OWASP ASVS, OWASP API Top 10 |
| 03 Performance | Query cost, caching, resource limits | SRE capacity and launch spike planning |
| 04 Code Quality | Maintainability and defect risk | Production change-review hygiene |
| 05 Database | Transactions, constraints, retention | ASVS data protection, SRE backup/restore |
| 06 API Design | Validation, response shape, idempotency | OWASP API inventory and authorization risks |
| 07 Testing | Critical path and failure coverage | Release readiness and regression control |
| 08 DevOps | CI, rollback, monitoring, config | SRE launch checklist, Twelve-Factor config |
| 09 Frontend and UX | Accessibility, states, mobile | User-facing launch readiness |
| 10 Launch Verdict | Go/no-go, capacity, failover | SRE production readiness review |
| 11 Privacy | PII, consent, retention, AI data flow | ASVS data protection and privacy review |
| 12 Repository DX | Docs, templates, dependency hygiene | GitHub community profile and security features |
| 13 Onboarding | Activation and first user journey | Product launch readiness |
| 14 Passwordless Auth | OTP, magic links, replay defense | ASVS authentication/session management |
| 15 Resilience | Timeouts, retries, recovery | SRE reliability and failover |
| 16 Analytics | Funnel and behavior tracking | Privacy-aware product instrumentation |
| 17 Notifications | Transactional messaging and preferences | Trust, safety, and lifecycle communication |
| 18 Revenue | Billing, entitlements, webhooks | Business-critical flow integrity |
| 19 Documentation | User support and knowledge base | Launch support readiness |
| 20 Mobile | Responsive behavior across viewports | Frontend production readiness |
| 21 AI and Agent Safety | Injection, tool access, data, budgets, evals | OWASP LLM and Agentic Top 10, NIST Generative AI Profile |

## Why These Standards Matter

OWASP ASVS gives a broad security verification baseline for web applications.
OWASP API Top 10 highlights modern API risks such as broken object-level
authorization, broken authentication, unrestricted resource consumption, and
unsafe consumption of third-party APIs.

Google's SRE launch checklist emphasizes architecture, capacity, failover,
monitoring, security review, and backup/restore before launch. Twelve-Factor
config reinforces that deploy-specific config belongs in environment variables,
not committed files.

GitHub community and security features matter because public repositories need
clear contribution paths, vulnerability reporting, secret scanning, code
scanning, and dependency visibility.

The OWASP LLM and Agentic Top 10 cover prompt injection, sensitive information,
tool misuse, excessive agency, and unbounded consumption. The NIST Generative
AI Profile adds practical risk management and evaluation guidance across the
AI lifecycle.
