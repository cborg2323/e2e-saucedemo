import { Page, Locator } from 'playwright/test';


export class SignupPage {
    readonly page: Page;

    readonly signupForm: Locator;
    
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    readonly createButton: Locator;

    readonly errorsList: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupForm = page.locator('form#create_customer');

        this.firstNameInput = this.signupForm.locator('input[name="customer[first_name]"]');
        this.lastNameInput = this.signupForm.locator('input[name="customer[last_name]"]');
        this.emailInput = this.signupForm.locator('input[name="customer[email]"]');
        this.passwordInput = this.signupForm.locator('input[name="customer[password]"]');

        this.createButton = this.signupForm.getByRole('button', { name: 'Create' });

        this.errorsList = this.signupForm.locator('.errors ul');

    }

    async createAccount(firstName: string, lastName: string, email: string, password: string) {
        
        await this.firstNameInput.pressSequentially(firstName, { delay: 50 });
        await this.lastNameInput.pressSequentially(lastName, { delay: 50 });
        await this.emailInput.pressSequentially(email, { delay: 50 });
        await this.passwordInput.pressSequentially(password, { delay: 50 });

        await this.createButton.click();
        // await this.passwordInput.press('Enter');

    }
}