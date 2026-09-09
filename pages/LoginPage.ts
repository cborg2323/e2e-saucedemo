import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly loginForm: Locator;

    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly siginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginForm = page.locator('form#customer_login');

        this.emailAddressInput = this.loginForm.getByLabel('Email Address');
        this.passwordInput = this.loginForm.getByLabel('Password');
        this.siginButton = this.loginForm.getByRole('button', {name: 'Sign In'});

    }

    async login(user: string, pass: string) {
        await this.emailAddressInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.siginButton.click();
    }
}