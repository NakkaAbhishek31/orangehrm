import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly profileMenu: Locator;
  readonly logoutLink: Locator;
  readonly heading: Locator;
  readonly widgets: Locator;
  readonly quickLaunchWidget: Locator;
  readonly quickLaunchHeading: Locator;
  readonly sidebarSearchInput: Locator;
  readonly sidebarMenuLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileMenu = page.locator("li.oxd-userdropdown");
    this.logoutLink = page.getByText("Logout", { exact: true });
    this.heading = page.getByRole("heading", {
      name: "Dashboard",
      exact: true,
    });
    this.widgets = page.locator(".orangehrm-dashboard-widget");
    this.quickLaunchWidget = this.widgets.filter({
      has: page.getByText("Quick Launch", { exact: true }),
    });
    this.quickLaunchHeading = this.quickLaunchWidget.getByText(
      "Quick Launch",
      { exact: true },
    );
    this.sidebarSearchInput = page.getByPlaceholder("Search");
    this.sidebarMenuLinks = page.locator(".oxd-main-menu-item");
  }

  quickLaunchAction(name: string): Locator {
    return this.quickLaunchWidget.getByText(name, { exact: true });
  }

  sidebarLink(name: string): Locator {
    return this.page.getByRole("link", { name, exact: true });
  }

  userMenuItem(name: string): Locator {
    return this.page.getByText(name, { exact: true });
  }

  async openUserMenu(): Promise<void> {
    await expect(this.profileMenu).toBeVisible();
    await this.profileMenu.click();
    await expect(this.logoutLink).toBeVisible();
  }

  widgetHeading(name: string): Locator {
    return this.widgets.getByText(name, { exact: true });
  }

  async openSidebarLink(name: string, expectedUrl: RegExp): Promise<void> {
    const link = this.sidebarLink(name);
    await expect(link).toBeVisible();
    await link.click();
    await expect(this.page).toHaveURL(expectedUrl, { timeout: 30_000 });
  }

  async openQuickLaunchAction(name: string, expectedUrl: RegExp) {
    const action = this.quickLaunchAction(name);
    await expect(action).toBeVisible();
    await action.click();
    await expect(this.page).toHaveURL(expectedUrl, { timeout: 30_000 });
  }

  async clickOnLogout() {
    await this.profileMenu.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
  }
}
