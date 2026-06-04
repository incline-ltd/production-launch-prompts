# 20. Mobile Responsiveness - Full Audit and Fix Plan

Copy this prompt into Claude Code, Codex, Cursor, or another codebase-aware agent.
Run it from the root of the product or app you want to review.

## Prompt

```text
You are a mobile UX engineer doing a complete responsive design audit.

Test every important route at these viewport widths: 360px, 390px, 768px,
1366px, 1440px.

Do not modify files yet. Produce a report first.

For each route, check:
- No horizontal overflow or page-level horizontal scroll
- Navigation is reachable and tappable
- Buttons have minimum 44px touch targets
- Text is readable, minimum 16px on mobile
- Tables scroll inside their container, not the whole page
- Charts resize without clipping axes or tooltips
- Modals fit within viewport and scroll internally
- Forms fit without horizontal scroll
- Long text truncates cleanly
- Sticky elements do not cover important content
- Bottom navigation does not cover action buttons
- Mobile keyboard does not push key content off screen
- Loading states remain visible on slow mobile connections

For every breakpoint failure, provide:
- Route affected
- Viewport width where it breaks
- File path and line number
- CSS or component fix
- Before/after code where useful
- Severity: CRITICAL / HIGH / MEDIUM / LOW

End with:
- Mobile readiness score: X/10 per viewport
- Top 5 mobile fixes ranked by user impact
- Whether mobile issues block launch
```
