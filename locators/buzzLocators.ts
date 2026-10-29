import type { Page } from "@playwright/test";

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
  feedPosts: page.locator(".orangehrm-buzz-post"),
  upcomingAnniversariesHeading: page.getByText("Upcoming Anniversaries", {
    exact: true,
  }),
  anniversaryYearsLabels: page.getByText("Years", { exact: true }),
  anniversaryDates: page.getByText(/^[A-Z][a-z]{2} \d{1,2}$/),
});
