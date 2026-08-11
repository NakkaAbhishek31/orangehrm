import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly profileMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileMenu = page.locator("li.oxd-userdropdown");
    this.logoutLink = page.getByText("Logout", { exact: true });
  }

  async clickOnLogout() {
    await this.profileMenu.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
  }
}
