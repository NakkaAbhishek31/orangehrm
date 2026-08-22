# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_190 - Required validation should appear when adding an empty project @negative @validation @project-info @regression
- Location: tests\Time\time.spec.ts:1264:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Name', { exact: true }) }).locator('input').locator('xpath=ancestor::form').locator('.oxd-input-field-error-message')
Expected: 3
Received: 2
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Name', { exact: true }) }).locator('input').locator('xpath=ancestor::form').locator('.oxd-input-field-error-message')
    - locator resolved to 0 elements
    - unexpected value "0"
    42 × locator resolved to 2 elements
       - unexpected value "2"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Time" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Surya king
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Timesheets
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Attendance
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Reports
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Project Info
              - generic [ref=f4e143]: 
          - button "" [ref=f4e145] [cursor=pointer]
  - generic [ref=f4e147]:
    - generic [ref=f4e150]:
      - heading "Add Project" [level=6] [ref=f4e151]
      - separator [ref=f4e152]
      - generic [ref=f4e153]:
        - generic [ref=f4e154]:
          - generic [ref=f4e156]:
            - generic [ref=f4e157]: Name*
            - textbox [ref=f4e160]
            - generic [ref=f4e161]: Required
          - generic [ref=f4e162]:
            - generic [ref=f4e163]:
              - generic [ref=f4e164]: Customer Name*
              - textbox "Type for hints..." [ref=f4e169]
              - generic [ref=f4e170]: Required
            - button " Add Customer" [ref=f4e171] [cursor=pointer]:
              - generic [ref=f4e172]: 
              - text: Add Customer
        - generic [ref=f4e174]:
          - generic [ref=f4e176]:
            - generic [ref=f4e177]: Description
            - textbox "Type description here" [ref=f4e180]
          - generic [ref=f4e181]:
            - generic [ref=f4e183]:
              - generic [ref=f4e184]: Project Admin
              - textbox "Type for hints..." [ref=f4e189]
            - button " Add Another" [ref=f4e190] [cursor=pointer]:
              - generic [ref=f4e191]: 
              - text: Add Another
        - separator [ref=f4e192]
        - generic [ref=f4e193]:
          - paragraph [ref=f4e194]: "* Required"
          - button "Cancel" [ref=f4e195] [cursor=pointer]
          - button "Save" [active] [ref=f4e196] [cursor=pointer]
    - generic [ref=f4e197]:
      - paragraph [ref=f4e198]: OrangeHRM OS 5.9
      - paragraph [ref=f4e199]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e200] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1185 |     await confirmationDialog
  1186 |       .getByRole('button', {
  1187 |         name: 'Yes, Delete',
  1188 |         exact: true,
  1189 |       })
  1190 |       .click();
  1191 | 
  1192 |     const deleteResponse =
  1193 |       await deleteResponsePromise;
  1194 | 
  1195 |     expect(
  1196 |       deleteResponse.ok()
  1197 |     ).toBeTruthy();
  1198 | 
  1199 |     await expect(
  1200 |       createdCustomerRow
  1201 |     ).toBeHidden({
  1202 |       timeout: 20_000,
  1203 |     });
  1204 |   }
  1205 | );
  1206 | 
  1207 | test.only('TC_TIME_189 - Admin should navigate to the Projects page @smoke @navigation @project-info @regression',
  1208 |   async ({
  1209 |     page,
  1210 |     navigationPage,
  1211 |     timePage,
  1212 |   }) => {
  1213 |     const data =
  1214 |       timeData.TC_TIME_189;
  1215 | 
  1216 |     await navigationPage.gotoTime();
  1217 | 
  1218 |     await timePage.gotoProjects();
  1219 | 
  1220 |     await expect(page).toHaveURL(
  1221 |       new RegExp(
  1222 |         `${data.expectedUrlPath}$`
  1223 |       )
  1224 |     );
  1225 | 
  1226 |     await expect(
  1227 |       timePage.projectsHeading
  1228 |     ).toHaveText(data.pageHeading);
  1229 | 
  1230 |     await expect(
  1231 |       timePage.projectCustomerFilterInput
  1232 |     ).toBeVisible();
  1233 | 
  1234 |     await expect(
  1235 |       timePage.projectNameFilterInput
  1236 |     ).toBeVisible();
  1237 | 
  1238 |     await expect(
  1239 |       timePage.projectSearchButton
  1240 |     ).toBeVisible();
  1241 | 
  1242 |     await expect(
  1243 |       timePage.projectResetButton
  1244 |     ).toBeVisible();
  1245 | 
  1246 |     await expect(
  1247 |       timePage.addProjectButton
  1248 |     ).toBeVisible();
  1249 | 
  1250 |     await expect(
  1251 |       timePage.projectsTable
  1252 |     ).toBeVisible();
  1253 | 
  1254 |     await expect(
  1255 |       timePage.projectRows
  1256 |         .first()
  1257 |         .or(timePage.projectNoRecords)
  1258 |     ).toBeVisible({
  1259 |       timeout: 20_000,
  1260 |     });
  1261 |   }
  1262 | );
  1263 | 
  1264 | test.only(
  1265 |   'TC_TIME_190 - Required validation should appear when adding an empty project @negative @validation @project-info @regression',
  1266 |   async ({ page, navigationPage, timePage }) => {
  1267 |     const data = timeData.TC_TIME_190;
  1268 | 
  1269 |     await navigationPage.gotoTime();
  1270 |     await timePage.gotoProjects();
  1271 | 
  1272 |     await timePage.addProjectButton.click();
  1273 | 
  1274 |     await expect(page).toHaveURL(
  1275 |       new RegExp(`${data.addProjectUrlPath}$`),
  1276 |     );
  1277 | 
  1278 |     await expect(timePage.addProjectHeading).toBeVisible();
  1279 |     await expect(timePage.addProjectCustomerInput).toHaveValue('');
  1280 |     await expect(timePage.addProjectNameInput).toHaveValue('');
  1281 |     await expect(timePage.projectAdminInput).toHaveValue('');
  1282 | 
  1283 |     await timePage.projectSaveButton.click();
  1284 | 
> 1285 |     await expect(timePage.projectValidationMessages).toHaveCount(
       |                                                      ^ Error: expect(locator).toHaveCount(expected) failed
  1286 |       data.requiredCount,
  1287 |     );
  1288 | 
  1289 |     for (let index = 0; index < data.requiredCount; index++) {
  1290 |       await expect(
  1291 |         timePage.projectValidationMessages.nth(index),
  1292 |       ).toHaveText(data.requiredMessage);
  1293 |     }
  1294 | 
  1295 |     // Invalid submission must remain on Add Project.
  1296 |     await expect(page).toHaveURL(
  1297 |       new RegExp(`${data.addProjectUrlPath}$`),
  1298 |     );
  1299 | 
  1300 |     await timePage.projectCancelButton.click();
  1301 | 
  1302 |     await expect(page).toHaveURL(
  1303 |       new RegExp(`${data.projectsUrlPath}$`),
  1304 |     );
  1305 | 
  1306 |     await expect(timePage.projectsHeading).toBeVisible();
  1307 |   },
  1308 | );
  1309 | });
  1310 | 
```