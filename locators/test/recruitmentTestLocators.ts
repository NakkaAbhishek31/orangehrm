import type { Locator, Page } from "@playwright/test";

export const candidateViewIcon = (page: Page) => page.locator("i.bi-eye-fill");

export const interviewValue = (page: Page, value: string): Locator =>
  page.getByText(value, { exact: true });

export const recruitmentTableCells = (row: Locator) =>
  row.locator(".oxd-table-cell");
export const recruitmentTableCell = (row: Locator, index: number) =>
  recruitmentTableCells(row).nth(index);
export const recruitmentTableColumn = (rows: Locator, selector: string) =>
  rows.locator(selector);
export const recruitmentViewButton = (row: Locator) =>
  row.getByRole("button").filter({ has: row.locator("i.bi-eye-fill") });
