import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import dashboardData from "../../test-data/dashboard.data.json";
import loginData from "../../test-data/login.data.json";

test.describe("Dashboard - Quick Launch", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

  test("TC_DASHBOARD_266 - Admin should navigate to the Dashboard page @smoke @navigation @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_266;

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    await expect(dashboardPage.heading).toHaveText(data.pageHeading);
  });

  test("TC_DASHBOARD_267 - Dashboard should display widgets @smoke @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_267;

    await expect(dashboardPage.widgets.first()).toBeVisible();
    await expect.poll(() => dashboardPage.widgets.count()).toBeGreaterThanOrEqual(
      data.minimumWidgetCount,
    );
  });

  test("TC_DASHBOARD_268 - Dashboard should display the Quick Launch widget @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_268;

    await expect(dashboardPage.quickLaunchWidget).toBeVisible();
    await expect(dashboardPage.quickLaunchHeading).toHaveText(
      data.widgetHeading,
    );
  });

  test("TC_DASHBOARD_269 - Quick Launch should display all available actions @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_269;

    for (const action of data.actions) {
      await expect(dashboardPage.quickLaunchAction(action)).toBeVisible();
    }
  });

  test("TC_DASHBOARD_270 - Admin should open Assign Leave from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_270;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_271 - Admin should open Leave List from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_271;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_272 - Admin should open Employee Timesheets from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_272;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_273 - Admin should open Apply Leave from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_273;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_274 - Admin should open My Leave from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_274;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_275 - Admin should open My Timesheet from Quick Launch @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_275;

    await dashboardPage.openQuickLaunchAction(
      data.action,
      new RegExp(`${data.expectedUrlPath}$`),
    );
  });

  test("TC_DASHBOARD_276 - Dashboard should remain available after browser reload @positive @navigation @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_276;

    await page.reload();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    await expect(dashboardPage.heading).toHaveText(data.pageHeading);
  });

  for (const data of dashboardData.sidebarCases) {
    test(`${data.id} - Dashboard should display the ${data.linkName} sidebar link @smoke @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await expect(dashboardPage.sidebarLink(data.linkName)).toBeVisible();
    });
  }

  for (const data of dashboardData.widgetCases) {
    test(`${data.id} - Dashboard should display the ${data.heading} widget @smoke @regression`, async ({
      dashboardPage,
    }) => {
      await expect(dashboardPage.widgetHeading(data.heading)).toBeVisible();
    });
  }

  for (const data of dashboardData.sidebarNavigationCases) {
    test(`${data.id} - Admin should open ${data.linkName} from the Dashboard sidebar @positive @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.openSidebarLink(
        data.linkName,
        new RegExp(data.expectedUrlPath),
      );
    });
  }

  test("TC_DASHBOARD_306 - Dashboard should display the sidebar search field @smoke @search @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_306;

    await expect(dashboardPage.sidebarSearchInput).toBeVisible();
    await expect(dashboardPage.sidebarSearchInput).toBeEditable();
    await expect(dashboardPage.sidebarSearchInput).toHaveAttribute(
      "placeholder",
      data.searchPlaceholder,
    );
  });

  for (const data of dashboardData.sidebarSearchCases) {
    test(`${data.id} - Sidebar search should filter the ${data.linkName} module @positive @search @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.sidebarSearchInput.fill(data.searchText);

      await expect(dashboardPage.sidebarLink(data.linkName)).toBeVisible();
      await expect(dashboardPage.sidebarMenuLinks).toHaveCount(1);
    });
  }

  test("TC_DASHBOARD_319 - Clearing sidebar search should restore module links @positive @search @reset @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_319;

    await dashboardPage.sidebarSearchInput.fill(data.searchText);
    await expect(dashboardPage.sidebarMenuLinks).toHaveCount(1);

    await dashboardPage.sidebarSearchInput.clear();

    await expect(dashboardPage.sidebarLink(data.firstLink)).toBeVisible();
    await expect(dashboardPage.sidebarLink(data.lastLink)).toBeVisible();
    await expect.poll(() => dashboardPage.sidebarMenuLinks.count()).toBeGreaterThan(1);
  });

  test("TC_DASHBOARD_320 - Unknown sidebar search should hide all module links @negative @search @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_320;

    await dashboardPage.sidebarSearchInput.fill(data.searchText);

    await expect(dashboardPage.sidebarMenuLinks).toHaveCount(0);
  });

  test("TC_DASHBOARD_321 - Dashboard should display an enabled user profile menu @smoke @profile @regression", async ({
    dashboardPage,
  }) => {
    await expect(dashboardPage.profileMenu).toBeVisible();
    await expect(dashboardPage.profileMenu).toBeEnabled();
  });

  for (const data of dashboardData.userMenuCases) {
    test(`${data.id} - User profile menu should display ${data.itemName} @smoke @profile @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.openUserMenu();

      await expect(dashboardPage.userMenuItem(data.itemName)).toBeVisible();
    });
  }

  test("TC_DASHBOARD_326 - Escape should close the user profile menu @positive @profile @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_326;
    await dashboardPage.openUserMenu();

    await page.keyboard.press("Escape");

    await expect(dashboardPage.userMenuItem(data.menuItem)).toBeHidden();
  });

  for (const data of dashboardData.additionalSearchCases) {
    test(`${data.id} - Sidebar search should support ${data.description} @positive @search @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.sidebarSearchInput.fill(data.searchText);

      await expect(dashboardPage.sidebarLink(data.linkName)).toBeVisible();
    });
  }

  test("TC_DASHBOARD_330 - Clearing sidebar search should empty the search field @positive @search @reset @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_330;
    await dashboardPage.sidebarSearchInput.fill(data.searchText);
    await expect(dashboardPage.sidebarSearchInput).toHaveValue(data.searchText);

    await dashboardPage.sidebarSearchInput.clear();

    await expect(dashboardPage.sidebarSearchInput).toHaveValue("");
  });
});
