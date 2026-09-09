import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly sideNav: Locator;
  readonly topNav: Locator;
  readonly miniCart: Locator;

  readonly sideNavCatalogLink: Locator;

  readonly topNavLoginLink: Locator;
  readonly topNavSignupLink: Locator;

  readonly miniCartMyCart: Locator;
  readonly miniCartCheckout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sideNav = page.locator('#sidebar nav');
    this.topNav = page.locator('.desktop nav');
    this.miniCart = page.locator('#minicart div');

    this.sideNavCatalogLink = this.sideNav.getByRole('link', { name: 'Catalog' });

    this.topNavLoginLink = this.topNav.getByRole('link', { name: 'Log In' });
    this.topNavSignupLink = this.topNav.getByRole('link', { name: 'Sign up' });

    this.miniCartMyCart = this.miniCart.getByRole('link', { name: 'My Cart' });
    this.miniCartCheckout = this.miniCart.getByRole('link', { name: 'Check Out' });
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

}