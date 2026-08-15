# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:443:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text')
Expected substring: "Pending Approval"
Received string:    "-- Select --"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text')
    43 × locator resolved to <div data-v-67d2aedf="" data-v-53b4a482="" class="oxd-select-text oxd-select-text--active">…</div>
       - unexpected value "-- Select --"

```

```yaml
- text: "-- Select -- "
```

# Test source

```ts
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
  413 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
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
> 453 |     await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
      |                                                 ^ Error: expect(locator).toContainText(expected) failed
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
  514 |   }) => {
  515 |     const data = leaveData.TC_LEAVE_121;
  516 | 
  517 |     await navigationPage.gotoLeave();
  518 | 
  519 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  520 |       data.partialEmployeeName,
  521 |     );
  522 | 
  523 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  524 | 
  525 |     await leavepage.searchButton.click();
  526 | 
  527 |     await expect(leavepage.loadingSpinner).toBeHidden();
  528 | 
  529 |     await expect(leavepage.employeeNameInput).toHaveValue(employeeName);
  530 | 
  531 |     await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
  532 | 
  533 |     await expect(
  534 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  535 |     ).toBeVisible({
  536 |       timeout: 15_000,
  537 |     });
  538 | 
  539 |     const rowCount = await leavepage.leaveRows.count();
  540 | 
  541 |     if (rowCount > 0) {
  542 |       for (let index = 0; index < rowCount; index++) {
  543 |         const cells = leavepage.leaveRows.nth(index).locator(".oxd-table-cell");
  544 | 
  545 |         await expect(cells.nth(1)).toContainText(employeeName);
  546 | 
  547 |         await expect(cells.nth(5)).toContainText(data.leaveStatus);
  548 |       }
  549 |     }
  550 | 
  551 |     await leavepage.resetButton.click();
  552 | 
  553 |     await expect(leavepage.employeeNameInput).toHaveValue("");
```