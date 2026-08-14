import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly profileMenu: Locator;
  readonly errorMessage: Locator;
  readonly validationMessages: Locator;
  readonly forgotPasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.profileMenu = page.locator("li.oxd-userdropdown");
    this.errorMessage = page.getByText(
      /^(Invalid credentials|Account disabled)$/,
    );
    this.validationMessages = page.locator(".oxd-input-field-error-message");
    this.forgotPasswordButton = page.getByText("Forgot your password?", {
      exact: true,
    });
  }

  async visitPage(): Promise<void> {
    await this.page.goto("/", {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
  }

  async login(Username: string, Password: string) {
    await this.usernameInput.fill(Username);
    await this.passwordInput.fill(Password);
    await this.loginButton.click();
  }

  async verifyLoginSuccessful(): Promise<void> {
    await expect(this.page).toHaveURL(
      /\/(dashboard\/index|pim\/viewPersonalDetails\/empNumber\/\d+)/,
      { timeout: 20_000 },
    );
    await expect(this.profileMenu).toBeVisible({ timeout: 20_000 });
  }

  async verifyLoginUnsuccessful(): Promise<void> {
    await expect(this.page).toHaveURL(/auth\/login/);
    await expect(this.profileMenu).not.toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
  async clickOnForgotPassword(): Promise<void> {
    await this.forgotPasswordButton.click();
  }
}
