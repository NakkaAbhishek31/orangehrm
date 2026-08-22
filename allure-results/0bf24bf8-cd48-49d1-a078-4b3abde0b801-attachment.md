# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_181 - Admin should navigate to the Attendance Summary Report page @smoke @navigation @report @regression
- Location: tests\Time\time.spec.ts:749:8

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/attendance/viewAttendanceSummary"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/time/displayAttendanceSummaryReportCriteria"
Timeout:  20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    42 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/time/displayAttendanceSummaryReportCriteria"

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
  - heading "Time" [level=6]
  - heading "/ Reports" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Daisy Nguyen
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Attendance Total Summary Report" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select --  Employment Status -- Select --  Date Range
- textbox "From"
- text: 
- textbox "To"
- text: 
- separator
- button "View"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  661 |         expect(cleanupResponse.ok()).toBeTruthy();
  662 | 
  663 |         await expect(timePage.punchInButton).toBeVisible({
  664 |           timeout: 20_000,
  665 |         });
  666 |       }
  667 | 
  668 |       await expect(timePage.punchInButton).toBeVisible();
  669 | 
  670 |       const { date: displayedDate, time: displayedTime } =
  671 |         await timePage.ensurePunchDateAndTime();
  672 | 
  673 |       expect(displayedDate).not.toBe("");
  674 |       expect(displayedTime).not.toBe("");
  675 | 
  676 |       // Punch In.
  677 |       await timePage.punchNoteInput.fill(data.punchInNote);
  678 | 
  679 |       await expect(timePage.punchNoteInput).toHaveValue(data.punchInNote);
  680 | 
  681 |       const punchInResponsePromise = waitForAttendanceResponse();
  682 | 
  683 |       const punchInToastPromise = waitForSuccessToast();
  684 | 
  685 |       await timePage.punchInButton.click();
  686 | 
  687 |       const punchInResponse = await punchInResponsePromise;
  688 | 
  689 |       await punchInToastPromise;
  690 | 
  691 |       expect(punchInResponse.ok()).toBeTruthy();
  692 | 
  693 |       punchedInByTest = true;
  694 | 
  695 |       await expect(timePage.punchOutButton).toBeVisible({
  696 |         timeout: 20_000,
  697 |       });
  698 | 
  699 |       // Punch Out.
  700 |       await timePage.ensurePunchDateAndTime();
  701 | 
  702 |       await timePage.punchNoteInput.fill(data.punchOutNote);
  703 | 
  704 |       await expect(timePage.punchNoteInput).toHaveValue(data.punchOutNote);
  705 | 
  706 |       const punchOutResponsePromise = waitForAttendanceResponse();
  707 | 
  708 |       const punchOutToastPromise = waitForSuccessToast();
  709 | 
  710 |       await timePage.punchOutButton.click();
  711 | 
  712 |       const punchOutResponse = await punchOutResponsePromise;
  713 | 
  714 |       await punchOutToastPromise;
  715 | 
  716 |       expect(punchOutResponse.ok()).toBeTruthy();
  717 | 
  718 |       punchedInByTest = false;
  719 | 
  720 |       await expect(timePage.punchInButton).toBeVisible({
  721 |         timeout: 20_000,
  722 |       });
  723 | 
  724 |       await expect(timePage.punchDateInput).toBeVisible();
  725 | 
  726 |       await expect(timePage.punchTimeInput).toBeVisible();
  727 | 
  728 |       await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  729 |     } finally {
  730 |       // Cleanup if the test failed after Punch In.
  731 |       if (punchedInByTest) {
  732 |         const canPunchOut = await timePage.punchOutButton
  733 |           .isVisible()
  734 |           .catch(() => false);
  735 | 
  736 |         if (canPunchOut) {
  737 |           await timePage.punchNoteInput.fill(data.cleanupPunchOutNote);
  738 | 
  739 |           const cleanupResponsePromise = waitForAttendanceResponse();
  740 | 
  741 |           await timePage.punchOutButton.click();
  742 | 
  743 |           await cleanupResponsePromise;
  744 |         }
  745 |       }
  746 |     }
  747 |   });
  748 | 
  749 |   test.only("TC_TIME_181 - Admin should navigate to the Attendance Summary Report page @smoke @navigation @report @regression", async ({
  750 |     page,
  751 |     navigationPage,
  752 |     timePage,
  753 |   }) => {
  754 |     const data = timeData.TC_TIME_181;
  755 |     // Navigate to Time.
  756 |     await navigationPage.gotoTime();
  757 |     // Open Reports.
  758 |     // Click Attendance Summary.
  759 |     await timePage.gotoAttendanceSummary();
  760 |     // Verify URL and heading.
> 761 |     await expect(page).toHaveURL(data.expectedUrlPath);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  762 |     await expect(timePage.attendanceSummaryReportHeading).toBeVisible();
  763 |     // Verify Employee Name input.
  764 |     await expect(timePage.summaryEmployeeInput).toBeVisible();
  765 |     // Verify From Date and To Date.
  766 |     await expect(timePage.summaryFromDateInput).toBeVisible();
  767 |     await expect(timePage.summaryToDateInput).toBeVisible();
  768 |     // Verify View button.
  769 |     await expect(timePage.summaryViewButton).toBeVisible();
  770 |   });
  771 | 
  772 |   test.only("TC_TIME_182 - Invalid validation should appear for a nonexistent employee in Attendance Summary @negative @validation @autocomplete @report @regression", async ({
  773 |     page,
  774 |     navigationPage,
  775 |     timePage,
  776 |   }) => {
  777 |     const data = timeData.TC_TIME_182;
  778 |     // Generate a unique nonexistent employee name.
  779 |     const employeeName = `${data.employeeNamePrefix}${Date.now()}$`;
  780 |     // Navigate to Attendance Summary.
  781 |     await navigationPage.gotoTime();
  782 |     await timePage.gotoAttendanceSummary();
  783 |     // Enter the invalid employee name.
  784 |     await timePage.summaryEmployeeInput.fill(employeeName);
  785 |     // Verify autocomplete shows No Records Found.
  786 |     await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
  787 |       timeout: 15_000,
  788 |     });
  789 | 
  790 |     await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
  791 |       data.noRecordsMessage,
  792 |     );
  793 |     // Close autocomplete.
  794 |      
  795 |   await timePage.employeeAutocompleteNoRecords.press('Escape');
  796 | 
  797 |     // Click View.
  798 |      await timePage.summaryViewButton.click();
  799 |     // Verify Invalid validation.
  800 |     await expect(timePage.summaryEmployeeValidation).toHaveText(data.invalidMessage)
  801 |     // Verify entered name remains displayed.
  802 |     await expect(timePage.summaryEmployeeInput).toHaveValue(employeeName);
  803 |   });
  804 | });
  805 | 
```