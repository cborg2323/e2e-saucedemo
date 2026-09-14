import { Page, Locator } from '@playwright/test';

export class CatalogPage {
    readonly page: Page;

    readonly productGridSection: Locator;
    readonly drawerDiv: Locator;
    readonly miniCart: Locator;

    readonly addToCartButton: Locator;

    readonly miniCartMyCart: Locator;
    readonly miniCartCheckout: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productGridSection = page.locator('section.product-grid');
        this.drawerDiv = page.locator('div#drawer');
        this.miniCart = page.locator('div#minicart');

        this.addToCartButton = page.getByRole('button', {name: 'Add to Cart'});

        this.miniCartMyCart = this.miniCart.getByRole('link', { name: 'My Cart' });
        this.miniCartCheckout = this.miniCart.getByRole('link', { name: 'Check Out' });
        
    }

    async showCart() {
        await this.miniCartMyCart.click();
    }

    async selectProductByName(productName: string) {
        await this.productGridSection.getByRole('link', {name: productName}).click();
    }

    async addProductToCartNoVariations() {
        await this.addToCartButton.click();
    }

    getProductLocatorByName(productName: string): Locator {
        return this.drawerDiv.getByRole('link', { name: productName });
    }
    

}