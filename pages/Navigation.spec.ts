import { Locator, Page, expect } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly PIMLink: Locator;
  readonly adminLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.PIMLink = page.getByText("PIM", { exact: true });
    this.adminLink = page.getByRole("link", { name: /Admin/i });
  }

  async gotoPIM(): Promise<void> {
    await this.PIMLink.click();
  }

  async gotoAdmin(): Promise<void> {
    await this.adminLink.click();
    await this.page.waitForURL(/admin\/viewSystemUsers/, {
      timeout: 20_000,
    });
  }
}
