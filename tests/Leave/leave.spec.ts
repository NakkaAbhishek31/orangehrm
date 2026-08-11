import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import leaveData from "../../test-data/leave.data.json"

const dateFromOffset = (
  daysOffset: number
): string => {
  const date = new Date();

  date.setDate(
    date.getDate() + daysOffset
  );

  const year = date.getFullYear();

  const day = String(
    date.getDate()
  ).padStart(2, '0');

  const month = String(
    date.getMonth() + 1
  ).padStart(2, '0');

  return `${year}-${day}-${month}`;
};

const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
const employeeFrom = (
  d: { firstNamePrefix: string; middleName: string; lastName: string },
  value = unique(),
) => ({
  firstName: `${d.firstNamePrefix}${value}`,
  middleName: d.middleName,
  lastName: d.lastName,
});

test.describe("Leaves - leaves for  Users", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

test('TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression',
  async ({ page ,loginPage, navigationPage, leavepage }) => {
   
    // Click Leave in the main navigation.
       await  navigationPage.gotoLeave();
    // Verify the Leave List URL and heading and inputs.
      await expect(page).toHaveURL( /leave\/viewLeaveList/);
      await leavepage.verifyLeaveListPage();
  }
);


test( 'TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression',
  async ({ page, navigationPage, leavepage }) => {

    const fromDate = dateFromOffset(
      leaveData.validDateRange
        .fromDaysOffset
    );

    const toDate = dateFromOffset(
      leaveData.validDateRange
        .toDaysOffset
    );
    
    // Navigate to Leave → Leave List.
       await navigationPage.gotoLeave();
       
        await leavepage.fromDateInput.fill(fromDate);
        await leavepage.toDateInput.fill(toDate);
        await expect(leavepage.fromDateInput).toHaveValue(fromDate);
        await expect(leavepage.toDateInput).toHaveValue(toDate);
    // Click Search.
       await leavepage.searchButton.click();
    // Wait for the Leave List request and loading spinner.
        await expect(leavepage.loadingSpinner).toBeHidden();
    // Verify the entered date values remain displayed.
      await expect(
      leavepage.fromDateInput
    ).toHaveValue(fromDate);

    await expect(
      leavepage.toDateInput
    ).toHaveValue(toDate);

    await expect(
      leavepage.leaveRows
        .first()
        .or(leavepage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      leavepage.dateValidationMessages
    ).toHaveCount(0);
  }
);

test( 'TC_LEAVE_111 - Validation should appear when From Date is later than To Date @negative @validation @regression',
  async ({page, navigationPage, leavepage }) => {

    // Generate From Date using invalidDateRange.fromDaysOffset.
      const fromDate = dateFromOffset(
      leaveData.invalidDateRange
        .fromDaysOffset
    );


     // Generate To Date using invalidDateRange.toDaysOffset.

    const toDate = dateFromOffset(
      leaveData.invalidDateRange
        .toDaysOffset
    );
    
    // Navigate to Leave → Leave List.
      await navigationPage.gotoLeave();
    // Enter the future From Date.
       await leavepage.fromDateInput.fill(fromDate);
    // Enter the earlier To Date.
       await leavepage.toDateInput.fill(toDate);
    // Click Search.
     await leavepage.searchButton.click();
    // Verify the date-range validation appears.
         await expect(
      leavepage.toDateValidation
    ).toBeVisible();
    // Verify the validation message says:
    // “To date should be after from date”.
     await expect(
      leavepage.toDateValidation
    ).toHaveText(
      'To date should be after from date'
    );

    // Search should be blocked.
    await expect(page).toHaveURL(
      /leave\/viewLeaveList/
    );

    // Verify no search results are loaded.

        await expect(leavepage.noRecordsFound).toBeVisible()
    // Verify the entered dates remain unchanged.
     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
      await expect(leavepage.toDateInput).toHaveValue(toDate);

  }
);

test( 'TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression',
  async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    await navigationPage.gotoLeave();

    // Store default filter values.
    const defaultFromDate =
      await leavepage.fromDateInput.inputValue();

    const defaultToDate =
      await leavepage.toDateInput.inputValue();

    const defaultStatusText = (
      await leavepage.leaveStatusDropdown
        .innerText()
    ).trim();

    const defaultLeaveTypeText = (
      await leavepage.leaveTypeDropdown
        .innerText()
    ).trim();

    // Generate different valid dates.
    const changedFromDate =
      dateFromOffset(-60);

    const changedToDate =
      dateFromOffset(-15);

    await leavepage.fromDateInput.fill(
      changedFromDate
    );

    await leavepage.toDateInput.fill(
      changedToDate
    );

    // Select Rejected status.
    await leavepage.leaveStatusDropdown.click();

    const statusOptions = page.locator(
      '.oxd-select-dropdown:visible'
    );

    await expect(statusOptions).toBeVisible();

    await statusOptions
      .locator('.oxd-select-option')
      .filter({
        hasText: /^Rejected$/,
      })
      .click();

    // Select Include Past Employees.
    const pastEmployeesLabel = page
      .locator('.oxd-input-group')
      .filter({
        hasText: 'Include Past Employees',
      })
      .locator(
        '.oxd-checkbox-wrapper label'
      );

    await pastEmployeesLabel.click();

    await expect(
      leavepage.includePastEmployeesCheckbox
    ).toBeChecked();

    // Verify filters were changed.
    await expect(
      leavepage.fromDateInput
    ).toHaveValue(changedFromDate);

    await expect(
      leavepage.toDateInput
    ).toHaveValue(changedToDate);

    // Reset all filters.
    await leavepage.resetButton.click();

    await expect(
      leavepage.loadingSpinner
    ).toBeHidden();

    // Verify dates return to defaults.
    await expect(
      leavepage.fromDateInput
    ).toHaveValue(defaultFromDate);

    await expect(
      leavepage.toDateInput
    ).toHaveValue(defaultToDate);

    // Verify status returns to its default value.
    await expect
      .poll(
        async () =>
          (
            await leavepage
              .leaveStatusDropdown
              .innerText()
          ).trim()
      )
      .toBe(defaultStatusText);

    // Verify Leave Type returns to default.
    await expect
      .poll(
        async () =>
          (
            await leavepage
              .leaveTypeDropdown
              .innerText()
          ).trim()
      )
      .toBe(defaultLeaveTypeText);

    // Verify Employee Name is cleared.
    await expect(
      leavepage.employeeNameInput
    ).toHaveValue('');

    // Verify checkbox is cleared.
    await expect(
      leavepage.includePastEmployeesCheckbox
    ).not.toBeChecked();
  }
);

test( 'TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression',
  async ({
    navigationPage,
    leavepage,
  }) => {
    await navigationPage.gotoLeave();

    const leaveType =
      await leavepage
        .selectFirstAvailableLeaveType();

    await leavepage.searchButton.click();

    await expect(
      leavepage.loadingSpinner
    ).toBeHidden();

    await expect(
      leavepage.leaveTypeDropdown
    ).toContainText(leaveType);

    await expect(
      leavepage.leaveRows
        .first()
        .or(leavepage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount =
      await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (
        let index = 0;
        index < rowCount;
        index++
      ) {
        const leaveTypeCell =
          leavepage.leaveRows
            .nth(index)
            .locator('.oxd-table-cell')
            .nth(2);

        await expect(
          leaveTypeCell
        ).toContainText(leaveType);
      }
    } else {
      await expect(
        leavepage.noRecordsFound
      ).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(
      leavepage.leaveTypeDropdown
    ).toContainText('Select');
  }
);

test('TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression',
  async ({ navigationPage, leavepage }) => {
    const testData = leaveData.TC_LEAVE_115;

    // Navigate to Leave → Leave List.
       await navigationPage.gotoLeave();
    // Enter a partial employee name.
       const employeeName =
      await leavepage
        .selectFirstAvailableEmployee(
          leaveData.TC_LEAVE_115.partialEmployeeName
        );

  await leavepage.searchButton.click();

    await expect(
      leavepage.loadingSpinner
    ).toBeHidden();

    await expect(
      leavepage.employeeNameInput
    ).toHaveValue(employeeName);

    await expect(
      leavepage.leaveRows
        .first()
        .or(leavepage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount =
      await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (
        let index = 0;
        index < rowCount;
        index++
      ) {
        const employeeNameCell =
          leavepage.leaveRows
            .nth(index)
            .locator('.oxd-table-cell')
            .nth(1);

        await expect(
          employeeNameCell
        ).toContainText(employeeName);
      }
    } else {
      await expect(
        leavepage.noRecordsFound
      ).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(
      leavepage.employeeNameInput
    ).toHaveValue('');
  }
);


test('TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression',
  async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    const testData =
      leaveData.TC_LEAVE_116;

    await navigationPage.gotoLeave();

    await leavepage.employeeNameInput.fill(
      testData.employeeName
    );

    // Verify autocomplete has no matching employee.
    const noAutocompleteRecords =
      leavepage.autocompleteOptions.filter({
        hasText: 'No Records Found',
      });

    await expect(
      noAutocompleteRecords
    ).toBeVisible({
      timeout: 15_000,
    });

    // Close autocomplete without selecting an option.
    await leavepage.employeeNameInput.press(
      'Escape'
    );

    // Attempt to search.
    await leavepage.searchButton.click();

    // Verify invalid employee validation.
    await expect(
      leavepage.employeeNameValidation
    ).toBeVisible();

    await expect(
      leavepage.employeeNameValidation
    ).toHaveText('Invalid');

    await expect(
      leavepage.employeeNameInput
    ).toHaveValue(
      testData.employeeName
    );

    // Search should remain blocked.
    await expect(page).toHaveURL(
      /leave\/viewLeaveList/
    );

    // Reset filters.
    await leavepage.resetButton.click();

    await expect(
      leavepage.employeeNameInput
    ).toHaveValue('');

    await expect(
      leavepage.employeeNameValidation
    ).toBeHidden();
  }
);









});