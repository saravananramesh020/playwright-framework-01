import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: 'Submit'});
    }

    async login(userName: string, passWord: string) {

        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.loginButton.click();
    }
}