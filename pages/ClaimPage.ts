import { expect, type Locator, type Page } from "@playwright/test";
import { Autocomplete } from "../components/Autocomplete";
import { SelectDropdown } from "../components/SelectDropdown";

/** Page object for Claim > Assign Claim. */
export class ClaimPage {
  readonly heading: Locator;
  readonly employeeNameInput: Locator;
  readonly eventDropdown: Locator;
  readonly currencyDropdown: Locator;
  readonly remarksInput: Locator;
  readonly createButton: Locator;
  readonly cancelButton: Locator;
  readonly autocompleteDropdown: Locator;
  readonly autocompleteNoRecords: Locator;
  readonly validationMessages: Locator;
  readonly employeeNameValidation: Locator;
  readonly eventValidation: Locator;
  readonly currencyValidation: Locator;
  readonly remarksValidation: Locator;
  readonly requiredFieldsHint: Locator;
  readonly selectDropdownMenu: Locator;
  readonly selectableDropdownOptions: Locator;

  private readonly employeeAutocomplete: Autocomplete;
  private readonly selectDropdown: SelectDropdown;

  constructor(private readonly page: Page) {
    const form = page.locator("form");
    const field = (label: string): Locator =>
      form.locator(".oxd-input-group").filter({ hasText: label });

    this.heading = page.getByRole("heading", { name: "Create Claim Request" });
    this.employeeNameInput = field("Employee Name").locator("input");
    this.eventDropdown = field("Event").locator(".oxd-select-text");
    this.currencyDropdown = field("Currency").locator(".oxd-select-text");
    this.remarksInput = field("Remarks").locator("textarea");
    this.createButton = form.getByRole("button", {
      name: "Create",
      exact: true,
    });
    this.cancelButton = form.getByRole("button", {
      name: "Cancel",
      exact: true,
    });
    this.autocompleteDropdown = page.locator(
      ".oxd-autocomplete-dropdown:visible",
    );
    this.autocompleteNoRecords = this.autocompleteDropdown.getByText(
      "No Records Found",
      { exact: true },
    );
    this.validationMessages = page.locator(".oxd-input-field-error-message");
    this.employeeNameValidation = field("Employee Name").locator(
      ".oxd-input-field-error-message",
    );
    this.eventValidation = field("Event").locator(
      ".oxd-input-field-error-message",
    );
    this.currencyValidation = field("Currency").locator(
      ".oxd-input-field-error-message",
    );
    this.remarksValidation = field("Remarks").locator(
      ".oxd-input-field-error-message",
    );
    this.requiredFieldsHint = form.getByText("* Required", { exact: true });
    this.selectDropdownMenu = page.locator(".oxd-select-dropdown:visible");
    this.selectableDropdownOptions = this.selectDropdownMenu
      .locator(".oxd-select-option")
      .filter({
        hasNotText: /^(-- Select --|No Records Found|Searching\.\.\.)$/i,
      });
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
    await this.page.getByLabel("Topbar Menu").getByRole("link", {
      name: "Assign Claim",
      exact: true,
    }).click();
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
