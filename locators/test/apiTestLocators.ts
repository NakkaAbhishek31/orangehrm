import type { Page } from "@playwright/test";

export const authenticatedUserMenu = (page: Page) =>
  page.locator("li.oxd-userdropdown");
