import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import performanceData from "../../test-data/performance.data.json"

test.describe("Performance - Employee Reviews", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();

    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );

    await loginPage.verifyLoginSuccessful();
  });


test('TC_PERFORMANCE_201 - Admin should navigate to the Employee Reviews page @smoke @navigation @regression',
  async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data =
      performanceData.TC_PERFORMANCE_201;

    // Navigate to Performance.
    await navigationPage.gotoPerformance();

    // Navigate to Manage Reviews → Employee Reviews.
    await performancePage.gotoEmployeeReviews();

    // Verify URL and heading.
    await expect(page).toHaveURL(
      new RegExp(`${data.expectedUrlPath}$`)
    );

    await expect(
      performancePage.employeeReviewsHeading
    ).toHaveText(data.pageHeading);

    // Verify search filters.
    await expect(
      performancePage.employeeNameInput
    ).toBeVisible();

    await expect(
      performancePage.jobTitleDropdown
    ).toBeVisible();

    await expect(
      performancePage.subUnitDropdown
    ).toBeVisible();

    await expect(
      performancePage.reviewStatusDropdown
    ).toBeVisible();

    await expect(
      performancePage.fromDateInput
    ).toBeVisible();

    await expect(
      performancePage.toDateInput
    ).toBeVisible();

    // Verify action buttons.
    await expect(
      performancePage.searchButton
    ).toBeVisible();

    await expect(
      performancePage.resetButton
    ).toBeVisible();

    await expect(
      performancePage.loadingSpinner
    ).toBeHidden();

    // The shared demo may contain reviews or
    // display No Records Found.
    await expect(
      performancePage.reviewRows
        .first()
        .or(performancePage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });
  }
);

test('TC_PERFORMANCE_202 - Admin should search reviews without an employee-name filter @positive @search @regression',
  async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data = performanceData.TC_PERFORMANCE_202;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    // Leave Employee Name empty.
    await performancePage.employeeNameInput.fill('');

    await performancePage.searchButton.click();

    await expect(
      performancePage.employeeNameInput
    ).toHaveValue('');

    await expect(page).toHaveURL(
      new RegExp(`${data.expectedUrlPath}$`)
    );

    await expect(
      performancePage.loadingSpinner
    ).toBeHidden({
      timeout: 30_000,
    });

    await expect(
      performancePage.reviewRows
        .first()
        .or(performancePage.noRecordsFound.first())
    ).toBeVisible({
      timeout: 20_000,
    });
  }
);

test('TC_PERFORMANCE_203 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression',
  async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data =
      performanceData.TC_PERFORMANCE_203;

    const invalidEmployeeName =
      `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    await performancePage.employeeNameInput.fill(
      invalidEmployeeName
    );

    await expect(
      performancePage.autocompleteDropdown
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      performancePage.autocompleteNoRecords
    ).toHaveText(data.noRecordsMessage);

    // Close autocomplete without selecting.
    await page.keyboard.press('Escape');

    await performancePage.searchButton.click();

    await expect(
      performancePage.employeeNameValidation
    ).toHaveText(data.invalidMessage);

    await expect(
      performancePage.employeeNameInput
    ).toHaveValue(invalidEmployeeName);

    await expect(page).toHaveURL(
      new RegExp(`${data.expectedUrlPath}$`)
    );

    await performancePage.employeeNameInput.clear();
  }
);

test('TC_PERFORMANCE_204 - Admin should search employee reviews using a valid employee name @positive @search @autocomplete @regression',
  async ({
    page,
    navigationPage,
    pimPage,
    performancePage,
  }) => {
    test.setTimeout(180_000);

    const data =
      performanceData.TC_PERFORMANCE_204;

    const uniqueValue = Date.now();

    const employee = {
      firstName:
        `${data.firstNamePrefix}${uniqueValue}`,
      middleName: data.middleName,
      lastName: data.lastName,
    };

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId =
      await pimPage.addEmployee(employee);

    expect(employeeId).not.toBe('');

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    const selectedEmployee =
      await performancePage
        .selectEmployeeFromAutocomplete(
          employee.firstName
        );

    await expect(
      performancePage.employeeNameInput
    ).toHaveValue(selectedEmployee);

    await performancePage.searchButton.click();

    await expect(
      performancePage.loadingSpinner
    ).toBeHidden();

    await expect(
      performancePage.reviewRows
        .first()
        .or(performancePage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });

    const reviewCount =
      await performancePage.reviewRows.count();

    if (reviewCount > 0) {
      for (
        let index = 0;
        index < reviewCount;
        index++
      ) {
        const employeeCell =
          performancePage.reviewRows
            .nth(index)
            .locator('.oxd-table-cell')
            .nth(1);

        await expect(
          employeeCell
        ).toContainText(employee.firstName);

        await expect(
          employeeCell
        ).toContainText(employee.lastName);
      }
    } else {
      await expect(
        performancePage.noRecordsFound
      ).toBeVisible();
    }

    // Cleanup temporary employee.
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(
      employeeId
    );
  }
);

test('TC_PERFORMANCE_205 - Admin should reset Employee Review search filters @positive @filter @regression',
  async ({
    page,
    navigationPage,
    performancePage,
  }) => {
    const data =
      performanceData.TC_PERFORMANCE_205;

    const invalidEmployeeName =
      `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoPerformance();

    await performancePage.gotoEmployeeReviews();

    const defaultFromDate =
      await performancePage.fromDateInput
        .inputValue();

    const defaultToDate =
      await performancePage.toDateInput
        .inputValue();

    await performancePage.employeeNameInput.fill(
      invalidEmployeeName
    );

    await page.keyboard.press('Escape');

    await performancePage
      .selectFirstAvailableDropdownOption(
        performancePage.jobTitleDropdown
      );

    await performancePage.selectDropdownOption(
      performancePage.reviewStatusDropdown,
      data.reviewStatus
    );

    await performancePage.fromDateInput.fill(
      data.fromDate
    );

    await performancePage.toDateInput.fill(
      data.toDate
    );

    await performancePage.resetButton.click();

    await expect(
      performancePage.loadingSpinner
    ).toBeHidden();

    await expect(
      performancePage.employeeNameInput
    ).toHaveValue('');

    await expect(
      performancePage.jobTitleDropdown
    ).toContainText(
      data.defaultDropdownValue
    );

    await expect(
      performancePage.reviewStatusDropdown
    ).toContainText(
      data.defaultDropdownValue
    );

    await expect(
      performancePage.fromDateInput
    ).toHaveValue(defaultFromDate);

    await expect(
      performancePage.toDateInput
    ).toHaveValue(defaultToDate);
  }
);

