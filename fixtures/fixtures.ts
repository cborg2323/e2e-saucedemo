import { test as base } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    page: async ({ page }, use) => {
        await page.addInitScript(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined,
            });
        });
        
        // Passa a página modificada para o restante das fixtures e testes
        await use(page);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

});

export { expect } from '@playwright/test';