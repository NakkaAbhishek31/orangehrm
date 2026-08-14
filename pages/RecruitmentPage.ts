import { Locator, Page, expect } from "@playwright/test";

export class RecruitmentPage {
  readonly page: Page;
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
  constructor(page: Page) {
    this.page = page;
    this.candidateLink = page.getByRole("link", { name: "Candidates" });
    this.candidatePageHeading = page.getByRole("heading", {
      name: "Candidates",
    });
    this.candidateNameInput = page.getByRole("textbox", {
      name: "Type for hints...",
    });
    this.keywordsInput = page.getByRole("textbox", {
      name: "Enter comma seperated words...",
    });
    this.jobTitleDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Job Title", { exact: true }),
      })
      .locator(".oxd-select-text");

    this.vacancyDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Vacancy", { exact: true }),
      })
      .locator(".oxd-select-text");

    this.hiringManagerDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Hiring Manager", { exact: true }),
      })
      .locator(".oxd-select-text");

    this.candidateStatusDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Status", { exact: true }),
      })
      .locator(".oxd-select-text");

    this.dropdownOptions = page.locator(
      ".oxd-select-dropdown:visible .oxd-select-option",
    );

   this.dateOfApplicationGroup = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Date of Application', {
        exact: true,
      }),
  });

this.fromDateInput = page.getByRole("textbox", {
  name: "From",
  exact: true,
});

this.toDateInput = page.getByRole("textbox", {
  name: "To",
  exact: true,
});

    this.restButton = page.getByRole("button", { name: "Reset" });
    this.searchButton = page.getByRole("button", { name: "Search" });
     this.candidatesTable = page.locator(
  '.orangehrm-container'
);

this.candidateRows = this.candidatesTable.locator(
  '.oxd-table-body .oxd-table-card'
);

this.noRecordsFound = page.getByText("No Records Found", {
  exact: true,
});

  this.loadingSpinner = page.locator(
  '.oxd-loading-spinner'
);

this.dateValidationMessages = page.locator(
  'form .oxd-input-field-error-message'
);

this.toDateValidation = this.toDateInput
  .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
  .locator('.oxd-input-field-error-message');

  }

  async navigateToCandidate(): Promise<void> {
    await this.candidateLink.click();
    await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
  }

  async searchCandidates(): Promise<void> {
    const candidatesResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await this.searchButton.click();
    await candidatesResponse;
    await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  }


  async selectDropdownOption(
  dropdown: Locator,
  optionText: string
): Promise<void> {
  await expect(dropdown).toBeVisible();

  await dropdown.click();

  const visibleDropdown = this.page.locator(
    '.oxd-select-dropdown:visible'
  );

  await expect(
    visibleDropdown
  ).toBeVisible();

  const option = visibleDropdown
    .locator('.oxd-select-option')
    .filter({
      hasText: new RegExp(
        `^\\s*${optionText}\\s*$`,
        'i'
      ),
    })
    .first();

  await expect(option).toBeVisible({
    timeout: 15_000,
  });

  await option.click();

  await expect(dropdown).toContainText(
    optionText
  );
}

async selectFirstAvailableVacancy(): Promise<string> {
  await expect(
    this.vacancyDropdown
  ).toBeVisible();

  await this.vacancyDropdown.click();

  const visibleDropdown = this.page.locator(
    '.oxd-select-dropdown:visible'
  );

  await expect(
    visibleDropdown
  ).toBeVisible();

  const options = visibleDropdown.locator(
    '.oxd-select-option'
  );

  // The first option is normally "-- Select --".
  const firstVacancyOption = options.nth(1);

  await expect(
    firstVacancyOption
  ).toBeVisible({
    timeout: 15_000,
  });

  const selectedVacancy = (
    await firstVacancyOption.innerText()
  ).trim();

  await firstVacancyOption.click();

  await expect(
    this.vacancyDropdown
  ).toContainText(selectedVacancy);

  return selectedVacancy;
}

async selectFirstAvailableHiringManager(): Promise<string> {
  await expect(
    this.hiringManagerDropdown
  ).toBeVisible();

  await this.hiringManagerDropdown.click();

  const visibleDropdown = this.page.locator(
    '.oxd-select-dropdown:visible'
  );

  await expect(
    visibleDropdown
  ).toBeVisible();

  const managerOptions = visibleDropdown
    .locator('.oxd-select-option')
    .filter({
      hasNotText: /^-- Select --$/,
    });

  await expect(
    managerOptions.first()
  ).toBeVisible({
    timeout: 15_000,
  });

  const selectedManager = (
    await managerOptions.first().innerText()
  ).trim();

  await managerOptions.first().click();

  await expect(
    this.hiringManagerDropdown
  ).toContainText(selectedManager);

  return selectedManager;
}


}
