import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import performanceData from "../../test-data/performance.data.json";

test.describe("Performance - Employee Reviews", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();

    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );

    await loginPage.verifyLoginSuccessful();
  });

  test("TC_PERFORMANCE_201 - Admin should navigate to the Employee Reviews page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_201;

    // Navigate to Performance.
    await navigationPage.gotoPerformance();

    // Navigate to Manage Reviews → Employee Reviews.
    await performancePage.gotoEmployeeReviews();

    // Verify URL and heading.
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );

    // Verify search filters.
    await expect(performancePage.employeeNameInput).toBeVisible();

    await expect(performancePage.jobTitleDropdown).toBeVisible();

    await expect(performancePage.subUnitDropdown).toBeVisible();

    await expect(performancePage.reviewStatusDropdown).toBeVisible();

    await expect(performancePage.fromDateInput).toBeVisible();

    await expect(performancePage.toDateInput).toBeVisible();

    // Verify action buttons.
    await expect(performancePage.searchButton).toBeVisible();

    await expect(performancePage.resetButton).toBeVisible();

    await expect(performancePage.loadingSpinner).toBeHidden();

    // The shared demo may contain reviews or
    // display No Records Found.
    await expect(
      performancePage.reviewRows.first().or(performancePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
  });

  test("TC_PERFORMANCE_202 - Admin should search reviews without an employee-name filter @positive @search @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_202;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    // Leave Employee Name empty.
    await performancePage.employeeNameInput.fill("");

    await performancePage.searchButton.click();

    await expect(performancePage.employeeNameInput).toHaveValue("");

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(performancePage.loadingSpinner).toBeHidden({
      timeout: 30_000,
    });

    await expect(
      performancePage.reviewRows
        .first()
        .or(performancePage.noRecordsFound.first()),
    ).toBeVisible({
      timeout: 20_000,
    });
  });

  test("TC_PERFORMANCE_203 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_203;

    const invalidEmployeeName = `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    await performancePage.employeeNameInput.fill(invalidEmployeeName);

    await expect(performancePage.autocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(performancePage.autocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );

    // Close autocomplete without selecting.
    await page.keyboard.press("Escape");

    await performancePage.searchButton.click();

    await expect(performancePage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );

    await expect(performancePage.employeeNameInput).toHaveValue(
      invalidEmployeeName,
    );

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await performancePage.employeeNameInput.clear();
  });

  test("TC_PERFORMANCE_204 - Admin should search employee reviews using a valid employee name @positive @search @autocomplete @regression", async ({
    page,
    navigationPage,
    pimPage,
    performancePage,
  }) => {
    test.setTimeout(180_000);

    const data = performanceData.TC_PERFORMANCE_204;

    const uniqueValue = Date.now();

    const employee = {
      firstName: `${data.firstNamePrefix}${uniqueValue}`,
      middleName: data.middleName,
      lastName: data.lastName,
    };

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee(employee);

    expect(employeeId).not.toBe("");

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    const selectedEmployee =
      await performancePage.selectEmployeeFromAutocomplete(employee.firstName);

    await expect(performancePage.employeeNameInput).toHaveValue(
      selectedEmployee,
    );

    await performancePage.searchButton.click();

    await expect(performancePage.loadingSpinner).toBeHidden();

    await expect(
      performancePage.reviewRows.first().or(performancePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const reviewCount = await performancePage.reviewRows.count();

    if (reviewCount > 0) {
      const employeeCellTexts = await performancePage.reviewRows
        .locator(".oxd-table-cell")
        .nth(1)
        .allTextContents();

      expect(
        employeeCellTexts.every(
          (text) =>
            text.includes(employee.firstName) &&
            text.includes(employee.lastName),
        ),
      ).toBeTruthy();
    } else {
      await expect(performancePage.noRecordsFound).toBeVisible();
    }

    // Cleanup temporary employee.
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_PERFORMANCE_205 - Admin should reset Employee Review search filters @positive @filter @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_205;

    const invalidEmployeeName = `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    const defaultFromDate = await performancePage.fromDateInput.inputValue();

    const defaultToDate = await performancePage.toDateInput.inputValue();

    await performancePage.employeeNameInput.fill(invalidEmployeeName);

    await page.keyboard.press("Escape");

    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );

    await performancePage.selectDropdownOption(
      performancePage.reviewStatusDropdown,
      data.reviewStatus,
    );

    await performancePage.fromDateInput.fill(data.fromDate);

    await performancePage.toDateInput.fill(data.toDate);

    await performancePage.resetButton.click();

    await expect(performancePage.loadingSpinner).toBeHidden();

    await expect(performancePage.employeeNameInput).toHaveValue("");

    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );

    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );

    await expect(performancePage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(performancePage.toDateInput).toHaveValue(defaultToDate);
  });

  test("TC_PERFORMANCE_206 - Reset should clear the selected job title @positive @reset @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_206;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedJobTitle =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.jobTitleDropdown,
      );

    await expect(performancePage.jobTitleDropdown).toContainText(
      selectedJobTitle,
    );

    await performancePage.resetButton.click();

    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_207 - Reset should clear the selected review status @positive @reset @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_207;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedStatus =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.reviewStatusDropdown,
      );

    await expect(performancePage.reviewStatusDropdown).toContainText(
      selectedStatus,
    );

    await performancePage.resetButton.click();

    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_208 - Reset should clear the selected sub unit @positive @reset @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_208;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedSubUnit =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.subUnitDropdown,
      );

    await expect(performancePage.subUnitDropdown).toContainText(
      selectedSubUnit,
    );

    await performancePage.resetButton.click();

    await expect(performancePage.subUnitDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_209 - Reset should restore the default review date range @positive @reset @date @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_209;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const defaultFromDate = await performancePage.fromDateInput.inputValue();
    const defaultToDate = await performancePage.toDateInput.inputValue();

    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.toDateInput.fill(data.toDate);

    await performancePage.resetButton.click();

    await expect(performancePage.fromDateInput).toHaveValue(defaultFromDate);
    await expect(performancePage.toDateInput).toHaveValue(defaultToDate);
  });

  test("TC_PERFORMANCE_210 - Selected job title should remain after searching reviews @positive @filter @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_210;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedJobTitle =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.jobTitleDropdown,
      );

    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.jobTitleDropdown).toContainText(
      selectedJobTitle,
    );
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
  });

  test("TC_PERFORMANCE_211 - Selected sub unit should remain after searching reviews @positive @filter @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_211;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedSubUnit =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.subUnitDropdown,
      );

    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.subUnitDropdown).toContainText(
      selectedSubUnit,
    );
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
  });

  test("TC_PERFORMANCE_212 - Selected review status should remain after searching reviews @positive @filter @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_212;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedStatus =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.reviewStatusDropdown,
      );

    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.reviewStatusDropdown).toContainText(
      selectedStatus,
    );
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
  });

  test("TC_PERFORMANCE_213 - Admin should search reviews using combined dropdown filters @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_213;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    const selectedJobTitle =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.jobTitleDropdown,
      );
    const selectedSubUnit =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.subUnitDropdown,
      );
    const selectedStatus =
      await performancePage.selectFirstAvailableDropdownOption(
        performancePage.reviewStatusDropdown,
      );

    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.jobTitleDropdown).toContainText(
      selectedJobTitle,
    );
    await expect(performancePage.subUnitDropdown).toContainText(
      selectedSubUnit,
    );
    await expect(performancePage.reviewStatusDropdown).toContainText(
      selectedStatus,
    );
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
  });

  test("TC_PERFORMANCE_214 - Employee Review filters should show their default values @smoke @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_214;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await expect(performancePage.employeeNameInput).toHaveValue("");
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.subUnitDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.fromDateInput).not.toHaveValue("");
    await expect(performancePage.toDateInput).not.toHaveValue("");
  });

  test("TC_PERFORMANCE_215 - Reset should remain idempotent when clicked repeatedly @positive @reset @filter @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_215;

    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await page.keyboard.press("Escape");

    await performancePage.resetButton.click();
    await performancePage.resetButton.click();

    await expect(performancePage.employeeNameInput).toHaveValue("");
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.subUnitDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_216 - Reset should clear employee name @positive @reset @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_216
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.employeeNameInput.fill(`${data.employeeNamePrefix}${Date.now()}`);
    await page.keyboard.press("Escape");
    await performancePage.resetButton.click();
    await expect(performancePage.employeeNameInput).toHaveValue(data.emptyValue);
  });

  test("TC_PERFORMANCE_217 - Reset should clear job title @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_217
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.resetButton.click();
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_218 - Reset should clear sub unit @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_218
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    await performancePage.resetButton.click();
    await expect(performancePage.subUnitDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_219 - Reset should clear review status @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_219
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
    await performancePage.resetButton.click();
    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_220 - Reset should restore dates @positive @reset @date @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_220;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const from = await performancePage.fromDateInput.inputValue();
    const to = await performancePage.toDateInput.inputValue();
    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.toDateInput.fill(data.toDate);
    await performancePage.resetButton.click();
    await expect(performancePage.fromDateInput).toHaveValue(from);
    await expect(performancePage.toDateInput).toHaveValue(to);
  });

  test("TC_PERFORMANCE_221 - Job title should persist after search @positive @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const value = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.jobTitleDropdown).toContainText(value);
  });

  test("TC_PERFORMANCE_222 - Sub unit should persist after search @positive @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const value = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.subUnitDropdown).toContainText(value);
  });

  test("TC_PERFORMANCE_223 - Review status should persist after search @positive @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const value = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.reviewStatusDropdown).toContainText(value);
  });

  test("TC_PERFORMANCE_224 - Combined filters should persist after search @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const job = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    const unit = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    const status = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.jobTitleDropdown).toContainText(job);
    await expect(performancePage.subUnitDropdown).toContainText(unit);
    await expect(performancePage.reviewStatusDropdown).toContainText(status);
  });

  test("TC_PERFORMANCE_225 - Reset should clear all dropdowns @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_225
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
    await performancePage.resetButton.click();
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
    await expect(performancePage.reviewStatusDropdown).toContainText(data.defaultDropdownValue
      ,
    );
  });

  test("TC_PERFORMANCE_226 - Reset should clear all dates @positive @reset @date @regression", async ({
    navigationPage,
    performancePage,
  }) => {
     const data=performanceData.TC_PERFORMANCE_226
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.toDateInput.fill(data.toDate);
    await performancePage.resetButton.click();
    await expect(performancePage.fromDateInput).not.toHaveValue(data.fromDate);
    await expect(performancePage.toDateInput).not.toHaveValue(data.toDate);
  });

  test("TC_PERFORMANCE_227 - Search should keep Employee Reviews URL @positive @search @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_227
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(page).toHaveURL(
     data.expectedUrlPath,
    );   
  });

  test("TC_PERFORMANCE_228 - Heading should remain after search @positive @search @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_228
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
  });

  test("TC_PERFORMANCE_229 - Employee filter should be empty by default @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.employeeNameInput).toHaveValue("");
  });

  test("TC_PERFORMANCE_230 - Job title should be unselected by default @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_230
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_231 - Sub unit should be unselected by default @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_231
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
  });

  test("TC_PERFORMANCE_232 - Review status should be unselected by default @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_232
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.reviewStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_233 - From Date should have a default value @positive @date @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.fromDateInput).not.toHaveValue("");
  });

  test("TC_PERFORMANCE_234 - To Date should have a default value @positive @date @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await expect(performancePage.toDateInput).not.toHaveValue("");
  });

  test("TC_PERFORMANCE_235 - Reset should clear invalid employee text @positive @reset @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.employeeNameInput.fill(
      `InvalidEmployee${Date.now()}`,
    );
    await page.keyboard.press("Escape");
    await performancePage.resetButton.click();
    await expect(performancePage.employeeNameInput).toHaveValue("");
  });

  test("TC_PERFORMANCE_236 - Reset should restore dates after search @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_236
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const from = await performancePage.fromDateInput.inputValue();
    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await performancePage.resetButton.click();
    await expect(performancePage.fromDateInput).toHaveValue(from);
  });

  test("TC_PERFORMANCE_237 - Reset should restore all filters @positive @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_237
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
    await performancePage.resetButton.click();
    await expect(performancePage.jobTitleDropdown).toContainText(
     data.defaultDropdownValue ,
    );
  });

  test("TC_PERFORMANCE_238 - Search after reset should work @positive @search @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.resetButton.click();
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
  });

  test("TC_PERFORMANCE_239 - Available dropdown values should be selectable @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown,
    );
    await performancePage.selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown,
    );
  });

  test("TC_PERFORMANCE_240 - Filter and reset workflow should complete @positive @filter @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data=performanceData.TC_PERFORMANCE_240
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();
    const value = await performancePage.selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown,
    );
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();
    await expect(performancePage.jobTitleDropdown).toContainText(value);
    await performancePage.resetButton.click();
    await expect(performancePage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_PERFORMANCE_241 - Include Past Employees should be unchecked by default @smoke @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await expect(performancePage.includePastEmployeesCheckbox).not.toBeChecked();
  });

  test("TC_PERFORMANCE_242 - Admin should select Include Past Employees @positive @filter @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.includePastEmployeesLabel.click();

    await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
  });

  test("TC_PERFORMANCE_243 - Include Past Employees should remain selected after search @positive @filter @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.includePastEmployeesLabel.click();
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
  });

  test("TC_PERFORMANCE_244 - Reset should clear Include Past Employees @positive @filter @reset @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.includePastEmployeesLabel.click();
    await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
    await performancePage.resetButton.click();

    await expect(performancePage.includePastEmployeesCheckbox).not.toBeChecked();
  });

  test("TC_PERFORMANCE_245 - From Date should remain after search @positive @date @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_245;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.fromDateInput).toHaveValue(data.fromDate);
  });

  test("TC_PERFORMANCE_246 - To Date should remain after search @positive @date @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_246;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.toDateInput.fill(data.toDate);
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.toDateInput).toHaveValue(data.toDate);
  });

  test("TC_PERFORMANCE_247 - Both review dates should remain after search @positive @date @persistence @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_247;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.fromDateInput.fill(data.fromDate);
    await performancePage.toDateInput.fill(data.toDate);
    await performancePage.searchButton.click();
    await performancePage.waitForReviewResults();

    await expect(performancePage.fromDateInput).toHaveValue(data.fromDate);
    await expect(performancePage.toDateInput).toHaveValue(data.toDate);
  });

  test("TC_PERFORMANCE_248 - Search and Reset buttons should be enabled @smoke @regression", async ({
    navigationPage,
    performancePage,
  }) => {
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await expect(performancePage.searchButton).toBeEnabled();
    await expect(performancePage.resetButton).toBeEnabled();
  });

  test("TC_PERFORMANCE_249 - Reset should clear employee validation error @negative @validation @reset @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_249;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await performancePage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(performancePage.autocompleteDropdown).toBeVisible();
    await page.keyboard.press("Escape");
    await performancePage.searchButton.click();
    await expect(performancePage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );

    await performancePage.resetButton.click();

    await expect(performancePage.employeeNameValidation).toBeHidden();
    await expect(performancePage.employeeNameInput).toHaveValue("");
  });

  test("TC_PERFORMANCE_250 - Employee Reviews page should remain usable after browser reload @positive @navigation @regression", async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_250;
    await navigationPage.gotoPerformance();
    await performancePage.gotoEmployeeReviews();

    await page.reload();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    await expect(performancePage.employeeReviewsHeading).toHaveText(
      data.pageHeading,
    );
    await expect(performancePage.searchButton).toBeEnabled();
  });
});
