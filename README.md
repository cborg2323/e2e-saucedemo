# 🧪 Playwright E2E Automation Suite - SauceDemo

[![Playwright Tests](https://github.com/cborg2323/e2e-saucedemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/cborg2323/e2e-saucedemo/actions)
[![Playwright](https://img.shields.io/badge/Playwright-v1.49-green.svg?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg?logo=docker)](https://www.docker.com/)
[![Allure Report](https://img.shields.io/badge/Allure_Report-GitHub_Pages-ff69b4.svg?logo=qameta)](https://cborg2323.github.io/e2e-saucedemo/)

A scalable and maintainable End-to-End (E2E) test automation architecture designed for the [SauceDemoMyShopify](https://sauce-demo.myshopify.com/) web application. Built with **Playwright**, **TypeScript**, **Docker**, and **GitHub Actions** with automated **Allure Report** deployments.

---

## 🚀 Key Features

* **Page Object Model (POM):** Decoupled UI interactions from test logic for high maintainability.
* **Custom Fixtures:** Encapsulated page object instantiation and context lifecycle management for cleaner test files.
* **Resilient Locators:** User-centric locators (`getByRole`, `getByPlaceholder`) to ensure accessibility-first testing and immunity to UI layout refactoring.
* **CI/CD Integration:** Automated test execution via GitHub Actions on `push` and `pull_request`.
* **Interactive Reporting:** Historical execution metrics with Allure Reports published automatically to **GitHub Pages**.
* **Containerized Execution:** Fully dockerized environment for identical local and CI execution.

---

## 🛠️ Tech Stack

* **Core Framework:** [Playwright](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Reporting:** [Allure Framework](https://allurereport.org/) (`allure-playwright`)
* **CI/CD Pipeline:** [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)
* **Containerization:** [Docker](https://www.docker.com/)

---

## 📂 Project Structure

```text
e2e-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions CI/CD pipeline
├── fixtures/
│   └── fixtures.ts            # Custom Playwright fixtures
├── pages/
│   ├── HomePage.ts            # Home / Navigation Page Object
│   └── LoginPage.ts           # Authentication Page Object
├── tests/
│   ├── home.spec.ts           # E2E Home page tests
│   └── login.spec.ts          # E2E Login tests
├── Dockerfile                 # Container setup for local/CI consistency
├── playwright.config.ts       # Global Playwright and Allure configuration
├── tsconfig.json              # TypeScript engine setup
└── package.json               # Dependencies and runner scripts
