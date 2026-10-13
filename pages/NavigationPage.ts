import { expect, type Locator, type Page } from "@playwright/test";
import { routes } from "../utils/routes";
import { navigationLocators } from "../locators/navigationLocators";

/** Application-wide left-navigation component. */
export class NavigationPage {
  readonly pimLink: Locator;
  readonly adminLink: Locator;
  readonly recruitmentLink: Locator;
  readonly timeLink: Locator;
  readonly performanceLink: Locator;
  readonly directoryLink: Locator;
  readonly claimLink: Locator;

  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pimLink = this.link(navigationLocators.links.pim);
    this.adminLink = this.link(navigationLocators.links.admin);
    this.recruitmentLink = this.link(navigationLocators.links.recruitment);
    this.timeLink = this.link(navigationLocators.links.time);
    this.performanceLink = this.link(navigationLocators.links.performance);
    this.directoryLink = this.link(navigationLocators.links.directory);
    this.claimLink = this.link(navigationLocators.links.claim);
  }

  /** @deprecated Use pimLink. Retained for existing tests. */
  get PIMLink(): Locator {
    return this.pimLink;
  }

  /** @deprecated Use timeLink. Retained for existing tests. */
  get timeMenu(): Locator {
    return this.timeLink;
  }

  /** @deprecated Use performanceLink. Retained for existing tests. */
  get performance(): Locator {
    return this.performanceLink;
  }

  private link(name: string): Locator {
    return this.page.getByRole(navigationLocators.linkRole, {
      name,
      exact: navigationLocators.exact,
    });
  }

  private async navigate(link: Locator, route: string): Promise<void> {
    await expect(link).toBeVisible();
    await link.click();
    await expect(this.page).toHaveURL(new RegExp(`${route}$`), {
      timeout: 30_000,
    });
  }

  async gotoPIM(): Promise<void> {
    await this.navigate(this.pimLink, routes.employeeList);
  }

  async gotoAdmin(): Promise<void> {
    await this.navigate(this.adminLink, routes.adminUsers);
  }

  async gotoLeave(): Promise<void> {
    await this.navigate(this.link("Leave"), routes.leaveList);
  }

  async gotoRecruitment(): Promise<void> {
    await this.navigate(this.recruitmentLink, routes.candidates);
  }

  async gotoTime(): Promise<void> {
    await this.navigate(this.timeLink, routes.employeeTimesheets);
  }

  async gotoPerformance(): Promise<void> {
    await this.navigate(this.performanceLink, routes.performanceReviews);
  }

  async gotoDirectory(): Promise<void> {
    await this.navigate(this.directoryLink, routes.directory);
  }

  async gotoClaim(): Promise<void> {
    await this.navigate(this.claimLink, routes.assignClaim);
  }
}
