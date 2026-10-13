import { Locator, Page, expect } from "@playwright/test";
import { dashboardLocators } from "../locators/dashboardLocators";

export class DashboardPage {
  readonly page: Page;
  readonly profileMenu!: Locator;
  readonly logoutLink!: Locator;
  readonly heading!: Locator;
  readonly widgets!: Locator;
  readonly quickLaunchWidget!: Locator;
  readonly quickLaunchHeading!: Locator;
  readonly sidebarSearchInput!: Locator;
  readonly sidebarMenuLinks!: Locator;
  readonly activeSidebarLink!: Locator;
  readonly brandLogo!: Locator;
  readonly profileImage!: Locator;
  readonly profileName!: Locator;
  readonly topbarHeader!: Locator;
  readonly sidebarToggleButton!: Locator;
  readonly aboutDialog!: Locator;
  readonly aboutDialogCloseButton!: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileMenu = page.locator(dashboardLocators.profileMenu);
    this.logoutLink = page.getByText(
      dashboardLocators.logoutLink.text,
      { exact: dashboardLocators.logoutLink.exact },
    );
    this.heading = page.getByRole(dashboardLocators.heading.role, {
      name: dashboardLocators.heading.name,
      exact: dashboardLocators.heading.exact,
    });
    this.widgets = page.locator(dashboardLocators.widgets);
    this.quickLaunchWidget = this.widgets.filter({
      has: page.getByText(dashboardLocators.quickLaunchText.text, {
        exact: dashboardLocators.quickLaunchText.exact,
      }),
    });
    this.quickLaunchHeading = this.quickLaunchWidget.getByText(
      dashboardLocators.quickLaunchText.text,
      { exact: dashboardLocators.quickLaunchText.exact },
    );
    this.sidebarSearchInput = page.getByPlaceholder(
      dashboardLocators.sidebarSearchPlaceholder,
    );
    this.sidebarMenuLinks = page.locator(dashboardLocators.sidebarMenuLinks);
    this.activeSidebarLink = page.locator(dashboardLocators.activeSidebarLink);
    this.brandLogo = page.locator(dashboardLocators.brandLogo);
    this.profileImage = page.locator(dashboardLocators.profileImage);
    this.profileName = page.locator(dashboardLocators.profileName);
    this.topbarHeader = page.locator(dashboardLocators.topbarHeader);
    this.sidebarToggleButton = page.locator(
      dashboardLocators.sidebarToggleButton,
    );
    this.aboutDialog = page.getByRole(dashboardLocators.aboutDialogRole);
    this.aboutDialogCloseButton = this.aboutDialog.locator(
      dashboardLocators.aboutDialogCloseButton,
    );
  }

  quickLaunchAction(name: string): Locator {
    return this.quickLaunchWidget.getByText(name, { exact: true });
  }

  sidebarLink(name: string): Locator {
    return this.page.getByRole(dashboardLocators.linkRole, {
      name,
      exact: dashboardLocators.exact,
    });
  }

  userMenuItem(name: string): Locator {
    return this.page.getByText(name, { exact: true });
  }

  async openUserMenu(): Promise<void> {
    await expect(this.profileMenu).toBeVisible();
    await this.profileMenu.click();
    await expect(this.logoutLink).toBeVisible();
  }

  async toggleSidebar(): Promise<void> {
    await this.sidebarToggleButton.click();
  }

  async openUserMenuItem(name: string): Promise<void> {
    await this.openUserMenu();
    await this.userMenuItem(name).click();
  }

  async closeAboutDialog(): Promise<void> {
    await this.aboutDialogCloseButton.click();
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

  async returnToDashboard(): Promise<void> {
    await this.page.goBack();
    await expect(this.page).toHaveURL(/\/dashboard\/index$/, {
      timeout: 30_000,
    });
    await expect(this.heading).toBeVisible();
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
