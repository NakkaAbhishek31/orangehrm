import { expect, test as base, type Page } from "@playwright/test";
import { AdminPage } from "../pages/Admin";
import { DashboardPage } from "../pages/DashboardPage";
import { DirectoryPage } from "../pages/DirectoryPage";
import { EmployeeAttachmentsPage } from "../pages/EmployeeAttachmentsPage";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { LeavePage } from "../pages/LeavesPage";
import { LoginPage } from "../pages/LoginPage";
import { NavigationPage } from "../pages/NavigationPage";
import { PerformancePage } from "../pages/PerformancePage";
import { PIMPage } from "../pages/PimPage";
import { RecruitmentPage } from "../pages/RecruitmentPage";
import { TimePage } from "../pages/TimePage";
import { ClaimPage } from "../pages/ClaimPage";
import { BuzzPage } from "../pages/BuzzPage";
import { environment } from "../config/environment";
import { routes } from "../utils/routes";

export type AppFixtures = {
  loginPage: LoginPage;
  forgotPage: ForgotPasswordPage;
  dashboardPage: DashboardPage;
  navigationPage: NavigationPage;
  pimPage: PIMPage;
  employeeAttachmentsPage: EmployeeAttachmentsPage;
  adminPage: AdminPage;
  leavePage: LeavePage;
  recruitmentPage: RecruitmentPage;
  timePage: TimePage;
  performancePage: PerformancePage;
  directoryPage: DirectoryPage;
  claimPage: ClaimPage;
  buzzPage: BuzzPage;
};

const appTest = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  forgotPage: async ({ page }, use) => {
    await use(new ForgotPasswordPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },
  employeeAttachmentsPage: async ({ page }, use) => {
    await use(new EmployeeAttachmentsPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  leavePage: async ({ page }, use) => {
    await use(new LeavePage(page));
  },
  recruitmentPage: async ({ page }, use) => {
    await use(new RecruitmentPage(page));
  },
  timePage: async ({ page }, use) => {
    await use(new TimePage(page));
  },
  performancePage: async ({ page }, use) => {
    await use(new PerformancePage(page));
  },
  directoryPage: async ({ page }, use) => {
    await use(new DirectoryPage(page));
  },
  claimPage: async ({ page }, use) => {
    await use(new ClaimPage(page));
  },
  buzzPage: async ({ page }, use) => {
    await use(new BuzzPage(page));
  },
});

async function openDashboardWithRetry(page: Page): Promise<void> {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await page.goto(routes.dashboard, {
        waitUntil: "domcontentloaded",
        timeout: environment.navigationTimeoutMs,
      });
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const isTransientNavigationError =
        /net::ERR_(?:ABORTED|NETWORK_CHANGED|CONNECTION_RESET|TIMED_OUT)|Navigation interrupted/i.test(
          message,
        );

      if (!isTransientNavigationError || attempt === maxAttempts) {
        throw error;
      }

      await page.waitForTimeout(attempt * 1_000);
    }
  }
}

/** Use only for login, access-control, and other deliberately anonymous tests. */
export const unauthenticatedTest = appTest;

/** Default test fixture. It repairs expired demo sessions per browser context. */
export const test = appTest.extend<{ authenticatedSession: void }>({
  authenticatedSession: [
    async ({ page }, use) => {
      await openDashboardWithRetry(page);

      const dashboardReady = page.locator("li.oxd-userdropdown");
      const loginReady = page.getByPlaceholder("Username");

      // A stale storage state can redirect through /auth/validate after the
      // dashboard navigation has resolved. Wait for the rendered final state
      // instead of making a one-time URL check while that redirect is pending.
      await expect(dashboardReady.or(loginReady)).toBeVisible({
        timeout: 60_000,
      });

      if (await loginReady.isVisible()) {
        await page.getByPlaceholder("Username").fill(environment.adminUsername);
        await page.getByPlaceholder("Password").fill(environment.adminPassword);
        await page.getByRole("button", { name: "Login" }).click();
      }

      await expect(dashboardReady).toBeVisible({
        timeout: 60_000,
      });
      await expect(page).toHaveURL(/\/dashboard\/index$/, {
        timeout: 30_000,
      });
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
