# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_176 - Admin should change the attendance date while viewing employee records @positive @attendance @date @regression
- Location: tests\Time\time.spec.ts:617:6

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Date', { exact: true }) }).locator('input')
Expected: "2026-08-13"
Received: "2026-13-08"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Date', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/>
       - unexpected value "2026-13-08"

```

```yaml
- textbox "yyyy-dd-mm": 2026-13-08
```

# Test source

```ts
  600 |     await navigationPage.gotoPIM();
  601 | 
  602 |     await pimPage.gotoEmployeeList();
  603 | 
  604 |     await pimPage.filterEmployeeList({
  605 |       employeeId,
  606 |     });
  607 | 
  608 |     await pimPage.clickOnFilterSearch();
  609 | 
  610 |     await pimPage.deleteEmployeeById(
  611 |       employeeId
  612 |     );
  613 |   }
  614 | );
  615 | 
  616 | 
  617 | test.only('TC_TIME_176 - Admin should change the attendance date while viewing employee records @positive @attendance @date @regression',
  618 |   async ({
  619 |     page,
  620 |     navigationPage,
  621 |     pimPage,
  622 |     timePage,
  623 |   }) => {
  624 |     test.setTimeout(120_000);
  625 | 
  626 |     const data =
  627 |       timeData.TC_TIME_176;
  628 | 
  629 |     const firstName =
  630 |       `${data.firstNamePrefix}${Date.now()}`;
  631 | 
  632 |     const employee = {
  633 |       firstName,
  634 |       middleName: data.middleName,
  635 |       lastName: data.lastName,
  636 |     };
  637 | 
  638 |     const attendanceDate =
  639 |       dateFromOffset(
  640 |         data.attendanceDaysOffset
  641 |       );
  642 | 
  643 |     // Create a temporary employee.
  644 |     await navigationPage.gotoPIM();
  645 | 
  646 |     await pimPage.gotoAddEmployee();
  647 | 
  648 |     const employeeId =
  649 |       await pimPage.addEmployee(employee);
  650 | 
  651 |     expect(employeeId).not.toBe('');
  652 | 
  653 |     // Navigate to Employee Attendance Records.
  654 |     await navigationPage.gotoTime();
  655 | 
  656 |     await timePage
  657 |       .gotoEmployeeAttendanceRecords();
  658 | 
  659 |     const selectedEmployee =
  660 |       await timePage
  661 |         .selectAttendanceEmployeeFromAutocomplete(
  662 |           firstName
  663 |         );
  664 | 
  665 |     await expect(
  666 |       timePage.attendanceEmployeeInput
  667 |     ).toHaveValue(selectedEmployee);
  668 | 
  669 |     // Change the attendance date.
  670 |     await timePage.attendanceDateInput.fill(
  671 |       attendanceDate
  672 |     );
  673 | 
  674 |     await expect(
  675 |       timePage.attendanceDateInput
  676 |     ).toHaveValue(attendanceDate);
  677 | 
  678 |     await timePage
  679 |       .attendanceViewButton
  680 |       .click();
  681 | 
  682 |     await expect(
  683 |       timePage.loadingSpinner
  684 |     ).toBeHidden({
  685 |       timeout: 20_000,
  686 |     });
  687 | 
  688 |     await expect(page).toHaveURL(
  689 |       new RegExp(
  690 |         data.expectedUrlPath
  691 |       )
  692 |     );
  693 | 
  694 |     await expect(
  695 |       timePage.attendanceEmployeeInput
  696 |     ).toHaveValue(selectedEmployee);
  697 | 
  698 |     await expect(
  699 |       timePage.attendanceDateInput
> 700 |     ).toHaveValue(attendanceDate);
      |       ^ Error: expect(locator).toHaveValue(expected) failed
  701 | 
  702 |     await expect(
  703 |       timePage.attendanceRows
  704 |         .first()
  705 |         .or(timePage.attendanceNoRecords)
  706 |     ).toBeVisible({
  707 |       timeout: 20_000,
  708 |     });
  709 | 
  710 |     const rowCount =
  711 |       await timePage.attendanceRows.count();
  712 | 
  713 |     if (rowCount > 0) {
  714 |       await expect(
  715 |         timePage.attendanceRows.first()
  716 |       ).toBeVisible();
  717 |     } else {
  718 |       await expect(
  719 |         timePage.attendanceNoRecords
  720 |       ).toBeVisible();
  721 |     }
  722 | 
  723 |     // Cleanup.
  724 |     await navigationPage.gotoPIM();
  725 | 
  726 |     await pimPage.gotoEmployeeList();
  727 | 
  728 |     await pimPage.filterEmployeeList({
  729 |       employeeId,
  730 |     });
  731 | 
  732 |     await pimPage.clickOnFilterSearch();
  733 | 
  734 |     await pimPage.deleteEmployeeById(
  735 |       employeeId
  736 |     );
  737 |   }
  738 | );
  739 | 
  740 | test.only('TC_TIME_177 - Admin should navigate to My Attendance Records @smoke @navigation @attendance @regression',
  741 |   async ({
  742 |     page,
  743 |     navigationPage,
  744 |     timePage,
  745 |   }) => {
  746 |     const data =
  747 |       timeData.TC_TIME_177;
  748 | 
  749 |     await navigationPage.gotoTime();
  750 | 
  751 |     await timePage.gotoMyAttendanceRecords();
  752 | 
  753 |     await expect(page).toHaveURL(
  754 |       new RegExp(
  755 |         `${data.expectedUrlPath}$`
  756 |       )
  757 |     );
  758 | 
  759 |     await expect(
  760 |       timePage.myAttendanceHeading
  761 |     ).toBeVisible();
  762 | 
  763 |     await expect(
  764 |       timePage.myAttendanceDateInput
  765 |     ).toBeVisible();
  766 | 
  767 |     const defaultAttendanceDate =
  768 |       await timePage
  769 |         .myAttendanceDateInput
  770 |         .inputValue();
  771 | 
  772 |     expect(
  773 |       defaultAttendanceDate
  774 |     ).not.toBe('');
  775 | 
  776 |     await expect(
  777 |       timePage.myAttendanceViewButton
  778 |     ).toBeVisible();
  779 |   }
  780 | );
  781 | 
  782 | });
  783 | 
```