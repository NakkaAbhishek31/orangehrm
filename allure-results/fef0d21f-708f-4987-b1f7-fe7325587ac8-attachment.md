# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:333:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true }))
Expected: visible
Error: strict mode violation: locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true })) resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-02dea898="" class="oxd-text oxd-text--span">No Records Found</span> aka locator('span').filter({ hasText: 'No Records Found' })
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka locator('#oxd-toaster_1').getByText('No Records Found')

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true }))

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic:
      - complementary [ref=f2e4]:
        - navigation "Sidepanel" [ref=f2e5]:
          - generic [ref=f2e6]:
            - link [ref=f2e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f2e9]
            - text: 
          - generic [ref=f2e10]:
            - generic [ref=f2e11]:
              - generic [ref=f2e12]:
                - textbox "Search" [ref=f2e15]
                - button "" [ref=f2e16] [cursor=pointer]
              - separator [ref=f2e18]
            - list [ref=f2e19]:
              - listitem [ref=f2e20]:
                - link "Admin" [ref=f2e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f2e25]:
                - link "PIM" [ref=f2e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f2e41]:
                - link "Leave" [ref=f2e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f2e46]:
                - link "Time" [ref=f2e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f2e54]:
                - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f2e62]:
                - link "My Info" [ref=f2e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f2e70]:
                - link "Performance" [ref=f2e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f2e80]:
                - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f2e85]:
                - link "Directory" [ref=f2e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f2e90]:
                - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f2e96]:
                - link "Claim" [ref=f2e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f2e105]:
                - link "Buzz" [ref=f2e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f2e110]:
        - generic [ref=f2e111]:
          - generic [ref=f2e112]:
            - text: 
            - heading "Leave" [level=6] [ref=f2e114]
          - link [ref=f2e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f2e117] [cursor=pointer]
          - list [ref=f2e123]:
            - listitem [ref=f2e124]:
              - generic [ref=f2e125] [cursor=pointer]:
                - img "profile picture" [ref=f2e126]
                - paragraph [ref=f2e127]: manda user
                - generic [ref=f2e128]: 
        - navigation "Topbar Menu" [ref=f2e130]:
          - list [ref=f2e131]:
            - listitem [ref=f2e132] [cursor=pointer]:
              - link "Apply" [ref=f2e133]:
                - /url: "#"
            - listitem [ref=f2e134] [cursor=pointer]:
              - link "My Leave" [ref=f2e135]:
                - /url: "#"
            - listitem [ref=f2e136] [cursor=pointer]:
              - generic [ref=f2e137]:
                - text: Entitlements
                - generic [ref=f2e138]: 
            - listitem [ref=f2e139] [cursor=pointer]:
              - generic [ref=f2e140]:
                - text: Reports
                - generic [ref=f2e141]: 
            - listitem [ref=f2e142] [cursor=pointer]:
              - generic [ref=f2e143]:
                - text: Configure
                - generic [ref=f2e144]: 
            - listitem [ref=f2e145] [cursor=pointer]:
              - link "Leave List" [ref=f2e146]:
                - /url: "#"
            - listitem [ref=f2e147] [cursor=pointer]:
              - link "Assign Leave" [ref=f2e148]:
                - /url: "#"
            - button "" [ref=f2e150] [cursor=pointer]
    - generic [ref=f2e152]:
      - generic [ref=f2e154]:
        - generic [ref=f2e155]:
          - generic [ref=f2e156]:
            - heading "Leave List" [level=5] [ref=f2e158]
            - button "" [ref=f2e161] [cursor=pointer]
          - separator [ref=f2e163]
          - generic [ref=f2e165]:
            - generic [ref=f2e167]:
              - generic [ref=f2e169]:
                - generic [ref=f2e170]: From Date
                - generic [ref=f2e174]:
                  - textbox "yyyy-dd-mm" [ref=f2e175]: 2026-17-05
                  - generic [ref=f2e176] [cursor=pointer]: 
              - generic [ref=f2e178]:
                - generic [ref=f2e179]: To Date
                - generic [ref=f2e183]:
                  - textbox "yyyy-dd-mm" [ref=f2e184]: 2026-15-08
                  - generic [ref=f2e185] [cursor=pointer]: 
              - generic [ref=f2e187]:
                - generic [ref=f2e188]: Show Leave with Status*
                - generic [ref=f2e191]:
                  - generic [ref=f2e192] [cursor=pointer]:
                    - generic [ref=f2e193]: "-- Select --"
                    - generic [ref=f2e194]: 
                  - generic [ref=f2e197]:
                    - text: Rejected
                    - generic [ref=f2e198] [cursor=pointer]: 
              - generic [ref=f2e200]:
                - generic [ref=f2e201]: Leave Type
                - generic [ref=f2e205] [cursor=pointer]:
                  - generic [ref=f2e206]: CAN - Bereavement
                  - generic [ref=f2e207]: 
            - generic [ref=f2e210]:
              - generic [ref=f2e212]:
                - generic [ref=f2e213]: Employee Name
                - textbox "Type for hints..." [ref=f2e218]
              - generic [ref=f2e220]:
                - generic [ref=f2e221]: Sub Unit
                - generic [ref=f2e225] [cursor=pointer]:
                  - generic [ref=f2e226]: "-- Select --"
                  - generic [ref=f2e227]: 
              - generic [ref=f2e229]:
                - paragraph [ref=f2e230]: Include Past Employees
                - checkbox [ref=f2e233]
            - separator [ref=f2e235]
            - generic [ref=f2e236]:
              - paragraph [ref=f2e237]: "* Required"
              - button "Reset" [ref=f2e238] [cursor=pointer]
              - button "Search" [active] [ref=f2e239] [cursor=pointer]
        - generic [ref=f2e240]:
          - generic [ref=f2e241]: No Records Found
          - table [ref=f2e244]:
            - rowgroup [ref=f2e245]:
              - row [ref=f2e246]:
                - columnheader "" [ref=f2e247]:
                  - generic [ref=f2e249] [cursor=pointer]:
                    - checkbox "" [ref=f2e250]
                    - generic [ref=f2e251]: 
                - columnheader "Date" [ref=f2e253]
                - columnheader "Employee Name" [ref=f2e254]
                - columnheader "Leave Type" [ref=f2e255]
                - columnheader "Leave Balance (Days)" [ref=f2e256]
                - columnheader "Number of Days" [ref=f2e257]
                - columnheader "Status" [ref=f2e258]
                - columnheader "Comments" [ref=f2e259]
                - columnheader "Actions" [ref=f2e260]
            - rowgroup
      - generic [ref=f2e262]:
        - paragraph [ref=f2e263]: OrangeHRM OS 5.9
        - paragraph [ref=f2e264]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f2e265] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f2e267] [cursor=pointer]:
    - generic [ref=f2e268]:
      - generic [ref=f2e269]: 
      - generic [ref=f2e272]:
        - paragraph [ref=f2e273]: Info
        - paragraph [ref=f2e274]: No Records Found
    - button "×" [ref=f2e276]
