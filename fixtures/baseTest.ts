import { test as base } from "@playwright/test";
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
};

export const test = base.extend<AppFixtures>({
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
});

export { expect } from "@playwright/test";
