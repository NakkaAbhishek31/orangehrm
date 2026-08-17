import { Locator, Page, expect } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly PIMLink: Locator;
  readonly adminLink: Locator;
  readonly recruitmentLink:Locator;

  constructor(page: Page) {
    this.page = page;
    this.PIMLink = page.getByRole("link", { name: "PIM", exact: true });
    this.adminLink = page.getByRole("link", { name: "Admin", exact: true });
    this.recruitmentLink=page.getByRole('link', { name: 'Recruitment' });
  }

  async gotoPIM(): Promise<void> {
    await this.PIMLink.click();
    await this.page.waitForURL(/pim\/viewEmployeeList/, {
      timeout: 20_000,
    });
  }

  async gotoAdmin(): Promise<void> {
    await this.adminLink.click();
    await this.page.waitForURL(/admin\/viewSystemUsers/, {
      timeout: 20_000,
    });
  }

  async gotoLeave(): Promise<void> {
  await this.page.getByRole('link', {
    name: 'Leave',
    exact: true,
  }).click();

  await expect(this.page).toHaveURL(
    /leave\/viewLeaveList/
  );
}

  async gotoRecruitment(): Promise<void> {
    const href = await this.recruitmentLink.getAttribute('href');
    const recruitmentUrl = href
      ? new URL(href, this.page.url()).toString()
      : null;

    await this.recruitmentLink.click();

    try {
      await expect(this.page).toHaveURL(
        /recruitment\/viewCandidates/
      );
    } catch (error) {
      if (!recruitmentUrl) {
        throw error;
      }

      await this.page.goto(recruitmentUrl, {
        waitUntil: 'domcontentloaded',
      });

      await expect(this.page).toHaveURL(
        /recruitment\/viewCandidates/
      );
    }
}


}