```

# Test source

```ts
  277 |       }
  278 |     } else {
  279 |       await expect(leavepage.noRecordsFound).toBeVisible();
  280 |     }
  281 | 
  282 |     await leavepage.resetButton.click();
  283 | 
  284 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  285 |   });
  286 | 
  287 |   test("TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  288 |     page,
  289 |     navigationPage,
  290 |     leavepage,
  291 |   }) => {
  292 |     const testData = leaveData.TC_LEAVE_116;
  293 | 
  294 |     await navigationPage.gotoLeave();
  295 | 
  296 |     await leavepage.employeeNameInput.fill(testData.employeeName);
  297 | 
  298 |     // Verify autocomplete has no matching employee.
  299 |     const noAutocompleteRecords = leavepage.autocompleteOptions.filter({
  300 |       hasText: "No Records Found",
  301 |     });
  302 | 
  303 |     await expect(noAutocompleteRecords).toBeVisible({
  304 |       timeout: 15_000,
  305 |     });
  306 | 
  307 |     // Close autocomplete without selecting an option.
  308 |     await leavepage.employeeNameInput.press("Escape");
  309 | 
  310 |     // Attempt to search.
  311 |     await leavepage.searchButton.click();
  312 | 
  313 |     // Verify invalid employee validation.
  314 |     await expect(leavepage.employeeNameValidation).toBeVisible();
  315 | 
  316 |     await expect(leavepage.employeeNameValidation).toHaveText("Invalid");
  317 | 
  318 |     await expect(leavepage.employeeNameInput).toHaveValue(
  319 |       testData.employeeName,
  320 |     );
  321 | 
  322 |     // Search should remain blocked.
  323 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  324 | 
  325 |     // Reset filters.
  326 |     await leavepage.resetButton.click();
  327 | 
  328 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  329 | 
  330 |     await expect(leavepage.employeeNameValidation).toBeHidden();
  331 |   });
  332 | 
  333 |   test("TC_LEAVE_117 - Admin should search using combined date, status, and leave type filters @positive @filter @regression", async ({
  334 |     navigationPage,
  335 |     leavepage,
  336 |   }) => {
  337 |     const data = leaveData.TC_LEAVE_117;
  338 |     // Read the date offsets and status from JSON.
  339 |     await navigationPage.gotoLeave();
  340 |     const { fromDate: defaultFromDate, toDate: defaultToDate } =
  341 |       await leavepage.waitForDefaultDateRange();
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
> 377 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
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
  399 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  400 | 
  401 |     // Verify Include Past Employees is unchecked initially.
  402 |     await leavepage.setIncludePastEmployees(true);
  403 |     // Enable Include Past Employees.
  404 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  405 | 
  406 |     // Verify the checkbox becomes checked.
  407 | 
  408 |     // Click Search.
  409 |     await leavepage.searchLeaveList();
  410 | 
  411 |     // Wait for the loading spinner to disappear.
  412 |     await expect(leavepage.loadingSpinner).toBeHidden();
  413 |     // Verify the checkbox remains checked after searching.
  414 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  415 |     // Verify either leave rows or “No Records Found” appears.
  416 |     await expect(
  417 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  418 |     ).toBeVisible({
  419 |       timeout: 15_000,
  420 |     });
  421 |     // Click Reset.
  422 | 
  423 |     await leavepage.resetButton.click();
  424 |     // Verify Include Past Employees returns to unchecked.
  425 |     await expect(leavepage.loadingSpinner).toBeHidden();
  426 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  427 |     await leavepage.setIncludePastEmployees(false);
  428 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  429 |   });
  430 | 
  431 |   test("TC_LEAVE_119 - Admin should filter Leave List by Pending Approval status @positive @filter @regression", async ({
  432 |     navigationPage,
  433 |     leavepage,
  434 |   }) => {
  435 |     const data = leaveData.TC_LEAVE_119;
  436 | 
  437 |     await navigationPage.gotoLeave();
  438 | 
  439 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  440 | 
  441 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  442 | 
  443 |     await leavepage.searchLeaveList();
  444 | 
  445 |     await expect(leavepage.loadingSpinner).toBeHidden();
  446 | 
  447 |     await expect(
  448 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  449 |     ).toBeVisible({
  450 |       timeout: 15_000,
  451 |     });
  452 | 
  453 |     const rowCount = await leavepage.leaveRows.count();
  454 | 
  455 |     if (rowCount > 0) {
  456 |       for (let index = 0; index < rowCount; index++) {
  457 |         const statusCell = leavepage.leaveRows
  458 |           .nth(index)
  459 |           .locator(".oxd-table-cell")
  460 |           .nth(6);
  461 | 
  462 |         await expect(statusCell).toContainText(data.leaveStatus);
  463 |       }
  464 |     }
  465 | 
  466 |     await leavepage.resetButton.click();
  467 |   });
  468 | 
  469 |   test("TC_LEAVE_120 - Invalid date validation should appear for an incorrect From Date @negative @validation @regression", async ({
  470 |     page,
  471 |     navigationPage,
  472 |     leavepage,
  473 |   }) => {
  474 |     const data = leaveData.TC_LEAVE_120;
  475 | 
  476 |     await navigationPage.gotoLeave();
  477 | 
```