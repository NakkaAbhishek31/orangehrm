import { expect, type Locator, type Page } from "@playwright/test";
import { selectDropdownLocators } from "../locators/selectDropdownLocators";

const NON_SELECTABLE_OPTION =
  /^(-- Select --|No Records Found|Searching\.\.\.)$/i;

/** Reusable adapter for OrangeHRM's custom select control. */
export class SelectDropdown {
  constructor(private readonly page: Page) {}

  async select(dropdown: Locator, optionText: string): Promise<void> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const menu = this.page.locator(selectDropdownLocators.visibleMenu);
    await expect(menu).toBeVisible();

    const option = menu
      .locator(selectDropdownLocators.option)
      .getByText(optionText, { exact: true });
    await expect(option).toBeVisible();
    await option.click();
    await expect(dropdown).toContainText(optionText);
  }

  async selectFirstAvailable(dropdown: Locator): Promise<string> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const menu = this.page.locator(selectDropdownLocators.visibleMenu);
    await expect(menu).toBeVisible();

    const option = menu
      .locator(selectDropdownLocators.option)
      .filter({ hasNotText: NON_SELECTABLE_OPTION })
      .first();
    const isAvailable = await option
      .isVisible({ timeout: 15_000 })
      .catch(() => false);

    if (!isAvailable) {
      await this.page.keyboard.press("Escape");
      return (await dropdown.innerText()).trim();
    }

    const optionText = (await option.innerText()).trim();
    await option.click();
    await expect(dropdown).toContainText(optionText);
    return optionText;
  }
}
