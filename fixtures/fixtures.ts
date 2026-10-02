import { test as base, BrowserContext } from '@playwright/test';
import { launch } from 'cloakbrowser';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';
import { SignupPage } from '../pages/SignupPage';

type MyFixtures = {
    cloakContext: BrowserContext;
    homePage: HomePage;
    loginPage: LoginPage;
    catalogPage: CatalogPage;
    signupPage: SignupPage;
};

export const test = base.extend<MyFixtures>({
    cloakContext: async ({ }, use) => {
        const browser = await launch({
            headless: false,
            // humanize: true,
        });

        const context = await browser.newContext({
            locale: 'pt-BR',
            timezoneId: 'America/Sao_Paulo',
        });

        await use(context);

        await context.close();
        await browser.close();
    },
    page: async ({ cloakContext }, use) => {
        const page = await cloakContext.newPage();
        await use(page);
        await page.close();
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
    signupPage: async ({ page }, use) => {
        const signupPage = new SignupPage(page);
        await use(signupPage);
    },

});

export { expect } from '@playwright/test';