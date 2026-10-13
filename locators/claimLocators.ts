import type { Locator, Page } from "@playwright/test";

export function createClaimLocators(page: Page) {
  const form = page.locator("form");
  const field = (label: string): Locator =>
    form.locator(".oxd-input-group").filter({ hasText: label });
  const autocompleteDropdown = page.locator(
    ".oxd-autocomplete-dropdown:visible",
  );
  const selectDropdownMenu = page.locator(".oxd-select-dropdown:visible");

  return {
    heading: page.getByRole("heading", { name: "Create Claim Request" }),
    employeeNameInput: field("Employee Name").locator("input"),
    eventDropdown: field("Event").locator(".oxd-select-text"),
    currencyDropdown: field("Currency").locator(".oxd-select-text"),
    remarksInput: field("Remarks").locator("textarea"),
    createButton: form.getByRole("button", { name: "Create", exact: true }),
    cancelButton: form.getByRole("button", { name: "Cancel", exact: true }),
    autocompleteDropdown,
    autocompleteNoRecords: autocompleteDropdown.getByText("No Records Found", {
      exact: true,
    }),
    validationMessages: page.locator(".oxd-input-field-error-message"),
    employeeNameValidation: field("Employee Name").locator(
      ".oxd-input-field-error-message",
    ),
    eventValidation: field("Event").locator(
      ".oxd-input-field-error-message",
    ),
    currencyValidation: field("Currency").locator(
      ".oxd-input-field-error-message",
    ),
    remarksValidation: field("Remarks").locator(
      ".oxd-input-field-error-message",
    ),
    requiredFieldsHint: form.getByText("* Required", { exact: true }),
    selectDropdownMenu,
    selectableDropdownOptions: selectDropdownMenu
      .locator(".oxd-select-option")
      .filter({
        hasNotText: /^(-- Select --|No Records Found|Searching\.\.\.)$/i,
      }),
    assignClaimLink: page.getByLabel("Topbar Menu").getByRole("link", {
      name: "Assign Claim",
      exact: true,
    }),
  };
}
