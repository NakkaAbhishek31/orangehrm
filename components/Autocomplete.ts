import { expect, type Locator } from "@playwright/test";
import { autocompleteLocators } from "../locators/autocompleteLocators";

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
      .locator(autocompleteLocators.option)
      .filter({ hasNotText: /Searching|No Records Found/i })
      .first();
    await expect(option).toBeVisible();

    const selectedText = (await option.innerText()).trim();
    await option.click();
    // OrangeHRM can insert repeated spaces between a first and last name in
    // the input even though the autocomplete option renders normalized text.
    const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ").trim();
    await expect
      .poll(async () => normalizeWhitespace(await this.input.inputValue()))
      .toBe(normalizeWhitespace(selectedText));
    return selectedText;
  }
}
