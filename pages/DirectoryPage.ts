import { expect, Locator, Page } from "@playwright/test";
import { SelectDropdown } from "../components/SelectDropdown";
import { waitForListResult } from "../components/ListResult";
import { directoryLocators } from "../locators/directoryLocators";

export class DirectoryPage {
  readonly page: Page;
  readonly heading!: Locator;
  readonly employeeNameInput!: Locator;
  readonly jobTitleDropdown!: Locator;
  readonly locationDropdown!: Locator;
  readonly searchButton!: Locator;
  readonly resetButton!: Locator;
  readonly employeeCards!: Locator;
  readonly noRecordsFound!: Locator;
  readonly loadingSpinner!: Locator;
  readonly autocompleteDropdown!: Locator;
  readonly autocompleteNoRecords!: Locator;
  readonly employeeNameValidation!: Locator;
  private readonly selectDropdown: SelectDropdown;

  constructor(page: Page) {
    this.page = page;
    this.selectDropdown = new SelectDropdown(page);
    const form = page.locator(directoryLocators.form);
    const inputGroup = (label: string) =>
      form.locator(directoryLocators.inputGroup).filter({
        has: page.getByText(label, { exact: true }),
      });

    this.heading = page.getByRole(directoryLocators.heading.role, {
      name: directoryLocators.heading.name,
      exact: directoryLocators.heading.exact,
    });
    this.employeeNameInput = inputGroup(directoryLocators.labels.employeeName)
      .locator(directoryLocators.input);
    this.jobTitleDropdown = inputGroup(directoryLocators.labels.jobTitle)
      .locator(directoryLocators.select);
    this.locationDropdown = inputGroup(directoryLocators.labels.location)
      .locator(directoryLocators.select);
    this.searchButton = form.getByRole(directoryLocators.searchButton.role, {
      name: directoryLocators.searchButton.name,
      exact: directoryLocators.searchButton.exact,
    });
    this.resetButton = form.getByRole(directoryLocators.resetButton.role, {
      name: directoryLocators.resetButton.name,
      exact: directoryLocators.resetButton.exact,
    });
    this.employeeCards = page.locator(directoryLocators.employeeCards);
    this.noRecordsFound = page
      .getByText(directoryLocators.noRecords.text, {
        exact: directoryLocators.noRecords.exact,
      })
      .first();
    this.loadingSpinner = page.locator(directoryLocators.loadingSpinner);
    this.autocompleteDropdown = page.locator(
      directoryLocators.autocompleteDropdown,
    );
    this.autocompleteNoRecords = this.autocompleteDropdown.getByText(
      directoryLocators.noRecords.text,
      { exact: directoryLocators.noRecords.exact },
    );
    this.employeeNameValidation = inputGroup(
      directoryLocators.labels.employeeName,
    ).locator(directoryLocators.validation);
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
