# 🎭 Playwright E2E Automation Suite — Sauce Demo

[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Allure Report](https://img.shields.io/badge/Allure_Report-FF6B6B?style=flat&logo=allure&logoColor=white)](https://allurereport.org/)
[![Live Report](https://img.shields.io/badge/Live_Report-View_Now-2EAD33?style=flat&logo=githubpages&logoColor=white)](https://cborg2323.github.io/e2e-saucedemo/)

---

## 📋 Overview

A scalable and maintainable **End-to-End (E2E)** test suite designed for the [Sauce Demo](https://sauce-demo.myshopify.com/) web application. Built with **Playwright**, **TypeScript**, **Docker**, and **GitHub Actions**, with automated **Allure Report** publishing.

The project follows an **accessibility-first** approach by using user-centric locators (`getByRole`, `getByPlaceholder`) that are resilient to layout refactoring and promote accessibility best practices.

> 📊 **[View the Live Allure Report →](https://cborg2323.github.io/e2e-saucedemo/)**

---

## ✨ Features

- **Page Object Model (POM)** — UI interactions are decoupled from test logic, providing high maintainability.
- **Custom Fixtures** — Encapsulated Page Object instantiation and context lifecycle management for cleaner tests.
- **Resilient Locators** — User-centric selectors (`getByRole`, `getByPlaceholder`) keep tests immune to layout changes.
- **CI/CD Integration** — Automated test execution via GitHub Actions on `push` and `pull_request` events.
- **Interactive Reporting** — Historical execution metrics with Allure Reports automatically published to **GitHub Pages**.
- **Containerized Execution** — Fully Dockerized environment for identical local and CI execution.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Core Framework** | [Playwright](https://playwright.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Reporting** | [Allure Framework](https://allurereport.org/) (`allure-playwright`) |
| **CI/CD Pipeline** | [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/) |
| **Containerization** | [Docker](https://www.docker.com/) |

---

## 📁 Project Structure

```
e2e-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD pipeline
├── fixtures/
│   └── fixtures.ts                 # Custom Playwright fixtures
├── pages/
│   ├── HomePage.ts                 # Page Object: Home / Navigation
│   └── LoginPage.ts                # Page Object: Authentication
├── tests/
│   ├── home.spec.ts                # Home page E2E tests
│   └── login.spec.ts               # Login E2E tests
├── Dockerfile                      # Container setup for local/CI consistency
├── playwright.config.ts            # Global Playwright and Allure configuration
├── tsconfig.json                   # TypeScript engine configuration
└── package.json                    # Dependencies and execution scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Docker** (optional, for containerized execution)

### Installation

```bash
# Clone the repository
git clone https://github.com/cborg2323/e2e-saucedemo.git
cd e2e-saucedemo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run with the interactive UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run tests in a specific browser
npx playwright test --project=chromium
```

### Docker Execution

```bash
# Build the image
docker build -t e2e-saucedemo .

# Run tests inside the container
docker run --rm e2e-saucedemo
```

---

## 📊 Reports

The suite uses the **Allure Framework** to generate detailed reports with historical execution metrics.

🌐 **Live Report:** [https://cborg2323.github.io/e2e-saucedemo/](https://cborg2323.github.io/e2e-saucedemo/)

To generate and view a report locally:

```bash
# Generate the Allure report locally
npx allure generate ./allure-results --clean

# Open the report in the browser
npx allure open ./allure-report
```

> In CI, reports are automatically published to **GitHub Pages** on every run. The live report keeps a history of the last **20 executions**.

---

## 🔄 CI/CD

The continuous integration pipeline is defined in `.github/workflows/playwright.yml` and runs on a `ubuntu-latest` runner with a 60-minute timeout. It is automatically triggered on **pushes** and **pull requests** targeting the `main` and `master` branches.

The workflow executes the following main tasks:

1. **Checkout & Environment Setup** — Checks out the repository and sets up Node.js (LTS).
2. **Dependency Installation** — Installs project dependencies with `npm ci` and downloads Playwright browsers with `npx playwright install --with-deps`.
3. **Test Execution** — Runs the full E2E suite (`npx playwright test`). Uses `continue-on-error: true` so reports are still generated even when tests fail.
4. **Playwright HTML Report Upload** — Uploads the native Playwright HTML report as a build artifact, retained for 30 days.
5. **Allure History Retrieval** — Fetches the previous Allure history from the `gh-pages` branch to preserve trend data across runs.
6. **Allure Report Generation** — Generates the Allure report and keeps the last 20 executions in the history.
7. **GitHub Pages Deployment** — Publishes the final Allure report to the `gh-pages` branch using `peaceiris/actions-gh-pages`, with the required `contents: write` permission granted to the bot.

---

## 📄 License

This project is intended for educational and portfolio purposes. Please refer to the repository for license details.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/cborg2323">cborg2323</a>
</p>