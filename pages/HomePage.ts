import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly productSearchForm: Locator;
  readonly topNav: Locator;
  readonly miniCart: Locator;
  readonly sideNav: Locator;

  readonly searchInput: Locator;
  readonly searchButton: Locator;

  readonly topNavLoginLink: Locator;
  readonly topNavSignupLink: Locator;

  readonly miniCartMyCart: Locator;
  readonly miniCartCheckout: Locator;

  readonly sideNavCatalogLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productSearchForm = page.locator('#product-search form');
    this.topNav = page.locator('.desktop nav');
    this.miniCart = page.locator('#minicart div');
    this.sideNav = page.locator('#sidebar nav');

    this.searchInput = this.productSearchForm.getByPlaceholder('Search');
    this.searchButton = this.productSearchForm.locator('#search-submit');

    this.topNavLoginLink = this.topNav.getByRole('link', { name: 'Log In' });
    this.topNavSignupLink = this.topNav.getByRole('link', { name: 'Sign up' });

    this.miniCartMyCart = this.miniCart.getByRole('link', { name: 'My Cart' });
    this.miniCartCheckout = this.miniCart.getByRole('link', { name: 'Check Out' });

    this.sideNavCatalogLink = this.sideNav.getByRole('link', { name: 'Catalog' });

  }

  async goto() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }

  async goToLoginPage() {
    await this.topNavLoginLink.click();
  }

  async goToSignupPage() {
    await this.topNavSignupLink.click();
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

}