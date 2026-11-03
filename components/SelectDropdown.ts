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

    const options = menu.locator(selectDropdownLocators.option);
    const getSelectableOptionIndex = async (): Promise<number> => {
      const displayedValue = (await dropdown.innerText()).trim();
      const optionTexts = await options.allInnerTexts();
      return optionTexts.findIndex((text) => {
        const optionText = text.trim();
        return (
          optionText.length > 0 &&
          optionText !== displayedValue &&
          !NON_SELECTABLE_OPTION.test(optionText)
        );
      });
    };

    await expect
      .poll(getSelectableOptionIndex, {
        timeout: 15_000,
        message: "Waiting for a selectable dropdown option",
      })
      .toBeGreaterThanOrEqual(0);
    const optionIndex = await getSelectableOptionIndex();

    const option = options.nth(optionIndex);
    const optionText = (await option.innerText()).trim();
    await option.click();
    await expect(dropdown).toContainText(optionText);
    return optionText;
  }
}
