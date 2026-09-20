# Accessibility improvements

This phase improves the site toward WCAG 2.2 Level AA without redesigning it. Existing SEO behavior, routes, metadata, and structured data remain unchanged.

## Issues addressed

| WCAG area | Affected component | Implementation |
| --- | --- | --- |
| 2.1.1 Keyboard, 2.4.3 Focus Order | Mobile navigation | Replaced the manually managed drawer with a native modal dialog. Focus remains inside the open dialog, Escape closes it, background content becomes inert, and focus returns to the trigger. |
| 4.1.2 Name, Role, Value | Language selector | Removed incomplete ARIA menu roles, generated unique control/list IDs, exposed expanded and current-language state, restored focus on Escape, and added outside-click dismissal. |
| 1.3.1 Info and Relationships | Primary navigation and not-found pages | Added localized navigation landmark names, removed duplicate hidden link text, and changed standalone 404 headings to `h1`. |
| 1.3.1 Info and Relationships, 2.1.1 Keyboard | Contact service selection | Replaced pressed buttons with a native radio group while retaining the existing pill styling. Native arrow-key selection and checked-state announcements now apply. |
| 4.1.3 Status Messages | Contact form | Added form busy state, polite success status, assertive error alerts, and removed duplicate toast announcements for the same submission result. |
| 1.1.1 Non-text Content | Landing and blog imagery | Decorative artwork now has empty alternatives. The team collage has one concise alternative, repeated collage images are silent, and blog-card images use their localized article titles. |
| 1.4.3 Contrast | Buttons and text on light backgrounds | Replaced failing light-green foreground combinations with the existing dark brand green `#147a3a`. White text on that color has approximately 5.4:1 contrast. |
| 2.5.8 Target Size | Language, social, and toast controls | Raised isolated interactive targets to at least 44 by 44 CSS pixels. |
| 2.3.3 Animation from Interactions | Global and navigation motion | Reduced-motion handling is scoped to nonessential animated components instead of disabling every transition globally. |
| 2.4.7 Focus Visible | Interactive components | Retained the global visible focus treatment and added component-level focus styles where required. |
| 1.3.1 Landmarks | Landing and project pages | Kept global headers and footers outside `main` so banner and contentinfo landmarks remain top-level. |

## Automated verification

Browser coverage checks modal focus behavior, Escape and focus restoration, language-selector relationships, native radio keyboard behavior, accessible landmarks, duplicate IDs, decorative alternatives, target sizes, and reduced-motion behavior. Lint, type checking, unit tests, production build, and browser tests are part of the completion check.

## Remaining manual verification

Automated tests cannot establish the complete screen-reader experience or all visual reflow behavior. Before a major release, verify:

- NVDA with current Chrome and Firefox, including dialog entry/exit, navigation landmarks, radio choices, form validation, and status messages.
- Keyboard-only operation through both desktop and mobile navigation at representative breakpoints.
- Windows High Contrast Mode and browser forced-colors behavior.
- Reflow and readability at 200% and 400% zoom without horizontal page scrolling.
- Mobile touch operation and target spacing on physical Android and iOS devices.
- The production Google reCAPTCHA challenge, including its keyboard and audio alternatives.
- Turkish and English pronunciation and announcement quality with the corresponding screen-reader language voices.

No automated accessibility dependency was added; the existing Playwright setup provides focused regression coverage without increasing the client bundle.

The established Inter, Montserrat, Orbitron, Outfit, and Acme treatments are retained through `next/font`, preserving the visual identity without third-party runtime font requests.
