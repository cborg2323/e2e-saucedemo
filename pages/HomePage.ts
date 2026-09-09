import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly sideNav: Locator;
  readonly topNav: Locator;

  readonly sideNavCatalogLink: Locator;
  readonly sideNavBlogLink: Locator;

  readonly topNavLoginLink: Locator;
  readonly topNavCartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sideNav = page.locator('#sidebar nav');
    this.topNav = page.locator('header');

    this.sideNavCatalogLink = this.sideNav.getByRole('link', { name: 'Catalog' });
    this.sideNavBlogLink = this.sideNav.getByRole('link', { name: 'Blog' });

    this.topNavLoginLink = this.topNav.getByRole('link', { name: 'Log In' });
    this.topNavCartLink = this.topNav.getByRole('link', { name: 'My Cart' });
  }

}