test('TC_PERFORMANCE_206 - Reset should clear the selected job title @positive @reset @filter @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_206;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedJobTitle = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown
    );

  await expect(performancePage.jobTitleDropdown)
    .toContainText(selectedJobTitle);

  await performancePage.resetButton.click();

  await expect(performancePage.jobTitleDropdown)
    .toContainText(data.defaultDropdownValue);
});

test('TC_PERFORMANCE_207 - Reset should clear the selected review status @positive @reset @filter @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_207;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedStatus = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown
    );

  await expect(performancePage.reviewStatusDropdown)
    .toContainText(selectedStatus);

  await performancePage.resetButton.click();

  await expect(performancePage.reviewStatusDropdown)
    .toContainText(data.defaultDropdownValue);
});

test('TC_PERFORMANCE_208 - Reset should clear the selected sub unit @positive @reset @filter @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_208;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedSubUnit = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown
    );

  await expect(performancePage.subUnitDropdown)
    .toContainText(selectedSubUnit);

  await performancePage.resetButton.click();

  await expect(performancePage.subUnitDropdown)
    .toContainText(data.defaultDropdownValue);
});

test('TC_PERFORMANCE_209 - Reset should restore the default review date range @positive @reset @date @regression', async ({
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

test('TC_PERFORMANCE_210 - Selected job title should remain after searching reviews @positive @filter @persistence @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_210;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedJobTitle = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown
    );

  await performancePage.searchButton.click();
  await performancePage.waitForReviewResults();

  await expect(performancePage.jobTitleDropdown)
    .toContainText(selectedJobTitle);
  await expect(performancePage.employeeReviewsHeading)
    .toHaveText(data.pageHeading);
});

test('TC_PERFORMANCE_211 - Selected sub unit should remain after searching reviews @positive @filter @persistence @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_211;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedSubUnit = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown
    );

  await performancePage.searchButton.click();
  await performancePage.waitForReviewResults();

  await expect(performancePage.subUnitDropdown)
    .toContainText(selectedSubUnit);
  await expect(performancePage.employeeReviewsHeading)
    .toHaveText(data.pageHeading);
});

test('TC_PERFORMANCE_212 - Selected review status should remain after searching reviews @positive @filter @persistence @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_212;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedStatus = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown
    );

  await performancePage.searchButton.click();
  await performancePage.waitForReviewResults();

  await expect(performancePage.reviewStatusDropdown)
    .toContainText(selectedStatus);
  await expect(performancePage.employeeReviewsHeading)
    .toHaveText(data.pageHeading);
});

test('TC_PERFORMANCE_213 - Admin should search reviews using combined dropdown filters @positive @filter @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_213;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  const selectedJobTitle = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.jobTitleDropdown
    );
  const selectedSubUnit = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.subUnitDropdown
    );
  const selectedStatus = await performancePage
    .selectFirstAvailableDropdownOption(
      performancePage.reviewStatusDropdown
    );

  await performancePage.searchButton.click();
  await performancePage.waitForReviewResults();

  await expect(performancePage.jobTitleDropdown).toContainText(selectedJobTitle);
  await expect(performancePage.subUnitDropdown).toContainText(selectedSubUnit);
  await expect(performancePage.reviewStatusDropdown).toContainText(selectedStatus);
  await expect(performancePage.employeeReviewsHeading).toHaveText(data.pageHeading);
});

test('TC_PERFORMANCE_214 - Employee Review filters should show their default values @smoke @filter @regression', async ({
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_214;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  await expect(performancePage.employeeNameInput).toHaveValue('');
  await expect(performancePage.jobTitleDropdown).toContainText(data.defaultDropdownValue);
  await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
  await expect(performancePage.reviewStatusDropdown).toContainText(data.defaultDropdownValue);
  await expect(performancePage.fromDateInput).not.toHaveValue('');
  await expect(performancePage.toDateInput).not.toHaveValue('');
});

test('TC_PERFORMANCE_215 - Reset should remain idempotent when clicked repeatedly @positive @reset @filter @regression', async ({
  page,
  navigationPage,
  performancePage,
}) => {
  const data = performanceData.TC_PERFORMANCE_215;

  await navigationPage.gotoPerformance();
  await performancePage.gotoEmployeeReviews();

  await performancePage.employeeNameInput.fill(
    `${data.employeeNamePrefix}${Date.now()}`
  );
  await page.keyboard.press('Escape');

  await performancePage.resetButton.click();
  await performancePage.resetButton.click();

  await expect(performancePage.employeeNameInput).toHaveValue('');
  await expect(performancePage.jobTitleDropdown).toContainText(data.defaultDropdownValue);
  await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
  await expect(performancePage.reviewStatusDropdown).toContainText(data.defaultDropdownValue);
});

});
