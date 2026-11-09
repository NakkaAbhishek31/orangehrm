import { environment } from "../../config/environment";
import { expect, test } from "../../fixtures/baseTest";
import { generateUniqueId } from "../../utils/testData";
import maintenanceData from "../../test-data/maintenance.data.json";

test("TC_MAINT_525 - Candidate Records form should load @positive @navigation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeCandidateData$/);
  await expect(maintenancePage.purgeCandidateHeading).toBeVisible();
  await expect(maintenancePage.purgeCandidateVacancyInput).toBeEditable();

});


test("TC_MAINT_526 - Candidate Records search requires a vacancy  @negative @validation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {

  const vacancyData = maintenanceData.TC_ADMIN_526;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeCandidateData$/);
  await maintenancePage.purgeCandidateVacancyInput.fill(vacancyData.VacancyName);
  await maintenancePage.searchButton.click();
  await expect(maintenancePage.employeeInputErrorMessage).toBeVisible();

});


test("TC_MAINT_527 - Candidate Records should reject an unknown vacancy @negative @validation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  const vacancyName = `NoSuchVacancy${generateUniqueId()}`;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeCandidateData$/);
  await maintenancePage.purgeCandidateVacancyInput.fill(vacancyName);
  await maintenancePage.searchButton.click();
  await expect(maintenancePage.vacancyInvalidErrorMessage).toBeVisible();
  
});


test("TC_MAINT_528 - Candidate Records should navigate to Access Records @positive @navigation @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeCandidateData$/);
  await maintenancePage.accessRecordsLink.click();
  await expect(page).toHaveURL(/\/maintenance\/accessEmployeeData$/);
  await expect(maintenancePage.accessRecordHeading).toBeVisible();
  await expect(maintenancePage.accessRecordEmployeeInput).toBeEditable();
  await expect(maintenancePage.searchButton).toBeEnabled();
});


test("TC_MAINT_529 - Candidate Records autocomplete should show no match for an unknown vacancy @negative @autocomplete @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  const vacancyName = `NoSuchVacancy${generateUniqueId()}`;
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();
  await expect(maintenancePage.purgeCandidateHeading).toBeVisible();
  await maintenancePage.purgeCandidateVacancyInput.fill(vacancyName);
  await expect(maintenancePage.employeeAutocompleteNoRecords).toBeVisible();
});

test("TC_MAINT_532 - Candidate Records autocomplete should select an available vacancy @positive @autocomplete @regression", async ({
  page,
  navigationPage,
  maintenancePage,
}) => {
  await navigationPage.gotoMaintenance();
  await maintenancePage.passwordInput.fill(environment.adminPassword);
  await maintenancePage.confirmButton.click();
  await expect(page).toHaveURL(/\/maintenance\/purgeEmployee$/);
  await maintenancePage.purgeRecordsDropdown.click();
  await expect(maintenancePage.purgeCandidateRecordsLink).toBeVisible();
  await maintenancePage.purgeCandidateRecordsLink.click();

  await expect(maintenancePage.purgeCandidateHeading).toBeVisible();
  await maintenancePage.purgeCandidateVacancyInput.fill("a");

  const firstVacancy = maintenancePage.purgeCandidateVacancyOptions.first();
  await expect(firstVacancy.or(maintenancePage.employeeAutocompleteNoRecords)).toBeVisible();
  test.skip(
    await maintenancePage.employeeAutocompleteNoRecords.isVisible(),
    "The public demo has no matching vacancies available to select.",
  );

  const vacancyName = (await firstVacancy.innerText()).trim();
  await firstVacancy.click();
  await expect(maintenancePage.purgeCandidateVacancyInput).toHaveValue(
    vacancyName,
  );
});
