import { test } from '../fixtures/fixtures';

test.describe('SauceDemo - Automação', () => {

    test('Deve realizar login...', async ({ homePage }) => {
        
        await homePage.goto();

        await homePage.goToLoginPage();

    });

});