import { Locator, Page, expect } from "@playwright/test";

export class ForgotPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly resetPasswordButton: Locator;
  readonly resetPasswordPageHeading: Locator;
  readonly errorValidation: Locator;
  readonly resetSuccessHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.resetPasswordButton = page.getByRole("button", {
      name: "Reset Password",
    });
    this.resetPasswordPageHeading = page.getByRole("heading", {
      name: "Reset Password",
    });
    this.errorValidation = page.locator(
      "span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message",
    );
    this.resetSuccessHeading = page.getByRole("heading", {
      name: /Reset Password link sent successfully/i,
    });
  }

  async verifyResetRequestSuccessful(): Promise<void> {
    await expect(this.page).toHaveURL(/auth\/requestPasswordResetCode/);
    await expect(this.resetPasswordPageHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.resetPasswordButton).toBeVisible();
  }

  async submitResetRequest(): Promise<void> {
    await this.resetPasswordButton.click();
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }
}
