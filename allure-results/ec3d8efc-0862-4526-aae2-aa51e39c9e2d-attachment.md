# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:587:5

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
      - paragraph: "%$ user"
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
  494 |         const defaultFromDate =
  495 |       await leavepage.fromDateInput.inputValue();
  496 | 
  497 |     const defaultToDate =
  498 |       await leavepage.toDateInput.inputValue();
  499 | 
  500 |      // Generate dynamic dates from JSON offsets.
  501 |     const fromDate = dateFromOffset(
  502 |       data.fromDaysOffset
  503 |     );
  504 | 
  505 |     const toDate = dateFromOffset(
  506 |       data.toDaysOffset
  507 |     );
  508 | 
  509 |     await leavepage.fromDateInput.fill(
  510 |       fromDate
  511 |     );
  512 | 
  513 |     await leavepage.toDateInput.fill(
  514 |       toDate
  515 |     );
  516 |     // Select the configured Leave Status.
  517 |      await leavepage.selectLeaveStatus(
  518 |   data.leaveStatus
  519 | );
  520 |     // Select the first available Leave Type dynamically.
  521 | const leaveType =
  522 |   await leavepage
  523 |     .selectFirstAvailableLeaveType();
  524 |   
  525 |      await expect(
  526 |       leavepage.fromDateInput
  527 |     ).toHaveValue(fromDate);
  528 | 
  529 |     await expect(
  530 |       leavepage.toDateInput
  531 |     ).toHaveValue(toDate);
  532 | 
  533 |     await expect(
  534 |       leavepage.leaveStatusDropdown
  535 |     ).toContainText(data.leaveStatus);
  536 | 
  537 |     await expect(
  538 |       leavepage.leaveTypeDropdown
  539 |     ).toContainText(leaveType);
  540 |     // Click Search.
  541 |      await leavepage.searchButton.click();
  542 | 
  543 |     // Wait for the loading spinner to disappear.
  544 |       await  expect(leavepage.loadingSpinner).toBeHidden();
  545 | 
  546 |     // Verify all entered filters remain selected.
  547 |       await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  548 |       await expect(leavepage.toDateInput).toHaveValue(toDate);
  549 |        await expect(
  550 |       leavepage.leaveStatusDropdown
  551 |     ).toContainText(data.leaveStatus);
  552 | 
  553 |     await expect(
  554 |       leavepage.leaveTypeDropdown
  555 |     ).toContainText(leaveType);
  556 |  await expect(
  557 |       leavepage.leaveRows
  558 |         .first()
  559 |         .or(leavepage.noRecordsFound)
  560 |     ).toBeVisible({
  561 |       timeout: 15_000,
  562 |     });
  563 | 
  564 |     // Reset filters.
  565 |     await leavepage.resetButton.click();
  566 | 
  567 |     await expect(
  568 |       leavepage.loadingSpinner
  569 |     ).toBeHidden();
  570 | 
  571 |     await expect(
  572 |       leavepage.fromDateInput
  573 |     ).toHaveValue(defaultFromDate);
  574 | 
  575 |     await expect(
  576 |       leavepage.toDateInput
  577 |     ).toHaveValue(defaultToDate);
  578 | 
  579 |     await expect(
  580 |       leavepage.leaveTypeDropdown
  581 |     ).toContainText('Select');
  582 |   }
  583 | );
  584 | 
  585 | 
  586 | 
  587 | test('TC_LEAVE_118 - Admin should include past employees in Leave List search @positive @filter @regression',
  588 |   async ({ navigationPage, leavepage }) => {
  589 |   
  590 |     // Navigate to Leave → Leave List.
  591 |        await navigationPage.gotoLeave()
  592 |         await expect(
  593 |       leavepage.includePastEmployeesCheckbox
> 594 |     ).not.toBeChecked();  
      |           ^ Error: expect(locator).not.toBeChecked() failed
  595 | 
  596 |     // Verify Include Past Employees is unchecked initially.
  597 |        await leavepage.setIncludePastEmployees(
  598 |   true
  599 | );
  600 |     // Enable Include Past Employees.
  601 |         await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  602 |    
  603 |         // Verify the checkbox becomes checked.
  604 |        
  605 |     // Click Search.
  606 |     await leavepage.searchButton.click();
  607 | 
  608 |     // Wait for the loading spinner to disappear.
  609 |       await expect(
  610 |   leavepage.loadingSpinner
  611 | ).toBeHidden();
  612 |     // Verify the checkbox remains checked after searching.
  613 |            await expect(leavepage.includePastEmployeesCheckbox).toBeCheckedO();
  614 |     // Verify either leave rows or “No Records Found” appears.
  615 |    await expect(
  616 |   leavepage.leaveRows
  617 |     .first()
  618 |     .or(leavepage.noRecordsFound)
  619 | ).toBeVisible({
  620 |   timeout: 15_000,
  621 | });
  622 |     // Click Reset.
  623 | 
  624 |     await leavepage.resetButton.click();
  625 |     // Verify Include Past Employees returns to unchecked.
  626 |       await expect(
  627 |       leavepage.loadingSpinner
  628 |     ).toBeHidden();
  629 |     await expect(
  630 |   leavepage.includePastEmployeesCheckbox
  631 | ).not.toBeChecked();
  632 |   }
  633 | );
  634 | 
  635 | 
  636 | 
  637 | });
```