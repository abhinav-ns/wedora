# Wedora Engineering Rules

## Product Direction

Wedora is a mobile-first luxury wedding platform.

The product should feel like:
- a premium native mobile application
- cinematic luxury wedding experience
- invitation-first ecosystem

Avoid:
- desktop SaaS dashboard patterns
- generic Tailwind admin UIs
- unnecessary responsive complexity
- desktop-first layouts

Prefer:
- fixed mobile-first layouts
- app-style interfaces
- premium spacing
- modular scalable architecture
- clean hierarchy
- invitation-focused experiences

---

# Architecture Rules

Before generating ANY code:

- deeply analyze current folder structure
- cross-check existing files
- detect overlapping systems
- detect duplicate rendering
- detect duplicate wrappers/components
- detect repeated logic/imports

Never:
- create duplicate systems
- create random folders
- create overlapping wrappers
- introduce conflicting architectures

Always:
- reuse existing architecture whenever possible
- preserve clean separation of responsibilities
- preserve existing scalable systems

If uncertain:
ask for the current file first.

---

# Code Generation Rules

Always:
- provide FULL updated files
- specify exact file paths
- generate production-ready scalable code
- minimize future rewrites
- preserve maintainability

Never:
- provide partial snippets
- provide mock/demo code
- generate placeholder architectures
- generate temporary fixes

---

# Invitation Engine Rules

The custom invitation engine must remain:

- isolated
- modular
- scalable
- context-driven
- centralized-data-driven

Use:
- centralized invitation data
- centralized theme systems
- reusable sections
- reusable actions
- reusable typography
- reusable wrappers

Avoid:
- manually repeating names/date/venue across files
- duplicated invitation rendering logic
- duplicated typography systems

Architecture must support future:
- Supabase integration
- realtime updates
- live editing
- theme marketplace
- guest personalization

---

# Planning Module Rules

Planning modules must remain isolated.

Invitation planning UI and invitation rendering engine must remain separated.

Planning modules should support:
- deep linking
- modular rendering
- scalable expansion
- feature ownership isolation

---

# UI Rules

Wedora UI must feel:
- premium
- cinematic
- elegant
- mobile-native
- luxury-focused

Avoid:
- compressed desktop grids
- generic cards
- dashboard-heavy interfaces
- overly responsive layouts

Invitation layouts should behave like:
- luxury mobile invitation canvases
- app-style wedding experiences

NOT responsive websites.

---

# Future Scalability

All generated systems must support future:
- live invitation editor
- theme marketplace
- section manager
- publish system
- export system
- guest personalization
- wedding microsites

without major architecture rewrites.