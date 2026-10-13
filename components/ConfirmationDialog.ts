import { type Locator, type Page } from "@playwright/test";
import { confirmationDialogLocators } from "../locators/confirmationDialogLocators";

/** Shared OrangeHRM confirmation dialog used by delete workflows. */
export class ConfirmationDialog {
  readonly root!: Locator;
  readonly confirmDeleteButton!: Locator;
  readonly cancelButton!: Locator;

  constructor(page: Page) {
    this.root = page.getByRole(confirmationDialogLocators.dialogRole);
    this.confirmDeleteButton = this.root.getByRole(
      confirmationDialogLocators.buttonRole,
      { name: confirmationDialogLocators.confirmDeleteName },
    );
    this.cancelButton = this.root.getByRole(
      confirmationDialogLocators.buttonRole,
      {
        name: confirmationDialogLocators.cancelName,
        exact: confirmationDialogLocators.exact,
      },
    );
  }

  async confirmDelete(): Promise<void> {
    await this.confirmDeleteButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
