import type { Locator, Page } from "@playwright/test";

export const leaveStatusOptions = (page: Page) =>
  page.locator(".oxd-select-dropdown:visible");

export const leaveDropdownOption = (options: Locator, text: RegExp) =>
  options.locator(".oxd-select-option").filter({ hasText: text });

export const leaveRowCell = (rows: Locator, rowIndex: number, cellIndex: number) =>
  rows.nth(rowIndex).locator(".oxd-table-cell").nth(cellIndex);

export const leaveRowCells = (row: Locator) =>
  row.locator(".oxd-table-cell");

export const leaveSelectedStatus = (statusField: Locator, status: string) =>
  statusField.getByText(status, { exact: true });
