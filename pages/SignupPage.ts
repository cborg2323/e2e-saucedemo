import { Page, Locator } from 'playwright/test';


export class SignupPage {
    readonly page: Page;

    // readonly signupForm: Locator;
    
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    readonly createButton: Locator;

    readonly errorsList: Locator;

    constructor(page: Page) {
        this.page = page;

        // this.signupForm = page.locator('form#create_customer');

        this.firstNameInput = this.page.locator('input[name="customer[first_name]"]');
        this.lastNameInput = this.page.locator('input[name="customer[last_name]"]');
        this.emailInput = this.page.locator('input[name="customer[email]"]');
        this.passwordInput = this.page.locator('input[name="customer[password]"]');

        this.createButton = this.page.locator('input.button[value="Create"]');

        this.errorsList = this.page.locator('.errors');

    }

    async createAccount(firstName: string, lastName: string, email: string, password: string) {
        await this.firstNameInput.click();
        await this.firstNameInput.fill(firstName);
        
        await this.lastNameInput.click();
        await this.lastNameInput.fill(lastName);
        
        await this.emailInput.click();
        await this.emailInput.fill(email);
        
        await this.passwordInput.click();
        await this.passwordInput.fill(password);

        // await this.createButton.click();
        await this.passwordInput.press('Enter');

    }
}