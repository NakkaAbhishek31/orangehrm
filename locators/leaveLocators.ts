import type { Locator, Page } from "@playwright/test";

export function createLeaveLocators(page: Page) {
  const field = (label: string) =>
    page.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText(label, { exact: true }),
    });
  const includePastEmployeesContainer = page
    .getByText("Include Past Employees", { exact: true })
    .locator("xpath=ancestor::*[.//input[@type='checkbox']][1]");
  const leaveStatusField = field("Show Leave with Status");
  const dropdownOptions = page.locator(
    ".oxd-select-dropdown:visible .oxd-select-option",
  );

  return {
    leaveListHeading: page.getByRole("heading", {
      name: "Leave List",
      exact: true,
    }),
    fromDateInput: field("From Date").locator("input"),
    toDateInput: field("To Date").locator("input"),
    leaveStatusDropdown: leaveStatusField.locator(".oxd-select-text"),
    leaveStatusField,
    employeeNameInput: field("Employee Name").locator("input"),
    leaveTypeDropdown: field("Leave Type").locator(".oxd-select-text"),
    includePastEmployeesCheckbox:
      includePastEmployeesContainer.getByRole("checkbox"),
    includePastEmployeesLabel: includePastEmployeesContainer.locator("label"),
    searchButton: page.getByRole("button", { name: "Search", exact: true }),
    resetButton: page.getByRole("button", { name: "Reset", exact: true }),
    leaveTable: page.locator(".oxd-table"),
    leaveRows: page.locator(".oxd-table-body .oxd-table-card"),
    loadingSpinner: page.locator(".oxd-loading-spinner"),
    noRecordsFound: page
      .locator(".orangehrm-container span.oxd-text--span")
      .filter({ hasText: /^No Records Found$/, visible: true })
      .first(),
    selectedLeaveStatuses: leaveStatusField,
    dateValidationMessages: page
      .locator("form")
      .locator(".oxd-input-field-error-message"),
    toDateValidation: field("To Date").locator(
      ".oxd-input-field-error-message",
    ),
    fromDateValidation: field("From Date").locator(
      ".oxd-input-field-error-message",
    ),
    dropdownOptions,
    autocompleteOptions: page.locator(
      ".oxd-autocomplete-dropdown:visible .oxd-autocomplete-option",
    ),
    employeeNameValidation: field("Employee Name").locator(
      ".oxd-input-field-error-message",
    ),
    nextPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-right") }),
    previousPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-left") }),
    selectedStatusRemoveButtons: (statusField: Locator) =>
      statusField.locator("i.bi-x.--clear"),
    visibleDropdown: () => page.locator(".oxd-select-dropdown:visible"),
    leaveStatusOption: (dropdown: Locator, status: string) =>
      dropdown
        .locator(".oxd-select-option")
        .filter({ hasText: new RegExp(`^\\s*${status}\\s*$`, "i") })
        .first(),
    selectedStatus: (statusField: Locator, status: string) =>
      statusField.getByText(status, { exact: true }),
    statusRemoveButton: (statusElement: Locator) =>
      statusElement.locator("xpath=following::i[contains(@class,'bi-x')][1]"),
  };
}
