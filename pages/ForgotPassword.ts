import { Locator, Page, expect } from "@playwright/test";
import { forgotPasswordLocators } from "../locators/forgotPasswordLocators";

export class ForgotPage {
  readonly page: Page;
  readonly usernameInput!: Locator;
  readonly resetPasswordButton!: Locator;
  readonly resetPasswordPageHeading!: Locator;
  readonly errorValidation!: Locator;
  readonly resetSuccessHeading!: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole(
      forgotPasswordLocators.usernameInput.role,
      { name: forgotPasswordLocators.usernameInput.name },
    );
    this.resetPasswordButton = page.getByRole(
      forgotPasswordLocators.resetPasswordButton.role,
      { name: forgotPasswordLocators.resetPasswordButton.name },
    );
    this.resetPasswordPageHeading = page.getByRole(
      forgotPasswordLocators.resetPasswordPageHeading.role,
      { name: forgotPasswordLocators.resetPasswordPageHeading.name },
    );
    this.errorValidation = page.locator(
      forgotPasswordLocators.errorValidation.css,
    );
    this.resetSuccessHeading = page.getByRole(
      forgotPasswordLocators.resetSuccessHeading.role,
      { name: forgotPasswordLocators.resetSuccessHeading.name },
    );
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
