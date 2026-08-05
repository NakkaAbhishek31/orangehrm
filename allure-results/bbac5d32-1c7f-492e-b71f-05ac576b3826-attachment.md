# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1205:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first()
  - Test timeout of 60000ms exceeded.

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
          - generic [ref=f3e113]:
            - heading "Admin" [level=6] [ref=f3e114]
            - heading "/ User Management" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: Shriyansh Bendkhale
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: User Management
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Job
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Organization
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Qualifications
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Nationalities" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f3e148]:
              - /url: "#"
          - listitem [ref=f3e149] [cursor=pointer]:
            - generic [ref=f3e150]:
              - text: Configuration
              - generic [ref=f3e151]: 
          - button "" [ref=f3e153] [cursor=pointer]
  - generic [ref=f3e155]:
    - generic [ref=f3e157]:
      - generic [ref=f3e158]:
        - generic [ref=f3e159]:
          - heading "System Users" [level=5] [ref=f3e161]
          - button "" [ref=f3e164] [cursor=pointer]
        - separator [ref=f3e166]
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - generic [ref=f3e172]:
              - generic [ref=f3e173]: Username
              - textbox [ref=f3e176]
            - generic [ref=f3e178]:
              - generic [ref=f3e179]: User Role
              - generic [ref=f3e183] [cursor=pointer]:
                - generic [ref=f3e184]: "-- Select --"
                - generic [ref=f3e185]: 
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Name
              - textbox "Type for hints..." [ref=f3e194]
            - generic [ref=f3e196]:
              - generic [ref=f3e197]: Status
              - generic [ref=f3e201] [cursor=pointer]:
                - generic [ref=f3e202]: "-- Select --"
                - generic [ref=f3e203]: 
          - separator [ref=f3e205]
          - generic [ref=f3e206]:
            - button "Reset" [ref=f3e207] [cursor=pointer]
            - button "Search" [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - table [ref=f3e214]
    - generic [ref=f3e219]:
      - paragraph [ref=f3e220]: OrangeHRM OS 5.9
      - paragraph [ref=f3e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1130 |     // Create second System User.
  1131 |     await adminPage.gotoAddSystemUser();
  1132 | 
  1133 |     await adminPage.fillSystemUserForm({
  1134 |       userRole: 'ESS',
  1135 |       employeeName: secondEmployeeName,
  1136 |       status: 'Enabled',
  1137 |       username: secondUsername,
  1138 |       password,
  1139 |     });
  1140 | 
  1141 |     await adminPage.saveSystemUser();
  1142 | 
  1143 |     // Ensure filters are empty.
  1144 |     await adminPage.resetSystemUserFilters();
  1145 | 
  1146 |     // Both newly created users must be visible
  1147 |     // on the current table page.
  1148 |     await adminPage.selectSystemUsers([
  1149 |       firstUsername,
  1150 |       secondUsername,
  1151 |     ]);
  1152 | 
  1153 |     await adminPage.deleteSelectedSystemUsers();
  1154 | 
  1155 |     // Verify first user was deleted.
  1156 |     await adminPage.searchSystemUsers({
  1157 |       username: firstUsername,
  1158 |     });
  1159 | 
  1160 |     await expect(
  1161 |       adminPage.userRows
  1162 |     ).toHaveCount(0);
  1163 | 
  1164 |     await adminPage.resetSystemUserFilters();
  1165 | 
  1166 |     // Verify second user was deleted.
  1167 |     await adminPage.searchSystemUsers({
  1168 |       username: secondUsername,
  1169 |     });
  1170 | 
  1171 |     await expect(
  1172 |       adminPage.userRows
  1173 |     ).toHaveCount(0);
  1174 | 
  1175 |     // Cleanup first employee.
  1176 |     await navigationPage.gotoPIM();
  1177 |     await pimPage.gotoEmployeeList();
  1178 | 
  1179 |     await pimPage.filterEmployeeList({
  1180 |       employeeId: firstEmployeeId,
  1181 |     });
  1182 | 
  1183 |     await pimPage.clickOnFilterSearch();
  1184 | 
  1185 |     await pimPage.deleteEmployeeById(
  1186 |       firstEmployeeId
  1187 |     );
  1188 | 
  1189 |     // Reset PIM filters before the second search.
  1190 |     await pimPage.gotoEmployeeList();
  1191 | 
  1192 |     // Cleanup second employee.
  1193 |     await pimPage.filterEmployeeList({
  1194 |       employeeId: secondEmployeeId,
  1195 |     });
  1196 | 
  1197 |     await pimPage.clickOnFilterSearch();
  1198 | 
  1199 |     await pimPage.deleteEmployeeById(
  1200 |       secondEmployeeId
  1201 |     );
  1202 |   }
  1203 | );
  1204 | 
  1205 | test.only('TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression',
  1206 |   async ({
  1207 |     loginPage,
  1208 |     navigationPage,
  1209 |     adminPage,
  1210 |   }) => {
  1211 |     await loginPage.visitPage();
  1212 | 
  1213 |     await loginPage.login(
  1214 |       'Admin',
  1215 |       'admin123'
  1216 |     );
  1217 | 
  1218 |     await loginPage.verifyLoginSuccessful();
  1219 | 
  1220 |     await navigationPage.gotoAdmin();
  1221 | 
  1222 |     await adminPage.gotoUserManagementUsers();
  1223 | 
  1224 |     await expect(
  1225 |       adminPage.loadingSpinner
  1226 |     ).toBeHidden();
  1227 | 
  1228 |     await expect(
  1229 |       adminPage.userRows.first()
> 1230 |     ).toBeVisible({
       |       ^ Error: expect(locator).toBeVisible() failed
  1231 |       timeout: 15_000,
  1232 |     });
  1233 | 
  1234 |     // Select every visible row.
  1235 |     await adminPage.selectAllVisibleSystemUsers();
  1236 | 
  1237 |     await expect(
  1238 |       adminPage.deleteSelectedButton
  1239 |     ).toBeVisible();
  1240 | 
  1241 |     // Deselect every visible row.
  1242 |     await adminPage.deselectAllVisibleSystemUsers();
  1243 | 
  1244 |     await expect(
  1245 |       adminPage.deleteSelectedButton
  1246 |     ).not.toBeVisible();
  1247 |   }
  1248 | );
  1249 | 
  1250 | test( 'TC_ADMIN_059 - Admin should navigate through System Users pages @pagination @regression',
  1251 |   async ({
  1252 |     loginPage,
  1253 |     navigationPage,
  1254 |     adminPage,
  1255 |   }) => {
  1256 |     await loginPage.visitPage();
  1257 | 
  1258 |     await loginPage.login(
  1259 |       'Admin',
  1260 |       'admin123'
  1261 |     );
  1262 | 
  1263 |     await loginPage.verifyLoginSuccessful();
  1264 | 
  1265 |     await navigationPage.gotoAdmin();
  1266 | 
  1267 |     await adminPage.gotoUserManagementUsers();
  1268 | 
  1269 |     await expect(
  1270 |       adminPage.loadingSpinner
  1271 |     ).toBeHidden();
  1272 | 
  1273 |     const pageOneUsernames =
  1274 |       await adminPage.getVisibleSystemUsernames();
  1275 | 
  1276 |     expect(
  1277 |       pageOneUsernames.length
  1278 |     ).toBeGreaterThan(0);
  1279 | 
  1280 |     const nextButtonAvailable =
  1281 |       await adminPage.nextPageButton.count();
  1282 | 
  1283 |     test.skip(
  1284 |       nextButtonAvailable === 0,
  1285 |       'System Users currently contains only one page'
  1286 |     );
  1287 | 
  1288 |     // Navigate to page two.
  1289 |     await adminPage.goToNextSystemUsersPage();
  1290 | 
  1291 |     await expect
  1292 |       .poll(
  1293 |         async () =>
  1294 |           adminPage.getVisibleSystemUsernames(),
  1295 |         {
  1296 |           timeout: 15_000,
  1297 |         }
  1298 |       )
  1299 |       .not.toEqual(pageOneUsernames);
  1300 | 
  1301 |     const pageTwoUsernames =
  1302 |       await adminPage.getVisibleSystemUsernames();
  1303 | 
  1304 |     expect(
  1305 |       pageTwoUsernames.length
  1306 |     ).toBeGreaterThan(0);
  1307 | 
  1308 |     expect(
  1309 |       pageTwoUsernames
  1310 |     ).not.toEqual(pageOneUsernames);
  1311 | 
  1312 |     // Return to page one.
  1313 |     await adminPage.goToPreviousSystemUsersPage();
  1314 | 
  1315 |     await expect
  1316 |       .poll(
  1317 |         async () =>
  1318 |           adminPage.getVisibleSystemUsernames(),
  1319 |         {
  1320 |           timeout: 15_000,
  1321 |         }
  1322 |       )
  1323 |       .toEqual(pageOneUsernames);
  1324 |   }
  1325 | );
  1326 | 
```