import type { Locator, Page } from "@playwright/test";

export function createMaintenanceLocators(page: Page) {
  return {
    administratorAccessHeading: page.getByRole("heading", {
      name: "Administrator Access",
      exact: true,
    }),
    purgeEmployeeHeading: page.getByRole("heading", {
      name: "Purge Employee Records",
      exact: true,
    }),
    passwordInput: page.locator('input[name="password"]'),
    confirmButton: page.getByRole("button", {
      name: "Confirm",
      exact: true,
    }),
    cancelButton: page.getByRole("button", {
      name: "Cancel",
      exact: true,
    }),

    InvalidcredentialsErrorMessage: page.getByText('Invalid credentials', { exact: true }),
  
    accessRecordsLink: page.getByRole("link", {
      name: "Access Records",
      exact: true,
    }),
    accessRecordHeading: page.getByRole("heading", {
      name: "Download Personal Data",
      exact: true,
    }),
    accessRecordEmployeeInput: page.getByPlaceholder("Type for hints..."),
    employeeAutocompleteNoRecords: page
      .locator(".oxd-autocomplete-dropdown:visible")
      .getByText("No Records Found", { exact: true }),
    searchButton: page.getByRole("button", { name: "Search", exact: true }),
    employeeInputErrorMessage: page.getByText('Required', { exact: true }),

    purgeRecordsDropdown: page
      .getByRole("navigation", { name: "Topbar Menu" })
      .getByText("Purge Records", { exact: true }),
    purgeEmployeeRecordsLink: page.getByRole("menuitem", {
      name: "Employee Records",
      exact: true,
    }),
    purgeCandidateRecordsLink: page.getByRole("menuitem", {
      name: "Candidate Records",
      exact: true,
    }),

    purgeCandidateHeading: page.getByRole("heading", {
      name: "Purge Candidate Records",
      exact: true,
    }),
    purgeCandidateVacancyInput: page.getByRole("textbox", {
      name: "Type for hints...",
    }),
    purgeCandidateVacancyOptions: page
      .locator(".oxd-autocomplete-dropdown:visible .oxd-autocomplete-option")
      .filter({ hasNotText: /Searching|No Records Found/i }),
    vacancyInvalidErrorMessage: page.getByText("Invalid", { exact: true }),
    purgeEmployeePastEmployeeInput: page
      .locator(".oxd-input-group")
      .filter({ has: page.getByText("Past Employee", { exact: false }) })
      .locator("input"),

  };
}
