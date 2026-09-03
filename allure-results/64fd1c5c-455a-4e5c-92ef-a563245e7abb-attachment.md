# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_132 - Leave List date range should remain unchanged after status search @positive @persistence @regression
- Location: tests\Leave\leave.spec.ts:1107:7

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
  1040 |   });
  1041 |   test("TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression", async ({
  1042 |     navigationPage,
  1043 |     leavepage,
  1044 |   }) => {
  1045 |     const data = leaveData.TC_LEAVE_131;
  1046 | 
  1047 |     await navigationPage.gotoLeave();
  1048 | 
  1049 |     await leavepage.waitForDefaultDateRange();
  1050 | 
  1051 |     for (const status of data.statuses) {
  1052 |       const selectedStatus = leavepage.leaveStatusField.getByText(status, {
  1053 |         exact: true,
  1054 |       });
  1055 | 
  1056 |       if ((await selectedStatus.count()) === 0) {
  1057 |         await leavepage.selectLeaveStatus(status);
  1058 |       }
  1059 | 
  1060 |       await expect(selectedStatus).toBeVisible();
  1061 |     }
  1062 | 
  1063 |     await leavepage.removeSelectedLeaveStatus(data.statusToRemove);
  1064 | 
  1065 |     await expect(
  1066 |       leavepage.leaveStatusField.getByText(data.statusToRemove, {
  1067 |         exact: true,
  1068 |       }),
  1069 |     ).toHaveCount(0);
  1070 | 
  1071 |     await expect(
  1072 |       leavepage.leaveStatusField.getByText(data.remainingStatus, {
  1073 |         exact: true,
  1074 |       }),
  1075 |     ).toBeVisible();
  1076 | 
  1077 |     await leavepage.searchLeaveList();
  1078 | 
  1079 |     await expect(leavepage.loadingSpinner).toBeHidden();
  1080 | 
  1081 |     await expect(
  1082 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  1083 |     ).toBeVisible({
  1084 |       timeout: 15_000,
  1085 |     });
  1086 | 
  1087 |     const rowCount = await leavepage.leaveRows.count();
  1088 | 
  1089 |     if (rowCount > 0) {
  1090 |       for (let index = 0; index < rowCount; index++) {
  1091 |         const statusCell = leavepage.leaveRows
  1092 |           .nth(index)
  1093 |           .locator(".oxd-table-cell")
  1094 |           .nth(6);
  1095 | 
  1096 |         await expect(statusCell).toContainText(data.remainingStatus);
  1097 | 
  1098 |         await expect(statusCell).not.toContainText(data.statusToRemove);
  1099 |       }
  1100 |     } else {
  1101 |       await expect(leavepage.noRecordsFound).toBeVisible();
  1102 |     }
  1103 | 
  1104 |     await leavepage.resetButton.click();
  1105 |   });
  1106 | 
  1107 |   test("TC_LEAVE_132 - Leave List date range should remain unchanged after status search @positive @persistence @regression", async ({
  1108 |     navigationPage,
  1109 |     leavepage,
  1110 |   }) => {
  1111 |     const data = leaveData.TC_LEAVE_132;
  1112 | 
  1113 |     await navigationPage.gotoLeave();
  1114 | 
  1115 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  1116 | 
  1117 |     const selectedStatus = leavepage.leaveStatusField.getByText(
  1118 |       data.leaveStatus,
  1119 |       { exact: true },
  1120 |     );
  1121 | 
  1122 |     if ((await selectedStatus.count()) === 0) {
  1123 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  1124 |     }
  1125 | 
  1126 |     await expect(selectedStatus).toBeVisible();
  1127 | 
  1128 |     await leavepage.searchLeaveList();
  1129 | 
  1130 |     await expect(leavepage.loadingSpinner).toBeHidden();
  1131 | 
  1132 |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  1133 | 
  1134 |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  1135 | 
  1136 |     await expect(selectedStatus).toBeVisible();
  1137 | 
  1138 |     await expect(
  1139 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
> 1140 |     ).toBeVisible({
       |       ^ Error: expect(locator).toBeVisible() failed
  1141 |       timeout: 15_000,
  1142 |     });
  1143 | 
  1144 |     const rowCount = await leavepage.leaveRows.count();
  1145 | 
  1146 |     if (rowCount > 0) {
  1147 |       for (let index = 0; index < rowCount; index++) {
  1148 |         const statusCell = leavepage.leaveRows
  1149 |           .nth(index)
  1150 |           .locator(".oxd-table-cell")
  1151 |           .nth(6);
  1152 | 
  1153 |         await expect(statusCell).toContainText(data.leaveStatus);
  1154 |       }
  1155 |     } else {
  1156 |       await expect(leavepage.noRecordsFound).toBeVisible();
  1157 |     }
  1158 | 
  1159 |     await leavepage.resetButton.click();
  1160 | 
  1161 |     await expect(leavepage.loadingSpinner).toBeHidden();
  1162 | 
  1163 |     await leavepage.waitForDefaultDateRange();
  1164 |   });
  1165 | });
  1166 | 
```