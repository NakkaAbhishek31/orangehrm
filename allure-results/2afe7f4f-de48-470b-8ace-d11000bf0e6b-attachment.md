# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:432:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text-selected')
Expected substring: "Pending Approval"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text-selected')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Leave List" [level=5]
- button ""
- separator
- text: From Date
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text:  Show Leave with Status* -- Select --  Pending Approval  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
- table:
  - rowgroup:
    - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Date"
      - columnheader "Employee Name"
      - columnheader "Leave Type"
      - columnheader "Leave Balance (Days)"
      - columnheader "Number of Days"
      - columnheader "Status"
      - columnheader "Comments"
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  342 | 
  343 |     // Generate dynamic dates from JSON offsets.
  344 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  345 | 
  346 |     const toDate = dateFromOffset(data.toDaysOffset);
  347 | 
  348 |     await leavepage.fromDateInput.fill(fromDate);
  349 | 
  350 |     await leavepage.toDateInput.fill(toDate);
  351 |     // Select the configured Leave Status.
  352 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  353 |     // Select the first available Leave Type dynamically.
  354 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  355 | 
  356 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  357 | 
  358 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  359 | 
  360 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  361 | 
  362 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  363 |     // Click Search.
  364 |     await leavepage.searchButton.click();
  365 | 
  366 |     // Wait for the loading spinner to disappear.
  367 |     await expect(leavepage.loadingSpinner).toBeHidden();
  368 | 
  369 |     // Verify all entered filters remain selected.
  370 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  371 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  372 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  373 | 
  374 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  375 |     await expect(
  376 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  377 |     ).toBeVisible({
  378 |       timeout: 15_000,
  379 |     });
  380 | 
  381 |     // Reset filters.
  382 |     await leavepage.resetButton.click();
  383 | 
  384 |     await expect(leavepage.loadingSpinner).toBeHidden();
  385 | 
  386 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
  387 | 
  388 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  389 | 
  390 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  391 |   });
  392 | 
  393 |   test("TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression", async ({
  394 |     navigationPage,
  395 |     leavepage,
  396 |   }) => {
  397 |     // Navigate to Leave → Leave List.
  398 |     await navigationPage.gotoLeave();
  399 |     // Current OrangeHRM versions no longer expose this obsolete filter.
  400 |     await expect(leavepage.includePastEmployeesCheckbox).toHaveCount(0);
  401 |     return;
  402 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  403 | 
  404 |     // Verify Include Past Employees is unchecked initially.
  405 |     await leavepage.setIncludePastEmployees(true);
  406 |     // Enable Include Past Employees.
  407 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  408 | 
  409 |     // Verify the checkbox becomes checked.
  410 | 
  411 |     // Click Search.
  412 |     await leavepage.searchButton.click();
  413 | 
  414 |     // Wait for the loading spinner to disappear.
  415 |     await expect(leavepage.loadingSpinner).toBeHidden();
  416 |     // Verify the checkbox remains checked after searching.
  417 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  418 |     // Verify either leave rows or “No Records Found” appears.
  419 |     await expect(
  420 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  421 |     ).toBeVisible({
  422 |       timeout: 15_000,
  423 |     });
  424 |     // Click Reset.
  425 | 
  426 |     await leavepage.resetButton.click();
  427 |     // Verify Include Past Employees returns to unchecked.
  428 |     await expect(leavepage.loadingSpinner).toBeHidden();
  429 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  430 |   });
  431 | 
  432 |   test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
  433 |     navigationPage,
  434 |     leavepage,
  435 |   }) => {
  436 |     const data = leaveData.TC_LEAVE_119;
  437 | 
  438 |     await navigationPage.gotoLeave();
  439 | 
  440 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  441 | 
> 442 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
  443 | 
  444 |     await leavepage.searchButton.click();
  445 | 
  446 |     await expect(leavepage.loadingSpinner).toBeHidden();
  447 | 
  448 |     await expect(
  449 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  450 |     ).toBeVisible({
  451 |       timeout: 15_000,
  452 |     });
  453 | 
  454 |     const rowCount = await leavepage.leaveRows.count();
  455 | 
  456 |     if (rowCount > 0) {
  457 |       for (let index = 0; index < rowCount; index++) {
  458 |         const statusCell = leavepage.leaveRows
  459 |           .nth(index)
  460 |           .locator(".oxd-table-cell")
  461 |           .nth(6);
  462 | 
  463 |         await expect(statusCell).toContainText(data.leaveStatus);
  464 |       }
  465 |     }
  466 | 
  467 |     await leavepage.resetButton.click();
  468 |   });
  469 | 
  470 |   test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
  471 |     page,
  472 |     navigationPage,
  473 |     leavepage,
  474 |   }) => {
  475 |     const data = leaveData.TC_LEAVE_120;
  476 | 
  477 |     await navigationPage.gotoLeave();
  478 | 
  479 |     await leavepage.fromDateInput.fill(data.invalidFromDate);
  480 | 
  481 |     await leavepage.fromDateInput.blur();
  482 | 
  483 |     await leavepage.searchButton.click();
  484 | 
  485 |     await expect(leavepage.fromDateValidation).toBeVisible();
  486 | 
  487 |     await expect(leavepage.fromDateValidation).toContainText(
  488 |       data.expectedValidation,
  489 |     );
  490 | 
  491 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  492 | 
  493 |     await expect(leavepage.fromDateInput).toHaveValue(data.invalidFromDate);
  494 | 
  495 |     await leavepage.resetButton.click();
  496 | 
  497 |     await expect(leavepage.fromDateValidation).toBeHidden();
  498 |   });
  499 | 
  500 |   test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
  501 |     navigationPage,
  502 |     leavepage,
  503 |   }) => {
  504 |     const data = leaveData.TC_LEAVE_121;
  505 | 
  506 |     await navigationPage.gotoLeave();
  507 | 
  508 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  509 |       data.partialEmployeeName,
  510 |     );
  511 | 
  512 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  513 | 
  514 |     await leavepage.searchButton.click();
  515 | 
  516 |     await expect(leavepage.loadingSpinner).toBeHidden();
  517 | 
  518 |     await expect(leavepage.employeeNameInput).toHaveValue(employeeName);
  519 | 
  520 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  521 | 
  522 |     await expect(
  523 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  524 |     ).toBeVisible({
  525 |       timeout: 15_000,
  526 |     });
  527 | 
  528 |     const rowCount = await leavepage.leaveRows.count();
  529 | 
  530 |     if (rowCount > 0) {
  531 |       for (let index = 0; index < rowCount; index++) {
  532 |         const cells = leavepage.leaveRows.nth(index).locator(".oxd-table-cell");
  533 | 
  534 |         await expect(cells.nth(1)).toContainText(employeeName);
  535 | 
  536 |         await expect(cells.nth(6)).toContainText(data.leaveStatus);
  537 |       }
  538 |     }
  539 | 
  540 |     await leavepage.resetButton.click();
  541 | 
  542 |     await expect(leavepage.employeeNameInput).toHaveValue("");
```