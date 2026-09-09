import { test } from '../fixtures/fixtures';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo - Automação', () => {

    test('Deve realizar login...', async ({ homePage, loginPage }) => {
        
        await homePage.goto();

        await homePage.goToLoginPage();

        await loginPage.login('test@ts', '123');

    });

});