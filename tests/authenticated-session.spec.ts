import { test, expect } from "../fixtures/baseTest";
import { routes } from "../utils/routes";

// Starts with no saved cookies so the auto fixture must recover by logging in.
// This protects the redirect race seen when OrangeHRM invalidates a stored session.
test.use({ storageState: { cookies: [], origins: [] } });

test(
  "TC_AUTH_001 - Admin session should recover after an expired storage state @authentication @regression",
  async ({ page }) => {
    await expect(page).toHaveURL(new RegExp(`${routes.dashboard}$`));
    await expect(page.locator("li.oxd-userdropdown")).toBeVisible();
  },
);
