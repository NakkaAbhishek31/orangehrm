import { expect, type Locator } from "@playwright/test";

/** Shared operations for OrangeHRM autocomplete fields. */
export class Autocomplete {
  constructor(
    private readonly input: Locator,
    private readonly dropdown: Locator,
  ) {}

  async selectFirst(searchText: string): Promise<string> {
    await this.input.fill(searchText);
    await expect(this.dropdown).toBeVisible();

    const option = this.dropdown
      .locator(".oxd-autocomplete-option")
      .filter({ hasNotText: /Searching|No Records Found/i })
      .first();
    await expect(option).toBeVisible();

    const selectedText = (await option.innerText()).trim();
    await option.click();
    await expect(this.input).toHaveValue(selectedText);
    return selectedText;
  }
}
