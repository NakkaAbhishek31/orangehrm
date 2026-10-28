import {
  Locator,expect,
  Page,
} from '@playwright/test';
import { Autocomplete } from '../components/Autocomplete';
import { SelectDropdown } from '../components/SelectDropdown';
import { waitForListResult } from '../components/ListResult';
import { createPerformanceLocators } from '../locators/performanceLocators';

export class PerformancePage {
  readonly page: Page;

  readonly manageReviewsMenu!: Locator;
  readonly employeeReviewsMenuItem!: Locator;

  readonly employeeReviewsHeading!: Locator;
  readonly employeeNameInput!: Locator;
  readonly jobTitleDropdown!: Locator;
  readonly subUnitDropdown!: Locator;
  readonly includeFilterDropdown!: Locator;
  readonly reviewStatusDropdown!: Locator;
  readonly fromDateInput!: Locator;
  readonly toDateInput!: Locator;
  readonly searchButton!: Locator;
  readonly resetButton!: Locator;

  readonly reviewRows!: Locator;
  readonly noRecordsFound!: Locator;
  readonly loadingSpinner!: Locator;
  readonly autocompleteDropdown!: Locator;
readonly autocompleteOptions!: Locator;
readonly autocompleteNoRecords!: Locator;
readonly employeeNameValidation!: Locator;
private readonly locators: ReturnType<typeof createPerformanceLocators>;
private readonly selectDropdown: SelectDropdown;
private readonly employeeAutocomplete: Autocomplete;

  constructor(page: Page) {
    this.page = page;
    this.selectDropdown = new SelectDropdown(page);
    this.locators = createPerformanceLocators(page);
    Object.assign(this, this.locators);
    this.employeeAutocomplete = new Autocomplete(
      this.employeeNameInput,
      this.autocompleteDropdown,
    );
  }

  async gotoEmployeeReviews(): Promise<void> {
  await expect(
    this.manageReviewsMenu
  ).toBeVisible();

  await this.manageReviewsMenu.click();

  await expect(
    this.employeeReviewsMenuItem
  ).toBeVisible();

  await this.employeeReviewsMenuItem.click();

  await this.page.waitForURL(
    /\/performance\/searchEvaluatePerformanceReview$/,
    {
      timeout: 30_000,
    }
  );

  await expect(
    this.employeeReviewsHeading
  ).toBeVisible({
    timeout: 20_000,
  });

  await expect(
    this.employeeNameInput
  ).toBeVisible();

  await this.waitForReviewResults();
}

async selectDropdownOption(
  dropdown: Locator,
  optionText: string
): Promise<void> {
  await this.selectDropdown.select(dropdown, optionText);
}

async selectFirstAvailableDropdownOption(
  dropdown: Locator
): Promise<string> {
  return this.selectDropdown.selectFirstAvailable(dropdown);
}

async selectEmployeeFromAutocomplete(
  searchText: string
): Promise<string> {
  return this.employeeAutocomplete.selectFirst(searchText);
}

async waitForReviewResults(): Promise<void> {
  await waitForListResult(
    this.loadingSpinner,
    this.reviewRows,
    this.noRecordsFound,
  );
}
}
