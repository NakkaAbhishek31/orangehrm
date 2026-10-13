import type { Locator, Page } from "@playwright/test";

export function createPimLocators(page: Page) {
  const group = (label: string) =>
    page.locator(".oxd-input-group").filter({
      has: page.getByText(label, { exact: true }),
    });
  const editForm = page
    .locator("form")
    .filter({ has: page.locator('input[name="firstName"]') });
  const createLoginDetailsRow = page
    .locator(".oxd-form-row")
    .filter({ hasText: "Create Login Details" });
  const employeeRows = page.locator(".oxd-table-body .oxd-table-card");

  return {
    AddEmployeeLink: page.getByRole("link", { name: /Add Employee/i }),
    firstnameInput: page.getByRole("textbox", { name: "First Name" }),
    middlenameInput: page.getByRole("textbox", { name: "Middle Name" }),
    lastnameInput: page.getByRole("textbox", { name: "Last Name" }),
    SaveEmployeeButton: page.getByRole("button", { name: "Save" }),
    personalDetailsHeading: page.getByRole("heading", {
      name: "Personal Details",
    }),
    employeeListLink: page.getByRole("link", { name: "Employee List" }),
    filterSearchButton: page.getByRole("button", { name: /Search/i }),
    loadingSpinner: page.locator(".oxd-loading-spinner").first(),
    employeeRows,
    noRecordsFound: page
      .locator(".oxd-toast-container")
      .getByText("No Records Found", { exact: true }),
    employeeNameFilterInput: page.locator(
      "//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]",
    ),
    autocompleteOptions: page.locator(".oxd-autocomplete-option"),
    middlenameUpateInput: page.getByRole("textbox", { name: "Middle Name" }),
    lastnameUpadteInput: page.getByRole("textbox", { name: "Last Name" }),
    personalDetailsSaveButton: editForm.getByRole("button", {
      name: "Save",
      exact: true,
    }),
    successToast: page.locator(
      "div.oxd-toast-container.oxd-toast-container--bottom",
    ),
    employeeIdValidation: page.getByText("Employee Id already exists", {
      exact: true,
    }),
    employeeID: editForm
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input"),
    employeeIdFilterInput: page
      .locator(".oxd-table-filter")
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input"),
    profilePictureInput: page.locator('input[type="file"]'),
    profilePicturePreview: page.locator("img.employee-image"),
    profilePictureValidation: page.getByText("File type not allowed", {
      exact: true,
    }),
    nextPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-right") }),
    previousPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-left") }),
    activePageButton: page.locator(".oxd-pagination-page-item--active"),
    employeeIdCells: page.locator(
      '.oxd-table-body [role="row"] [role="cell"]:nth-child(2)',
    ),
    cancelProfilepageButton: page.getByRole("button", { name: /Cancel/i }),
    requiredValidationMessages: page.locator(
      ".oxd-input-field-error-message",
    ),
    createLoginDetailsSwitch: createLoginDetailsRow.locator(
      "span.oxd-switch-input",
    ),
    employeeUsernameInput: group("Username").locator("input"),
    employeePasswordInput: group("Password").locator("input"),
    confirmPasswordInput: group("Confirm Password").locator("input"),
    enabledStatusRadio: page
      .getByText("Enabled", { exact: true })
      .locator("..")
      .locator('input[type="radio"]'),
    disabledStatusRadio: page
      .getByText("Disabled", { exact: true })
      .locator("..")
      .locator('input[type="radio"]'),
    confirmPasswordValidation: group("Confirm Password").locator(
      ".oxd-input-field-error-message",
    ),
    passwordValidation: group("Password").locator(
      ".oxd-input-field-error-message",
    ),
    passwordStrengthIndicator: group("Password")
      .locator("span")
      .filter({ hasText: /Weak|Better|Medium|Strong/i }),
    createLoginDetailsCheckbox: createLoginDetailsRow.locator(
      'input[type="checkbox"]',
    ),
    usernameValidation: group("Username").locator(
      ".oxd-input-field-error-message",
    ),
    addEmployeeIdInput: page
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input"),
    resetButton: page.getByRole("button", { name: "Reset", exact: true }),
    employeeRow: (id: string) =>
      employeeRows.filter({
        has: page
          .locator(".oxd-table-cell")
          .nth(1)
          .getByText(id, { exact: true }),
      }),
    tableCells: (row: Locator) => row.locator(".oxd-table-cell"),
    rowActionButton: (row: Locator, icon: string) =>
      row.locator("button").filter({ has: page.locator(icon) }),
    rowCheckbox: (row: Locator) => row.locator('input[type="checkbox"]'),
    headerCheckbox: () =>
      page.locator('.oxd-table-header input[type="checkbox"]'),
    deleteSelectedButton: () =>
      page.getByRole("button", { name: /Delete Selected/i }),
    paginationNavigation: () => page.getByRole("navigation", {
      name: "Pagination Navigation",
    }),
    employeeListPageButton: (number: number) =>
      page
        .getByRole("navigation", { name: "Pagination Navigation" })
        .getByRole("button", { name: String(number), exact: true }),
    rowCheckboxes: () => employeeRows.locator('input[type="checkbox"]'),
  };
}
