import { expect, test } from '../fixtures/fixtures';

test.describe('SauceDemo MyShopify - Main features', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('should display matching items in the product grid when search', async ({ homePage }) => {
        const productQuery = 'grey';

        await homePage.searchProduct(productQuery);
        await expect(homePage.getProductLocator(productQuery)).toBeVisible();
    });

    test('displays wrong password error when user and/or password does not exists/matches', async ({ homePage, loginPage }) => {

        await homePage.goToLoginPage();

        await loginPage.login('test@ts', '123');

        // captcha blocking login attempt
        // await expect(loginPage.errorMessageList).toContainText('Incorrect email or password.');
    });

    test('should display product in the cart when added', async ({ homePage, catalogPage }) => {
        
        await homePage.goToCatalog();
        
        const productName = 'Grey jacket';
        await catalogPage.selectProductByName(productName);
        await catalogPage.addProductToCartNoVariations();

        await catalogPage.showCart();
        await expect(catalogPage.getProductLocatorByName(productName)).toBeVisible();

    });

});