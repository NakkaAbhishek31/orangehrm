import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";

import loginData from "../../test-data/login.data.json";
import timeData from "../../test-data/time.data.json";
import { LeavePage } from "../../pages/LeavesPage";
import { TimePage } from "../../pages/TimePage";
const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
const employeeFrom = (
  d: { firstNamePrefix: string; middleName: string; lastName: string },
  value = unique(),
) => ({
  firstName: `${d.firstNamePrefix}${value}`,
  middleName: d.middleName,
  lastName: d.lastName,
});

const dateFromOffset = (daysOffset: number): string => {
  const date = new Date();

  date.setDate(date.getDate() + daysOffset);

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  // OrangeHRM Time fields use yyyy-dd-mm.
  return `${year}-${day}-${month}`;
};

test.describe("Time - Timesheets, Attendance and Reports", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();

    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );

    await loginPage.verifyLoginSuccessful();
  });

  test("TC_TIME_166 - Admin should navigate to the Employee Timesheets page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_166;

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeTimesheets();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(timePage.selectEmployeeHeading).toHaveText(data.pageHeading);

    await expect(timePage.employeeNameInput).toBeVisible();

    await expect(timePage.viewButton).toBeVisible();
  });

  test("TC_TIME_167 - Required validation should appear when viewing a timesheet without selecting an employee @negative @validation @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_167;

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeTimesheets();

    await timePage.viewButton.click();

    await expect(timePage.employeeNameValidation).toBeVisible();

    await expect(timePage.employeeNameValidation).toHaveText(
      data.requiredMessage,
    );

    await expect(timePage.employeeNameInput).toHaveValue("");

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });

  test("TC_TIME_168 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_168;

    const invalidEmployeeName = `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeTimesheets();

    await timePage.employeeNameInput.fill(invalidEmployeeName);

    await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );

    await timePage.employeeNameInput.press("Escape");

    await timePage.viewButton.click();

    await expect(timePage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );

    await expect(timePage.employeeNameInput).toHaveValue(invalidEmployeeName);

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });

  test("TC_TIME_169 - Admin should view a valid employee timesheet @positive @timesheet @regression", async ({
    navigationPage,
    pimPage,
    timePage,
  }) => {
    test.setTimeout(120_000);

    const data = timeData.TC_TIME_169;

    const firstName = `${data.firstNamePrefix}${Date.now()}`;

    await navigationPage.gotoPIM();

    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
    });

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeTimesheets();

    const selectedEmployee =
      await timePage.selectEmployeeFromAutocomplete(firstName);

    await expect(timePage.employeeNameInput).toHaveValue(selectedEmployee);

    await timePage.viewButton.click();

    await expect(timePage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      timePage.employeeTimesheetHeading.or(timePage.noTimesheetsFound),
    ).toBeVisible({
      timeout: 20_000,
    });

    // Cleanup.
    await navigationPage.gotoPIM();

    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_TIME_170 - Admin should navigate to the My Timesheet page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_170;

    await navigationPage.gotoTime();

    await timePage.gotoMyTimesheet();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(timePage.myTimesheetHeading).toBeVisible();

    await expect(timePage.timesheetPeriod).toBeVisible();

    await expect(timePage.timesheetTable).toBeVisible();

    await expect(timePage.editTimesheetButton).toBeVisible();
  });

  test("TC_TIME_171 - Admin should navigate to Employee Attendance Records @smoke @navigation @attendance @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_171;

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeAttendanceRecords();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(timePage.attendanceHeading).toHaveText(data.pageHeading);

    await expect(timePage.attendanceEmployeeInput).toBeVisible();

    await expect(timePage.attendanceDateInput).toBeVisible();

    await expect(timePage.attendanceViewButton).toBeVisible();
  });

  test("TC_TIME_172 - Admin should navigate to the Project Reports page @smoke @navigation @report @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_172;

    await navigationPage.gotoTime();

    await timePage.gotoProjectReports();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(timePage.projectReportHeading).toHaveText(data.pageHeading);

    await expect(timePage.projectNameInput).toBeVisible();

    await expect(timePage.projectFromDateInput).toBeVisible();

    await expect(timePage.projectToDateInput).toBeVisible();

    await expect(timePage.projectReportViewButton).toBeVisible();
  });

  test("TC_TIME_173 - Required validation should appear when viewing attendance without a date @negative @validation @attendance @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    // Read validation data from JSON.
    const data = timeData.TC_TIME_173;
    await navigationPage.gotoTime();
    // Navigate to Time → Attendance → Employee Records.
    await timePage.gotoEmployeeAttendanceRecords();
    // Verify Employee Attendance Records page is displayed.
    // await expect(timePage.attendanceHeading).toBeVisible();

    await expect(timePage.attendanceEmployeeInput).toBeVisible();
    // Employee Name is optional; Date is the required field on this form.
    await timePage.attendanceEmployeeInput.fill("");
    await timePage.attendanceDateInput.clear();

    const initialRowCount = await timePage.attendanceRows.count();

    // Click View.
    await timePage.attendanceViewButton.click();
    // Verify Required validation appears below Date.
    await expect(timePage.attendanceDateValidation).toBeVisible();

    await expect(timePage.attendanceDateValidation).toHaveText(
      data.requiredMessage,
    );
    // Verify Employee Name remains empty.
    await expect(timePage.attendanceEmployeeInput).toHaveValue("");
    // Verify the user remains on the
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    // Invalid submission must not replace the records already displayed.
    await expect(timePage.attendanceRows).toHaveCount(initialRowCount);
  });

  test("TC_TIME_174 - No Records Found should appear for a nonexistent employee in Attendance Records @negative @validation @autocomplete @attendance @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_174;

    const invalidEmployeeName = `${data.employeeNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();

    await timePage.gotoEmployeeAttendanceRecords();

    // Store the default date before changing
    // the Employee Name.
    const defaultDate = await timePage.attendanceDateInput.inputValue();

    expect(defaultDate).not.toBe("");

    await timePage.attendanceEmployeeInput.fill(invalidEmployeeName);

    await expect(timePage.attendanceAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(timePage.attendanceAutocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );

    // Close autocomplete without selecting.
    await timePage.attendanceEmployeeInput.press("Escape");

    await expect(timePage.attendanceAutocompleteDropdown).toBeHidden();

    await expect(timePage.attendanceEmployeeInput).toHaveValue(
      invalidEmployeeName,
    );

    await expect(timePage.attendanceDateInput).toHaveValue(defaultDate);

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    // Cleanup the filter.
    await timePage.attendanceEmployeeInput.clear();

    await expect(timePage.attendanceEmployeeInput).toHaveValue("");
  });

  test("TC_TIME_175 - Admin should view attendance records for a valid employee @positive @attendance @autocomplete @regression", async ({
    page,
    navigationPage,
    pimPage,
    timePage,
  }) => {
    test.setTimeout(120_000);

    const data = timeData.TC_TIME_175;

    const firstName = `${data.firstNamePrefix}${Date.now()}`;

    const employee = {
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
    };

    // Create a temporary employee.
    await navigationPage.gotoPIM();

    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee(employee);

    expect(employeeId).not.toBe("");

    // Navigate to Attendance Records.
    await navigationPage.gotoTime();

    await timePage.gotoEmployeeAttendanceRecords();

    const selectedEmployee =
      await timePage.selectAttendanceEmployeeFromAutocomplete(firstName);

    await expect(timePage.attendanceEmployeeInput).toHaveValue(
      selectedEmployee,
    );

    const attendanceDate = await timePage.attendanceDateInput.inputValue();

    expect(attendanceDate).not.toBe("");

    await timePage.attendanceViewButton.click();

    await expect(timePage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(page).toHaveURL(new RegExp(data.expectedUrlPath));

    await expect(timePage.attendanceEmployeeInput).toHaveValue(
      selectedEmployee,
    );

    await expect(timePage.attendanceDateInput).toHaveValue(attendanceDate);

    // A newly created employee normally has
    // no attendance records.
    await expect(
      timePage.attendanceRows.first().or(timePage.attendanceNoRecords),
    ).toBeVisible({
      timeout: 20_000,
    });

    const rowCount = await timePage.attendanceRows.count();

    if (rowCount > 0) {
      await expect(timePage.attendanceRows.first()).toBeVisible();
    } else {
      await expect(timePage.attendanceNoRecords).toBeVisible();
    }

    // Cleanup.
    await navigationPage.gotoPIM();

    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_TIME_176 - Admin should change the attendance date while viewing employee records @positive @attendance @date @regression", async ({
    page,
    navigationPage,
    pimPage,
    timePage,
  }) => {
    // This test creates and removes a PIM employee. The public demo can be
    // slow while returning to Employee List for cleanup.
    test.setTimeout(240_000);

    const data = timeData.TC_TIME_176;

    const firstName = `${data.firstNamePrefix}${Date.now()}`;

    const employee = {
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
    };

    const attendanceDate = dateFromOffset(data.attendanceDaysOffset);

    // Create a temporary employee.
    await navigationPage.gotoPIM();

    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee(employee);

    expect(employeeId).not.toBe("");

    // Navigate to Employee Attendance Records.
    await navigationPage.gotoTime();

    await timePage.gotoEmployeeAttendanceRecords();

    const selectedEmployee =
      await timePage.selectAttendanceEmployeeFromAutocomplete(firstName);

    await expect(timePage.attendanceEmployeeInput).toHaveValue(
      selectedEmployee,
    );

    // Change the attendance date.
    await timePage.attendanceDateInput.fill(attendanceDate);

    await expect(timePage.attendanceDateInput).toHaveValue(attendanceDate);

    await timePage.attendanceViewButton.click();

    await expect(timePage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(page).toHaveURL(new RegExp(data.expectedUrlPath));

    await expect(timePage.attendanceEmployeeInput).toHaveValue(
      selectedEmployee,
    );

    await expect(timePage.attendanceDateInput).toHaveValue(attendanceDate);

    await expect(
      timePage.attendanceRows.first().or(timePage.attendanceNoRecords),
    ).toBeVisible({
      timeout: 20_000,
    });

    const rowCount = await timePage.attendanceRows.count();

    if (rowCount > 0) {
      await expect(timePage.attendanceRows.first()).toBeVisible();
    } else {
      await expect(timePage.attendanceNoRecords).toBeVisible();
    }

    // Cleanup.
    await navigationPage.gotoPIM();

    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_TIME_177 - Admin should navigate to My Attendance Records @smoke @navigation @attendance @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_177;

    await navigationPage.gotoTime();

    await timePage.gotoMyAttendanceRecords();

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));

    await expect(timePage.myAttendanceHeading).toBeVisible();

    await expect(timePage.myAttendanceDateInput).toBeVisible();

    const defaultAttendanceDate =
      await timePage.myAttendanceDateInput.inputValue();

    expect(defaultAttendanceDate).not.toBe("");

    await expect(timePage.myAttendanceViewButton).toBeVisible();
  });

  test("TC_TIME_178 - Admin should view My Attendance Records for a selected date @positive @attendance @date @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_178;

    const attendanceDate = dateFromOffset(data.attendanceDaysOffset);

    await navigationPage.gotoTime();

    await timePage.gotoMyAttendanceRecords();

    await timePage.myAttendanceDateInput.fill(attendanceDate);

    await expect(timePage.myAttendanceDateInput).toHaveValue(attendanceDate);

    await timePage.myAttendanceViewButton.click();

    await expect(timePage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(timePage.myAttendanceDateInput).toHaveValue(attendanceDate);

    // Either records or No Records Found
    // can appear for the selected date.
    await expect(
      timePage.attendanceRows.first().or(timePage.attendanceNoRecords),
    ).toBeVisible({
      timeout: 20_000,
    });

    const rowCount = await timePage.attendanceRows.count();

    if (rowCount > 0) {
      await expect(timePage.attendanceRows.first()).toBeVisible();
    } else {
      await expect(timePage.attendanceNoRecords).toBeVisible();
    }

    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  });

  test("TC_TIME_179 - Admin should navigate to the Punch In page @smoke @navigation @attendance @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    // Read expected URL and heading from JSON.
    const data = timeData.TC_TIME_179;
    // Navigate to Time.
    await navigationPage.gotoTime();
    // Open Attendance menu.

    // Click Punch In/Out.
    await timePage.gotoPunchInOut();
    // Verify navigation to the Punch In page.
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    // Verify the Punch In heading.
    await expect(timePage.punchHeading).toBeVisible();
    await expect(timePage.punchHeading).toContainText(data.pageHeading);
    // Verify Date input.
    await expect(timePage.punchDateInput).toBeVisible();
    // Verify Time input.
    await expect(timePage.punchTimeInput).toBeVisible();
    // Verify Note input.
    await expect(timePage.punchNoteInput).toBeVisible();
    // Verify the Punch In button is visible.
    await expect(timePage.punchInButton).toBeVisible();
  });

  test("TC_TIME_180 - Admin should complete the Punch In and Punch Out workflow successfully @positive @attendance @workflow @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    test.setTimeout(120_000);

    const data = timeData.TC_TIME_180;

    await navigationPage.gotoTime();

    await timePage.gotoPunchInOut();

    const waitForAttendanceResponse = () =>
      page.waitForResponse(
        (response) =>
          response.url().includes("/api/v2/attendance/records") &&
          ["POST", "PUT"].includes(response.request().method()),
        {
          timeout: 30_000,
        },
      );

    const waitForSuccessToast = () =>
      timePage.attendanceSuccessToast.waitFor({
        state: "visible",
        timeout: 15_000,
      });

    let punchedInByTest = false;

    try {
      const currentlyPunchedIn = await timePage.punchOutButton
        .isVisible()
        .catch(() => false);

      // Restore the initial state if the shared
      // Admin account is already punched in.
      if (currentlyPunchedIn) {
        await timePage.ensurePunchDateAndTime();

        await timePage.punchNoteInput.fill(data.cleanupPunchOutNote);

        const cleanupResponsePromise = waitForAttendanceResponse();

        const cleanupToastPromise = waitForSuccessToast();

        await timePage.punchOutButton.click();

        const cleanupResponse = await cleanupResponsePromise;

        await cleanupToastPromise;

        expect(cleanupResponse.ok()).toBeTruthy();

        await expect(timePage.punchInButton).toBeVisible({
          timeout: 20_000,
        });
      }

      await expect(timePage.punchInButton).toBeVisible();

      const { date: displayedDate, time: displayedTime } =
        await timePage.ensurePunchDateAndTime();

      expect(displayedDate).not.toBe("");
      expect(displayedTime).not.toBe("");

      // Punch In.
      await timePage.punchNoteInput.fill(data.punchInNote);

      await expect(timePage.punchNoteInput).toHaveValue(data.punchInNote);

      const punchInResponsePromise = waitForAttendanceResponse();

      const punchInToastPromise = waitForSuccessToast();

      await timePage.punchInButton.click();

      const punchInResponse = await punchInResponsePromise;

      await punchInToastPromise;

      expect(punchInResponse.ok()).toBeTruthy();

      punchedInByTest = true;

      await expect(timePage.punchOutButton).toBeVisible({
        timeout: 20_000,
      });

      // Punch Out.
      await timePage.ensurePunchDateAndTime();

      await timePage.punchNoteInput.fill(data.punchOutNote);

      await expect(timePage.punchNoteInput).toHaveValue(data.punchOutNote);

      const punchOutResponsePromise = waitForAttendanceResponse();

      const punchOutToastPromise = waitForSuccessToast();

      await timePage.punchOutButton.click();

      const punchOutResponse = await punchOutResponsePromise;

      await punchOutToastPromise;

      expect(punchOutResponse.ok()).toBeTruthy();

      punchedInByTest = false;

      await expect(timePage.punchInButton).toBeVisible({
        timeout: 20_000,
      });

      await expect(timePage.punchDateInput).toBeVisible();

      await expect(timePage.punchTimeInput).toBeVisible();

      await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    } finally {
      // Cleanup if the test failed after Punch In.
      if (punchedInByTest) {
        const canPunchOut = await timePage.punchOutButton
          .isVisible()
          .catch(() => false);

        if (canPunchOut) {
          await timePage.punchNoteInput.fill(data.cleanupPunchOutNote);

          const cleanupResponsePromise = waitForAttendanceResponse();

          await timePage.punchOutButton.click();

          await cleanupResponsePromise;
        }
      }
    }
  });

  test("TC_TIME_181 - Admin should navigate to the Attendance Summary Report page @smoke @navigation @report @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_181;
    // Navigate to Time.
    await navigationPage.gotoTime();
    // Open Reports.
    // Click Attendance Summary.
    await timePage.gotoAttendanceSummary();
    // Verify URL and heading.
    await expect(page).toHaveURL(new RegExp(data.expectedUrlPath));
    await expect(timePage.attendanceSummaryReportHeading).toBeVisible();
    // Verify Employee Name input.
    await expect(timePage.summaryEmployeeInput).toBeVisible();
    // Verify From Date and To Date.
    await expect(timePage.summaryFromDateInput).toBeVisible();
    await expect(timePage.summaryToDateInput).toBeVisible();
    // Verify View button.
    await expect(timePage.summaryViewButton).toBeVisible();
  });

  test("TC_TIME_182 - Invalid validation should appear for a nonexistent employee in Attendance Summary @negative @validation @autocomplete @report @regression", async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data = timeData.TC_TIME_182;
    // Generate a unique nonexistent employee name.
    const employeeName = `${data.employeeNamePrefix}${Date.now()}$`;
    // Navigate to Attendance Summary.
    await navigationPage.gotoTime();
    await timePage.gotoAttendanceSummary();
    // Enter the invalid employee name.
    await timePage.summaryEmployeeInput.fill(employeeName);
    // Verify autocomplete shows No Records Found.
    await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );
    // Close autocomplete.
     
  await timePage.employeeAutocompleteNoRecords.press('Escape');

    // Click View.
     await timePage.summaryViewButton.click();
    // Verify Invalid validation.
    await expect(timePage.summaryEmployeeValidation).toHaveText(data.invalidMessage)
    // Verify entered name remains displayed.
    await expect(timePage.summaryEmployeeInput).toHaveValue(employeeName);
  });

  test('TC_TIME_183 - Admin should navigate to the Employee Report page @smoke @navigation @report @regression',
  async ({ page, navigationPage, timePage }) => {
        const data = timeData.TC_TIME_183;
    // Navigate to Time.
    // Open Reports.
    // Click Employee Reports.
      await navigationPage.gotoTime();
    await timePage.gotoEmployeeReport();
    // Verify URL and heading.
     await expect(page).toHaveURL(new RegExp(data.expectedUrlPath));
    await expect(timePage.employeeReportHeading).toBeVisible();
    // Verify Employee Name input.
    await expect(timePage.reportEmployeeInput).toBeVisible();
    // Verify From Date and To Date.
    await expect(timePage.reportFromDateInput).toBeVisible();
    await expect(timePage.reportToDateInput).toBeVisible();
    // Verify View button.
    await expect(timePage.employeeReportViewButton).toBeVisible();
  }
);
test('TC_TIME_184 - Invalid validation should appear for a nonexistent employee in Employee Report @negative @validation @autocomplete @report @regression',
  async ({ page, navigationPage, timePage }) => {
    const data = timeData.TC_TIME_184;
    // Generate a unique nonexistent employee name.
    const employeeName = `${data.employeeNamePrefix}${Date.now()}$`;

    // Navigate to Employee Report.
    await navigationPage.gotoTime();
    await timePage.gotoEmployeeReport();
    // Enter the invalid employee name.
    await timePage.reportEmployeeInput.fill(employeeName);
    // Verify autocomplete shows No Records Found.
    await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });
    // Close autocomplete.
    // Click View.
    // Verify Invalid validation.
    // Verify the report is not generated.
    // Verify autocomplete shows No Records Found.
    await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );
    // Close autocomplete.
     
    await timePage.reportEmployeeInput.press('Escape');

    // Click View.
     await timePage.employeeReportViewButton.click();
    // Verify Invalid validation.
    await expect(timePage.reportEmployeeValidation).toHaveText(
      data.invalidMessage,
    );
    // Verify entered name remains displayed.
    await expect(timePage.reportEmployeeInput).toHaveValue(employeeName);
  });
