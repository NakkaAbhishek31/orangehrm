import { expect, type Locator, type Page } from "@playwright/test";
import { Autocomplete } from "../components/Autocomplete";
import { SelectDropdown } from "../components/SelectDropdown";
import { createClaimLocators } from "../locators/claimLocators";

/** Page object for Claim > Assign Claim. */
export class ClaimPage {
  readonly heading!: Locator;
  readonly employeeNameInput!: Locator;
  readonly eventDropdown!: Locator;
  readonly currencyDropdown!: Locator;
  readonly remarksInput!: Locator;
  readonly createButton!: Locator;
  readonly cancelButton!: Locator;
  readonly autocompleteDropdown!: Locator;
  readonly autocompleteNoRecords!: Locator;
  readonly validationMessages!: Locator;
  readonly employeeNameValidation!: Locator;
  readonly eventValidation!: Locator;
  readonly currencyValidation!: Locator;
  readonly remarksValidation!: Locator;
  readonly requiredFieldsHint!: Locator;
  readonly selectDropdownMenu!: Locator;
  readonly selectableDropdownOptions!: Locator;

  private readonly employeeAutocomplete: Autocomplete;
  private readonly selectDropdown: SelectDropdown;

  constructor(private readonly page: Page) {
    Object.assign(this, createClaimLocators(page));
    this.employeeAutocomplete = new Autocomplete(
      this.employeeNameInput,
      this.autocompleteDropdown,
    );
    this.selectDropdown = new SelectDropdown(page);
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.employeeNameInput).toBeVisible();
  }

  async gotoAssignClaim(): Promise<void> {
    await createClaimLocators(this.page).assignClaimLink.click();
    await this.verifyLoaded();
  }

  async selectFirstEvent(): Promise<string> {
    return this.selectDropdown.selectFirstAvailable(this.eventDropdown);
  }

  async selectFirstCurrency(): Promise<string> {
    return this.selectDropdown.selectFirstAvailable(this.currencyDropdown);
  }

  async selectEmployee(searchText: string): Promise<string> {
    return this.employeeAutocomplete.selectFirst(searchText);
  }
}
