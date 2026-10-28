import { test as setup } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { environment } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';

const adminAuthFile = 'playwright/.auth/admin.json';

setup('authenticate as Admin', async ({ page }) => {
  await mkdir(dirname(adminAuthFile), { recursive: true });

  const loginPage = new LoginPage(page);
  await loginPage.visitPage();
  await loginPage.login(environment.adminUsername, environment.adminPassword);
  await loginPage.verifyLoginSuccessful();

  await page.context().storageState({ path: adminAuthFile });
});
