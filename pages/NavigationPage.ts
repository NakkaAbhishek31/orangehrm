import { expect, type Locator, type Page } from "@playwright/test";
import { routes } from "../utils/routes";

/** Application-wide left-navigation component. */
export class NavigationPage {
  readonly pimLink: Locator;
  readonly adminLink: Locator;
  readonly recruitmentLink: Locator;
  readonly timeLink: Locator;
  readonly performanceLink: Locator;
  readonly directoryLink: Locator;

  constructor(private readonly page: Page) {
    this.pimLink = this.link("PIM");
    this.adminLink = this.link("Admin");
    this.recruitmentLink = this.link("Recruitment");
    this.timeLink = this.link("Time");
    this.performanceLink = this.link("Performance");
    this.directoryLink = this.link("Directory");
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
    return this.page.getByRole("link", { name, exact: true });
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
}
