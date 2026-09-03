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

Locator: locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container span.oxd-text--span').filter({ hasText: /^No Records Found$/ }).filter({ visible: true }).first())
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container span.oxd-text--span').filter({ hasText: /^No Records Found$/ }).filter({ visible: true }).first())

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
- text:  Show Leave with Status* -- Select --  Rejected  Leave Type -- Select --  Employee Name
- textbox "Type for hints...": A8DCo 4Ys 010Z
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