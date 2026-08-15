# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:392:7

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator: locator('.oxd-switch-wrapper').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')
Expected: not checked
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "not toBeChecked" with timeout 20000ms
  - waiting for locator('.oxd-switch-wrapper').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')

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
  298 |       hasText: "No Records Found",
  299 |     });
  300 | 
  301 |     await expect(noAutocompleteRecords).toBeVisible({
  302 |       timeout: 15_000,
  303 |     });
  304 | 
  305 |     // Close autocomplete without selecting an option.
  306 |     await leavepage.employeeNameInput.press("Escape");
  307 | 
  308 |     // Attempt to search.
  309 |     await leavepage.searchButton.click();
  310 | 
  311 |     // Verify invalid employee validation.
  312 |     await expect(leavepage.employeeNameValidation).toBeVisible();
  313 | 
  314 |     await expect(leavepage.employeeNameValidation).toHaveText("Invalid");
  315 | 
  316 |     await expect(leavepage.employeeNameInput).toHaveValue(
  317 |       testData.employeeName,
  318 |     );
  319 | 
  320 |     // Search should remain blocked.
  321 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  322 | 
  323 |     // Reset filters.
  324 |     await leavepage.resetButton.click();
  325 | 
  326 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  327 | 
  328 |     await expect(leavepage.employeeNameValidation).toBeHidden();
  329 |   });
  330 | 
  331 |   test("TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression", async ({
  332 |     navigationPage,
  333 |     leavepage,
  334 |   }) => {
  335 |     const data = leaveData.TC_LEAVE_117;
  336 |     // Read the date offsets and status from JSON.
  337 |     await navigationPage.gotoLeave();
  338 |     const defaultFromDate = await leavepage.fromDateInput.inputValue();
  339 | 
  340 |     const defaultToDate = await leavepage.toDateInput.inputValue();
  341 | 
  342 |     // Generate dynamic dates from JSON offsets.
  343 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  344 | 
  345 |     const toDate = dateFromOffset(data.toDaysOffset);
  346 | 
  347 |     await leavepage.fromDateInput.fill(fromDate);
  348 | 
  349 |     await leavepage.toDateInput.fill(toDate);
  350 |     // Select the configured Leave Status.
  351 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  352 |     // Select the first available Leave Type dynamically.
  353 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  354 | 
  355 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  356 | 
  357 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  358 | 
  359 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  360 | 
  361 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  362 |     // Click Search.
  363 |     await leavepage.searchButton.click();
  364 | 
  365 |     // Wait for the loading spinner to disappear.
  366 |     await expect(leavepage.loadingSpinner).toBeHidden();
  367 | 
  368 |     // Verify all entered filters remain selected.
  369 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  370 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  371 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  372 | 
  373 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  374 |     await expect(
  375 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  376 |     ).toBeVisible({
  377 |       timeout: 15_000,
  378 |     });
  379 | 
  380 |     // Reset filters.
  381 |     await leavepage.resetButton.click();
  382 | 
  383 |     await expect(leavepage.loadingSpinner).toBeHidden();
  384 | 
  385 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
  386 | 
  387 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  388 | 
  389 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  390 |   });
  391 | 
  392 |   test("TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression", async ({
  393 |     navigationPage,
  394 |     leavepage,
  395 |   }) => {
  396 |     // Navigate to Leave → Leave List.
  397 |     await navigationPage.gotoLeave();
> 398 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
      |                                                              ^ Error: expect(locator).not.toBeChecked() failed
  399 | 
  400 |     // Verify Include Past Employees is unchecked initially.
  401 |     await leavepage.setIncludePastEmployees(true);
  402 |     // Enable Include Past Employees.
  403 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  404 | 
  405 |     // Verify the checkbox becomes checked.
  406 | 
  407 |     // Click Search.
  408 |     await leavepage.searchButton.click();
  409 | 
  410 |     // Wait for the loading spinner to disappear.
  411 |     await expect(leavepage.loadingSpinner).toBeHidden();
  412 |     // Verify the checkbox remains checked after searching.
  413 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  414 |     // Verify either leave rows or “No Records Found” appears.
  415 |     await expect(
  416 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  417 |     ).toBeVisible({
  418 |       timeout: 15_000,
  419 |     });
  420 |     // Click Reset.
  421 | 
  422 |     await leavepage.resetButton.click();
  423 |     // Verify Include Past Employees returns to unchecked.
  424 |     await expect(leavepage.loadingSpinner).toBeHidden();
  425 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  426 |   });
  427 | 
  428 |   test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
  429 |     navigationPage,
  430 |     leavepage,
  431 |   }) => {
  432 |     const data = leaveData.TC_LEAVE_119;
  433 | 
  434 |     await navigationPage.gotoLeave();
  435 | 
  436 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  437 | 
  438 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  439 | 
  440 |     await leavepage.searchButton.click();
  441 | 
  442 |     await expect(leavepage.loadingSpinner).toBeHidden();
  443 | 
  444 |     await expect(
  445 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  446 |     ).toBeVisible({
  447 |       timeout: 15_000,
  448 |     });
  449 | 
  450 |     const rowCount = await leavepage.leaveRows.count();
  451 | 
  452 |     if (rowCount > 0) {
  453 |       for (let index = 0; index < rowCount; index++) {
  454 |         const statusCell = leavepage.leaveRows
  455 |           .nth(index)
  456 |           .locator(".oxd-table-cell")
  457 |           .nth(6);
  458 | 
  459 |         await expect(statusCell).toContainText(data.leaveStatus);
  460 |       }
  461 |     }
  462 | 
  463 |     await leavepage.resetButton.click();
  464 |   });
  465 | 
  466 |   test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
  467 |     page,
  468 |     navigationPage,
  469 |     leavepage,
  470 |   }) => {
  471 |     const data = leaveData.TC_LEAVE_120;
  472 | 
  473 |     await navigationPage.gotoLeave();
  474 | 
  475 |     await leavepage.fromDateInput.fill(data.invalidFromDate);
  476 | 
  477 |     await leavepage.fromDateInput.blur();
  478 | 
  479 |     await leavepage.searchButton.click();
  480 | 
  481 |     await expect(leavepage.fromDateValidation).toBeVisible();
  482 | 
  483 |     await expect(leavepage.fromDateValidation).toContainText(
  484 |       data.expectedValidation,
  485 |     );
  486 | 
  487 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  488 | 
  489 |     await expect(leavepage.fromDateInput).toHaveValue(data.invalidFromDate);
  490 | 
  491 |     await leavepage.resetButton.click();
  492 | 
  493 |     await expect(leavepage.fromDateValidation).toBeHidden();
  494 |   });
  495 | 
  496 |   test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
  497 |     navigationPage,
  498 |     leavepage,
```