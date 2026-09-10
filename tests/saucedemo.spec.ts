import { expect, test } from '../fixtures/fixtures';

test.describe('SauceDemo MyShopify - Main features', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('should display matching items in the product grid', async ({ homePage }) => {
        const productQuery = 'grey';

        await homePage.searchProduct(productQuery);
        await expect(homePage.getProductLocator(productQuery)).toBeVisible();
    });

    test('displays wrong password error when user and/or password does not exists/matches', async ({ homePage, loginPage }) => {

        await homePage.goToLoginPage();

        await loginPage.login('test@ts', '123');

        await expect(loginPage.errorMessageList).toContainText('Incorrect email or password.');
    });

});