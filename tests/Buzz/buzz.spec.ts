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

  test("TC_BUZZ_506 - Admin should create and delete a Buzz post @create @delete @regression", async ({
    buzzPage,
  }) => {
    const message = `MCP system are working great ${Date.now()}`;

    await buzzPage.createPost(message);

    const createdPost = buzzPage.postByMessage(message);
    await expect(createdPost).toBeVisible();

    await buzzPage.openPostMenu(createdPost);
    await buzzPage.selectDeletePost();

    await expect(buzzPage.deletePostConfirmation).toBeVisible();
    await buzzPage.confirmDeletePost();
    await expect(createdPost).toHaveCount(0);
  });
  test("TC_BUZZ_507 - Admin should like and unlike a Buzz post @positive @interaction @regression", async ({
    buzzPage,
  }) => {
    const message = `MCP system are working great ${Date.now()}`;

    await buzzPage.createPost(message);

    const createdPost = buzzPage.postByMessage(message);
    try {
      await expect(createdPost).toBeVisible();
      await expect(buzzPage.postLikeCount(createdPost)).toHaveText("0 Likes");

      await buzzPage.togglePostLike(createdPost);
      await expect(buzzPage.postLikeCount(createdPost)).toHaveText("1 Like");

      await buzzPage.togglePostLike(createdPost);
      await expect(buzzPage.postLikeCount(createdPost)).toHaveText("0 Likes");
    } finally {
      if (await createdPost.count()) {
        await buzzPage.openPostMenu(createdPost);
        await buzzPage.selectDeletePost();
        await expect(buzzPage.deletePostConfirmation).toBeVisible();
        await buzzPage.confirmDeletePost();
        await expect(createdPost).toHaveCount(0);
      }
    }
  });
  test.only("TC_BUZZ_508 - Admin should comment on their own post @positive @comment @regression", async ({
    buzzPage,
  }) => {
    const message = `MCP system are working great ${Date.now()}`;
    const comment = `Automated Buzz comment ${Date.now()}`;

    await buzzPage.createPost(message);

    const createdPost = buzzPage.postByMessage(message);
    try {
      await expect(createdPost).toBeVisible();
      await expect(buzzPage.postCommentCount(createdPost)).toHaveText(
        "0 Comments",
      );

      await buzzPage.openPostComments(createdPost);
      await buzzPage.addPostComment(createdPost, comment);

      await expect(buzzPage.postCommentCount(createdPost)).toHaveText(
        "1 Comment",
      );
      await expect(buzzPage.postCommentByText(createdPost, comment)).toBeVisible();
    } finally {
      if (await createdPost.count()) {
        await buzzPage.openPostMenu(createdPost);
        await buzzPage.selectDeletePost();
        await expect(buzzPage.deletePostConfirmation).toBeVisible();
        await buzzPage.confirmDeletePost();
        await expect(createdPost).toHaveCount(0);
      }
    }
  });
});
