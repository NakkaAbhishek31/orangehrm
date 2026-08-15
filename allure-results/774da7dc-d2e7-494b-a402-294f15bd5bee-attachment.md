# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:331:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
Expected: ""
Received: "2026-17-05"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/>
       - unexpected value "2026-17-05"

```

```yaml
- textbox "yyyy-dd-mm": 2026-17-05
```

# Test source

```ts
  285 |   test("TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  286 |     page,
  287 |     navigationPage,
  288 |     leavepage,
  289 |   }) => {
  290 |     const testData = leaveData.TC_LEAVE_116;
  291 | 
  292 |     await navigationPage.gotoLeave();
  293 | 
  294 |     await leavepage.employeeNameInput.fill(testData.employeeName);
  295 | 
  296 |     // Verify autocomplete has no matching employee.
  297 |     const noAutocompleteRecords = leavepage.autocompleteOptions.filter({
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
> 385 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
      |                                           ^ Error: expect(locator).toHaveValue(expected) failed
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
  398 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
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
```