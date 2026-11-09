import type { Locator, Page } from "@playwright/test";

export const createBuzzLocators = (page: Page) => ({
  heading: page.getByRole("heading", { name: "Buzz", level: 6 }),
  newsfeedHeading: page.getByText("Buzz Newsfeed", { exact: true }),
  postComposer: page.getByRole("textbox", { name: "What's on your mind?" }),
  postButton: page.getByRole("button", { name: "Post", exact: true }),
  sharePhotosButton: page.getByRole("button", { name: "Share Photos" }),
  shareVideoButton: page.getByRole("button", { name: "Share Video" }),
  recentSortButton: page.getByRole("button", { name: /Most Recent Posts/ }),
  likedSortButton: page.getByRole("button", { name: /Most Liked Posts/ }),
  commentedSortButton: page.getByRole("button", {
    name: /Most Commented Posts/,
  }),
  feedPosts: page.locator(".orangehrm-buzz"),
  postMenuButton: (post: Locator) => post.getByRole("button").first(),
  postLikeToggle: (post: Locator) => post.locator(".orangehrm-heart-icon"),

  postLikeCount: (post: Locator) =>
    post.locator(".orangehrm-buzz-stats").getByText(/^\d+ Likes?$/, {
      exact: true,
    }),
  postCommentButton: (post: Locator) =>
    post.locator("button:has(.bi-chat-text-fill)"),
  postCommentInput: (post: Locator) =>
    post.getByPlaceholder("Write your comment...", { exact: true }),
  postCommentCount: (post: Locator) =>
    post.locator(".orangehrm-buzz-stats").getByText(/^\d+ Comments?$/, {
      exact: true,
    }),
  postCommentByText: (post: Locator, comment: string) =>
    post.locator(".orangehrm-buzz-comment").getByText(comment, {
      exact: true,
    }),
  deletePostMenuItem: page.getByText("Delete Post", { exact: true }),
  deletePostConfirmation: page.getByRole("dialog"),
  confirmDeletePostButton: page
    .getByRole("dialog")
    .getByRole("button", { name: /Yes, Delete/ }),
  upcomingAnniversariesHeading: page.getByText("Upcoming Anniversaries", {
    exact: true,
  }),
  anniversaryYearsLabels: page.getByText("Years", { exact: true }),
  anniversaryDates: page.getByText(/^[A-Z][a-z]{2} \d{1,2}$/),
});
