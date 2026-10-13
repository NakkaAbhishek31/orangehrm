import type { Locator } from "@playwright/test";

export const performanceEmployeeCells = (rows: Locator) =>
  rows.locator(".oxd-table-cell").nth(1);
