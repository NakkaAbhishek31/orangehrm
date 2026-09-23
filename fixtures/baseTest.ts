import { expect, test as base } from "@playwright/test";
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
});

/** Use only for login, access-control, and other deliberately anonymous tests. */
export const unauthenticatedTest = appTest;

/** Default test fixture. It repairs expired demo sessions per browser context. */
export const test = appTest.extend<{ authenticatedSession: void }>({
  authenticatedSession: [
    async ({ page }, use) => {
      await page.goto(routes.dashboard, { waitUntil: "domcontentloaded" });

      if (/\/auth\/login$/.test(page.url())) {
        await page.getByPlaceholder("Username").fill(environment.adminUsername);
        await page.getByPlaceholder("Password").fill(environment.adminPassword);
        await page.getByRole("button", { name: "Login" }).click();
      }

      await expect(page).toHaveURL(/\/dashboard\/index$/, {
        timeout: 30_000,
      });
      await expect(page.locator("li.oxd-userdropdown")).toBeVisible();
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
