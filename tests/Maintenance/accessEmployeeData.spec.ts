import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import { environment } from "../../config/environment";
import maintenanceData from "../../test-data/maintenance.data.json";
import { generateUniqueId } from "../../utils/testData";

test("TC_MAINT_521 - Access Records should display the personal-data request form @positive @navigation @regression", async ({
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
  await maintenancePage.accessRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/accessEmployeeData$/);
  await expect(maintenancePage.accessRecordHeading).toBeVisible();
  await expect(maintenancePage.accessRecordEmployeeInput).toBeEditable();
  await expect(maintenancePage.searchButton).toBeEnabled();
});


test("TC_MAINT_522 - Search should require an employee name on Access Records @negative @validation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
    const employeeName =maintenanceData.TC_ADMIN_522;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.accessRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/accessEmployeeData$/);
  await expect(maintenancePage.accessRecordHeading).toBeVisible();
  await maintenancePage.accessRecordEmployeeInput.fill(employeeName.EmployeeName);
  await maintenancePage.searchButton.click();
  await expect(maintenancePage.employeeInputErrorMessage).toBeVisible();
});


test("TC_MAINT_523 - Access Records should not suggest an unknown employee @negative @autocomplete @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  const employeeName = `NoSuchEmployee${generateUniqueId()}`;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.accessRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/accessEmployeeData$/);
  await expect(maintenancePage.accessRecordHeading).toBeVisible();
  await maintenancePage.accessRecordEmployeeInput.fill(employeeName);
  await expect(maintenancePage.employeeAutocompleteNoRecords).toBeVisible();
});


test("TC_MAINT_524 - Navigate from Access Records to Purge Employee Records @positive @navigation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.accessRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/accessEmployeeData$/);
  await expect(maintenancePage.accessRecordHeading).toBeVisible();
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeEmployeeRecordsLink).toBeVisible();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeEmployeeRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await expect(maintenancePage.purgeEmployeeHeading).toBeVisible();
});


