import { type Locator, type Page } from "@playwright/test";

/** Shared OrangeHRM confirmation dialog used by delete workflows. */
export class ConfirmationDialog {
  readonly root: Locator;
  readonly confirmDeleteButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.root = page.getByRole("dialog");
    this.confirmDeleteButton = this.root.getByRole("button", {
      name: /Yes,\s*Delete/i,
    });
    this.cancelButton = this.root.getByRole("button", {
      name: "No, Cancel",
      exact: true,
    });
  }

  async confirmDelete(): Promise<void> {
    await this.confirmDeleteButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
