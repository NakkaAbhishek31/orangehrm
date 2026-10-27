import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import leaveData from "../../test-data/leave.data.json";
import { orangeHrmDateFromOffset as dateFromOffset } from "../../utils/dates";
import { createUniqueEmployee as employeeFrom } from "../../utils/testData";
import {
  leaveDropdownOption,
  leaveRowCell,
  leaveRowCells,
  leaveSelectedStatus,
  leaveStatusOptions,
} from "../../locators/test/leaveTestLocators";

test.describe("Leaves - leaves for  Users", () => {
  test("TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression", async ({
    page,
    loginPage,
    navigationPage,
    leavePage,
  }) => {
    // Click Leave in the main navigation.
    await navigationPage.gotoLeave();
    // Verify the Leave List URL and heading and inputs.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);
    await leavePage.verifyLeaveListPage();
  });

  test("TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression", async ({
    page,
    navigationPage,
    leavePage,
  }) => {
    const fromDate = dateFromOffset(leaveData.validDateRange.fromDaysOffset);

    const toDate = dateFromOffset(leaveData.validDateRange.toDaysOffset);

    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();

    await leavePage.fromDateInput.fill(fromDate);
    await leavePage.toDateInput.fill(toDate);
    await expect(leavePage.fromDateInput).toHaveValue(fromDate);
    await expect(leavePage.toDateInput).toHaveValue(toDate);
    // Click Search.
    await leavePage.searchButton.click();
    // Wait for the Leave List request and loading spinner.
    await expect(leavePage.loadingSpinner).toBeHidden();
    // Verify the entered date values remain displayed.
    await expect(leavePage.fromDateInput).toHaveValue(fromDate);

    await expect(leavePage.toDateInput).toHaveValue(toDate);

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(leavePage.dateValidationMessages).toHaveCount(0);
  });

  test("TC_LEAVE_111 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
    page,
    navigationPage,
    leavePage,
  }) => {
    // Generate From Date using invalidDateRange.fromDaysOffset.
    const fromDate = dateFromOffset(leaveData.invalidDateRange.fromDaysOffset);

    // Generate To Date using invalidDateRange.toDaysOffset.

    const toDate = dateFromOffset(leaveData.invalidDateRange.toDaysOffset);

    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    // Enter the future From Date.
    await leavePage.fromDateInput.fill(fromDate);
    // Enter the earlier To Date.
    await leavePage.toDateInput.fill(toDate);
    // Click Search.
    await leavePage.searchButton.click();
    // Verify the date-range validation appears.
    await expect(leavePage.toDateValidation).toBeVisible();
    // Verify the validation message says:
    // “To date should be after from date”.
    await expect(leavePage.toDateValidation).toHaveText(
      "To date should be after from date",
    );

    // Search should be blocked.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    // Verify no search results are loaded.

    await expect(leavePage.noRecordsFound).toBeVisible();
    // Verify the entered dates remain unchanged.
    await expect(leavePage.fromDateInput).toHaveValue(fromDate);
    await expect(leavePage.toDateInput).toHaveValue(toDate);
  });

  test("TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression", async ({
    page,
    navigationPage,
    leavePage,
  }) => {
    await navigationPage.gotoLeave();

    // Store default filter values.
    const { fromDate: defaultFromDate, toDate: defaultToDate } =
      await leavePage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavePage.leaveStatusDropdown.innerText()
    ).trim();

    const defaultLeaveTypeText = (
      await leavePage.leaveTypeDropdown.innerText()
    ).trim();

    // Generate different valid dates.
    const changedFromDate = dateFromOffset(-60);

    const changedToDate = dateFromOffset(-15);

    await leavePage.fromDateInput.fill(changedFromDate);

    await leavePage.toDateInput.fill(changedToDate);

    // Select Rejected status.
    await leavePage.leaveStatusDropdown.click();

    const statusOptions = leaveStatusOptions(page);

    await expect(statusOptions).toBeVisible();

    await leaveDropdownOption(statusOptions, /^Rejected$/).click();

    // Verify filters were changed.
    await expect(leavePage.fromDateInput).toHaveValue(changedFromDate);

    await expect(leavePage.toDateInput).toHaveValue(changedToDate);

    // Reset all filters.
    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    // Verify dates return to defaults.
    await expect(leavePage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(leavePage.toDateInput).toHaveValue(defaultToDate);

    // Verify status returns to its default value.
    await expect
      .poll(async () =>
        (await leavePage.leaveStatusDropdown.innerText()).trim(),
      )
      .toContain("-- Select --");

    // Verify Leave Type returns to default.
    await expect
      .poll(async () => (await leavePage.leaveTypeDropdown.innerText()).trim())
      .toBe(defaultLeaveTypeText);

    // Verify Employee Name is cleared.
    await expect(leavePage.employeeNameInput).toHaveValue("");

  });

  test("TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    await navigationPage.gotoLeave();

    const leaveType = await leavePage.selectFirstAvailableLeaveType();

    await leavePage.searchButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.leaveTypeDropdown).toContainText(leaveType);

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0 && leaveType !== "-- Select --") {
      for (let index = 0; index < rowCount; index++) {
        const leaveTypeCell = leaveRowCell(leavePage.leaveRows, index, 2);

        await expect(leaveTypeCell).toContainText(leaveType);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();

    await expect(leavePage.leaveTypeDropdown).toContainText("Select");
  });

  test("TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const testData = leaveData.TC_LEAVE_115;

    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    // Enter a partial employee name.
    const employeeName = await leavePage.selectFirstAvailableEmployee(
      leaveData.TC_LEAVE_115.partialEmployeeName,
    );

    await leavePage.searchButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.employeeNameInput).toHaveValue(
      new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
    );

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const employeeNameCell = leaveRowCell(leavePage.leaveRows, index, 1);

        await expect(employeeNameCell).toContainText(employeeName);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();

    await expect(leavePage.employeeNameInput).toHaveValue("");
  });

  test("TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    leavePage,
  }) => {
    const testData = leaveData.TC_LEAVE_116;

    await navigationPage.gotoLeave();

    await leavePage.employeeNameInput.fill(testData.employeeName);

    // Verify autocomplete has no matching employee.
    const noAutocompleteRecords = leavePage.autocompleteOptions.filter({
      hasText: "No Records Found",
    });

    await expect(noAutocompleteRecords).toBeVisible({
      timeout: 15_000,
    });

    // Close autocomplete without selecting an option.
    await leavePage.employeeNameInput.press("Escape");

    // Attempt to search.
    await leavePage.searchButton.click();

    // Verify invalid employee validation.
    await expect(leavePage.employeeNameValidation).toBeVisible();

    await expect(leavePage.employeeNameValidation).toHaveText("Invalid");

    await expect(leavePage.employeeNameInput).toHaveValue(
      testData.employeeName,
    );

    // Search should remain blocked.
    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    // Reset filters.
    await leavePage.resetButton.click();

    await expect(leavePage.employeeNameInput).toHaveValue("");

    await expect(leavePage.employeeNameValidation).toBeHidden();
  });

  test("TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_117;
    // Read the date offsets and status from JSON.
    await navigationPage.gotoLeave();
    const { fromDate: defaultFromDate, toDate: defaultToDate } =
      await leavePage.waitForDefaultDateRange();

    // Generate dynamic dates from JSON offsets.
    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await leavePage.fromDateInput.fill(fromDate);

    await leavePage.toDateInput.fill(toDate);
    // Select the configured Leave Status.
    await leavePage.selectLeaveStatus(data.leaveStatus);
    // Select the first available Leave Type dynamically.
    const leaveType = await leavePage.selectFirstAvailableLeaveType();

    await expect(leavePage.fromDateInput).toHaveValue(fromDate);

    await expect(leavePage.toDateInput).toHaveValue(toDate);

    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavePage.leaveTypeDropdown).toContainText(leaveType);
    // Click Search.
    await leavePage.searchButton.click();

    // Wait for the loading spinner to disappear.
    await expect(leavePage.loadingSpinner).toBeHidden();

    // Verify all entered filters remain selected.
    await expect(leavePage.fromDateInput).toHaveValue(fromDate);
    await expect(leavePage.toDateInput).toHaveValue(toDate);
    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavePage.leaveTypeDropdown).toContainText(leaveType);
    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    // Reset filters.
    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(leavePage.toDateInput).toHaveValue(defaultToDate);

    await expect(leavePage.leaveTypeDropdown).toContainText("Select");
  });

  test("TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    // Navigate to Leave → Leave List.
    await navigationPage.gotoLeave();
    await expect(leavePage.includePastEmployeesCheckbox).not.toBeChecked();

    // Verify Include Past Employees is unchecked initially.
    await leavePage.setIncludePastEmployees(true);
    // Enable Include Past Employees.
    await expect(leavePage.includePastEmployeesCheckbox).toBeChecked();

    // Verify the checkbox becomes checked.

    // Click Search.
    await leavePage.searchLeaveList();

    // Wait for the loading spinner to disappear.
    await expect(leavePage.loadingSpinner).toBeHidden();
    // Verify the checkbox remains checked after searching.
    await expect(leavePage.includePastEmployeesCheckbox).toBeChecked();
    // Verify either leave rows or “No Records Found” appears.
    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
    // Click Reset.

    await leavePage.resetButton.click();
    // Verify Include Past Employees returns to unchecked.
    await expect(leavePage.loadingSpinner).toBeHidden();
    await expect(leavePage.includePastEmployeesCheckbox).toBeChecked();
    await leavePage.setIncludePastEmployees(false);
    await expect(leavePage.includePastEmployeesCheckbox).not.toBeChecked();
  });

  test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_119;

    await navigationPage.gotoLeave();

    await leavePage.selectLeaveStatus(data.leaveStatus);

    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    }

    await leavePage.resetButton.click();
  });

  test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
    page,
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_120;

    await navigationPage.gotoLeave();

    await leavePage.fromDateInput.fill(data.invalidFromDate);

    await leavePage.fromDateInput.blur();

    await leavePage.searchButton.click();

    await expect(leavePage.fromDateValidation).toBeVisible();

    await expect(leavePage.fromDateValidation).toContainText(
      data.expectedValidation,
    );

    await expect(page).toHaveURL(/leave\/viewLeaveList/);

    await expect(leavePage.fromDateInput).toHaveValue(data.invalidFromDate);

    await leavePage.resetButton.click();

    await expect(leavePage.fromDateValidation).toBeHidden();
  });

  test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_121;

    await navigationPage.gotoLeave();

    const employeeName = await leavePage.selectFirstAvailableEmployee(
      data.partialEmployeeName,
    );

    await leavePage.selectLeaveStatus(data.leaveStatus);

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.employeeNameInput).toHaveValue(
      new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
    );

    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const cells = leaveRowCells(leavePage.leaveRows.nth(index));

        await expect(cells.nth(1)).toContainText(employeeName);

        await expect(cells.nth(6)).toContainText(data.leaveStatus);
      }
    }

    await leavePage.resetButton.click();

    await expect(leavePage.employeeNameInput).toHaveValue("");
  });

  test("TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_122;

    await navigationPage.gotoLeave();

    await leavePage.selectLeaveStatus(data.leaveStatus);

    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await leavePage.removeSelectedLeaveStatus(data.leaveStatus);

    await expect(leavePage.selectedLeaveStatuses).not.toContainText(
      data.leaveStatus,
    );
  });

  test("TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_123;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoLeave();

    await leavePage.fromDateInput.fill(fromDate);

    await leavePage.toDateInput.fill(toDate);

    await leavePage.selectLeaveStatus(data.leaveStatus);

    const leaveType = await leavePage.selectFirstAvailableLeaveType();

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.fromDateInput).toHaveValue(fromDate);

    await expect(leavePage.toDateInput).toHaveValue(toDate);

    await expect(leavePage.selectedLeaveStatuses).toContainText(data.leaveStatus);

    await expect(leavePage.leaveTypeDropdown).toContainText(leaveType);

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    await leavePage.resetButton.click();
  });

  test("TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_124;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoLeave();

    await leavePage.fromDateInput.fill(fromDate);

    await leavePage.toDateInput.fill(toDate);

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    const pageOneRecords = await leavePage.getVisibleLeaveRecords();

    test.skip(
      pageOneRecords.length === 0,
      "No leave records are currently available",
    );

    const nextButtonCount = await leavePage.nextPageButton.count();

    test.skip(
      nextButtonCount === 0,
      "Leave List currently contains only one page",
    );

    await leavePage.nextPageButton.click();

    await expect
      .poll(async () => leavePage.getVisibleLeaveRecords(), {
        timeout: 15_000,
      })
      .not.toEqual(pageOneRecords);

    const pageTwoRecords = await leavePage.getVisibleLeaveRecords();

    expect(pageTwoRecords.length).toBeGreaterThan(0);

    await leavePage.previousPageButton.click();

    await expect
      .poll(async () => leavePage.getVisibleLeaveRecords(), {
        timeout: 15_000,
      })
      .toEqual(pageOneRecords);
  });

  test("TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_125;

    await navigationPage.gotoLeave();

    // Store the complete default status state.
    const defaultStatusText = (
      await leavePage.leaveStatusField.innerText()
    ).trim();

    const scheduledStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.leaveStatus);

    const alreadySelected = (await scheduledStatus.count()) > 0;

    // Select Scheduled only when it is not
    // already selected by default.
    if (!alreadySelected) {
      await leavePage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(scheduledStatus).toBeVisible();

    // Search using Scheduled status.
    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    // Verify Scheduled remains selected.
    await expect(scheduledStatus).toBeVisible();

    // The shared demo can return records or
    // display No Records Found.
    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    // Reset filters.
    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    // Reset should restore the original default
    // status selection, which may include Scheduled.
    await expect
      .poll(async () => (await leavePage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_126;

    await navigationPage.gotoLeave();

    // Capture the original default status state.
    const defaultStatusText = (
      await leavePage.leaveStatusField.innerText()
    ).trim();

    const takenStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.leaveStatus);

    const alreadySelected = (await takenStatus.count()) > 0;

    // Select Taken only when it is not
    // already selected by default.
    if (!alreadySelected) {
      await leavePage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(takenStatus).toBeVisible();

    // Search using Taken status.
    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    // Verify Taken remains selected.
    await expect(takenStatus).toBeVisible();

    // Verify records or No Records Found.
    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    // Reset filters.
    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    // Verify the default status state is restored.
    await expect
      .poll(async () => (await leavePage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_127;

    await navigationPage.gotoLeave();

    const defaultDates = await leavePage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavePage.leaveStatusField.innerText()
    ).trim();

    const cancelledStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.leaveStatus);

    if ((await cancelledStatus.count()) === 0) {
      await leavePage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(cancelledStatus).toBeVisible();

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavePage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect(cancelledStatus).toBeVisible();

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();

    await leavePage.waitForDefaultDateRange();

    await expect
      .poll(async () => (await leavePage.leaveStatusField.innerText()).trim())
      .toContain("-- Select --");
  });

  test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_128;

    await navigationPage.gotoLeave();

    await leavePage.waitForDefaultDateRange();

    const firstStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.firstStatus);

    const secondStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.secondStatus);

    if ((await firstStatus.count()) === 0) {
      await leavePage.selectLeaveStatus(data.firstStatus);
    }

    if ((await secondStatus.count()) === 0) {
      await leavePage.selectLeaveStatus(data.secondStatus);
    }

    await expect(firstStatus).toBeVisible();
    await expect(secondStatus).toBeVisible();

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(firstStatus).toBeVisible();
    await expect(secondStatus).toBeVisible();

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusText = (
          await leaveRowCell(leavePage.leaveRows, index, 6).innerText()
        )
          .replace(/\s*\([^)]*\)\s*$/, "")
          .trim();

        expect([data.firstStatus, data.secondStatus]).toContain(statusText);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();
  });

  test("TC_LEAVE_129 - Reset should restore default Leave Status selections @positive @reset @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_129;

    await navigationPage.gotoLeave();

    const defaultDates = await leavePage.waitForDefaultDateRange();

    const defaultStatusText = (
      await leavePage.leaveStatusField.innerText()
    ).trim();

    const selectedStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.leaveStatus);

    if ((await selectedStatus.count()) === 0) {
      await leavePage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(selectedStatus).toBeVisible();

    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await leavePage.waitForDefaultDateRange();

    await expect(leavePage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavePage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect
      .poll(async () => (await leavePage.leaveStatusField.innerText()).trim(), {
        timeout: 15_000,
      })
      .toContain("-- Select --");
  });

  test("TC_LEAVE_130 - Admin should filter Leave List by Rejected and Cancelled statuses @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_130;

    await navigationPage.gotoLeave();

    await leavePage.waitForDefaultDateRange();

    for (const status of data.statuses) {
      const selectedStatus = leaveSelectedStatus(leavePage.leaveStatusField, status);

      if ((await selectedStatus.count()) === 0) {
        await leavePage.selectLeaveStatus(status);
      }

      await expect(selectedStatus).toBeVisible();
    }

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    for (const status of data.statuses) {
      await expect(
        leaveSelectedStatus(leavePage.leaveStatusField, status),
      ).toBeVisible();
    }

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusText = (
          await leaveRowCell(leavePage.leaveRows, index, 6).innerText()
        ).trim();

        const matchesSelectedStatus = data.statuses.some((status) =>
          statusText.includes(status),
        );

        expect(matchesSelectedStatus).toBeTruthy();
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();
  });
  test("TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_131;

    await navigationPage.gotoLeave();

    await leavePage.waitForDefaultDateRange();

    for (const status of data.statuses) {
      const selectedStatus = leaveSelectedStatus(leavePage.leaveStatusField, status);

      if ((await selectedStatus.count()) === 0) {
        await leavePage.selectLeaveStatus(status);
      }

      await expect(selectedStatus).toBeVisible();
    }

    await leavePage.removeSelectedLeaveStatus(data.statusToRemove);

    await expect(
      leaveSelectedStatus(leavePage.leaveStatusField, data.statusToRemove),
    ).toHaveCount(0);

    await expect(
      leaveSelectedStatus(leavePage.leaveStatusField, data.remainingStatus),
    ).toBeVisible();

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.remainingStatus);

        await expect(statusCell).not.toContainText(data.statusToRemove);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();
  });

  test("TC_LEAVE_132 - Leave List date range should remain unchanged after status search @positive @persistence @regression", async ({
    navigationPage,
    leavePage,
  }) => {
    const data = leaveData.TC_LEAVE_132;

    await navigationPage.gotoLeave();

    const defaultDates = await leavePage.waitForDefaultDateRange();

    const selectedStatus = leaveSelectedStatus(leavePage.leaveStatusField, data.leaveStatus);

    if ((await selectedStatus.count()) === 0) {
      await leavePage.selectLeaveStatus(data.leaveStatus);
    }

    await expect(selectedStatus).toBeVisible();

    await leavePage.searchLeaveList();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await expect(leavePage.fromDateInput).toHaveValue(defaultDates.fromDate);

    await expect(leavePage.toDateInput).toHaveValue(defaultDates.toDate);

    await expect(selectedStatus).toBeVisible();

    await expect(
      leavePage.leaveRows.first().or(leavePage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount = await leavePage.leaveRows.count();

    if (rowCount > 0) {
      for (let index = 0; index < rowCount; index++) {
        const statusCell = leaveRowCell(leavePage.leaveRows, index, 6);

        await expect(statusCell).toContainText(data.leaveStatus);
      }
    } else {
      await expect(leavePage.noRecordsFound).toBeVisible();
    }

    await leavePage.resetButton.click();

    await expect(leavePage.loadingSpinner).toBeHidden();

    await leavePage.waitForDefaultDateRange();
  });
});
