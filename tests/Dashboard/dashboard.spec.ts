import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import dashboardData from "../../test-data/dashboard.data.json";
import { quickLaunchCards } from "../../locators/test/dashboardTestLocators";

test.describe("Dashboard - Quick Launch", () => {
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

  for (const data of dashboardData.filteredNavigationCases) {
    test(`${data.id} - Admin should search for and open ${data.linkName} from the sidebar @positive @search @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.sidebarSearchInput.fill(data.linkName);
      await expect(dashboardPage.sidebarMenuLinks).toHaveCount(1);

      await dashboardPage.openSidebarLink(
        data.linkName,
        new RegExp(data.expectedUrlPath),
      );
    });
  }

  for (const data of dashboardData.reloadedQuickLaunchCases) {
    test(`${data.id} - ${data.action} Quick Launch action should remain available after reload @positive @navigation @regression`, async ({
      page,
      dashboardPage,
    }) => {
      await page.reload();

      await expect(dashboardPage.quickLaunchAction(data.action)).toBeVisible();
      await expect(dashboardPage.quickLaunchAction(data.action)).toBeEnabled();
    });
  }

  test("TC_DASHBOARD_346 - My Timesheet Quick Launch action should remain available after reload @positive @navigation @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_346;

    await page.reload();

    await expect(dashboardPage.quickLaunchAction(data.action)).toBeVisible();
    await expect(dashboardPage.quickLaunchAction(data.action)).toBeEnabled();
  });

  test("TC_DASHBOARD_347 - Clicking the profile menu twice should close it @positive @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_347;

    await dashboardPage.openUserMenu();
    await dashboardPage.profileMenu.click();

    await expect(dashboardPage.userMenuItem(data.menuItem)).toBeHidden();
  });

  test("TC_DASHBOARD_348 - Reload should clear the sidebar search text @positive @search @navigation @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_348;

    await dashboardPage.sidebarSearchInput.fill(data.searchText);
    await expect(dashboardPage.sidebarSearchInput).toHaveValue(data.searchText);
    await page.reload();

    await expect(dashboardPage.sidebarSearchInput).toHaveValue("");
  });

  test("TC_DASHBOARD_349 - Clearing an unknown sidebar search should restore module links @negative @search @reset @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_349;

    await dashboardPage.sidebarSearchInput.fill(data.searchText);
    await expect(dashboardPage.sidebarMenuLinks).toHaveCount(0);
    await dashboardPage.sidebarSearchInput.clear();

    await expect(dashboardPage.sidebarLink(data.restoredLink)).toBeVisible();
    await expect.poll(() => dashboardPage.sidebarMenuLinks.count()).toBeGreaterThan(1);
  });

  test("TC_DASHBOARD_350 - Dashboard sidebar link should be marked active @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_350;

    await expect(dashboardPage.activeSidebarLink).toBeVisible();
    await expect(dashboardPage.activeSidebarLink).toContainText(data.activeLink);
  });

  for (const data of dashboardData.sidebarRoundTripCases) {
    test(`${data.id} - Admin should return to Dashboard after opening ${data.linkName} @positive @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.openSidebarLink(
        data.linkName,
        new RegExp(data.expectedUrlPath),
      );
      await dashboardPage.returnToDashboard();
    });
  }

  for (const data of dashboardData.quickLaunchRoundTripCases) {
    test(`${data.id} - Admin should return to Dashboard after opening ${data.action} @positive @navigation @regression`, async ({
      dashboardPage,
    }) => {
      await dashboardPage.openQuickLaunchAction(
        data.action,
        new RegExp(`${data.expectedUrlPath}$`),
      );
      await dashboardPage.returnToDashboard();
    });
  }

  test("TC_DASHBOARD_367 - Dashboard should remain visible after filtering and clearing sidebar search @positive @search @reset @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_367;

    await dashboardPage.sidebarSearchInput.fill(data.searchText);
    await expect(dashboardPage.sidebarMenuLinks).toHaveCount(1);
    await dashboardPage.sidebarSearchInput.clear();

    await expect(dashboardPage.heading).toHaveText(data.pageHeading);
  });

  test("TC_DASHBOARD_368 - Dashboard link should become active again after browser back navigation @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_368;

    await dashboardPage.openSidebarLink(
      data.linkName,
      new RegExp(data.expectedUrlPath),
    );
    await dashboardPage.returnToDashboard();

    await expect(dashboardPage.activeSidebarLink).toContainText(data.activeLink);
  });

  test("TC_DASHBOARD_369 - Quick Launch should contain six actions @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_369;

    await expect(
      quickLaunchCards(dashboardPage.quickLaunchWidget),
    ).toHaveCount(data.expectedActionCount);
  });

  test("TC_DASHBOARD_370 - Sidebar should contain all standard module links @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_370;

    await expect
      .poll(() => dashboardPage.sidebarMenuLinks.count())
      .toBeGreaterThanOrEqual(data.minimumSidebarLinkCount);
  });

  test("TC_DASHBOARD_371 - Dashboard should display the OrangeHRM brand logo @smoke @branding @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_371;

    await expect(dashboardPage.brandLogo).toBeVisible();
    await expect(dashboardPage.brandLogo).toHaveAttribute(
      "src",
      new RegExp(data.logoSourcePattern, "i"),
    );
  });

  test("TC_DASHBOARD_372 - Dashboard should display the user profile image @smoke @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_372;

    await expect(dashboardPage.profileImage).toBeVisible();
    await expect(dashboardPage.profileImage).toHaveAttribute(
      "alt",
      data.profileImageAlt,
    );
  });

  test("TC_DASHBOARD_373 - Dashboard should display the logged-in user name @smoke @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_373;

    await expect(dashboardPage.profileName).toBeVisible();
    await expect(dashboardPage.profileName).toHaveText(
      new RegExp(data.profileNamePattern),
    );
  });

  test("TC_DASHBOARD_374 - Dashboard should display its topbar breadcrumb @smoke @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_374;

    await expect(dashboardPage.topbarHeader).toBeVisible();
    await expect(dashboardPage.topbarHeader).toContainText(data.topbarText);
  });

  test("TC_DASHBOARD_375 - Admin should collapse the Dashboard sidebar @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_375;

    await dashboardPage.toggleSidebar();

    await expect(dashboardPage.sidebarSearchInput).toHaveCSS(
      "width",
      data.collapsedWidth,
    );
  });

  test("TC_DASHBOARD_376 - Admin should expand the Dashboard sidebar after collapsing it @positive @navigation @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_376;

    await dashboardPage.toggleSidebar();
    await dashboardPage.toggleSidebar();

    await expect(dashboardPage.sidebarSearchInput).toBeVisible();
    await expect(dashboardPage.sidebarSearchInput).toHaveAttribute(
      "placeholder",
      data.searchPlaceholder,
    );
  });

  test("TC_DASHBOARD_377 - Admin should open the About dialog from the user menu @positive @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_377;

    await dashboardPage.openUserMenuItem(data.menuItem);

    await expect(dashboardPage.aboutDialog).toBeVisible();
  });

  test("TC_DASHBOARD_378 - Admin should close the About dialog @positive @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_378;

    await dashboardPage.openUserMenuItem(data.menuItem);
    await dashboardPage.closeAboutDialog();

    await expect(dashboardPage.aboutDialog).toBeHidden();
  });

  test("TC_DASHBOARD_379 - Admin should open Change Password from the user menu @positive @profile @navigation @regression", async ({
    page,
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_379;

    await dashboardPage.openUserMenuItem(data.menuItem);

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });

  test("TC_DASHBOARD_380 - Logout option should remain available after reopening the user menu @smoke @profile @regression", async ({
    dashboardPage,
  }) => {
    const data = dashboardData.TC_DASHBOARD_380;

    await dashboardPage.openUserMenu();
    await dashboardPage.profileMenu.click();
    await dashboardPage.openUserMenu();

    await expect(dashboardPage.userMenuItem(data.menuItem)).toBeVisible();
  });
});
