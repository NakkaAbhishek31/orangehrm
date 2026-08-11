import { expect, Locator, Page } from "@playwright/test";

export class LeavePage {
  readonly page: Page;

  readonly leaveListHeading: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly leaveStatusDropdown: Locator;
  readonly employeeNameInput: Locator;
  readonly leaveTypeDropdown: Locator;
  readonly includePastEmployeesCheckbox: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly leaveTable: Locator;
  readonly leaveRows: Locator;
  readonly loadingSpinner: Locator;
  readonly noRecordsFound: Locator;
  readonly dateValidationMessages: Locator;
  readonly toDateValidation: Locator;
  readonly dropdownOptions: Locator;
  readonly includePastEmployeesLabel: Locator;
  readonly autocompleteOptions: Locator;
  readonly employeeNameValidation: Locator;

  constructor(page: Page) {
    this.page = page;

    this.leaveListHeading = page.getByRole("heading", {
      name: "Leave List",
      exact: true,
    });

    this.fromDateInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("From Date", {
          exact: true,
        }),
      })
      .locator("input");

    this.toDateInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("To Date", {
          exact: true,
        }),
      })
      .locator("input");

    this.leaveStatusDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Show Leave with Status", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.employeeNameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Employee Name", {
          exact: true,
        }),
      })
      .locator("input");

    this.leaveTypeDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Leave Type", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.includePastEmployeesCheckbox = page
      .locator(".oxd-input-group")
      .filter({
        hasText: "Include Past Employees",
      })
      .locator('input[type="checkbox"]');

    this.searchButton = page.getByRole("button", {
      name: "Search",
      exact: true,
    });

    this.resetButton = page.getByRole("button", {
      name: "Reset",
      exact: true,
    });

    this.leaveTable = page.locator(".oxd-table");

    this.leaveRows = page.locator(".oxd-table-body .oxd-table-card");

    this.loadingSpinner = page.locator(".oxd-loading-spinner");

    this.noRecordsFound = page
      .locator(".orangehrm-paper-container")
      .getByText("No Records Found", {
        exact: true,
      });

    this.dateValidationMessages = page
      .locator("form")
      .locator(".oxd-input-field-error-message");

    this.toDateValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("To Date", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");

    this.dropdownOptions = page.locator(
      ".oxd-select-dropdown:visible " + ".oxd-select-option",
    );

    this.includePastEmployeesLabel = page
      .locator(".oxd-input-group")
      .filter({
        hasText: "Include Past Employees",
      })
      .locator(".oxd-checkbox-wrapper label");

    this.autocompleteOptions = page.locator(
      ".oxd-autocomplete-dropdown:visible " + ".oxd-autocomplete-option",
    );

    this.employeeNameValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Employee Name", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");
  }

  async verifyLeaveListPage(): Promise<void> {
    await expect(this.leaveListHeading).toBeVisible();

    await expect(this.fromDateInput).toBeVisible();

    await expect(this.toDateInput).toBeVisible();

    await expect(this.leaveStatusDropdown).toBeVisible();

    await expect(this.employeeNameInput).toBeVisible();

    await expect(this.leaveTypeDropdown).toBeVisible();

    await expect(this.includePastEmployeesCheckbox).toBeVisible();

    await expect(this.searchButton).toBeVisible();

    await expect(this.resetButton).toBeVisible();

    await expect(this.leaveTable).toBeVisible();
  }

  async selectLeaveStatus(status: string): Promise<void> {
    await this.leaveStatusDropdown.click();

    const option = this.dropdownOptions.filter({
      hasText: new RegExp(`^${status}$`, "i"),
    });

    await expect(option).toBeVisible();

    await option.click();
  }

  async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
    const isChecked = await this.includePastEmployeesCheckbox.isChecked();

    if (isChecked !== shouldInclude) {
      await this.includePastEmployeesLabel.click();
    }

    if (shouldInclude) {
      await expect(this.includePastEmployeesCheckbox).toBeChecked();
    } else {
      await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
    }
  }

  async selectFirstAvailableEmployee(partialName: string): Promise<string> {
    await this.employeeNameInput.fill(partialName);

    const validOptions = this.autocompleteOptions.filter({
      hasNotText: /Searching|No Records Found/i,
    });

    await expect(validOptions.first()).toBeVisible({
      timeout: 15_000,
    });

    const firstEmployeeOption = validOptions.first();

    const employeeName = (await firstEmployeeOption.innerText()).trim();

    await firstEmployeeOption.click();

    await expect(this.employeeNameInput).toHaveValue(employeeName);

    return employeeName;
  }

  async selectFirstAvailableLeaveType(): Promise<string> {
    await this.leaveTypeDropdown.click();

    await expect(this.dropdownOptions.first()).toBeVisible();

    const optionCount = await this.dropdownOptions.count();

    expect(optionCount).toBeGreaterThan(1);

    const firstLeaveTypeOption = this.dropdownOptions.nth(1);

    const leaveType = (await firstLeaveTypeOption.innerText()).trim();

    await firstLeaveTypeOption.click();

    await expect(this.leaveTypeDropdown).toContainText(leaveType);

    return leaveType;
  }
}
