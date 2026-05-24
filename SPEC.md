Gamified MkDocs Extension — V1 Spec

## Overview

Build a lightweight browser extension that adds progression mechanics to an open-source book/documentation site powered by MkDocs. The extension injects a minimal UI into documentation pages and allows readers to mark chapters as completed.

The experience should feel subtle and developer-oriented, not like a mobile game or LMS.

## Scope (V1)

**Included in V1:**
- Chapter completion tracking
- Local progress persistence (no backend)
- XP accumulation per completed page
- Progress visualization (sidebar widget)

**Explicitly NOT in V1:**
- authentication, cloud sync, multiplayer/social systems
- quizzes, achievements, streaks
- notifications, leaderboards
- telemetry, analytics backend

## Goals

**Primary Goals:**
- Encourage consistent reading
- Create visible progression
- Increase reader retention
- Keep UX lightweight and non-intrusive

## Tech Stack

**Browser Extension:**
- Manifest V3
- TypeScript
- Vite
- Vanilla JS or lightweight framework (prefer Preact)

**Storage:**
- chrome.storage.local only
- No external database

## Supported Sites

Target:
- MkDocs sites
- Material for MkDocs theme

Detection strategy (avoid fragile selectors):
- navigation sidebar
- page content area
- footer region

## Architecture

**Execution Flow:**
```
Content Script runs on page load
  ↓
Detect if MkDocs page (look for sidebar/footer selectors)
  ↓
Inject UI (finish button + progress widget)
  ↓
Set up event listeners on button
  ↓
Read/write to chrome.storage.local
  ↓
Calculate XP/level on state change
  ↓
Update UI to reflect current state
```

**Folder Structure:**
```
/src
  /content       # Content script
  /storage       # Storage layer (read/write/schema)
  /ui            # Injected UI components
  /utils         # Helpers (URL parsing, XP calculation)
  manifest.json
```

## Core Features

### 1. Finish Chapter Button

Inject a button at the bottom of documentation pages.

**UI:**
```
[ Finish Chapter ]
+50 XP
```

**Behavior:**
- marks current page as completed
- stores completion state locally
- updates XP total and progress display
- on subsequent visits: shows `[ Completed ✓ ]` (disabled)

### 2. Progress Sidebar Widget

Inject a compact floating widget (collapsible, fixed position).

**UI:**
```
Level 2
XP: 150

Progress
[■■■■■■□□□□] 40%
```

**Requirements:**
- collapsible/minimizable
- non-obstructive (floating sidebar)
- minimal visual noise

### 3. XP System

**Rules:**
- Each completed page grants 50 XP (default)
- A page grants XP only once (prevent farming)
- Simple level thresholds (deterministic):
  - Level 1 → 0 XP
  - Level 2 → 100 XP
  - Level 3 → 250 XP
  - Level 4 → 500 XP

**Future-ready (not in V1):**
- per-page XP overrides via page metadata (gamification: xp: 100)

## Data Model & Storage

**Local Storage Schema:**
```json
{
  “xp”: 150,
  “completed_pages”: {
    “/python/basics/”: {
      “completed_at”: “2026-05-24T10:00:00Z”,
      “xp”: 50
    }
  }
}
```

**Requirements:**
- persistent across browser restarts
- fast reads/writes
- resilient to duplicate completion (idempotent)

**URL Handling:**
- Identify pages by pathname only
- Ignore query params and hash fragments
- Example: `/docs/python/loops/` is the unique ID

## Design & UX

**Design Principles:**
The extension must feel:
- subtle, professional, developer-centric
- low distraction

Avoid:
- flashy animations, excessive colors, popups, confetti, cartoon aesthetics

**Inspiration:**
- GitHub contribution graph
- VSCode UI
- Steam achievement minimalism

## Implementation Details

### Injection Strategy

**Use content scripts to:**
- Detect MkDocs pages
- Inject finish button into footer region
- Inject progress widget as floating sidebar (fixed position)

**Do NOT modify:**
- main content text
- navigation structure

### Completion Rules

- A page can only grant XP once (prevent duplicate XP farming)
- Future: allow manual reset via extension settings

## Technical Requirements

**Performance:**
- Load quickly, avoid blocking rendering
- Avoid excessive DOM observers
- Use minimal memory
- Target: near-zero noticeable performance impact

**Accessibility:**
- keyboard accessible
- proper button semantics
- sufficient color contrast
- screen-reader friendly labels

**Error Handling:**
Gracefully handle (fail silently):
- unsupported sites
- missing DOM anchors
- corrupted local storage

## Success Criteria

V1 is successful if users can:
1. install the extension
2. open a MkDocs page
3. click “Finish Chapter”
4. see XP/progress update immediately
5. revisit later and retain progress

Without needing: accounts, onboarding, tutorials, configuration

## Future Expansion Hooks

Design V1 to support future additions:
- achievements, quests
- GitHub login, synced profiles
- contributor XP, backend API
- cross-device sync, multi-book support

Avoid architectural decisions that tightly couple logic to a single site.