test(
  'TC_TIME_185 - Admin should navigate to the Customers page @smoke @navigation @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_185;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.expectedUrlPath}$`
      )
    );

    await expect(
      timePage.customersHeading
    ).toHaveText(data.pageHeading);

    await expect(
      timePage.addCustomerButton
    ).toBeVisible();

    await expect(
      timePage.customersTable
    ).toBeVisible();

    await expect(
      timePage.customerRows
        .first()
        .or(timePage.customerNoRecords)
    ).toBeVisible({
      timeout: 20_000,
    });

    const customerCount =
      await timePage.customerRows.count();

    if (customerCount > 0) {
      await expect(
        timePage.customerRows.first()
      ).toBeVisible();
    } else {
      await expect(
        timePage.customerNoRecords
      ).toBeVisible();
    }
  }
);

test( 'TC_TIME_186 - Required validation should appear when adding an empty customer @negative @validation @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_186;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.addCustomerButton.click();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.addCustomerUrlPath}$`
      )
    );

    await expect(
      timePage.addCustomerHeading
    ).toBeVisible();

    // Leave Customer Name empty.
    await expect(
      timePage.customerNameInput
    ).toHaveValue('');

    await timePage.customerSaveButton.click();

    await expect(
      timePage.customerNameValidation
    ).toBeVisible();

    await expect(
      timePage.customerNameValidation
    ).toHaveText(
      data.requiredMessage
    );

    await expect(
      timePage.customerNameInput
    ).toHaveValue('');

    // Invalid submission remains on Add Customer.
    await expect(page).toHaveURL(
      new RegExp(
        `${data.addCustomerUrlPath}$`
      )
    );

    await timePage.customerCancelButton.click();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.customersUrlPath}$`
      )
    );

    await expect(
      timePage.customersHeading
    ).toBeVisible();
  }
);

test('TC_TIME_187 - Admin should cancel adding a new customer @negative @cancel @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_187;

    const customerName =
      `${data.customerNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.addCustomerButton.click();

    await expect(
      timePage.addCustomerHeading
    ).toBeVisible();

    await timePage.customerNameInput.fill(
      customerName
    );

    await timePage
      .customerDescriptionInput
      .fill(data.description);

    await expect(
      timePage.customerNameInput
    ).toHaveValue(customerName);

    await expect(
      timePage.customerDescriptionInput
    ).toHaveValue(data.description);

    // Cancel without saving.
    await timePage.customerCancelButton.click();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.customersUrlPath}$`
      )
    );

    await expect(
      timePage.customersHeading
    ).toBeVisible();

    // Verify the cancelled customer is not
    // present in the current customer list.
    const cancelledCustomerRow =
      timePage.customerRows.filter({
        has: page
          .locator('.oxd-table-cell')
          .nth(1)
          .getByText(customerName, {
            exact: true,
          }),
      });

    await expect(
      cancelledCustomerRow
    ).toHaveCount(0);

    await expect(
      timePage.timeSuccessToast
    ).not.toBeVisible();
  }
);
test(
  'TC_TIME_188 - Admin should add a new customer successfully @positive @create @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_188;

    const customerName =
      `${data.customerNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.addCustomerButton.click();

    await expect(
      timePage.addCustomerHeading
    ).toBeVisible();

    await timePage.customerNameInput.fill(
      customerName
    );

    await timePage
      .customerDescriptionInput
      .fill(data.description);

    const createResponsePromise =
      page.waitForResponse(
        response =>
          response.url().includes(
            '/api/v2/time/customers'
          ) &&
          response.request().method() === 'POST',
        {
          timeout: 30_000,
        }
      );

    const saveToastPromise =
      timePage.timeSuccessToast.waitFor({
        state: 'visible',
        timeout: 15_000,
      });

    await timePage.customerSaveButton.click();

    const createResponse =
      await createResponsePromise;

    await saveToastPromise;

    const responseBody =
      await createResponse.text();

    expect(
      createResponse.ok(),
      `Customer creation failed with ${createResponse.status()}: ${responseBody}`
    ).toBeTruthy();

    await expect(page).toHaveURL(
      /\/time\/viewCustomers$/
    );

    const createdCustomerRow =
      timePage.customerRows.filter({
        has: page
          .locator('.oxd-table-cell')
          .nth(1)
          .getByText(customerName, {
            exact: true,
          }),
      });

    await expect(
      createdCustomerRow
    ).toHaveCount(1, {
      timeout: 20_000,
    });

    const cells =
      createdCustomerRow.locator(
        '.oxd-table-cell'
      );

    await expect(
      cells.nth(1)
    ).toHaveText(customerName);

    await expect(
      cells.nth(2)
    ).toContainText(data.description);

    // Cleanup: delete the created customer.
    const deleteButton =
      createdCustomerRow
        .getByRole('button')
        .filter({
          has: page.locator('i.bi-trash'),
        });

    await deleteButton.click();

    const confirmationDialog =
      page.getByRole('dialog');

    await expect(
      confirmationDialog
    ).toBeVisible();

    const deleteResponsePromise =
      page.waitForResponse(
        response =>
          response.url().includes(
            '/api/v2/time/customers'
          ) &&
          response.request().method() === 'DELETE',
        {
          timeout: 30_000,
        }
      );

    await confirmationDialog
      .getByRole('button', {
        name: /Yes, Delete$/,
      })
      .click();

    const deleteResponse =
      await deleteResponsePromise;

    expect(
      deleteResponse.ok()
    ).toBeTruthy();

    await expect(
      createdCustomerRow
    ).toBeHidden({
      timeout: 20_000,
    });
  }
);

