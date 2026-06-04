# Security Policy

This repository contains prompts, checklists, and documentation for production
readiness reviews. It does not contain runtime application code.

## Reporting Security Issues

Do not open a public issue for security-sensitive reports.

Report privately if you find:

- a prompt that encourages unsafe handling of secrets or customer data
- guidance that could weaken authentication, authorization, or sandboxing
- malicious prompt-injection content
- accidental private data, credentials, or production configuration
- a workflow or repository setting that creates supply-chain risk

If GitHub private vulnerability reporting is enabled, use that. Otherwise,
contact the maintainer privately through GitHub.

## Safety Expectations

- Do not submit real secrets, tokens, logs, screenshots, or customer data.
- Do not include private repository names, internal URLs, or production paths.
- Use fictional examples for demos and scorecards.
- If a secret was committed in any repository, rotate it immediately.

## Scope

In scope:

- unsafe prompt behavior
- unsafe contribution examples
- malicious links or dependency suggestions
- repository workflow or supply-chain risk

Out of scope:

- vulnerabilities in third-party tools mentioned by the prompts
- requests to audit private applications through this public repository
- generic disagreements about wording without a safety impact
