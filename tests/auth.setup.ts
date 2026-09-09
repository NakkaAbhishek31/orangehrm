import { expect, test as setup } from '@playwright/test';
import { routes } from '../utils/routes';
import { environment } from '../config/environment';

const adminAuthFile = 'playwright/.auth/admin.json';

setup('authenticate as Admin', async ({ page }) => {
  await page.goto(routes.login);
  await page.getByPlaceholder('Username').fill(environment.adminUsername);
  await page.getByPlaceholder('Password').fill(environment.adminPassword);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/dashboard\/index$/);
  await expect(page.locator('li.oxd-userdropdown')).toBeVisible();

  await page.context().storageState({ path: adminAuthFile });
});
