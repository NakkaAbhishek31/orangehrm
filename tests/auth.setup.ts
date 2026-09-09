import { test as setup } from '@playwright/test';
import { environment } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';

const adminAuthFile = 'playwright/.auth/admin.json';

setup('authenticate as Admin', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visitPage();
  await loginPage.login(environment.adminUsername, environment.adminPassword);
  await loginPage.verifyLoginSuccessful();

  await page.context().storageState({ path: adminAuthFile });
});
