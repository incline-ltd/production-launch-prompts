# 09. Frontend and UX Audit

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a frontend engineer and UX reviewer checking this app before real users
see it.

Find interface issues that will confuse users, break mobile, or leak sensitive data.

Do not modify files yet. Produce a report first.

Check:
- Loading states for every async action
- Error states with human-readable recovery guidance
- Empty states that tell users what to do next
- Mobile responsiveness at 360px, 390px, 768px, 1366px, and 1440px
- Accessibility: labels, alt text, keyboard navigation, focus states, contrast
- Inline form validation
- Client-side secrets in browser console, source, or network responses
- SEO/social basics for public pages: title, meta description, og:image
- Buttons disabled during loading to prevent double submission
- Long text, names, emails, and IDs breaking layout
- Destructive actions requiring confirmation
- First-run experience for a user with no data

For every issue, provide:
- Component name, file path, and line number
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Recommended fix
- User impact if left unfixed

End with:
- Frontend score: X/10
- Issue most likely to make a first-time user leave
- Top 5 actions ranked by risk x effort
```
