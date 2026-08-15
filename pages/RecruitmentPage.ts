import { expect, type Locator, type Page } from "@playwright/test";

const DEFAULT_TIMEOUT = 15_000;
const API_TIMEOUT = 20_000;

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export class RecruitmentPage {
  readonly candidateLink: Locator;
  readonly candidatePageHeading: Locator;
  readonly candidateNameInput: Locator;
  readonly keywordsInput: Locator;
  readonly jobTitleDropdown: Locator;
  readonly vacancyDropdown: Locator;
  readonly hiringManagerDropdown: Locator;
  readonly candidateStatusDropdown: Locator;
  readonly dropdownOptions: Locator;
  readonly dateOfApplicationGroup: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly restButton: Locator;
  readonly searchButton: Locator;
  readonly candidatesTable: Locator;
  readonly candidateRows: Locator;
  readonly noRecordsFound: Locator;
  readonly loadingSpinner: Locator;
  readonly dateValidationMessages: Locator;
  readonly toDateValidation: Locator;
  readonly candidateAutocompleteDropdown: Locator;
readonly candidateAutocompleteNoRecords: Locator;
readonly candidateNameValidation: Locator;

  constructor(readonly page: Page) {
    this.candidateLink = page.getByRole("link", {
      name: "Candidates",
      exact: true,
    });
    this.candidatePageHeading = page.getByRole("heading", {
      name: "Candidates",
      exact: true,
    });
    this.candidateNameInput = page.getByRole("textbox", {
      name: "Type for hints...",
      exact: true,
    });
    this.keywordsInput = page.getByRole("textbox", {
      name: "Enter comma seperated words...",
      exact: true,
    });

    this.jobTitleDropdown = this.dropdownByLabel("Job Title");
    this.vacancyDropdown = this.dropdownByLabel("Vacancy");
    this.hiringManagerDropdown = this.dropdownByLabel("Hiring Manager");
    this.candidateStatusDropdown = this.dropdownByLabel("Status");
    this.dropdownOptions = page.locator(
      ".oxd-select-dropdown:visible .oxd-select-option",
    );

    this.dateOfApplicationGroup = this.inputGroupByLabel(
      "Date of Application",
    );
    this.fromDateInput = page.getByRole("textbox", {
      name: "From",
      exact: true,
    });
    this.toDateInput = page.getByRole("textbox", {
      name: "To",
      exact: true,
    });

    this.restButton = page.getByRole("button", {
      name: "Reset",
      exact: true,
    });
    this.searchButton = page.getByRole("button", {
      name: "Search",
      exact: true,
    });
    this.candidatesTable = page.locator(".orangehrm-container");
    this.candidateRows = this.candidatesTable.locator(
      ".oxd-table-body .oxd-table-card",
    );
    this.noRecordsFound = page.getByText("No Records Found", {
      exact: true,
    });
    this.loadingSpinner = page.locator(".oxd-loading-spinner");
    this.dateValidationMessages = page.locator(
      "form .oxd-input-field-error-message",
    );
    this.toDateValidation = this.toDateInput
      .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
      .locator(".oxd-input-field-error-message");

      this.candidateAutocompleteDropdown =
  page.locator(
    '.oxd-autocomplete-dropdown:visible'
  );

this.candidateAutocompleteNoRecords =
  this.candidateAutocompleteDropdown
    .getByText('No Records Found', {
      exact: true,
    });

this.candidateNameValidation =
  this.candidateNameInput
    .locator(
      'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
    )
    .locator(
      '.oxd-input-field-error-message'
    );
  }

  async navigateToCandidate(): Promise<void> {
    await this.candidateLink.click();
    await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
    await expect(this.candidatePageHeading).toBeVisible();
  }

  async searchCandidates(): Promise<void> {
    const candidatesResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: API_TIMEOUT },
    );

    await this.searchButton.click();
    await candidatesResponse;
    await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  }

  async selectDropdownOption(
    dropdown: Locator,
    optionText: string,
  ): Promise<void> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const option = this.visibleDropdown()
      .locator(".oxd-select-option")
      .filter({
        hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
      })
      .first();

    await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
    await option.click();
    await expect(dropdown).toContainText(optionText);
  }

  async selectFirstAvailableVacancy(): Promise<string> {
    return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  }

  async selectFirstAvailableHiringManager(): Promise<string> {
    return this.selectFirstAvailableDropdownOption(
      this.hiringManagerDropdown,
    );
  }

  async selectFirstAvailableCandidate(
    searchText: string,
  ): Promise<string | null> {
    await this.candidateNameInput.fill(searchText);

    const autocompleteDropdown = this.page.locator(
      ".oxd-autocomplete-dropdown:visible",
    );
    await expect(autocompleteDropdown).toBeVisible({
      timeout: DEFAULT_TIMEOUT,
    });

    const validOptions = autocompleteDropdown
      .locator(".oxd-autocomplete-option")
      .filter({ hasNotText: /Searching|No Records Found/i });
    const noRecords = autocompleteDropdown.getByText("No Records Found", {
      exact: true,
    });

    await expect(validOptions.first().or(noRecords)).toBeVisible({
      timeout: DEFAULT_TIMEOUT,
    });

    if ((await validOptions.count()) === 0) {
      return null;
    }

    const firstOption = validOptions.first();
    const selectedCandidate = (await firstOption.innerText()).trim();

    await firstOption.click();
    await expect(this.candidateNameInput).toHaveValue(selectedCandidate);

    return selectedCandidate;
  }

  private inputGroupByLabel(label: string): Locator {
    return this.page.locator(".oxd-input-group").filter({
      has: this.page.locator("label").getByText(label, { exact: true }),
    });
  }

  private dropdownByLabel(label: string): Locator {
    return this.inputGroupByLabel(label).locator(".oxd-select-text");
  }

  private visibleDropdown(): Locator {
    return this.page.locator(".oxd-select-dropdown:visible");
  }

  private async selectFirstAvailableDropdownOption(
    dropdown: Locator,
  ): Promise<string> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const options = this.visibleDropdown()
      .locator(".oxd-select-option")
      .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
    const firstOption = options.first();

    await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
    const selectedText = (await firstOption.innerText()).trim();

    await firstOption.click();
    await expect(dropdown).toContainText(selectedText);

    return selectedText;
  }
}
