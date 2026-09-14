import { test as base } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';

chromium.use(stealthPlugin());

type MyFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    catalogPage: CatalogPage;
};

export const test = base.extend<MyFixtures>({
    browser: async ({}, use) => {
        const browser = await chromium.launch({
            headless: !!process.env.CI,
            args: ['--disable-blink-features=AutomationControlled']
        });
        await use(browser);
        await browser.close();
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    catalogPage: async ({ page }, use) => {
        const catalogPage = new CatalogPage(page);
        await use(catalogPage);
    },

});

export { expect } from '@playwright/test';