test('TC_TIME_189 - Admin should navigate to the Projects page @smoke @navigation @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_189;

    await navigationPage.gotoTime();

    await timePage.gotoProjects();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.expectedUrlPath}$`
      )
    );

    await expect(
      timePage.projectsHeading
    ).toHaveText(data.pageHeading);

    await expect(
      timePage.projectCustomerFilterInput
    ).toBeVisible();

    await expect(
      timePage.projectNameFilterInput
    ).toBeVisible();

    await expect(
      timePage.projectSearchButton
    ).toBeVisible();

    await expect(
      timePage.projectResetButton
    ).toBeVisible();

    await expect(
      timePage.addProjectButton
    ).toBeVisible();

    await expect(
      timePage.projectsTable
    ).toBeVisible();

    await expect(
      timePage.projectRows
        .first()
        .or(timePage.projectNoRecords)
    ).toBeVisible({
      timeout: 20_000,
    });
  }
);

test('TC_TIME_190 - Required validation should appear when adding an empty project @negative @validation @project-info @regression',
  async ({ page, navigationPage, timePage }) => {
    const data = timeData.TC_TIME_190;

    await navigationPage.gotoTime();
    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    await expect(page).toHaveURL(
      new RegExp(`${data.addProjectUrlPath}$`),
    );

    await expect(timePage.addProjectHeading).toBeVisible();
    await expect(timePage.addProjectCustomerInput).toHaveValue('');
    await expect(timePage.addProjectNameInput).toHaveValue('');
    await expect(timePage.projectAdminInput).toHaveValue('');

    await timePage.projectSaveButton.click();

    await expect(timePage.projectValidationMessages).toHaveCount(
      data.requiredCount,
    );

    for (let index = 0; index < data.requiredCount; index++) {
      await expect(
        timePage.projectValidationMessages.nth(index),
      ).toHaveText(data.requiredMessage);
    }

    // Invalid submission must remain on Add Project.
    await expect(page).toHaveURL(
      new RegExp(`${data.addProjectUrlPath}$`),
    );

    await timePage.projectCancelButton.click();

    await expect(page).toHaveURL(
      new RegExp(`${data.projectsUrlPath}$`),
    );

    await expect(timePage.projectsHeading).toBeVisible();
  },
);

test(
  'TC_TIME_191 - Admin should cancel adding a new project @negative @cancel @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_191;

    const projectName =
      `${data.projectNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();
    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    await timePage.addProjectNameInput.fill(
      projectName
    );

    await expect(
      timePage.addProjectNameInput
    ).toHaveValue(projectName);

    await timePage.projectCancelButton.click();

    await expect(page).toHaveURL(
      new RegExp(
        `${data.projectsUrlPath}$`
      )
    );

    const cancelledProject =
      timePage.projectRows.filter({
        hasText: projectName,
      });

    await expect(
      cancelledProject
    ).toHaveCount(0);

    await expect(
      timePage.timeSuccessToast
    ).not.toBeVisible();
  }
);

