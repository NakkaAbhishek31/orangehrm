import type { Locator, Page } from "@playwright/test";

export function createPerformanceLocators(page: Page) {
  const searchForm = page.locator("form");
  const labeledGroup = (label: string) =>
    searchForm.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText(label, { exact: true }),
    });
  const autocompleteDropdown = page.locator(
    ".oxd-autocomplete-dropdown:visible",
  );

  return {
    manageReviewsMenu: page
      .getByLabel("Topbar Menu")
      .getByText("Manage Reviews", { exact: true }),
    employeeReviewsMenuItem: page
      .locator(".oxd-dropdown-menu:visible")
      .getByText("Employee Reviews", { exact: true }),
    employeeReviewsHeading: page
      .locator(".oxd-text--h5")
      .filter({ hasText: "Employee Reviews" }),
    employeeNameInput: labeledGroup("Employee Name").locator("input"),
    jobTitleDropdown: labeledGroup("Job Title").locator(".oxd-select-text"),
    subUnitDropdown: labeledGroup("Sub Unit").locator(".oxd-select-text"),
    includeFilterDropdown: searchForm
      .locator(".oxd-input-group")
      .filter({ has: page.getByText("Include", { exact: true }) })
      .locator(".oxd-select-text"),
    reviewStatusDropdown: labeledGroup("Review Status").locator(
      ".oxd-select-text",
    ),
    fromDateInput: labeledGroup("From Date").locator("input"),
    toDateInput: labeledGroup("To Date").locator("input"),
    searchButton: searchForm.getByRole("button", {
      name: "Search",
      exact: true,
    }),
    resetButton: searchForm.getByRole("button", {
      name: "Reset",
      exact: true,
    }),
    reviewRows: page.locator(".oxd-table-body .oxd-table-card"),
    noRecordsFound: page
      .getByText("No Records Found", { exact: true })
      .filter({ visible: true })
      .first(),
    loadingSpinner: page.locator(".oxd-loading-spinner"),
    autocompleteDropdown,
    autocompleteOptions: autocompleteDropdown.locator(
      ".oxd-autocomplete-option",
    ),
    autocompleteNoRecords: autocompleteDropdown.getByText(
      "No Records Found",
      { exact: true },
    ),
    employeeNameValidation: labeledGroup("Employee Name").locator(
      ".oxd-input-field-error-message",
    ),
  };
}
