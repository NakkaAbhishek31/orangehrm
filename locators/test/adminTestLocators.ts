import type { Locator, Page } from "@playwright/test";

export const adminTableCell = (row: Locator, index: number) =>
  row.locator(".oxd-table-cell").nth(index);

export const adminSelectOption = (page: Page, text: string) =>
  page.locator(".oxd-select-dropdown:visible").getByText(text, { exact: true });

export const adminAutocompleteText = (page: Page, text: string) =>
  page
    .locator(".oxd-autocomplete-dropdown:visible")
    .getByText(text, { exact: true });

export const adminUsernameCell = (page: Page, username: string) =>
  page
    .locator(".oxd-table-cell")
    .nth(1)
    .getByText(username, { exact: true });

export const adminRowCheckbox = (row: Locator) =>
  row.locator('input[type="checkbox"]');

export const adminRowCheckboxLabel = (row: Locator) =>
  row.locator(".oxd-checkbox-wrapper label");
