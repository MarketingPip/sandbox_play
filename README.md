# Browser Globals Manager

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/OWNER/REPO/Browser%20Global%20Check?label=CI)](https://github.com/OWNER/REPO/actions/workflows/browser_globals.yml)
[![npm version](https://img.shields.io/npm/v/your-package-name)](https://www.npmjs.com/package/your-package-name)

A GitHub repository workflow for **tracking, updating, and releasing browser global variables** with automated versioning and changelog generation.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Getting Started](#getting-started)
* [Workflow](#workflow)
* [Contributing](#contributing)
* [License](#license)

---

## Overview

This repository provides a streamlined system for:

* Detecting changes in browser global variables.
* Maintaining a structured `browser_globals.json`.
* Updating `CHANGELOG.md` automatically.
* Bumping version numbers according to semantic versioning.
* Creating GitHub releases safely and atomically.

The workflow ensures that **a release is only created if all steps succeed**, preventing partial or inconsistent versions.

---

## Features

* ✅ Automated detection of added/removed browser globals
* ✅ Version bumping (`patch`, `minor`, `major`)
* ✅ Changelog generation and updates
* ✅ GitHub release creation with full release notes
* ✅ Fail-safe workflow to avoid broken releases

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) ≥ 20
* [npm](https://www.npmjs.com/)
* GitHub repository with workflows enabled

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/OWNER/REPO.git
cd REPO
npm install
```

### Usage

Run the browser globals check manually via GitHub Actions:

1. Go to **Actions → Browser Global Check → Run workflow**
2. Select a version bump type: `patch`, `minor`, or `major`
3. Trigger the workflow

The workflow will:

* Compare `browser_globals.json` with previous version
* Update `CHANGELOG.md` if needed
* Bump the version
* Commit changes
* Push tags and create a GitHub release

---

## Workflow Details

### Steps

1. **Check Globals**: Compares current globals with previous snapshot (`browser_globals.json`).
2. **Generate Changelog**: Prepares the changelog entries for added/removed globals.
3. **Version Bump & Commit**: Commits changes and bumps the version.
4. **Release**: Creates a GitHub release with detailed notes.

### Safety Measures

* The workflow fails fast if any step encounters an error.
* Version bump only occurs after changelog generation succeeds.
* Releases are only created if there are actual changes.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-change`
3. Make your changes and run tests
4. Commit and push: `git push origin feature/my-change`
5. Open a pull request

Please follow semantic versioning guidelines when suggesting changes to browser globals.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

