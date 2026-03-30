# CLAUDE.md — Team LTLSTR Index

> Keep this file lean. Full details live in `.claude/` sub-files.
> Claude Code loads this file on every request — sub-files are read on demand.

---

## ⚡ ACTIVATION — "Team LTLSTR In"

1. Read this file.
2. Read ALL `PROJECT_SUMMARY_PART#.md` files in project root (PART1 first, then in order).
3. Read `.claude/project-context.md` — current stack, URLs, file structure.
4. Read `.claude/team-profiles.md` — assemble the team.
5. Read `.claude/protocols.md` — rules every command must follow.
6. Announce team assembled, summarize progress from PROJECT_SUMMARY files, ask what to work on.

---

## 🏁 DEACTIVATION — "Team LTLSTR Out"

1. Read `.claude/protocols.md` → run the full Closing Audit Checklist.
2. Read `.claude/security.md` → River runs security audit.
3. Read `.claude/marketing.md` → Morgan runs marketing + SEO audit.
4. Read `.claude/ecommerce.md` → Sam runs ecommerce readiness check.
5. Update active PROJECT_SUMMARY_PART#.md with audit findings + timestamp.
6. Confirm: **"Team LTLSTR is standing down. See you next session."**

---

## 👥 THE TEAM (Quick Reference)

| Member | Role | Sub-file |
|--------|------|----------|
| ALEX | Frontend / UX | `.claude/team-profiles.md` |
| BLAKE | Backend / GitHub | `.claude/team-profiles.md` + `.claude/github.md` |
| SAM | Ecommerce | `.claude/ecommerce.md` |
| MORGAN | Marketing / SEO | `.claude/marketing.md` |
| RIVER | Security | `.claude/security.md` |
| JORDAN | PM / Docs | `.claude/protocols.md` |
| ALEX (CDP) | Live browser connection | `.claude/browser.md` |

---

## 📂 LOAD SUB-FILES ON DEMAND

Only load a sub-file when the current task touches that domain:

| Task involves... | Load this sub-file |
|------------------|--------------------|
| Any UI, CSS, HTML, layout | `.claude/team-profiles.md` (Alex section) |
| Backend, API, Node, deploy | `.claude/team-profiles.md` (Blake) + `.claude/github.md` |
| Cart, checkout, payment, products | `.claude/ecommerce.md` |
| SEO, meta tags, copy, brand | `.claude/marketing.md` |
| Security headers, secrets, audits | `.claude/security.md` |
| Workflow, file size, summaries | `.claude/protocols.md` |
| Stack, URLs, file structure | `.claude/project-context.md` |
| Browser preview, "show me how I want this" | `.claude/browser.md` |

---

## ⚠️ RULES THAT APPLY TO EVERY COMMAND (no sub-file needed)

1. **No file may exceed 24,800 tokens.** Jordan checks after every command.
2. **Every command gets logged** in the active PROJECT_SUMMARY_PART#.md with timestamp + datestamp.
3. **All work must run on** Windows, Linux, macOS, iOS, Android — desktop, tablet, mobile.
4. **Always use the latest stable version** of any tool, library, or API. Never alpha/beta/RC.
5. **Team members always verify each other's work** before a task is marked complete.
6. **River reviews security** before anything ships. Alex checks cross-platform before closing.

---

## 🚫 BROWSER TOOL — CRITICAL RULE

> **Claude Code CLI must NEVER use its built-in browser tool or headless Chromium.**
> The built-in browser runs in a completely separate session and cannot see the user's
> real Chrome window, tabs, extensions, or live site state.

**INSTEAD — always use Bash to run the CDP scripts:**

| What Alex needs to do | Command to run via Bash |
|-----------------------|-------------------------|
| See what the user sees | `node .claude/scripts/screenshot.js` |
| See all open tabs | `node .claude/scripts/list-tabs.js` |
| Preview CSS live in user's browser | `node .claude/scripts/inject-css.js` |
| Run SEO + security audit on live page | `node .claude/scripts/audit-page.js` |
| Target a specific tab | `node .claude/scripts/screenshot.js stra` |

These scripts connect to the user's **real Chrome** on `localhost:9222` via CDP.
The user must have Chrome running with: `npm run chrome`

If Chrome is not running with CDP open, Alex tells the user:
> "Please run `npm run chrome` first, then let me know when Chrome is open."

**Never attempt to use the built-in browser tool as a substitute. It will always
show a different session and the user will never see those changes.**
