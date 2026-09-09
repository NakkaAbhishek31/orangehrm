import { expect, Locator, Page } from "@playwright/test";
import { SelectDropdown } from "../components/SelectDropdown";
import { waitForListResult } from "../components/ListResult";

export class DirectoryPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly employeeNameInput: Locator;
  readonly jobTitleDropdown: Locator;
  readonly locationDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly employeeCards: Locator;
  readonly noRecordsFound: Locator;
  readonly loadingSpinner: Locator;
  readonly autocompleteDropdown: Locator;
  readonly autocompleteNoRecords: Locator;
  readonly employeeNameValidation: Locator;
  private readonly selectDropdown: SelectDropdown;

  constructor(page: Page) {
    this.page = page;
    this.selectDropdown = new SelectDropdown(page);
    this.heading = page.getByRole("heading", { name: "Directory", exact: true });

    const form = page.locator("form");
    const inputGroup = (label: string) =>
      form.locator(".oxd-input-group").filter({
        has: page.locator("label").getByText(label, { exact: true }),
      });

    this.employeeNameInput = inputGroup("Employee Name").locator("input");
    this.jobTitleDropdown = inputGroup("Job Title").locator(".oxd-select-text");
    this.locationDropdown = inputGroup("Location").locator(".oxd-select-text");
    this.searchButton = form.getByRole("button", { name: "Search", exact: true });
    this.resetButton = form.getByRole("button", { name: "Reset", exact: true });
    this.employeeCards = page.locator(".orangehrm-directory-card");
    this.noRecordsFound = page.getByText("No Records Found", { exact: true }).first();
    this.loadingSpinner = page.locator(".oxd-loading-spinner");
    this.autocompleteDropdown = page.locator(".oxd-autocomplete-dropdown:visible");
    this.autocompleteNoRecords = this.autocompleteDropdown.getByText(
      "No Records Found",
      { exact: true },
    );
    this.employeeNameValidation = inputGroup("Employee Name").locator(
      ".oxd-input-field-error-message",
    );
  }

  async selectFirstAvailableOption(dropdown: Locator): Promise<string> {
    return this.selectDropdown.selectFirstAvailable(dropdown);
  }

  async waitForResults(): Promise<void> {
    await waitForListResult(
      this.loadingSpinner,
      this.employeeCards,
      this.noRecordsFound,
    );
  }
}
