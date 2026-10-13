import type { Locator, Page } from "@playwright/test";

/** Selector definitions for the Admin page object. */
export const adminLocators = {
  userManagementMenu: {
    css: ".oxd-topbar-body-nav-tab",
    text: "User Management",
  },
  usersMenuItem: {
    css: ".oxd-topbar-body-nav-tab-link",
    text: "Users",
  },
  systemUsersHeading: {
    role: "heading",
    name: "System Users",
    exact: true,
  },
} as const;

export function createAdminLocators(page: Page) {
  const field = (label: string) =>
    page.locator(".oxd-input-group").filter({
      has: page.getByText(label, { exact: true }),
    });
  const statusField = field("Status");
  const employeeNameField = field("Employee Name");
  const userRows = page.locator(".oxd-table-body .oxd-table-card");
  const tableHeader = page.locator(".oxd-table-header");

  return {
    userManagementMenu: page
      .locator(adminLocators.userManagementMenu.css)
      .filter({ hasText: adminLocators.userManagementMenu.text }),
    usersMenuItem: page
      .locator(adminLocators.usersMenuItem.css)
      .filter({ hasText: adminLocators.usersMenuItem.text }),
    systemUsersHeading: page.getByRole(adminLocators.systemUsersHeading.role, {
      name: adminLocators.systemUsersHeading.name,
      exact: adminLocators.systemUsersHeading.exact,
    }),
    usernameInput: field("Username").locator("input"),
    userRoleDropdown: field("User Role").locator(".oxd-select-text"),
    employeeNameInput: employeeNameField.locator("input"),
    statusDropdown: statusField.locator(".oxd-select-text"),
    searchButton: page.getByRole("button", { name: "Search", exact: true }),
    resetButton: page.getByRole("button", { name: "Reset", exact: true }),
    addButton: page.getByRole("button", { name: /Add/i }),
    systemUsersTable: page.locator(".oxd-table"),
    userRows,
    loadingSpinner: page.locator(".oxd-loading-spinner"),
    noRecordsFound: page
      .locator(".orangehrm-paper-container")
      .getByText("No Records Found", { exact: true }),
    addUserHeading: page.getByRole("heading", { name: "Add User", exact: true }),
    addUserRoleDropdown: field("User Role").locator(".oxd-select-text"),
    addEmployeeNameInput: employeeNameField.locator("input"),
    addStatusDropdown: statusField.locator(".oxd-select-text"),
    addUsernameInput: field("Username").locator("input"),
    addPasswordInput: field("Password").locator("input"),
    addConfirmPasswordInput: field("Confirm Password").locator("input"),
    addUserSaveButton: page.getByRole("button", { name: "Save", exact: true }),
    addUserCancelButton: page.getByRole("button", {
      name: "Cancel",
      exact: true,
    }),
    autocompleteOptions: page.locator(".oxd-autocomplete-option"),
    successToast: page
      .locator(".oxd-toast-content-text")
      .filter({ hasText: /Successfully Saved/i }),
    validationMessages: page.locator(".oxd-input-field-error-message"),
    toastMessage: page.locator(".oxd-toast-content-text"),
    usernameValidation: field("Username").locator(
      ".oxd-input-field-error-message",
    ),
    confirmPasswordValidation: field("Confirm Password").locator(
      ".oxd-input-field-error-message",
    ),
    editUserHeading: page.getByRole("heading", {
      name: "Edit User",
      exact: true,
    }),
    editStatusDropdown: statusField.locator(".oxd-select-text"),
    editUserSaveButton: page.getByRole("button", { name: "Save", exact: true }),
    deleteSelectedButton: page
      .locator(".orangehrm-horizontal-padding button.oxd-button--label-danger")
      .filter({ has: page.locator("i.bi-trash-fill") }),
    nextPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-right") }),
    previousPageButton: page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({ has: page.locator("i.bi-chevron-left") }),
    passwordValidation: field("Password").locator(
      ".oxd-input-field-error-message",
    ),
    employeeNameValidation: employeeNameField.locator(
      ".oxd-input-field-error-message",
    ),
    selectOption: (text: string) =>
      page.locator(".oxd-select-option").getByText(text, { exact: true }),
    employeeAutocompleteOption: (text: string) =>
      page
        .locator(".oxd-autocomplete-option")
        .filter({ hasText: text })
        .first(),
    userRow: (username: string) =>
      userRows.filter({
        has: page.locator(".oxd-table-cell").nth(1).getByText(username, {
          exact: true,
        }),
      }),
    rowActionButton: (row: Locator, iconSelector: string) =>
      row.getByRole("button").filter({
        has: page.locator(iconSelector),
      }),
    tableCell: (row: Locator, index: number) =>
      row.locator(".oxd-table-cell").nth(index),
    tableCells: (row: Locator) => row.locator(".oxd-table-cell"),
    usernamesColumn: () => userRows.locator(".oxd-table-cell").nth(1),
    rowCheckbox: (row: Locator) => row.locator('input[type="checkbox"]'),
    rowCheckboxLabel: (row: Locator) =>
      row.locator(".oxd-checkbox-wrapper label"),
    headerCheckbox: () => tableHeader.locator('input[type="checkbox"]'),
    headerCheckboxLabel: () =>
      tableHeader.locator(".oxd-checkbox-wrapper label"),
    selectableRowCheckboxes: () =>
      userRows
        .filter({
          hasNot: page
            .locator(".oxd-table-cell")
            .nth(1)
            .getByText("Admin", { exact: true }),
        })
        .locator('input[type="checkbox"]'),
  };
}