test(
  'TC_TIME_192 - Admin should add a new project successfully @positive @create @project-info @regression',
  async ({
    navigationPage,
    timePage,
  }) => {
    test.setTimeout(240_000);

    const data =
      timeData.TC_TIME_192;

    const uniqueValue = Date.now();

    const customerName =
      `${data.customerNamePrefix}${uniqueValue}`;

    const projectName =
      `${data.projectNamePrefix}${uniqueValue}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.createCustomer({
      name: customerName,
      description: data.customerDescription,
    });

    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    const createdProject =
      await timePage.createProject({
        customerName,
        projectName,
        projectAdminSearchText:
          data.projectAdminSearchText,
        description:
          data.projectDescription,
      });

    expect(
      createdProject.projectId
    ).not.toBe('');

    await timePage.verifyProjectRow({
      customerName,
      projectName,
      projectAdmin:
        createdProject.projectAdmin,
    });

    // Cleanup.
    await timePage.deleteProjectByName(
      projectName
    );

    await timePage.gotoCustomers();

    await timePage.deleteCustomerByName(
      customerName
    );
  }
);


test(
  'TC_TIME_193 - Admin should search for a project by project name @positive @search @project-info @regression',
  async ({
    navigationPage,
    timePage,
  }) => {
    test.setTimeout(240_000);

    const data =
      timeData.TC_TIME_193;

    const uniqueValue = Date.now();

    const customerName =
      `${data.customerNamePrefix}${uniqueValue}`;

    const projectName =
      `${data.projectNamePrefix}${uniqueValue}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.createCustomer({
      name: customerName,
      description: data.customerDescription,
    });

    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    await timePage.createProject({
      customerName,
      projectName,
      projectAdminSearchText:
        data.projectAdminSearchText,
    });

    await timePage.searchProject({
      projectName,
    });

    await expect(
      timePage.projectRows
    ).toHaveCount(1, {
      timeout: 20_000,
    });

    await timePage.verifyProjectRow({
      customerName,
      projectName,
    });

    // Cleanup.
    await timePage.deleteProjectByName(
      projectName
    );

    await timePage.gotoCustomers();

    await timePage.deleteCustomerByName(
      customerName
    );
  }
);


