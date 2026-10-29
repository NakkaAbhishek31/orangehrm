import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";

test.describe("Buzz - Newsfeed", () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.gotoBuzz();
  });

  test("TC_BUZZ_501 - Buzz page should load @smoke @navigation @regression", async ({
    page,
    buzzPage,
  }) => {
    await buzzPage.verifyLoaded();
    await expect(page).toHaveURL(/\/buzz\/viewBuzz$/);
  });

  test("TC_BUZZ_502 - Newsfeed should display posts @smoke @feed @regression", async ({
    buzzPage,
  }) => {
    await buzzPage.verifyFeedHasPosts();
  });

  test("TC_BUZZ_503 - Newsfeed controls should be visible and enabled @smoke @controls @regression", async ({
    buzzPage,
  }) => {
    await expect(buzzPage.postComposer).toBeVisible();
    await expect(buzzPage.postComposer).toBeEditable();
    await expect(buzzPage.postButton).toBeEnabled();
    await expect(buzzPage.sharePhotosButton).toBeEnabled();
    await expect(buzzPage.shareVideoButton).toBeEnabled();
    await expect(buzzPage.recentSortButton).toBeVisible();
    await expect(buzzPage.likedSortButton).toBeVisible();
    await expect(buzzPage.commentedSortButton).toBeVisible();
  });

  test("TC_BUZZ_504 - Feed sort options should reload posts by selected sort @positive @sort @regression", async ({
    buzzPage,
  }) => {
    await buzzPage.verifySortReloadsFeed(
      buzzPage.recentSortButton,
      "share.createdAtUtc",
    );
    await buzzPage.verifySortReloadsFeed(
      buzzPage.likedSortButton,
      "share.numOfLikes",
    );
    await buzzPage.verifySortReloadsFeed(
      buzzPage.commentedSortButton,
      "share.numOfComments",
    );
  });

  test("TC_BUZZ_505 - Upcoming anniversaries should show service years and dates @smoke @anniversary @regression", async ({
    buzzPage,
  }) => {
    await expect(buzzPage.upcomingAnniversariesHeading).toBeVisible();
    await expect(buzzPage.anniversaryYearsLabels.first()).toBeVisible();
    await expect(buzzPage.anniversaryDates.first()).toBeVisible();
  });
});
