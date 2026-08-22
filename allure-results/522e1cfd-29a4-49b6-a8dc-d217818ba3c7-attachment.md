# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_179 - Admin should navigate to the Punch In page @smoke @navigation @attendance @regression
- Location: tests\Time\time.spec.ts:854:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/attendance/punchIn"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchIn"
Timeout:  20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    43 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchIn"

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
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Punch In" [level=6]
- separator
- text: Date*
- textbox "yyyy-dd-mm": 2026-20-08
- text:  Time*
- textbox "hh:mm": 01:51 PM
- text:  Note
- textbox "Type here"
- separator
- paragraph: "* Required"
- button "In"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  765 |       timePage.myAttendanceDateInput
  766 |     ).toBeVisible();
  767 | 
  768 |     const defaultAttendanceDate =
  769 |       await timePage
  770 |         .myAttendanceDateInput
  771 |         .inputValue();
  772 | 
  773 |     expect(
  774 |       defaultAttendanceDate
  775 |     ).not.toBe('');
  776 | 
  777 |     await expect(
  778 |       timePage.myAttendanceViewButton
  779 |     ).toBeVisible();
  780 |   }
  781 | );
  782 | 
  783 | test( 'TC_TIME_178 - Admin should view My Attendance Records for a selected date @positive @attendance @date @regression',
  784 |   async ({
  785 |     page,
  786 |     navigationPage,
  787 |     timePage,
  788 |   }) => {
  789 |     const data =
  790 |       timeData.TC_TIME_178;
  791 | 
  792 |     const attendanceDate =
  793 |       dateFromOffset(
  794 |         data.attendanceDaysOffset
  795 |       );
  796 | 
  797 |     await navigationPage.gotoTime();
  798 | 
  799 |     await timePage.gotoMyAttendanceRecords();
  800 | 
  801 |     await timePage
  802 |       .myAttendanceDateInput
  803 |       .fill(attendanceDate);
  804 | 
  805 |     await expect(
  806 |       timePage.myAttendanceDateInput
  807 |     ).toHaveValue(attendanceDate);
  808 | 
  809 |     await timePage
  810 |       .myAttendanceViewButton
  811 |       .click();
  812 | 
  813 |     await expect(
  814 |       timePage.loadingSpinner
  815 |     ).toBeHidden({
  816 |       timeout: 20_000,
  817 |     });
  818 | 
  819 |     await expect(
  820 |       timePage.myAttendanceDateInput
  821 |     ).toHaveValue(attendanceDate);
  822 | 
  823 |     // Either records or No Records Found
  824 |     // can appear for the selected date.
  825 |     await expect(
  826 |       timePage.attendanceRows
  827 |         .first()
  828 |         .or(timePage.attendanceNoRecords)
  829 |     ).toBeVisible({
  830 |       timeout: 20_000,
  831 |     });
  832 | 
  833 |     const rowCount =
  834 |       await timePage.attendanceRows.count();
  835 | 
  836 |     if (rowCount > 0) {
  837 |       await expect(
  838 |         timePage.attendanceRows.first()
  839 |       ).toBeVisible();
  840 |     } else {
  841 |       await expect(
  842 |         timePage.attendanceNoRecords
  843 |       ).toBeVisible();
  844 |     }
  845 | 
  846 |     await expect(page).toHaveURL(
  847 |       new RegExp(
  848 |         `${data.expectedUrlPath}$`
  849 |       )
  850 |     );
  851 |   }
  852 | );
  853 | 
  854 | test.only('TC_TIME_179 - Admin should navigate to the Punch In page @smoke @navigation @attendance @regression',
  855 |   async ({ page, navigationPage, timePage }) => {
  856 |     // Read expected URL and heading from JSON.
  857 |        const data=timeData.TC_TIME_179;
  858 |     // Navigate to Time.
  859 |       await navigationPage.gotoTime();
  860 |     // Open Attendance menu.
  861 | 
  862 |     // Click Punch In/Out.
  863 |      await  timePage.gotoPunchInOut();
  864 |     // Verify navigation to the Punch In page.
> 865 |       await expect(page).toHaveURL(data.expectedUrlPath);
      |                          ^ Error: expect(page).toHaveURL(expected) failed
  866 |     // Verify the Punch In heading.
  867 |        await expect(timePage.punchHeading).toBeVisible();
  868 |         await expect(timePage.punchHeading).toContainText(data.pageHeading);
  869 |     // Verify Date input.
  870 |     await expect(timePage.punchDateInput).toBeVisible();
  871 |     // Verify Time input.
  872 |     await expect(timePage.punchTimeInput).toBeVisible();
  873 |     // Verify Note input.
  874 |    await expect(timePage.punchNoteInput).toBeVisible();
  875 |     // Verify the Punch In button is visible.
  876 |     await expect(timePage.punchInButton).toBeVisible();
  877 |   }
  878 | );
  879 | 
  880 | });
  881 | 
```