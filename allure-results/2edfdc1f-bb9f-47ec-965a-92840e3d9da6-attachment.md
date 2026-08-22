# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_177 - Admin should navigate to My Attendance Records @smoke @navigation @attendance @regression
- Location: tests\Time\time.spec.ts:740:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/attendance\/viewAttendanceRecord$/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord"
Timeout: 20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    42 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord"

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
  - heading "Attendance" [level=6]
  - heading "/ Attendance" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: LKoHeAwARF user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "My Attendance Records" [level=5]
- button ""
- separator
- text: Date*
- textbox "yyyy-dd-mm": 2026-20-08
- text: 
- separator
- paragraph: "* Required"
- button "View"
- text: "Total Duration (Hours): 0.00"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Punch In Punch In Note Punch Out Punch Out Note Duration (Hours) Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Punch In"
      - columnheader "Punch In Note"
      - columnheader "Punch Out"
      - columnheader "Punch Out Note"
      - columnheader "Duration (Hours)"
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
  700 |     ).toHaveValue(attendanceDate);
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
> 753 |     await expect(page).toHaveURL(
      |                        ^ Error: expect(page).toHaveURL(expected) failed
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