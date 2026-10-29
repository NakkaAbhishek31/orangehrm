import { expect, type Locator, type Page } from "@playwright/test";
import { createBuzzLocators } from "../locators/buzzLocators";

export class BuzzPage {
  readonly heading!: Locator;
  readonly newsfeedHeading!: Locator;
  readonly postComposer!: Locator;
  readonly postButton!: Locator;
  readonly sharePhotosButton!: Locator;
  readonly shareVideoButton!: Locator;
  readonly recentSortButton!: Locator;
  readonly likedSortButton!: Locator;
  readonly commentedSortButton!: Locator;
  readonly feedPosts!: Locator;
  readonly upcomingAnniversariesHeading!: Locator;
  readonly anniversaryYearsLabels!: Locator;
  readonly anniversaryDates!: Locator;

  constructor(private readonly page: Page) {
    Object.assign(this, createBuzzLocators(page));
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.newsfeedHeading).toBeVisible();
  }

  async verifyFeedHasPosts(): Promise<void> {
    await expect(this.feedPosts.first()).toBeVisible({ timeout: 20_000 });
  }

  async verifySortReloadsFeed(
    sortButton: Locator,
    sortField: string,
  ): Promise<void> {
    const feedResponse = this.page.waitForResponse((response) => {
      if (!response.url().includes("/api/v2/buzz/feed")) return false;
      const requestUrl = new URL(response.url());
      return requestUrl.searchParams.get("sortField") === sortField;
    });

    await sortButton.click();
    const response = await feedResponse;
    expect(response.ok()).toBeTruthy();
    await this.verifyFeedHasPosts();
  }
}
