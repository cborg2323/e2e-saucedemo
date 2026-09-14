import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly productSearchForm: Locator;
  readonly topNav: Locator;
  
  readonly sideNav: Locator;
  readonly productGridSection: Locator;

  readonly searchInput: Locator;
  readonly searchButton: Locator;

  readonly topNavLoginLink: Locator;
  readonly topNavSignupLink: Locator;

  readonly sideNavCatalogLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productSearchForm = page.locator('#product-search form');
    this.topNav = page.locator('.desktop nav');
    
    this.sideNav = page.locator('#sidebar nav');
    this.productGridSection = page.locator('section.product-grid');

    this.searchInput = this.productSearchForm.getByPlaceholder('Search');
    this.searchButton = this.productSearchForm.locator('#search-submit');

    this.topNavLoginLink = this.topNav.getByRole('link', { name: 'Log In' });
    this.topNavSignupLink = this.topNav.getByRole('link', { name: 'Sign up' });

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

  async goToCatalog() {
    await this.sideNavCatalogLink.click();
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  getProductLocator(productQuery: string): Locator {
    return this.productGridSection.getByText(productQuery, {exact: false});
  }

}