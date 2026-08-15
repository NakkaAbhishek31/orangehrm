# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression
- Location: tests\Leave\leave.spec.ts:564:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text-selected')
Expected substring: "Rejected"
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
- textbox "yyyy-dd-mm": 2026-17-05
- text:  To Date
- textbox "yyyy-dd-mm": 2026-15-08
- text:  Show Leave with Status* -- Select --  Pending Approval  Rejected  Leave Type CAN - Bereavement  Employee Name
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
  543 |   });
  544 | 
  545 |   test("TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression", async ({
  546 |     navigationPage,
  547 |     leavepage,
  548 |   }) => {
  549 |     const data = leaveData.TC_LEAVE_122;
  550 | 
  551 |     await navigationPage.gotoLeave();
  552 | 
  553 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  554 | 
  555 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  556 | 
  557 |     await leavepage.removeSelectedLeaveStatus(data.leaveStatus);
  558 | 
  559 |     await expect(leavepage.selectedLeaveStatuses).not.toContainText(
  560 |       data.leaveStatus,
  561 |     );
  562 |   });
  563 | 
  564 |   test("TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression", async ({
  565 |     navigationPage,
  566 |     leavepage,
  567 |   }) => {
  568 |     const data = leaveData.TC_LEAVE_123;
  569 | 
  570 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  571 | 
  572 |     const toDate = dateFromOffset(data.toDaysOffset);
  573 | 
  574 |     await navigationPage.gotoLeave();
  575 | 
  576 |     await leavepage.fromDateInput.fill(fromDate);
  577 | 
  578 |     await leavepage.toDateInput.fill(toDate);
  579 | 
  580 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  581 | 
  582 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  583 | 
  584 |     await leavepage.searchButton.click();
  585 | 
  586 |     await expect(leavepage.loadingSpinner).toBeHidden();
  587 | 
  588 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  589 | 
  590 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  591 | 
> 592 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
  593 | 
  594 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  595 | 
  596 |     await expect(
  597 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  598 |     ).toBeVisible({
  599 |       timeout: 15_000,
  600 |     });
  601 | 
  602 |     await leavepage.resetButton.click();
  603 |   });
  604 | 
  605 |   test("TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression", async ({
  606 |     navigationPage,
  607 |     leavepage,
  608 |   }) => {
  609 |     const data = leaveData.TC_LEAVE_124;
  610 | 
  611 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  612 | 
  613 |     const toDate = dateFromOffset(data.toDaysOffset);
  614 | 
  615 |     await navigationPage.gotoLeave();
  616 | 
  617 |     await leavepage.fromDateInput.fill(fromDate);
  618 | 
  619 |     await leavepage.toDateInput.fill(toDate);
  620 | 
  621 |     await leavepage.searchButton.click();
  622 | 
  623 |     await expect(leavepage.loadingSpinner).toBeHidden();
  624 | 
  625 |     const pageOneRecords = await leavepage.getVisibleLeaveRecords();
  626 | 
  627 |     test.skip(
  628 |       pageOneRecords.length === 0,
  629 |       "No leave records are currently available",
  630 |     );
  631 | 
  632 |     const nextButtonCount = await leavepage.nextPageButton.count();
  633 | 
  634 |     test.skip(
  635 |       nextButtonCount === 0,
  636 |       "Leave List currently contains only one page",
  637 |     );
  638 | 
  639 |     await leavepage.nextPageButton.click();
  640 | 
  641 |     await expect
  642 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  643 |         timeout: 15_000,
  644 |       })
  645 |       .not.toEqual(pageOneRecords);
  646 | 
  647 |     const pageTwoRecords = await leavepage.getVisibleLeaveRecords();
  648 | 
  649 |     expect(pageTwoRecords.length).toBeGreaterThan(0);
  650 | 
  651 |     await leavepage.previousPageButton.click();
  652 | 
  653 |     await expect
  654 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  655 |         timeout: 15_000,
  656 |       })
  657 |       .toEqual(pageOneRecords);
  658 |   });
  659 | 
  660 |   test("TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression", async ({
  661 |     navigationPage,
  662 |     leavepage,
  663 |   }) => {
  664 |     const data = leaveData.TC_LEAVE_125;
  665 | 
  666 |     await navigationPage.gotoLeave();
  667 | 
  668 |     // Store the complete default status state.
  669 |     const defaultStatusText = (
  670 |       await leavepage.leaveStatusField.innerText()
  671 |     ).trim();
  672 | 
  673 |     const scheduledStatus = leavepage.leaveStatusField.getByText(
  674 |       data.leaveStatus,
  675 |       { exact: true },
  676 |     );
  677 | 
  678 |     const alreadySelected = (await scheduledStatus.count()) > 0;
  679 | 
  680 |     // Select Scheduled only when it is not
  681 |     // already selected by default.
  682 |     if (!alreadySelected) {
  683 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  684 |     }
  685 | 
  686 |     await expect(scheduledStatus).toBeVisible();
  687 | 
  688 |     // Search using Scheduled status.
  689 |     await leavepage.searchButton.click();
  690 | 
  691 |     await expect(leavepage.loadingSpinner).toBeHidden();
  692 | 
```