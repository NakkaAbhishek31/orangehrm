import {
  Locator,expect,
  Page,
} from '@playwright/test';

export class PerformancePage {
  readonly page: Page;

  readonly manageReviewsMenu: Locator;
  readonly employeeReviewsMenuItem: Locator;

  readonly employeeReviewsHeading: Locator;
  readonly employeeNameInput: Locator;
  readonly jobTitleDropdown: Locator;
  readonly subUnitDropdown: Locator;
  readonly includePastEmployeesCheckbox: Locator;
  readonly includePastEmployeesLabel: Locator;
  readonly reviewStatusDropdown: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;

  readonly reviewRows: Locator;
  readonly noRecordsFound: Locator;
  readonly loadingSpinner: Locator;
  readonly autocompleteDropdown: Locator;
readonly autocompleteOptions: Locator;
readonly autocompleteNoRecords: Locator;
readonly employeeNameValidation: Locator;

  constructor(page: Page) {
    this.page = page;

    this.manageReviewsMenu = page
      .getByLabel('Topbar Menu')
      .getByText('Manage Reviews', {
        exact: true,
      });

    this.employeeReviewsMenuItem = page
      .locator('.oxd-dropdown-menu:visible')
      .getByText('Employee Reviews', {
        exact: true,
      });

    this.employeeReviewsHeading = page
      .locator('.oxd-text--h5')
      .filter({
        hasText: 'Employee Reviews',
      });

    const searchForm = page.locator('form');

    this.employeeNameInput = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('Employee Name', {
            exact: true,
          }),
      })
      .locator('input');

    this.jobTitleDropdown = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('Job Title', {
            exact: true,
          }),
      })
      .locator('.oxd-select-text');

    this.subUnitDropdown = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('Sub Unit', {
            exact: true,
          }),
      })
      .locator('.oxd-select-text');

    this.includePastEmployeesLabel =
      searchForm
        .locator('label')
        .filter({
          hasText: 'Include Past Employees',
        });

    this.includePastEmployeesCheckbox =
      this.includePastEmployeesLabel.locator(
        'input[type="checkbox"]'
      );

    this.reviewStatusDropdown = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('Review Status', {
            exact: true,
          }),
      })
      .locator('.oxd-select-text');

    const fromDateGroup = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('From Date', {
            exact: true,
          }),
      });

    this.fromDateInput =
      fromDateGroup.locator('input');

    const toDateGroup = searchForm
      .locator('.oxd-input-group')
      .filter({
        has: page
          .locator('label')
          .getByText('To Date', {
            exact: true,
          }),
      });

    this.toDateInput =
      toDateGroup.locator('input');

    this.searchButton =
      searchForm.getByRole('button', {
        name: 'Search',
        exact: true,
      });

    this.resetButton =
      searchForm.getByRole('button', {
        name: 'Reset',
        exact: true,
      });

    this.reviewRows = page.locator(
      '.oxd-table-body .oxd-table-card'
    );

    this.noRecordsFound = page
      .getByText('No Records Found', {
        exact: true,
      })
      .filter({ visible: true })
      .first();

    this.loadingSpinner = page.locator(
      '.oxd-loading-spinner'
    );

    this.autocompleteDropdown = page.locator(
  '.oxd-autocomplete-dropdown:visible'
);

this.autocompleteOptions =
  this.autocompleteDropdown.locator(
    '.oxd-autocomplete-option'
  );

this.autocompleteNoRecords =
  this.autocompleteDropdown.getByText(
    'No Records Found',
    {
      exact: true,
    }
  );

this.employeeNameValidation = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Employee Name', {
        exact: true,
      }),
  })
  .locator(
    '.oxd-input-field-error-message'
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
}

async selectDropdownOption(
  dropdown: Locator,
  optionText: string
): Promise<void> {
  await expect(dropdown).toBeVisible();

  await dropdown.click();

  const visibleDropdown =
    this.page.locator(
      '.oxd-select-dropdown:visible'
    );

  await expect(
    visibleDropdown
  ).toBeVisible({
    timeout: 15_000,
  });

  const option =
    visibleDropdown
      .locator('.oxd-select-option')
      .getByText(optionText, {
        exact: true,
      });

  await expect(option).toBeVisible({
    timeout: 15_000,
  });

  await option.click();

  await expect(dropdown).toContainText(
    optionText
  );
}

async selectFirstAvailableDropdownOption(
  dropdown: Locator
): Promise<string> {
  await expect(dropdown).toBeVisible();
  await dropdown.click();

  const option = this.page
    .locator('.oxd-select-dropdown:visible')
    .locator('.oxd-select-option')
    .filter({
      hasNotText: /^-- Select --$/,
    })
    .first();

  await expect(option).toBeVisible({
    timeout: 15_000,
  });

  const optionText = (await option.innerText()).trim();
  await option.click();
  await expect(dropdown).toContainText(optionText);

  return optionText;
}

async selectEmployeeFromAutocomplete(
  searchText: string
): Promise<string> {
  await expect(
    this.employeeNameInput
  ).toBeVisible();

  await this.employeeNameInput.fill(
    searchText
  );

  await expect(
    this.autocompleteDropdown
  ).toBeVisible({
    timeout: 20_000,
  });

  const employeeOption =
    this.autocompleteOptions
      .filter({
        hasNotText: /Searching|No Records Found/i,
      })
      .first();

  await expect(
    employeeOption
  ).toBeVisible({
    timeout: 20_000,
  });

  const selectedEmployeeName = (
    await employeeOption.innerText()
  ).trim();

  await employeeOption.click();

  await expect(
    this.employeeNameInput
  ).toHaveValue(selectedEmployeeName);

  return selectedEmployeeName;
}
}
