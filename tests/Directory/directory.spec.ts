import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import directoryData from "../../test-data/directory.data.json";

test.describe("Directory - Employee Search", () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.gotoDirectory();
  });
 
  test("TC_DIRECTORY_371 - Admin should navigate to Directory @smoke @navigation @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_371;
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    await expect(directoryPage.heading).toHaveText(data.pageHeading);
  });

  test("TC_DIRECTORY_372 - Directory should display default search filters @smoke @filter @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_372;
    await expect(directoryPage.employeeNameInput).toBeVisible();
    await expect(directoryPage.employeeNameInput).toHaveValue("");
    await expect(directoryPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(directoryPage.locationDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_373 - Admin should perform an unfiltered Directory search @positive @search @regression", async ({
    directoryPage,
  }) => {
    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();
    await expect(
      directoryPage.employeeCards.first().or(directoryPage.noRecordsFound),
    ).toBeVisible();
  });

  test("TC_DIRECTORY_374 - Invalid employee name should show validation @negative @autocomplete @validation @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_374;
    await directoryPage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(directoryPage.autocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );
    await page.keyboard.press("Escape");
    await directoryPage.searchButton.click();
    await expect(directoryPage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );
  });

  test("TC_DIRECTORY_375 - Admin should select a Job Title filter @positive @filter @regression", async ({
    directoryPage,
  }) => {
    const selected = await directoryPage.selectFirstAvailableOption(
      directoryPage.jobTitleDropdown,
    );
    await expect(directoryPage.jobTitleDropdown).toContainText(selected);
  });

  test("TC_DIRECTORY_376 - Admin should select a Location filter @positive @filter @regression", async ({
    directoryPage,
  }) => {
    const selected = await directoryPage.selectFirstAvailableOption(
      directoryPage.locationDropdown,
    );
    await expect(directoryPage.locationDropdown).toContainText(selected);
  });

  test("TC_DIRECTORY_377 - Admin should search with Job Title and Location filters @positive @filter @search @regression", async ({
    directoryPage,
  }) => {
    const jobTitle = await directoryPage.selectFirstAvailableOption(
      directoryPage.jobTitleDropdown,
    );
    const location = await directoryPage.selectFirstAvailableOption(
      directoryPage.locationDropdown,
    );
    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();
    await expect(directoryPage.jobTitleDropdown).toContainText(jobTitle);
    await expect(directoryPage.locationDropdown).toContainText(location);
  });

  test("TC_DIRECTORY_378 - Reset should clear the Job Title filter @positive @reset @filter @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_378;
    await directoryPage.selectFirstAvailableOption(directoryPage.jobTitleDropdown);
    await directoryPage.resetButton.click();
    await expect(directoryPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_379 - Reset should clear the Location filter @positive @reset @filter @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_379;
    await directoryPage.selectFirstAvailableOption(directoryPage.locationDropdown);
    await directoryPage.resetButton.click();
    await expect(directoryPage.locationDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_380 - Reset should clear invalid employee validation @negative @validation @reset @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_380;
    await directoryPage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(directoryPage.autocompleteNoRecords).toBeVisible();
    await page.keyboard.press("Escape");
    await directoryPage.searchButton.click();
    await expect(directoryPage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );
    await directoryPage.resetButton.click();
    await expect(directoryPage.employeeNameInput).toHaveValue("");
    await expect(directoryPage.employeeNameValidation).toBeHidden();
  });

  test("TC_DIRECTORY_381 - Search should keep the Directory URL @positive @search @navigation @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_381;
    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });

  test("TC_DIRECTORY_382 - Directory should remain usable after reload @positive @navigation @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_382;
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    await expect(directoryPage.heading).toHaveText(data.pageHeading);
    await expect(directoryPage.searchButton).toBeEnabled();
  });

  test("TC_DIRECTORY_383 - Employee Name should display autocomplete hint text @smoke @autocomplete @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_383;

    await expect(directoryPage.employeeNameInput).toHaveAttribute(
      "placeholder",
      data.placeholder,
    );
    await expect(directoryPage.employeeNameInput).toBeEditable();
  });

  test("TC_DIRECTORY_384 - Search and Reset buttons should be enabled @smoke @regression", async ({
    directoryPage,
  }) => {
    await expect(directoryPage.searchButton).toBeEnabled();
    await expect(directoryPage.resetButton).toBeEnabled();
  });

  test("TC_DIRECTORY_385 - Reset should be idempotent with default filters @positive @reset @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_385;

    await directoryPage.resetButton.click();
    await directoryPage.resetButton.click();

    await expect(directoryPage.employeeNameInput).toHaveValue("");
    await expect(directoryPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(directoryPage.locationDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_386 - Job Title should remain selected after search @positive @filter @persistence @regression", async ({
    directoryPage,
  }) => {
    const selected = await directoryPage.selectFirstAvailableOption(
      directoryPage.jobTitleDropdown,
    );

    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();

    await expect(directoryPage.jobTitleDropdown).toContainText(selected);
  });

  test("TC_DIRECTORY_387 - Location should remain selected after search @positive @filter @persistence @regression", async ({
    directoryPage,
  }) => {
    const selected = await directoryPage.selectFirstAvailableOption(
      directoryPage.locationDropdown,
    );

    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();

    await expect(directoryPage.locationDropdown).toContainText(selected);
  });

  test("TC_DIRECTORY_388 - Reset should clear combined Directory filters @positive @filter @reset @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_388;
    await directoryPage.selectFirstAvailableOption(directoryPage.jobTitleDropdown);
    await directoryPage.selectFirstAvailableOption(directoryPage.locationDropdown);

    await directoryPage.resetButton.click();

    await expect(directoryPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(directoryPage.locationDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_389 - Repeated Directory searches should return a result state @positive @search @regression", async ({
    directoryPage,
  }) => {
    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();
    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();

    await expect(
      directoryPage.employeeCards.first().or(directoryPage.noRecordsFound),
    ).toBeVisible();
  });

  test("TC_DIRECTORY_390 - Reload should restore default Directory filters @positive @navigation @filter @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_390;
    await directoryPage.employeeNameInput.fill(`ReloadEmployee${Date.now()}`);

    await page.reload();

    await expect(directoryPage.employeeNameInput).toHaveValue("");
    await expect(directoryPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(directoryPage.locationDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_DIRECTORY_391 - Unknown employee text should remain while autocomplete shows no records @negative @autocomplete @regression", async ({
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_391;
    const employeeName = `${data.employeeNamePrefix}${Date.now()}`;

    await directoryPage.employeeNameInput.fill(employeeName);

    await expect(directoryPage.autocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );
    await expect(directoryPage.employeeNameInput).toHaveValue(employeeName);
  });

  test("TC_DIRECTORY_392 - Directory heading and URL should remain after search @positive @search @navigation @regression", async ({
    page,
    directoryPage,
  }) => {
    const data = directoryData.TC_DIRECTORY_392;

    await directoryPage.searchButton.click();
    await directoryPage.waitForResults();

    await expect(directoryPage.heading).toHaveText(data.pageHeading);
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });
});