test(
  'TC_TIME_194 - Admin should search for a project by customer name @positive @search @project-info @regression',
  async ({
    navigationPage,
    timePage,
  }) => {
    test.setTimeout(240_000);

    const data =
      timeData.TC_TIME_194;

    const uniqueValue = Date.now();

    const customerName =
      `${data.customerNamePrefix}${uniqueValue}`;

    const projectName =
      `${data.projectNamePrefix}${uniqueValue}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.createCustomer({
      name: customerName,
      description: data.customerDescription,
    });

    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    await timePage.createProject({
      customerName,
      projectName,
      projectAdminSearchText:
        data.projectAdminSearchText,
    });

    await timePage.searchProject({
      customerName,
    });

    await expect(
      timePage.projectRows.first()
    ).toBeVisible({
      timeout: 20_000,
    });

    const rowCount =
      await timePage.projectRows.count();

    for (
      let index = 0;
      index < rowCount;
      index++
    ) {
      const customerCell =
        timePage.projectRows
          .nth(index)
          .locator('.oxd-table-cell')
          .nth(1);

      await expect(
        customerCell
      ).toContainText(customerName);
    }

    // Cleanup.
    await timePage.deleteProjectByName(
      projectName
    );

    await timePage.gotoCustomers();

    await timePage.deleteCustomerByName(
      customerName
    );
  }
);

test(
  'TC_TIME_195 - Admin should reset Project search filters @positive @filter @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_195;

    const customerName =
      `${data.customerNamePrefix}${Date.now()}`;

    const projectName =
      `${data.projectNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();
    await timePage.gotoProjects();

    await timePage
      .projectCustomerFilterInput
      .fill(customerName);

    await timePage
      .projectNameFilterInput
      .fill(projectName);

    await expect(
      timePage.projectCustomerFilterInput
    ).toHaveValue(customerName);

    await expect(
      timePage.projectNameFilterInput
    ).toHaveValue(projectName);

    await timePage.projectCustomerFilterInput.press('Escape');

    await timePage.projectResetButton.click();

    await expect(
      timePage.projectCustomerFilterInput
    ).toHaveValue('');

    await expect(
      timePage.projectNameFilterInput
    ).toHaveValue('');

    await expect(page).toHaveURL(
      new RegExp(
        `${data.projectsUrlPath}$`
      )
    );

    await expect(
      timePage.projectsTable
    ).toBeVisible();
  }
);

test(
  'TC_TIME_196 - Invalid validation should appear for a nonexistent customer in Project search @negative @validation @autocomplete @project-info @regression',
  async ({
    page,
    navigationPage,
    timePage,
  }) => {
    const data =
      timeData.TC_TIME_196;

    const invalidCustomer =
      `${data.customerNamePrefix}${Date.now()}`;

    await navigationPage.gotoTime();
    await timePage.gotoProjects();

    await timePage
      .projectCustomerFilterInput
      .fill(invalidCustomer);

    await expect(
      timePage.visibleAutocompleteDropdown
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      timePage.autocompleteNoRecords
    ).toHaveText(data.noRecordsMessage);

    await timePage
      .projectCustomerFilterInput
      .press('Escape');

    await timePage.projectSearchButton.click();

    await expect(
      timePage.projectCustomerValidation
    ).toHaveText(data.invalidMessage);

    await expect(
      timePage.projectCustomerFilterInput
    ).toHaveValue(invalidCustomer);

    await expect(page).toHaveURL(
      new RegExp(
        `${data.projectsUrlPath}$`
      )
    );
  }
);

test(
  'TC_TIME_197 - Admin should delete an existing project successfully @positive @delete @project-info @regression',
  async ({
    navigationPage,
    timePage,
  }) => {
    test.setTimeout(240_000);

    const data =
      timeData.TC_TIME_197;

    const uniqueValue = Date.now();

    const customerName =
      `${data.customerNamePrefix}${uniqueValue}`;

    const projectName =
      `${data.projectNamePrefix}${uniqueValue}`;

    await navigationPage.gotoTime();

    await timePage.gotoCustomers();

    await timePage.createCustomer({
      name: customerName,
      description: data.customerDescription,
    });

    await timePage.gotoProjects();

    await timePage.addProjectButton.click();

    await timePage.createProject({
      customerName,
      projectName,
      projectAdminSearchText:
        data.projectAdminSearchText,
    });

    await timePage.searchProject({
      projectName,
    });

    await timePage.verifyProjectRow({
      customerName,
      projectName,
    });

    await timePage.deleteProjectByName(
      projectName
    );

    await timePage.searchProject({
      projectName,
    });

    await expect(
      timePage.projectRows
    ).toHaveCount(0);

    await expect(
      timePage.projectNoRecords
    ).toBeVisible();

    // Cleanup customer.
    await timePage.gotoCustomers();

    await timePage.deleteCustomerByName(
      customerName
    );
  }
);


});
