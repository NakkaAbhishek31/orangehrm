# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:407:7

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator: locator('.oxd-input-group').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')
Expected: not checked
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "not toBeChecked" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')

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
      - paragraph: Johrj user
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
- text: (1) Record Found
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
  - rowgroup:
    - row " 2026-20-08 to 2026-21-08 Johrj akhilhjkl user CAN - Personal 3.00 2.00 Pending Approval (2.00) QA testing - leave application ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-20-08 to 2026-21-08"
      - cell "Johrj akhilhjkl user"
      - cell "CAN - Personal"
      - cell "3.00"
      - cell "2.00"
      - cell "Pending Approval (2.00)"
      - cell "QA testing - leave application"
      - cell "":
        - listitem:
          - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  313 |       hasText: "No Records Found",
  314 |     });
  315 | 
  316 |     await expect(noAutocompleteRecords).toBeVisible({
  317 |       timeout: 15_000,
  318 |     });
  319 | 
  320 |     // Close autocomplete without selecting an option.
  321 |     await leavepage.employeeNameInput.press("Escape");
  322 | 
  323 |     // Attempt to search.
  324 |     await leavepage.searchButton.click();
  325 | 
  326 |     // Verify invalid employee validation.
  327 |     await expect(leavepage.employeeNameValidation).toBeVisible();
  328 | 
  329 |     await expect(leavepage.employeeNameValidation).toHaveText("Invalid");
  330 | 
  331 |     await expect(leavepage.employeeNameInput).toHaveValue(
  332 |       testData.employeeName,
  333 |     );
  334 | 
  335 |     // Search should remain blocked.
  336 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  337 | 
  338 |     // Reset filters.
  339 |     await leavepage.resetButton.click();
  340 | 
  341 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  342 | 
  343 |     await expect(leavepage.employeeNameValidation).toBeHidden();
  344 |   });
  345 | 
  346 |   test("TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression", async ({
  347 |     navigationPage,
  348 |     leavepage,
  349 |   }) => {
  350 |     const data = leaveData.TC_LEAVE_117;
  351 |     // Read the date offsets and status from JSON.
  352 |     await navigationPage.gotoLeave();
  353 |     const defaultFromDate = await leavepage.fromDateInput.inputValue();
  354 | 
  355 |     const defaultToDate = await leavepage.toDateInput.inputValue();
  356 | 
  357 |     // Generate dynamic dates from JSON offsets.
  358 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  359 | 
  360 |     const toDate = dateFromOffset(data.toDaysOffset);
  361 | 
  362 |     await leavepage.fromDateInput.fill(fromDate);
  363 | 
  364 |     await leavepage.toDateInput.fill(toDate);
  365 |     // Select the configured Leave Status.
  366 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  367 |     // Select the first available Leave Type dynamically.
  368 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  369 | 
  370 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  371 | 
  372 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  373 | 
  374 |     await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
  375 | 
  376 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  377 |     // Click Search.
  378 |     await leavepage.searchButton.click();
  379 | 
  380 |     // Wait for the loading spinner to disappear.
  381 |     await expect(leavepage.loadingSpinner).toBeHidden();
  382 | 
  383 |     // Verify all entered filters remain selected.
  384 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  385 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  386 |     await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
  387 | 
  388 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  389 |     await expect(
  390 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  391 |     ).toBeVisible({
  392 |       timeout: 15_000,
  393 |     });
  394 | 
  395 |     // Reset filters.
  396 |     await leavepage.resetButton.click();
  397 | 
  398 |     await expect(leavepage.loadingSpinner).toBeHidden();
  399 | 
  400 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
  401 | 
  402 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  403 | 
  404 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  405 |   });
  406 | 
  407 |   test("TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression", async ({
  408 |     navigationPage,
  409 |     leavepage,
  410 |   }) => {
  411 |     // Navigate to Leave → Leave List.
  412 |     await navigationPage.gotoLeave();
> 413 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
      |                                                              ^ Error: expect(locator).not.toBeChecked() failed
  414 | 
  415 |     // Verify Include Past Employees is unchecked initially.
  416 |     await leavepage.setIncludePastEmployees(true);
  417 |     // Enable Include Past Employees.
  418 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  419 | 
  420 |     // Verify the checkbox becomes checked.
  421 | 
  422 |     // Click Search.
  423 |     await leavepage.searchButton.click();
  424 | 
  425 |     // Wait for the loading spinner to disappear.
  426 |     await expect(leavepage.loadingSpinner).toBeHidden();
  427 |     // Verify the checkbox remains checked after searching.
  428 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  429 |     // Verify either leave rows or “No Records Found” appears.
  430 |     await expect(
  431 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  432 |     ).toBeVisible({
  433 |       timeout: 15_000,
  434 |     });
  435 |     // Click Reset.
  436 | 
  437 |     await leavepage.resetButton.click();
  438 |     // Verify Include Past Employees returns to unchecked.
  439 |     await expect(leavepage.loadingSpinner).toBeHidden();
  440 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  441 |   });
  442 | 
  443 |   test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
  444 |     navigationPage,
  445 |     leavepage,
  446 |   }) => {
  447 |     const data = leaveData.TC_LEAVE_119;
  448 | 
  449 |     await navigationPage.gotoLeave();
  450 | 
  451 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  452 | 
  453 |     await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
  454 | 
  455 |     await leavepage.searchButton.click();
  456 | 
  457 |     await expect(leavepage.loadingSpinner).toBeHidden();
  458 | 
  459 |     await expect(
  460 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  461 |     ).toBeVisible({
  462 |       timeout: 15_000,
  463 |     });
  464 | 
  465 |     const rowCount = await leavepage.leaveRows.count();
  466 | 
  467 |     if (rowCount > 0) {
  468 |       for (let index = 0; index < rowCount; index++) {
  469 |         const statusCell = leavepage.leaveRows
  470 |           .nth(index)
  471 |           .locator(".oxd-table-cell")
  472 |           .nth(5);
  473 | 
  474 |         await expect(statusCell).toContainText(data.leaveStatus);
  475 |       }
  476 |     }
  477 | 
  478 |     await leavepage.resetButton.click();
  479 |   });
  480 | 
  481 |   test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
  482 |     page,
  483 |     navigationPage,
  484 |     leavepage,
  485 |   }) => {
  486 |     const data = leaveData.TC_LEAVE_120;
  487 | 
  488 |     await navigationPage.gotoLeave();
  489 | 
  490 |     await leavepage.fromDateInput.fill(data.invalidFromDate);
  491 | 
  492 |     await leavepage.fromDateInput.blur();
  493 | 
  494 |     await leavepage.searchButton.click();
  495 | 
  496 |     await expect(leavepage.fromDateValidation).toBeVisible();
  497 | 
  498 |     await expect(leavepage.fromDateValidation).toContainText(
  499 |       data.expectedValidation,
  500 |     );
  501 | 
  502 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  503 | 
  504 |     await expect(leavepage.fromDateInput).toHaveValue(data.invalidFromDate);
  505 | 
  506 |     await leavepage.resetButton.click();
  507 | 
  508 |     await expect(leavepage.fromDateValidation).toBeHidden();
  509 |   });
  510 | 
  511 |   test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
  512 |     navigationPage,
  513 |     leavepage,
```