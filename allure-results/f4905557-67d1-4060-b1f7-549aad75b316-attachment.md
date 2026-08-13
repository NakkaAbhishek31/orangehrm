# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:782:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

- Expected  - 1
+ Received  + 0

  Show Leave with Status
  -- Select --
- Pending Approval

Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
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
              - paragraph [ref=f2e127]: mandaa gandhi
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
                - textbox "dd-mm-yyyy" [ref=f2e175]: 01-01-2026
                - generic [ref=f2e176] [cursor=pointer]: 
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: To Date
              - generic [ref=f2e183]:
                - textbox "dd-mm-yyyy" [ref=f2e184]: 31-12-2026
                - generic [ref=f2e185] [cursor=pointer]: 
            - generic [ref=f2e187]:
              - generic [ref=f2e188]: Show Leave with Status*
              - generic [ref=f2e192] [cursor=pointer]:
                - generic [ref=f2e193]: "-- Select --"
                - generic [ref=f2e194]: 
            - generic [ref=f2e198]:
              - generic [ref=f2e199]: Leave Type
              - generic [ref=f2e203] [cursor=pointer]:
                - generic [ref=f2e204]: "-- Select --"
                - generic [ref=f2e205]: 
          - generic [ref=f2e208]:
            - generic [ref=f2e210]:
              - generic [ref=f2e211]: Employee Name
              - textbox "Type for hints..." [ref=f2e216]
            - generic [ref=f2e218]:
              - generic [ref=f2e219]: Sub Unit
              - generic [ref=f2e223] [cursor=pointer]:
                - generic [ref=f2e224]: "-- Select --"
                - generic [ref=f2e225]: 
            - generic [ref=f2e227]:
              - paragraph [ref=f2e228]: Include Past Employees
              - checkbox [ref=f2e231]
          - separator [ref=f2e233]
          - generic [ref=f2e234]:
            - paragraph [ref=f2e235]: "* Required"
            - button "Reset" [active] [ref=f2e236] [cursor=pointer]
            - button "Search" [ref=f2e237] [cursor=pointer]
      - generic [ref=f2e238]:
        - generic [ref=f2e239]: No Records Found
        - table [ref=f2e242]:
          - rowgroup [ref=f2e243]:
            - row [ref=f2e244]:
              - columnheader "" [ref=f2e245]:
                - generic [ref=f2e247] [cursor=pointer]:
                  - checkbox "" [ref=f2e248]
                  - generic [ref=f2e249]: 
              - columnheader "Date" [ref=f2e251]
              - columnheader "Employee Name" [ref=f2e252]
              - columnheader "Leave Type" [ref=f2e253]
              - columnheader "Leave Balance (Days)" [ref=f2e254]
              - columnheader "Number of Days" [ref=f2e255]
              - columnheader "Status" [ref=f2e256]
              - columnheader "Comments" [ref=f2e257]
              - columnheader "Actions" [ref=f2e258]
          - rowgroup
    - generic [ref=f2e260]:
      - paragraph [ref=f2e261]: OrangeHRM OS 5.9
      - paragraph [ref=f2e262]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e263] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  787 |     const data =
  788 |       leaveData.TC_LEAVE_126;
  789 | 
  790 |     await navigationPage.gotoLeave();
  791 | 
  792 |     // Capture the original default status state.
  793 |     const defaultStatusText = (
  794 |       await leavepage.leaveStatusField
  795 |         .innerText()
  796 |     ).trim();
  797 | 
  798 |     const takenStatus =
  799 |       leavepage.leaveStatusField.getByText(
  800 |         data.leaveStatus,
  801 |         { exact: true }
  802 |       );
  803 | 
  804 |     const alreadySelected =
  805 |       (await takenStatus.count()) > 0;
  806 | 
  807 |     // Select Taken only when it is not
  808 |     // already selected by default.
  809 |     if (!alreadySelected) {
  810 |       await leavepage.selectLeaveStatus(
  811 |         data.leaveStatus
  812 |       );
  813 |     }
  814 | 
  815 |     await expect(
  816 |       takenStatus
  817 |     ).toBeVisible();
  818 | 
  819 |     // Search using Taken status.
  820 |     await leavepage.searchButton.click();
  821 | 
  822 |     await expect(
  823 |       leavepage.loadingSpinner
  824 |     ).toBeHidden();
  825 | 
  826 |     // Verify Taken remains selected.
  827 |     await expect(
  828 |       takenStatus
  829 |     ).toBeVisible();
  830 | 
  831 |     // Verify records or No Records Found.
  832 |     await expect(
  833 |       leavepage.leaveRows
  834 |         .first()
  835 |         .or(leavepage.noRecordsFound)
  836 |     ).toBeVisible({
  837 |       timeout: 15_000,
  838 |     });
  839 | 
  840 |     const rowCount =
  841 |       await leavepage.leaveRows.count();
  842 | 
  843 |     if (rowCount > 0) {
  844 |       for (
  845 |         let index = 0;
  846 |         index < rowCount;
  847 |         index++
  848 |       ) {
  849 |         const statusCell =
  850 |           leavepage.leaveRows
  851 |             .nth(index)
  852 |             .locator('.oxd-table-cell')
  853 |             .nth(5);
  854 | 
  855 |         await expect(
  856 |           statusCell
  857 |         ).toContainText(
  858 |           data.leaveStatus
  859 |         );
  860 |       }
  861 |     } else {
  862 |       await expect(
  863 |         leavepage.noRecordsFound
  864 |       ).toBeVisible();
  865 |     }
  866 | 
  867 |     // Reset filters.
  868 |     await leavepage.resetButton.click();
  869 | 
  870 |     await expect(
  871 |       leavepage.loadingSpinner
  872 |     ).toBeHidden();
  873 | 
  874 |     // Verify the default status state is restored.
  875 |     await expect
  876 |       .poll(
  877 |         async () =>
  878 |           (
  879 |             await leavepage
  880 |               .leaveStatusField
  881 |               .innerText()
  882 |           ).trim(),
  883 |         {
  884 |           timeout: 15_000,
  885 |         }
  886 |       )
> 887 |       .toBe(defaultStatusText);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  888 |   }
  889 | );
  890 | 
  891 | 
  892 | });
  893 | 
```