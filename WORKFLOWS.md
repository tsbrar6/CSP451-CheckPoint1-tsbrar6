# Workflow Documentation

This repo uses three GitHub Actions workflows stored in `.github/workflows/`:
- `ci.yml`
- `security-audit.yml`
- `deploy-pages.yml`

---

## 1) CI Pipeline — `.github/workflows/ci.yml`

**Purpose**
- Lint the code with ESLint
- Check formatting with Prettier
- Run unit tests with Jest and collect coverage
- (Optional) Upload coverage artifact

**Triggers**
- `on: push` for branches (e.g., `main`, `develop`)
- `on: pull_request` to validate PRs before merging

**Jobs & Dependencies**
- `lint` → runs ESLint & Prettier check
- `test` → runs after checkout + setup-node, runs `npm ci` then `npm test -- --coverage`

**Secrets required**
- None (unless you later add Codecov or other services)

**Troubleshooting**
- If ESLint fails: open “Actions → CI” run → check the `lint` step logs
- If tests fail: ensure `jest.config.js` is valid UTF-8 and tests pass locally with `npm test`
- Coverage not uploaded: verify the artifact step is enabled in `ci.yml`

---

## 2) Security Audit — `.github/workflows/security-audit.yml`

**Purpose**
- Runs `npm audit` to detect vulnerabilities

**Triggers**
- **Schedule** (cron) once per day
- Manual dispatch if needed

**Jobs & Dependencies**
- Single job that checks out code, sets up Node, runs `npm ci`, then `npm audit`

**Secrets required**
- None

**Troubleshooting**
- If the job fails with vulnerabilities: run `npm audit fix` locally (or update packages) and commit
- If schedule doesn’t run: confirm the repo is public or you have recent activity (scheduled workflows may pause on inactive repos)

---

## 3) Deploy to GitHub Pages — `.github/workflows/deploy-pages.yml`

**Purpose**
- Builds the site and deploys to GitHub Pages

**Triggers**
- `on: push` to `main`

**Jobs & Dependencies**
- `build` → installs deps, runs your build script (or a simple copy if static)
- `deploy` → publishes to Pages (after a successful build)

**Secrets required**
- None for standard Pages deployments (GitHub provides the token automatically)

**Troubleshooting**
- Pages not updating: check “Actions → Deploy Pages” logs for errors
- Confirm repo settings → **Pages** is set to “GitHub Actions” as the source
- If build is skipped: ensure your build step actually outputs the expected files

---

## Quick Reference

**Run locally**
```bash
npm ci
npm run prettier:check
npm run lint
npm test
npm run build
