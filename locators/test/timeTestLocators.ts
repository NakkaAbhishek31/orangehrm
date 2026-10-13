import type { Locator, Page } from "@playwright/test";

export const timeTableCellText = (page: Page, text: string): Locator =>
  page.locator(".oxd-table-cell").nth(1).getByText(text, { exact: true });

export const timeDeleteIcon = (page: Page) => page.locator("i.bi-trash");
export const timeEditIcon = (page: Page) => page.locator("i.bi-pencil-fill");
export const timeConfirmationDialog = (page: Page) =>
  page.getByRole("dialog");
export const editProjectHeading = (page: Page) =>
  page.getByRole("heading", { name: "Edit Project", exact: true });

export const timeTableCells = (row: Locator) => row.locator(".oxd-table-cell");
export const timeRowCell = (rows: Locator, rowIndex: number, cellIndex: number) =>
  timeTableCells(rows.nth(rowIndex)).nth(cellIndex);
export const timeActionButton = (row: Locator, icon: Locator) =>
  row.getByRole("button").filter({ has: icon });
export const confirmDeleteButton = (dialog: Locator) =>
  dialog.getByRole("button", { name: /Yes, Delete$/ });
