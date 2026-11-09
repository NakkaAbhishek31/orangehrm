import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import { environment } from "../../config/environment";
import maintenanceData from "../../test-data/maintenance.data.json";
import { generateUniqueId } from "../../utils/testData";

test("TC_MAINT_518 - Maintenance requires administrator re-authentication @security @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();

  await expect(maintenancePage.administratorAccessHeading).toBeVisible();
  await expect(maintenancePage.passwordInput).toBeEditable();
  await expect(maintenancePage.confirmButton).toBeVisible();

  await maintenancePage.cancelButton.click();
  await expect(page).toHaveURL(/\/dashboard\/index$/);
});


test("TC_MAINT_519 - Invalid administrator credentials should not grant Maintenance access @negative @security @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  const data = maintenanceData.TC_ADMIN_519;
  await expect(maintenancePage.administratorAccessHeading).toBeVisible();
  await expect(maintenancePage.passwordInput).toBeEditable();
  await expect(maintenancePage.confirmButton).toBeVisible();

  await maintenancePage.passwordInput.fill(data.Password);
  await maintenancePage.confirmButton.click();
  await expect(maintenancePage.InvalidcredentialsErrorMessage).toBeVisible();
  await maintenancePage.cancelButton.click();
  await expect(page).toHaveURL(/\/dashboard\/index$/);
});


test("TC_MAINT_520 - Valid administrator credentials should open the Purge Employee page @positive @security @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  
  await expect(maintenancePage.administratorAccessHeading).toBeVisible();
  await expect(maintenancePage.passwordInput).toBeEditable();
  await expect(maintenancePage.confirmButton).toBeVisible();

  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await expect(maintenancePage.administratorAccessHeading).toBeHidden();
  await expect(maintenancePage.purgeEmployeeHeading).toBeVisible();
});


test("TC_MAINT_530 - Employee Records search requires a past employee @negative @validation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {

  const employeeData = maintenanceData.TC_ADMIN_530;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeEmployeeRecordsLink).toBeVisible();
  await maintenancePage.purgeEmployeeRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await expect(maintenancePage.purgeEmployeeHeading).toBeVisible();
  await maintenancePage.purgeEmployeePastEmployeeInput.fill(employeeData.EmployeeName);
  await maintenancePage.searchButton.click();
  await expect(maintenancePage.employeeInputErrorMessage).toBeVisible();

});

test("TC_MAINT_531 - Employee Records autocomplete should show no match for an unknown employee @negative @autocomplete @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  const employeeName = `NoSuchEmployee${generateUniqueId()}`;

  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeEmployeeRecordsLink).toBeVisible();
  await maintenancePage.purgeEmployeeRecordsLink.click();

  await expect(maintenancePage.purgeEmployeeHeading).toBeVisible();
  await maintenancePage.purgeEmployeePastEmployeeInput.fill(employeeName);
  await expect(maintenancePage.employeeAutocompleteNoRecords).toBeVisible();
});