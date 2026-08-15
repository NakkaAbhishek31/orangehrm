import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import leaveData from "../../test-data/leave.data.json";

const dateFromOffset = (daysOffset: number): string => {
  const date = new Date();

  date.setDate(date.getDate() + daysOffset);

  const year = date.getFullYear();

  const day = String(date.getDate()).padStart(2, "0");

  const month = String(date.getMonth() + 1).padStart(2, "0");

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

  test("TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression", async ({
    page,
    loginPage,
    navigationPage,
    leavepage,
  }) => {
    // Click Leave in the main navigation.
    await navigationPage.gotoLeave();
    // Verify the Leave List URL and heading and inputs.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);
    await leavepage.verifyLeaveListPage();
  });

  test("TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression", async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    const fromDate = dateFromOffset(leaveData.validDateRange.fromDaysOffset);

    const toDate = dateFromOffset(leaveData.validDateRange.toDaysOffset);

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
    await expect(leavepage.fromDateInput).toHaveValue(fromDate);

    await expect(leavepage.toDateInput).toHaveValue(toDate);

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(leavepage.dateValidationMessages).toHaveCount(0);
  });

  test("TC_LEAVE_111 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    // Generate From Date using invalidDateRange.fromDaysOffset.
    const fromDate = dateFromOffset(leaveData.invalidDateRange.fromDaysOffset);

    // Generate To Date using invalidDateRange.toDaysOffset.

    const toDate = dateFromOffset(leaveData.invalidDateRange.toDaysOffset);

    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    // Enter the future From Date.
    await leavepage.fromDateInput.fill(fromDate);
    // Enter the earlier To Date.
    await leavepage.toDateInput.fill(toDate);
    // Click Search.
    await leavepage.searchButton.click();
    // Verify the date-range validation appears.
    await expect(leavepage.toDateValidation).toBeVisible();
    // Verify the validation message says:
    // “To date should be after from date”.
    await expect(leavepage.toDateValidation).toHaveText(
      "To date should be after from date",
    );

    // Search should be blocked.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    // Verify no search results are loaded.

    await expect(leavepage.noRecordsFound).toBeVisible();
    // Verify the entered dates remain unchanged.
    await expect(leavepage.fromDateInput).toHaveValue(fromDate);
    await expect(leavepage.toDateInput).toHaveValue(toDate);
  });

  test("TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression", async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    await navigationPage.gotoLeave();

    // Store default filter values.
    const { fromDate: defaultFromDate, toDate: defaultToDate } =
      await leavepage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavepage.leaveStatusDropdown.innerText()
    ).trim();

    const defaultLeaveTypeText = (
      await leavepage.leaveTypeDropdown.innerText()
    ).trim();

    // Generate different valid dates.
    const changedFromDate = dateFromOffset(-60);

    const changedToDate = dateFromOffset(-15);

    await leavepage.fromDateInput.fill(changedFromDate);

    await leavepage.toDateInput.fill(changedToDate);

    // Select Rejected status.
    await leavepage.leaveStatusDropdown.click();

    const statusOptions = page.locator(".oxd-select-dropdown:visible");

    await expect(statusOptions).toBeVisible();

    await statusOptions
      .locator(".oxd-select-option")
      .filter({
        hasText: /^Rejected$/,
      })
      .click();

    // Verify filters were changed.
    await expect(leavepage.fromDateInput).toHaveValue(changedFromDate);

    await expect(leavepage.toDateInput).toHaveValue(changedToDate);

    // Reset all filters.
    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    // Verify dates return to defaults.
    await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(leavepage.toDateInput).toHaveValue(defaultToDate);

    // Verify status returns to its default value.
    await expect
      .poll(async () =>
        (await leavepage.leaveStatusDropdown.innerText()).trim(),
      )
      .toContain("-- Select --");

    // Verify Leave Type returns to default.
    await expect
      .poll(async () => (await leavepage.leaveTypeDropdown.innerText()).trim())
      .toBe(defaultLeaveTypeText);

    // Verify Employee Name is cleared.
    await expect(leavepage.employeeNameInput).toHaveValue("");

  });

  test("TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    await navigationPage.gotoLeave();

    const leaveType = await leavepage.selectFirstAvailableLeaveType();

    await leavepage.searchButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0 && leaveType !== "-- Select --") {
      for (let index = 0; index < rowCount; index++) {
        const leaveTypeCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(2);

        await expect(leaveTypeCell).toContainText(leaveType);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  });

  test("TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const testData = leaveData.TC_LEAVE_115;

    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    // Enter a partial employee name.
    const employeeName = await leavepage.selectFirstAvailableEmployee(
      leaveData.TC_LEAVE_115.partialEmployeeName,
    );

    await leavepage.searchButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.employeeNameInput).toHaveValue(
      new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
    );

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const employeeNameCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(1);

        await expect(employeeNameCell).toContainText(employeeName);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(leavepage.employeeNameInput).toHaveValue("");
  });

  test("TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    const testData = leaveData.TC_LEAVE_116;

    await navigationPage.gotoLeave();

    await leavepage.employeeNameInput.fill(testData.employeeName);

    // Verify autocomplete has no matching employee.
    const noAutocompleteRecords = leavepage.autocompleteOptions.filter({
      hasText: "No Records Found",
    });

    await expect(noAutocompleteRecords).toBeVisible({
      timeout: 15_000,
    });

    // Close autocomplete without selecting an option.
    await leavepage.employeeNameInput.press("Escape");

    // Attempt to search.
    await leavepage.searchButton.click();

    // Verify invalid employee validation.
    await expect(leavepage.employeeNameValidation).toBeVisible();

    await expect(leavepage.employeeNameValidation).toHaveText("Invalid");

    await expect(leavepage.employeeNameInput).toHaveValue(
      testData.employeeName,
    );

    // Search should remain blocked.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    // Reset filters.
    await leavepage.resetButton.click();

    await expect(leavepage.employeeNameInput).toHaveValue("");

    await expect(leavepage.employeeNameValidation).toBeHidden();
  });

  test("TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_117;
    // Read the date offsets and status from JSON.
    await navigationPage.gotoLeave();
    const { fromDate: defaultFromDate, toDate: defaultToDate } =
      await leavepage.waitForDefaultDateRange();

    // Generate dynamic dates from JSON offsets.
    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await leavepage.fromDateInput.fill(fromDate);

    await leavepage.toDateInput.fill(toDate);
    // Select the configured Leave Status.
    await leavepage.selectLeaveStatus(data.leaveStatus);
    // Select the first available Leave Type dynamically.
    const leaveType = await leavepage.selectFirstAvailableLeaveType();

    await expect(leavepage.fromDateInput).toHaveValue(fromDate);

    await expect(leavepage.toDateInput).toHaveValue(toDate);

    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
    // Click Search.
    await leavepage.searchButton.click();

    // Wait for the loading spinner to disappear.
    await expect(leavepage.loadingSpinner).toBeHidden();

    // Verify all entered filters remain selected.
    await expect(leavepage.fromDateInput).toHaveValue(fromDate);
    await expect(leavepage.toDateInput).toHaveValue(toDate);
    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    // Reset filters.
    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(leavepage.toDateInput).toHaveValue(defaultToDate);

    await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  });

  test("TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();

    // Verify Include Past Employees is unchecked initially.
    await leavepage.setIncludePastEmployees(true);
    // Enable Include Past Employees.
    await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();

    // Verify the checkbox becomes checked.

    // Click Search.
    await leavepage.searchLeaveList();

    // Wait for the loading spinner to disappear.
    await expect(leavepage.loadingSpinner).toBeHidden();
    // Verify the checkbox remains checked after searching.
    await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
    // Verify either leave rows or “No Records Found” appears.
    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
    // Click Reset.

    await leavepage.resetButton.click();
    // Verify Include Past Employees returns to unchecked.
    await expect(leavepage.loadingSpinner).toBeHidden();
    await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
    await leavepage.setIncludePastEmployees(false);
    await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  });

  test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_119;

    await navigationPage.gotoLeave();

    await leavepage.selectLeaveStatus(data.leaveStatus);

    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    }

    await leavepage.resetButton.click();
  });

  test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
    page,
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_120;

    await navigationPage.gotoLeave();

    await leavepage.fromDateInput.fill(data.invalidFromDate);

    await leavepage.fromDateInput.blur();

    await leavepage.searchButton.click();

    await expect(leavepage.fromDateValidation).toBeVisible();

    await expect(leavepage.fromDateValidation).toContainText(
      data.expectedValidation,
    );

    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    await expect(leavepage.fromDateInput).toHaveValue(data.invalidFromDate);

    await leavepage.resetButton.click();

    await expect(leavepage.fromDateValidation).toBeHidden();
  });

  test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_121;

    await navigationPage.gotoLeave();

    const employeeName = await leavepage.selectFirstAvailableEmployee(
      data.partialEmployeeName,
    );

    await leavepage.selectLeaveStatus(data.leaveStatus);

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.employeeNameInput).toHaveValue(
      new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
    );

    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const cells = leavepage.leaveRows.nth(index).locator(".oxd-table-cell");

        await expect(cells.nth(1)).toContainText(employeeName);

        await expect(cells.nth(6)).toContainText(data.leaveStatus);
      }
    }

    await leavepage.resetButton.click();

    await expect(leavepage.employeeNameInput).toHaveValue("");
  });

  test("TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_122;

    await navigationPage.gotoLeave();

    await leavepage.selectLeaveStatus(data.leaveStatus);

    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await leavepage.removeSelectedLeaveStatus(data.leaveStatus);

    await expect(leavepage.selectedLeaveStatuses).not.toContainText(
      data.leaveStatus,
    );
  });

  test("TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_123;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoLeave();

    await leavepage.fromDateInput.fill(fromDate);

    await leavepage.toDateInput.fill(toDate);

    await leavepage.selectLeaveStatus(data.leaveStatus);

    const leaveType = await leavepage.selectFirstAvailableLeaveType();

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.fromDateInput).toHaveValue(fromDate);

    await expect(leavepage.toDateInput).toHaveValue(toDate);

    await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    await leavepage.resetButton.click();
  });

  test("TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_124;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoLeave();

    await leavepage.fromDateInput.fill(fromDate);

    await leavepage.toDateInput.fill(toDate);

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    const pageOneRecords = await leavepage.getVisibleLeaveRecords();

    test.skip(
      pageOneRecords.length === 0,
      "No leave records are currently available",
    );

    const nextButtonCount = await leavepage.nextPageButton.count();

    test.skip(
      nextButtonCount === 0,
      "Leave List currently contains only one page",
    );

    await leavepage.nextPageButton.click();

    await expect
      .poll(async () => leavepage.getVisibleLeaveRecords(), {
        timeout: 15_000,
      })
      .not.toEqual(pageOneRecords);

    const pageTwoRecords = await leavepage.getVisibleLeaveRecords();

    expect(pageTwoRecords.length).toBeGreaterThan(0);

    await leavepage.previousPageButton.click();

    await expect
      .poll(async () => leavepage.getVisibleLeaveRecords(), {
        timeout: 15_000,
      })
      .toEqual(pageOneRecords);
  });

  test("TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_125;

    await navigationPage.gotoLeave();

    // Store the complete default status state.
    const defaultStatusText = (
      await leavepage.leaveStatusField.innerText()
    ).trim();

    const scheduledStatus = leavepage.leaveStatusField.getByText(
      data.leaveStatus,
      { exact: true },
    );

    const alreadySelected = (await scheduledStatus.count()) > 0;

    // Select Scheduled only when it is not
    // already selected by default.
    if (!alreadySelected) {
      await leavepage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(scheduledStatus).toBeVisible();

    // Search using Scheduled status.
    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    // Verify Scheduled remains selected.
    await expect(scheduledStatus).toBeVisible();

    // The shared demo can return records or
    // display No Records Found.
    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    // Reset filters.
    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    // Reset should restore the original default
    // status selection, which may include Scheduled.
    await expect
      .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_126;

    await navigationPage.gotoLeave();

    // Capture the original default status state.
    const defaultStatusText = (
      await leavepage.leaveStatusField.innerText()
    ).trim();

    const takenStatus = leavepage.leaveStatusField.getByText(data.leaveStatus, {
      exact: true,
    });

    const alreadySelected = (await takenStatus.count()) > 0;

    // Select Taken only when it is not
    // already selected by default.
    if (!alreadySelected) {
      await leavepage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(takenStatus).toBeVisible();

    // Search using Taken status.
    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    // Verify Taken remains selected.
    await expect(takenStatus).toBeVisible();

    // Verify records or No Records Found.
    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    // Reset filters.
    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    // Verify the default status state is restored.
    await expect
      .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_127;

    await navigationPage.gotoLeave();

    const defaultDates = await leavepage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavepage.leaveStatusField.innerText()
    ).trim();

    const cancelledStatus = leavepage.leaveStatusField.getByText(
      data.leaveStatus,
      { exact: true },
    );

    if ((await cancelledStatus.count()) === 0) {
      await leavepage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(cancelledStatus).toBeVisible();

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect(cancelledStatus).toBeVisible();

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();

    await leavepage.waitForDefaultDateRange();

    await expect
      .poll(async () => (await leavepage.leaveStatusField.innerText()).trim())
      .toContain("-- Select --");
  });

  test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_128;

    await navigationPage.gotoLeave();

    await leavepage.waitForDefaultDateRange();

    const firstStatus = leavepage.leaveStatusField.getByText(data.firstStatus, {
      exact: true,
    });

    const secondStatus = leavepage.leaveStatusField.getByText(
      data.secondStatus,
      { exact: true },
    );

    if ((await firstStatus.count()) === 0) {
      await leavepage.selectLeaveStatus(data.firstStatus);
    }

    if ((await secondStatus.count()) === 0) {
      await leavepage.selectLeaveStatus(data.secondStatus);
    }

    await expect(firstStatus).toBeVisible();
    await expect(secondStatus).toBeVisible();

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(firstStatus).toBeVisible();
    await expect(secondStatus).toBeVisible();

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusText = (
          await leavepage.leaveRows
            .nth(index)
            .locator(".oxd-table-cell")
            .nth(6)
            .innerText()
        )
          .replace(/\s*\([^)]*\)\s*$/, "")
          .trim();

        expect([data.firstStatus, data.secondStatus]).toContain(statusText);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();
  });

  test("TC_LEAVE_129 - Reset should restore default Leave Status selections @positive @reset @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_129;

    await navigationPage.gotoLeave();

    const defaultDates = await leavepage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavepage.leaveStatusField.innerText()
    ).trim();

    const selectedStatus = leavepage.leaveStatusField.getByText(
      data.leaveStatus,
      { exact: true },
    );

    if ((await selectedStatus.count()) === 0) {
      await leavepage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(selectedStatus).toBeVisible();

    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await leavepage.waitForDefaultDateRange();

    await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect
      .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_130 - Admin should filter Leave List by Rejected and Cancelled statuses @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_130;

    await navigationPage.gotoLeave();

    await leavepage.waitForDefaultDateRange();

    for (const status of data.statuses) {
      const selectedStatus = leavepage.leaveStatusField.getByText(status, {
        exact: true,
      });

      if ((await selectedStatus.count()) === 0) {
        await leavepage.selectLeaveStatus(status);
      }

      await expect(selectedStatus).toBeVisible();
    }

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    for (const status of data.statuses) {
      await expect(
        leavepage.leaveStatusField.getByText(status, { exact: true }),
      ).toBeVisible();
    }

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusText = (
          await leavepage.leaveRows
            .nth(index)
            .locator(".oxd-table-cell")
            .nth(6)
            .innerText()
        ).trim();

        const matchesSelectedStatus = data.statuses.some((status) =>
          statusText.includes(status),
        );

        expect(matchesSelectedStatus).toBeTruthy();
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();
  });
  test("TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_131;

    await navigationPage.gotoLeave();

    await leavepage.waitForDefaultDateRange();

    for (const status of data.statuses) {
      const selectedStatus = leavepage.leaveStatusField.getByText(status, {
        exact: true,
      });

      if ((await selectedStatus.count()) === 0) {
        await leavepage.selectLeaveStatus(status);
      }

      await expect(selectedStatus).toBeVisible();
    }

    await leavepage.removeSelectedLeaveStatus(data.statusToRemove);

    await expect(
      leavepage.leaveStatusField.getByText(data.statusToRemove, {
        exact: true,
      }),
    ).toHaveCount(0);

    await expect(
      leavepage.leaveStatusField.getByText(data.remainingStatus, {
        exact: true,
      }),
    ).toBeVisible();

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.remainingStatus);

        await expect(statusCell).not.toContainText(data.statusToRemove);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();
  });

  test("TC_LEAVE_132 - Leave List date range should remain unchanged after status search @positive @persistence @regression", async ({
    navigationPage,
    leavepage,
  }) => {
    const data = leaveData.TC_LEAVE_132;

    await navigationPage.gotoLeave();

    const defaultDates = await leavepage.waitForDefaultDateRange();

    const selectedStatus = leavepage.leaveStatusField.getByText(
      data.leaveStatus,
      { exact: true },
    );

    if ((await selectedStatus.count()) === 0) {
      await leavepage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(selectedStatus).toBeVisible();

    await leavepage.searchLeaveList();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect(selectedStatus).toBeVisible();

    await expect(
      leavepage.leaveRows.first().or(leavepage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavepage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leavepage.leaveRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavepage.noRecordsFound).toBeVisible();
    }

    await leavepage.resetButton.click();

    await expect(leavepage.loadingSpinner).toBeHidden();

    await leavepage.waitForDefaultDateRange();
  });
});
