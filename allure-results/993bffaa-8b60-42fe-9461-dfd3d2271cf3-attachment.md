# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_180 - Admin should complete the Punch In and Punch Out workflow successfully @positive @attendance @workflow @regression
- Location: tests\Time\time.spec.ts:605:7

# Error details

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "Attendance" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: Demo Kumar
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Timesheets
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - generic [ref=f3e136]:
              - text: Attendance
              - generic [ref=f3e137]: 
          - listitem [ref=f3e138] [cursor=pointer]:
            - generic [ref=f3e139]:
              - text: Reports
              - generic [ref=f3e140]: 
          - listitem [ref=f3e141] [cursor=pointer]:
            - generic [ref=f3e142]:
              - text: Project Info
              - generic [ref=f3e143]: 
          - button "" [ref=f3e145] [cursor=pointer]
  - generic [ref=f3e147]:
    - generic [ref=f3e150]:
      - heading "Punch Out" [level=6] [ref=f3e151]
      - separator [ref=f3e152]
      - generic [ref=f3e154]:
        - generic [ref=f3e156]:
          - generic [ref=f3e158]:
            - generic [ref=f3e159]: Punched in time
            - paragraph [ref=f3e162]:
              - text: 2026-08-27 - 05:00 AM
              - generic [ref=f3e163]: (GMT -04:00)
          - generic [ref=f3e165]:
            - generic [ref=f3e166]: Date*
            - generic [ref=f3e170]:
              - textbox "yyyy-mm-dd" [ref=f3e171]: 2026-08-27
              - generic [ref=f3e172] [cursor=pointer]: 
          - generic [ref=f3e174]:
            - generic [ref=f3e175]: Time*
            - generic [ref=f3e179]:
              - textbox "hh:mm" [ref=f3e180]: 02:44 PM
              - generic [ref=f3e181] [cursor=pointer]: 
        - generic [ref=f3e185]:
          - generic [ref=f3e186]: Note
          - textbox "Type here" [ref=f3e189]
        - separator [ref=f3e190]
        - generic [ref=f3e191]:
          - paragraph [ref=f3e192]: "* Required"
          - button "Out" [ref=f3e193] [cursor=pointer]
    - generic [ref=f3e194]:
      - paragraph [ref=f3e195]: OrangeHRM OS 5.9
      - paragraph [ref=f3e196]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e197] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  974  |     });
  975  |   }
  976  | 
  977  |   async selectAttendanceEmployeeFromAutocomplete(
  978  |     searchText: string,
  979  |   ): Promise<string> {
  980  |     const maxAttempts = 3;
  981  | 
  982  |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  983  |       await this.attendanceEmployeeInput.fill(searchText);
  984  | 
  985  |       const dropdown = this.page.locator(
  986  |         ".oxd-autocomplete-dropdown:visible",
  987  |       );
  988  | 
  989  |       await expect(dropdown).toBeVisible({ timeout: 15_000 });
  990  | 
  991  |       const validOptions = dropdown
  992  |         .locator(".oxd-autocomplete-option")
  993  |         .filter({ hasNotText: /Searching|No Records Found/i });
  994  | 
  995  |       const noRecords = dropdown.getByText("No Records Found", {
  996  |         exact: true,
  997  |       });
  998  | 
  999  |       // Do not inspect the option count while the autocomplete is still in
  1000 |       // its transient "Searching..." state.
  1001 |       await validOptions.first().or(noRecords).waitFor({
  1002 |         state: "visible",
  1003 |         timeout: 15_000,
  1004 |       });
  1005 | 
  1006 |       if (await validOptions.first().isVisible()) {
  1007 |         const firstOption = validOptions.first();
  1008 |         const selectedEmployee = (await firstOption.innerText()).trim();
  1009 | 
  1010 |         await firstOption.click();
  1011 |         await expect(this.attendanceEmployeeInput).toHaveValue(
  1012 |           selectedEmployee,
  1013 |         );
  1014 | 
  1015 |         return selectedEmployee;
  1016 |       }
  1017 | 
  1018 |       await this.attendanceEmployeeInput.press("Escape");
  1019 | 
  1020 |       if (attempt < maxAttempts) {
  1021 |         await this.page.waitForTimeout(1_000);
  1022 |         await this.attendanceEmployeeInput.clear();
  1023 |       }
  1024 |     }
  1025 | 
  1026 |     throw new Error(
  1027 |       `No attendance employee found for: ${searchText} after ${maxAttempts} attempts`,
  1028 |     );
  1029 |   }
  1030 |   
  1031 |   async gotoMyAttendanceRecords():
  1032 | Promise<void> {
  1033 |   await this.attendanceMenu.click();
  1034 | 
  1035 |   const myRecordsLink = this.page
  1036 |     .locator('.oxd-dropdown-menu:visible')
  1037 |     .getByText('My Records', {
  1038 |       exact: true,
  1039 |     });
  1040 | 
  1041 |   await expect(
  1042 |     myRecordsLink
  1043 |   ).toBeVisible();
  1044 | 
  1045 |   await myRecordsLink.click();
  1046 | 
  1047 |   await this.page.waitForURL(
  1048 |     /\/attendance\/viewMyAttendanceRecord$/,
  1049 |     {
  1050 |       timeout: 30_000,
  1051 |     }
  1052 |   );
  1053 | 
  1054 |   await expect(
  1055 |     this.myAttendanceDateInput
  1056 |   ).toBeVisible();
  1057 | }
  1058 | 
  1059 | async gotoPunchInOut(): Promise<void> {
  1060 |   await this.attendanceMenu.click();
  1061 | 
  1062 |   const punchInOutLink = this.page
  1063 |     .locator('.oxd-dropdown-menu:visible')
  1064 |     .getByText('Punch In/Out', {
  1065 |       exact: true,
  1066 |     });
  1067 | 
  1068 |   await expect(
  1069 |     punchInOutLink
  1070 |   ).toBeVisible();
  1071 | 
  1072 |   await punchInOutLink.click();
  1073 | 
> 1074 |   await this.page.waitForURL(
       |                   ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
  1075 |     /\/attendance\/punchIn$/,
  1076 |     {
  1077 |       timeout: 30_000,
  1078 |     }
  1079 |   );
  1080 | 
  1081 |   await expect(
  1082 |     this.punchHeading
  1083 |   ).toBeVisible();
  1084 | 
  1085 |   await expect(
  1086 |     this.punchActionButton
  1087 |   ).toBeVisible();
  1088 | }
  1089 | 
  1090 | async ensurePunchDateAndTime(): Promise<{
  1091 |   date: string;
  1092 |   time: string;
  1093 | }> {
  1094 |   const now = new Date();
  1095 | 
  1096 |   let date = await this.punchDateInput.inputValue();
  1097 |   let time = await this.punchTimeInput.inputValue();
  1098 | 
  1099 |   if (!date.trim()) {
  1100 |     const year = now.getFullYear();
  1101 |     const day = String(now.getDate()).padStart(2, "0");
  1102 |     const month = String(now.getMonth() + 1).padStart(2, "0");
  1103 |     date = `${year}-${day}-${month}`;
  1104 |     await this.punchDateInput.fill(date);
  1105 |   }
  1106 | 
  1107 |   if (!time.trim()) {
  1108 |     const hours = String(now.getHours()).padStart(2, "0");
  1109 |     const minutes = String(now.getMinutes()).padStart(2, "0");
  1110 |     time = `${hours}:${minutes}`;
  1111 |     await this.punchTimeInput.fill(time);
  1112 |   }
  1113 | 
  1114 |   await expect(this.punchDateInput).toHaveValue(date);
  1115 |   await expect(this.punchTimeInput).toHaveValue(time);
  1116 | 
  1117 |   return { date, time };
  1118 | }
  1119 | async selectAutocompleteOption(
  1120 |   input: Locator,
  1121 |   searchText: string,
  1122 |   expectedText?: string
  1123 | ): Promise<string> {
  1124 |   const maxAttempts = 3;
  1125 | 
  1126 |   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  1127 |     await input.fill(searchText);
  1128 | 
  1129 |     await expect(this.visibleAutocompleteDropdown).toBeVisible({
  1130 |       timeout: 20_000,
  1131 |     });
  1132 | 
  1133 |     let validOptions = this.autocompleteOptions.filter({
  1134 |       hasNotText: /Searching|No Records Found/i,
  1135 |     });
  1136 | 
  1137 |     if (expectedText !== undefined) {
  1138 |       validOptions = validOptions.filter({
  1139 |         hasText: expectedText,
  1140 |       });
  1141 |     }
  1142 | 
  1143 |     await validOptions
  1144 |       .first()
  1145 |       .or(this.autocompleteNoRecords)
  1146 |       .waitFor({
  1147 |         state: 'visible',
  1148 |         timeout: 20_000,
  1149 |       });
  1150 | 
  1151 |     if (await validOptions.first().isVisible()) {
  1152 |       await validOptions.first().click();
  1153 |       await expect(input).not.toHaveValue('');
  1154 |       return input.inputValue();
  1155 |     }
  1156 | 
  1157 |     await input.press('Escape');
  1158 | 
  1159 |     if (attempt < maxAttempts) {
  1160 |       await this.page.waitForTimeout(1_000);
  1161 |       await input.clear();
  1162 |     }
  1163 |   }
  1164 | 
  1165 |   throw new Error(
  1166 |     `No autocomplete option found for: ${searchText} after ${maxAttempts} attempts`,
  1167 |   );
  1168 | }
  1169 | 
  1170 | async createCustomer(
  1171 |   details: CreateCustomerDetails,
  1172 | ): Promise<void> {
  1173 |   await this.addCustomerButton.click();
  1174 | 
```