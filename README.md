# CSP451 CheckPoint1 — API endpoint focus (api branch)
[![CI](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/ci.yml/badge.svg)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/ci.yml)
[![Security Audit](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/security-audit.yml/badge.svg)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/security-audit.yml)
[![Deploy to GitHub Pages](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/deploy-pages.yml)
A tiny static website used to demonstrate Git & GitHub workflow for CSP451 (Week 1).

## Installation

No build tools required.

```bash
git clone https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6.git
cd CSP451-CheckPoint1-tsbrar6
## User Authentication (demo)
- Open `login.html` in your browser.
- Validates required fields and password length.
# CSP451 – CheckPoint 3: CI/CD & Collaboration

[![CI](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/ci.yml)
[![Security Audit](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/security-audit.yml/badge.svg?branch=main)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/security-audit.yml)
[![Deploy Pages](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6/actions/workflows/deploy-pages.yml)

**Live demo (GitHub Pages):** https://tsbrar6.github.io/CSP451-CheckPoint1-tsbrar6/

---

## Overview
This repository implements a simple front-end project and a full CI/CD pipeline using **GitHub Actions**:
- **CI** runs ESLint + Prettier checks, executes Jest tests (JSDOM), and builds a static `dist/`.
- **Security Audit** runs `npm audit` on a schedule and can open an Issue if high vulnerabilities are found.
- **Deploy Pages** publishes `dist/` to **GitHub Pages** on pushes to `main`.

---

## Getting Started (Local)
**Prereqs:** Node.js 18+ and npm

```bash
# install deps
npm ci

# format check / lint / test / build
npm run prettier:check
npm run lint
npm test
npm run build

