# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:671:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Scheduled', { exact: true })
Expected: 0
Received: 1
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Scheduled', { exact: true })
    43 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
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
              - paragraph [ref=f2e127]: krish gandhi
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
                - generic [ref=f2e196]:
                  - generic [ref=f2e197]:
                    - text: Pending Approval
                    - generic [ref=f2e198] [cursor=pointer]: 
                  - generic [ref=f2e199]:
                    - text: Scheduled
                    - generic [ref=f2e200] [cursor=pointer]: 
            - generic [ref=f2e202]:
              - generic [ref=f2e203]: Leave Type
              - generic [ref=f2e207] [cursor=pointer]:
                - generic [ref=f2e208]: "-- Select --"
                - generic [ref=f2e209]: 
          - generic [ref=f2e212]:
            - generic [ref=f2e214]:
              - generic [ref=f2e215]: Employee Name
              - textbox "Type for hints..." [ref=f2e220]
            - generic [ref=f2e222]:
              - generic [ref=f2e223]: Sub Unit
              - generic [ref=f2e227] [cursor=pointer]:
                - generic [ref=f2e228]: "-- Select --"
                - generic [ref=f2e229]: 
            - generic [ref=f2e231]:
              - paragraph [ref=f2e232]: Include Past Employees
              - checkbox [ref=f2e235]
          - separator [ref=f2e237]
          - generic [ref=f2e238]:
            - paragraph [ref=f2e239]: "* Required"
            - button "Reset" [active] [ref=f2e240] [cursor=pointer]
            - button "Search" [ref=f2e241] [cursor=pointer]
      - generic [ref=f2e242]:
        - generic [ref=f2e243]: No Records Found
        - table [ref=f2e246]:
          - rowgroup [ref=f2e247]:
            - row [ref=f2e248]:
              - columnheader "" [ref=f2e249]:
                - generic [ref=f2e251] [cursor=pointer]:
                  - checkbox "" [ref=f2e252]
                  - generic [ref=f2e253]: 
              - columnheader "Date" [ref=f2e255]
              - columnheader "Employee Name" [ref=f2e256]
              - columnheader "Leave Type" [ref=f2e257]
              - columnheader "Leave Balance (Days)" [ref=f2e258]
              - columnheader "Number of Days" [ref=f2e259]
              - columnheader "Status" [ref=f2e260]
              - columnheader "Comments" [ref=f2e261]
              - columnheader "Actions" [ref=f2e262]
          - rowgroup
    - generic [ref=f2e264]:
      - paragraph [ref=f2e265]: OrangeHRM OS 5.9
      - paragraph [ref=f2e266]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e267] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  659 | 
  660 |     expect(pageTwoRecords.length).toBeGreaterThan(0);
  661 | 
  662 |     await leavepage.previousPageButton.click();
  663 | 
  664 |     await expect
  665 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  666 |         timeout: 15_000,
  667 |       })
  668 |       .toEqual(pageOneRecords);
  669 |   });
  670 | 
  671 | test.only(
  672 |   'TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression',
  673 |   async ({
  674 |     navigationPage,
  675 |     leavepage,
  676 |   }) => {
  677 |     const data =
  678 |       leaveData.TC_LEAVE_125;
  679 | 
  680 |     await navigationPage.gotoLeave();
  681 | 
  682 |     // Select Scheduled status.
  683 |     await leavepage.selectLeaveStatus(
  684 |       data.leaveStatus
  685 |     );
  686 | 
  687 |     // Verify the status is selected.
  688 |     await expect(
  689 |       leavepage.leaveStatusField.getByText(
  690 |         data.leaveStatus,
  691 |         { exact: true }
  692 |       )
  693 |     ).toBeVisible();
  694 | 
  695 |     // Search using the selected status.
  696 |     await leavepage.searchButton.click();
  697 | 
  698 |     await expect(
  699 |       leavepage.loadingSpinner
  700 |     ).toBeHidden();
  701 | 
  702 |     // Verify the status remains selected.
  703 |     await expect(
  704 |       leavepage.leaveStatusField.getByText(
  705 |         data.leaveStatus,
  706 |         { exact: true }
  707 |       )
  708 |     ).toBeVisible();
  709 | 
  710 |     // The shared demo may return rows or no records.
  711 |     await expect(
  712 |       leavepage.leaveRows
  713 |         .first()
  714 |         .or(leavepage.noRecordsFound)
  715 |     ).toBeVisible({
  716 |       timeout: 15_000,
  717 |     });
  718 | 
  719 |     const rowCount =
  720 |       await leavepage.leaveRows.count();
  721 | 
  722 |     if (rowCount > 0) {
  723 |       for (
  724 |         let index = 0;
  725 |         index < rowCount;
  726 |         index++
  727 |       ) {
  728 |         const statusCell =
  729 |           leavepage.leaveRows
  730 |             .nth(index)
  731 |             .locator('.oxd-table-cell')
  732 |             .nth(5);
  733 | 
  734 |         await expect(
  735 |           statusCell
  736 |         ).toContainText(
  737 |           data.leaveStatus
  738 |         );
  739 |       }
  740 |     } else {
  741 |       await expect(
  742 |         leavepage.noRecordsFound
  743 |       ).toBeVisible();
  744 |     }
  745 | 
  746 |     // Reset the filters.
  747 |     await leavepage.resetButton.click();
  748 | 
  749 |     await expect(
  750 |       leavepage.loadingSpinner
  751 |     ).toBeHidden();
  752 | 
  753 |     // Verify Scheduled was removed.
  754 |     await expect(
  755 |       leavepage.leaveStatusField.getByText(
  756 |         data.leaveStatus,
  757 |         { exact: true }
  758 |       )
> 759 |     ).toHaveCount(0);
      |       ^ Error: expect(locator).toHaveCount(expected) failed
  760 | 
  761 |     await expect(
  762 |       leavepage.leaveStatusDropdown
  763 |     ).toContainText(
  764 |       data.defaultStatus
  765 |     );
  766 |   }
  767 | );
  768 | });
  769 | 
```