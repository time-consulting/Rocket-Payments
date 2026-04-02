---
name: Rocket Payments Website
description: Build, edit, and deploy the Rocket Payments website (rocketpayments.co.uk)
---

# Rocket Payments Website

## What This Workspace Does

This workspace is **only** for the Rocket Payments website. Nothing else.

- ✅ Edit the website code
- ✅ Preview changes locally
- ✅ Push code to GitHub
- ✅ Deploy to hosting (Replit / Vercel / Netlify)
- ❌ NOT for lead gen, outreach, CRM operations (that lives in `Darrens workspace (DOE)`)

## The Business

**Rocket Payments** sells:
- **Dojo card payment terminals** to UK businesses
- **Business funding** (merchant cash advances, loans)

**Target customers**: Restaurants, pubs, cafes, retail shops — any UK business that takes card payments.

**GHL Sub-Account**: `JHjFPjCIxrsmrNAm7R3L`
**Website**: rocketpayments.co.uk

## Workflow

### Making Changes
1. Edit files in this workspace (the website source code lives in `src/` once cloned)
2. Preview locally with `npm run dev` (or equivalent)
3. Commit and push to GitHub
4. Site automatically deploys (or manually push to Replit)

### Git Commands
```bash
# Check what's changed
git status

# Stage and commit
git add .
git commit -m "describe what you changed"

# Push to GitHub → triggers deploy
git push origin main
```

### First-Time Setup (when connecting the repo)
```bash
# Clone the existing site into this workspace
git clone <repo-url> .

# Install dependencies
npm install

# Run locally
npm run dev
```

## File Structure (once site is cloned)

```
ROCKETPAYMENTS/
├── SKILL.md          ← You're reading it (workspace definition)
├── GEMENI.md         ← AI agent instructions (Gemini/Antigravity)
├── CLAUDE.md         ← AI agent instructions (Claude)
├── AGENTS.md         ← AI agent instructions (other tools)
├── .env              ← Environment variables (GitHub token, deploy keys)
├── .gitignore        ← Files Git should ignore
├── .tmp/             ← Scratch files (auto-cleaned, never committed)
├── src/              ← Website source code [TO BE CLONED]
├── public/           ← Static assets (images, fonts) [TO BE CLONED]
├── package.json      ← Dependencies [TO BE CLONED]
└── ...               ← Other project files from the repo
```

## Design Guidelines

The Rocket Payments website should feel:
- **Professional** — this is a financial services company
- **Fast & trustworthy** — businesses need to trust you with payments
- **Clear CTAs** — "Get a Quote", "Switch to Dojo", "Apply for Funding"
- **Mobile-first** — many business owners browse on their phones

## Key Pages
- **Homepage** — hero, services overview, trust signals, CTA
- **Card Payments** — Dojo terminal features, pricing, comparison
- **Business Funding** — funding options, how it works, apply
- **About / Contact** — company info, contact form (feeds into GHL)

## What NOT To Do In This Workspace
- Don't run lead gen scripts — use `Darrens workspace (DOE)` for that
- Don't manage GHL contacts — use the MCP tools or the main workspace
- Don't store API keys for outreach tools — they don't belong here
