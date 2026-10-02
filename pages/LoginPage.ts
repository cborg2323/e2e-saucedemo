import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    // readonly loginForm: Locator;

    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly siginButton: Locator;

    readonly errorMessageList: Locator;

    constructor(page: Page) {
        this.page = page;

        // this.loginForm = page.locator('form#customer_login');

        this.emailAddressInput = this.page.getByLabel('Email Address');
        this.passwordInput = this.page.getByLabel('Password');
        this.siginButton = this.page.locator('input.button[value="Sign In"]');

        this.errorMessageList = this.page.locator('.errors');

    }

    async login(user: string, pass: string) {
        await this.emailAddressInput.click();
        await this.emailAddressInput.fill(user);

        await this.passwordInput.click();
        await this.passwordInput.fill(pass);

        // await this.siginButton.click();

        await this.passwordInput.press('Enter');
    }
}