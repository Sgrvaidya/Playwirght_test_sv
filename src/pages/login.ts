import { Page } from "playwright";

export class login {
    readonly username: any;
    readonly password: any;
    readonly loginBtn: any;
    readonly errorMessage: any;
    constructor(private page: Page) {
        this.page = page;
        this.username = page.locator("//input[@id='user-name']");
        this.password = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//input[@id='login-button']");
        this.errorMessage = page.locator('[data-test="error"]');

    }
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click({ timeout: 15000 });
    }

}