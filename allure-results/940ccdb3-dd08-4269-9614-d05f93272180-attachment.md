# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression
- Location: tests\Leave\leave.spec.ts:499:7

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
                  - textbox "yyyy-dd-mm" [ref=f2e175]: 2026-01-01
                  - generic [ref=f2e176] [cursor=pointer]: 
              - generic [ref=f2e178]:
                - generic [ref=f2e179]: To Date
                - generic [ref=f2e183]:
                  - textbox "yyyy-dd-mm" [ref=f2e184]: 2026-31-12
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
                  - generic [ref=f2e206]: "-- Select --"
                  - generic [ref=f2e207]: 
            - generic [ref=f2e210]:
              - generic [ref=f2e212]:
                - generic [ref=f2e213]: Employee Name
                - textbox "Type for hints..." [ref=f2e218]: Ranga Akunuri
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
  478 |     await leavepage.fromDateInput.fill(data.invalidFromDate);
  479 | 
  480 |     await leavepage.fromDateInput.blur();
  481 | 
  482 |     await leavepage.searchButton.click();
  483 | 
  484 |     await expect(leavepage.fromDateValidation).toBeVisible();
  485 | 
  486 |     await expect(leavepage.fromDateValidation).toContainText(
  487 |       data.expectedValidation,
  488 |     );
  489 | 
  490 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  491 | 
  492 |     await expect(leavepage.fromDateInput).toHaveValue(data.invalidFromDate);
  493 | 
  494 |     await leavepage.resetButton.click();
  495 | 
  496 |     await expect(leavepage.fromDateValidation).toBeHidden();
  497 |   });
  498 | 
  499 |   test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
  500 |     navigationPage,
  501 |     leavepage,
  502 |   }) => {
  503 |     const data = leaveData.TC_LEAVE_121;
  504 | 
  505 |     await navigationPage.gotoLeave();
  506 | 
  507 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  508 |       data.partialEmployeeName,
  509 |     );
  510 | 
  511 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  512 | 
  513 |     await leavepage.searchLeaveList();
  514 | 
  515 |     await expect(leavepage.loadingSpinner).toBeHidden();
  516 | 
  517 |     await expect(leavepage.employeeNameInput).toHaveValue(
  518 |       new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
  519 |     );
  520 | 
  521 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  522 | 
  523 |     await expect(
  524 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
> 525 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  526 |       timeout: 15_000,
  527 |     });
  528 | 
  529 |     const rowCount = await leavepage.leaveRows.count();
  530 | 
  531 |     if (rowCount > 0) {
  532 |       for (let index = 0; index < rowCount; index++) {
  533 |         const cells = leavepage.leaveRows.nth(index).locator(".oxd-table-cell");
  534 | 
  535 |         await expect(cells.nth(1)).toContainText(employeeName);
  536 | 
  537 |         await expect(cells.nth(6)).toContainText(data.leaveStatus);
  538 |       }
  539 |     }
  540 | 
  541 |     await leavepage.resetButton.click();
  542 | 
  543 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  544 |   });
  545 | 
  546 |   test("TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression", async ({
  547 |     navigationPage,
  548 |     leavepage,
  549 |   }) => {
  550 |     const data = leaveData.TC_LEAVE_122;
  551 | 
  552 |     await navigationPage.gotoLeave();
  553 | 
  554 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  555 | 
  556 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  557 | 
  558 |     await leavepage.removeSelectedLeaveStatus(data.leaveStatus);
  559 | 
  560 |     await expect(leavepage.selectedLeaveStatuses).not.toContainText(
  561 |       data.leaveStatus,
  562 |     );
  563 |   });
  564 | 
  565 |   test("TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression", async ({
  566 |     navigationPage,
  567 |     leavepage,
  568 |   }) => {
  569 |     const data = leaveData.TC_LEAVE_123;
  570 | 
  571 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  572 | 
  573 |     const toDate = dateFromOffset(data.toDaysOffset);
  574 | 
  575 |     await navigationPage.gotoLeave();
  576 | 
  577 |     await leavepage.fromDateInput.fill(fromDate);
  578 | 
  579 |     await leavepage.toDateInput.fill(toDate);
  580 | 
  581 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  582 | 
  583 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  584 | 
  585 |     await leavepage.searchLeaveList();
  586 | 
  587 |     await expect(leavepage.loadingSpinner).toBeHidden();
  588 | 
  589 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  590 | 
  591 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  592 | 
  593 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  594 | 
  595 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  596 | 
  597 |     await expect(
  598 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  599 |     ).toBeVisible({
  600 |       timeout: 15_000,
  601 |     });
  602 | 
  603 |     await leavepage.resetButton.click();
  604 |   });
  605 | 
  606 |   test("TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression", async ({
  607 |     navigationPage,
  608 |     leavepage,
  609 |   }) => {
  610 |     const data = leaveData.TC_LEAVE_124;
  611 | 
  612 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  613 | 
  614 |     const toDate = dateFromOffset(data.toDaysOffset);
  615 | 
  616 |     await navigationPage.gotoLeave();
  617 | 
  618 |     await leavepage.fromDateInput.fill(fromDate);
  619 | 
  620 |     await leavepage.toDateInput.fill(toDate);
  621 | 
  622 |     await leavepage.searchLeaveList();
  623 | 
  624 |     await expect(leavepage.loadingSpinner).toBeHidden();
  625 | 
```