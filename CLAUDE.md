@AGENTS.md

# Project: Personal Portfolio (Chittaworn R.)

Personal portfolio website for **Chittaworn R.**, showcasing profile, tech stack, activities, projects, and contact channels.

- **Owner / GitHub:** [ChitawornR](https://github.com/ChitawornR)
- **Old portfolio (reference for content only — DO NOT copy the style):** https://github.com/ChitawornR/portfolio

> **Language rule:** All code, comments, identifiers, UI copy, commit messages, and documentation in this project MUST be written in **English**. This includes `CLAUDE.md`, `AGENTS.md`, `README.md`, and any other docs.

---

## 1. Tech Stack (used in this project)

| Layer | Tool |
|---|---|
| Framework | **Next.js 16.2.3** (App Router, under `app/`) |
| UI | React 19.2.4 + Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Language | TypeScript 5 |
| Package Manager | **pnpm** (uses `pnpm-workspace.yaml` + `pnpm-lock.yaml`) |
| Lint | ESLint 9 + `eslint-config-next` |

> ⚠️ Next.js 16 has breaking changes — **always read `node_modules/next/dist/docs/` before writing code** (see `AGENTS.md`).

### Main commands
```bash
pnpm dev      # dev server
pnpm build    # production build
pnpm start    # run production
pnpm lint     # eslint
```

Do NOT use `npm` or `yarn` with this project.

---

## 2. Website Sections

The site is a single-page, scroll-based layout with 5 main sections:

1. **Profile** — name, role, intro, photo (from `src/assets/image/me/`)
2. **Stack** — list of tech stacks (icon + label only)
3. **Activities** — activities / experiences (images from `src/assets/image/activities/`)
4. **Projects** — works (images from `src/assets/image/projects/<project-slug>/`)
5. **Contact** — contact channels (email, GitHub, LinkedIn, etc.)

---

## 3. Theme & Visual Rules

### Theme
- **Coding / Hi-Tech vibe** — terminal feel, neon glow, monospace, grid lines, code-like accents.
- **Powerful animations** — use transitions / parallax / hover effects / reveal-on-scroll / typing effects, etc., to make it feel "alive" without hurting readability.
- **Light & Dark mode** — must be toggleable and look good in both (default = follow system).

### ❌ Strictly forbidden
- **NO progress bars / status bars / percentage meters** for displaying skill level of any stack.
  → Show stacks as **icon + name only** (e.g., icon grid, badge, chip).
- Do NOT copy the style from the [old portfolio repo](https://github.com/ChitawornR/portfolio) — use it only as a reference for content / personal info.

### Icons / Logos for stacks
Use **Line Awesome** via CDN only. Add it to the `<head>` of `app/layout.tsx`:

```html
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
```

Use it like `<i className="lab la-react"></i>`, etc. Do NOT install any other icon library (lucide, react-icons, fontawesome, etc.) for stack icons.

---

## 4. Data Structure (most important)

> 🎯 **Goal:** Adding a new project / activity / stack / image in the future must be doable by **editing a single file** — no need to touch any component.

Separate data from UI completely. Keep all data under `src/data/`:

```
src/
├── assets/
│   └── image/
│       ├── me/                    # profile photos
│       ├── activities/            # activity photos
│       └── projects/<slug>/       # one folder per project
├── data/
│   ├── profile.ts                 # personal info + contact
│   ├── stacks.ts                  # array of tech stacks
│   ├── activities.ts              # array of activities
│   └── projects.ts                # array of projects
├── components/                    # UI components (read from src/data)
└── lib/                           # helpers
```

### Rules for adding new content

**Add a new project:**
1. Create folder `src/assets/image/projects/<new-slug>/` and drop images in.
2. Add an object in `src/data/projects.ts` (slug, title, description, stack, images, links).
3. Done — UI renders automatically. Do NOT modify any component.

**Add an activity / stack:** same — only edit a file in `src/data/`.

**Add a new section:** create `src/data/<section>.ts` + a component that reads from it.

---

## 5. Code Style Rules

- **Always simplify** — write short, direct code; do not introduce unnecessary abstractions (you may use the `simplify` skill).
- All files in **TypeScript** — define types for every data shape (e.g., `type Project = { ... }`).
- Use **Tailwind v4** for styling — avoid separate CSS files except `app/globals.css`.
- Always use `next/image` for images (do NOT use raw `<img>`).
- Import images from `src/assets/image/...` as static imports so Next/Image can optimize them.
- Component name = PascalCase; file naming = pick one convention (kebab-case OR PascalCase) and stay consistent.
- All identifiers, comments, and UI copy must be in **English**.
- Do NOT commit / push without explicit user permission.

---

## 6. Project Data (reference via GitHub)

For details about any project (description, real stack, links), fetch from GitHub via the connected **MCP github tools** (`mcp__github__*`).

### Project slug → GitHub repo mapping

| Slug (folder under `src/assets/image/projects/`) | Repo |
|---|---|
| `dd-rental-car` | https://github.com/ChitawornR/JavaProject — Car rental system (INT-107 OOP) |
| `heal-jai` | https://github.com/NatrinT/SoftwareEngineerProject — group project (owner: **NatrinT**, not ChitawornR) |
| `hon-hon` | https://github.com/ChitawornR/ReactNativeFinalProject |
| `spendy` | https://github.com/ChitawornR/Spendy — Mobile (ITE-439) income/expense tracker |

Other repos that may become additional projects:
- `BangkokTravel` — Mobile (ITE-439), Bangkok tourist attractions
- `XO-Game` — XO game with React + Node + MongoDB
- `portfolio` — old portfolio (reference content only, **do not copy style**)

---

## 7. .claude / .agents folders

- **You do NOT need to create a `.claude/` folder.** It is only required when adding project-specific settings, custom slash commands, or hooks via `.claude/settings.json`.
- This project already has `.agents/` plus `AGENTS.md` + `CLAUDE.md`, which is enough for instructions.
- If a custom command / hook is needed later, create `.claude/settings.json` at that point.

---

## 8. Workflow Reminders

- Before starting any task: **check available skills first**. If one matches, use it.
- Before writing Next.js code: read `node_modules/next/dist/docs/` as required by `AGENTS.md`.
- When unsure about project / user info: look it up at [github.com/ChitawornR](https://github.com/ChitawornR) via MCP github.
- Do NOT copy the style from the old portfolio — only its content.
- Always write everything in English.
