import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly loginForm: Locator;

    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly siginButton: Locator;

    readonly errorMessageList: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginForm = page.locator('form#customer_login');

        this.emailAddressInput = this.loginForm.getByLabel('Email Address');
        this.passwordInput = this.loginForm.getByLabel('Password');
        this.siginButton = this.loginForm.getByRole('button', {name: 'Sign In'});

        this.errorMessageList = this.loginForm.locator('.errors');

    }

    async login(user: string, pass: string) {
        await this.emailAddressInput.click();
        await this.emailAddressInput.pressSequentially(user, { delay: 50 });

        await this.passwordInput.click();
        await this.passwordInput.pressSequentially(pass, { delay: 50 });

        // await this.siginButton.click();

        await this.passwordInput.press('Enter');
    }
}