import type { Page } from "@playwright/test";

export const employeeClaimsHeading = (page: Page, name = "Employee Claims") =>
  page.getByRole("heading", { name });

export const requiredValidationMessages = (page: Page) =>
  page.locator(".oxd-input-field-error-message");

export const requiredValidationForText = (page: Page, text: string) =>
  requiredValidationMessages(page).filter({ hasText: text }).first();
