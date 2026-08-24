# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_198 - Admin should cancel project deletion @negative @cancel @delete @project-info @regression
- Location: tests\Time\time.spec.ts:1488:8

# Error details

```
TimeoutError: page.waitForResponse: Timeout 30000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
- generic [ref=f9e3]:
  - generic:
    - complementary [ref=f9e4]:
      - navigation "Sidepanel" [ref=f9e5]:
        - generic [ref=f9e6]:
          - link [ref=f9e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f9e9]
          - text: 
        - generic [ref=f9e10]:
          - generic [ref=f9e11]:
            - generic [ref=f9e12]:
              - textbox "Search" [ref=f9e15]
              - button "" [ref=f9e16] [cursor=pointer]
            - separator [ref=f9e18]
          - list [ref=f9e19]:
            - listitem [ref=f9e20]:
              - link "Admin" [ref=f9e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f9e25]:
              - link "PIM" [ref=f9e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f9e41]:
              - link "Leave" [ref=f9e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f9e46]:
              - link "Time" [ref=f9e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f9e54]:
              - link "Recruitment" [ref=f9e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f9e62]:
              - link "My Info" [ref=f9e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f9e70]:
              - link "Performance" [ref=f9e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f9e80]:
              - link "Dashboard" [ref=f9e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f9e85]:
              - link "Directory" [ref=f9e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f9e90]:
              - link "Maintenance" [ref=f9e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f9e96]:
              - link "Claim" [ref=f9e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f9e105]:
              - link "Buzz" [ref=f9e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f9e110]:
      - generic [ref=f9e111]:
        - generic [ref=f9e112]:
          - text: 
          - generic [ref=f9e113]:
            - heading "Time" [level=6] [ref=f9e114]
            - heading "/ Project Info" [level=6] [ref=f9e115]
        - link [ref=f9e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f9e118] [cursor=pointer]
        - list [ref=f9e124]:
          - listitem [ref=f9e125]:
            - generic [ref=f9e126] [cursor=pointer]:
              - img "profile picture" [ref=f9e127]
              - paragraph [ref=f9e128]: Timothy Rice
              - generic [ref=f9e129]: 
      - navigation "Topbar Menu" [ref=f9e131]:
        - list [ref=f9e132]:
          - listitem [ref=f9e133] [cursor=pointer]:
            - generic [ref=f9e134]:
              - text: Timesheets
              - generic [ref=f9e135]: 
          - listitem [ref=f9e136] [cursor=pointer]:
            - generic [ref=f9e137]:
              - text: Attendance
              - generic [ref=f9e138]: 
          - listitem [ref=f9e139] [cursor=pointer]:
            - generic [ref=f9e140]:
              - text: Reports
              - generic [ref=f9e141]: 
          - listitem [ref=f9e142] [cursor=pointer]:
            - generic [ref=f9e143]:
              - text: Project Info
              - generic [ref=f9e144]: 
          - button "" [ref=f9e146] [cursor=pointer]
  - generic [ref=f9e148]:
    - generic [ref=f9e150]:
      - generic [ref=f9e151]:
        - generic [ref=f9e152]:
          - heading "Projects" [level=5] [ref=f9e154]
          - button "" [ref=f9e157] [cursor=pointer]
        - separator [ref=f9e159]
        - generic [ref=f9e161]:
          - generic [ref=f9e163]:
            - generic [ref=f9e165]:
              - generic [ref=f9e166]: Customer Name
              - textbox "Type for hints..." [ref=f9e171]
            - generic [ref=f9e173]:
              - generic [ref=f9e174]: Project
              - textbox "Type for hints..." [ref=f9e179]: CancelDeleteProject1787546387707
              - generic [ref=f9e180]: Invalid
            - generic [ref=f9e183]:
              - generic [ref=f9e184]: Project Admin
              - textbox "Type for hints..." [ref=f9e189]
          - separator [ref=f9e190]
          - generic [ref=f9e191]:
            - button "Reset" [ref=f9e192] [cursor=pointer]
            - button "Search" [active] [ref=f9e193] [cursor=pointer]
      - generic [ref=f9e194]:
        - button " Add" [ref=f9e196] [cursor=pointer]:
          - generic [ref=f9e197]: 
          - text: Add
        - generic [ref=f9e198]:
          - separator [ref=f9e199]
          - generic [ref=f9e200]: (1) Record Found
        - table [ref=f9e203]:
          - rowgroup [ref=f9e204]:
            - row [ref=f9e205]:
              - columnheader "" [ref=f9e206]:
                - generic [ref=f9e208] [cursor=pointer]:
                  - checkbox "" [ref=f9e209]
                  - generic [ref=f9e210]: 
              - columnheader "Customer Name " [ref=f9e212]:
                - text: Customer Name
                - generic [ref=f9e213]:
                  - generic [ref=f9e214] [cursor=pointer]: 
                  - text:  
              - columnheader "Project " [ref=f9e215]:
                - text: Project
                - generic [ref=f9e216]:
                  - generic [ref=f9e217] [cursor=pointer]: 
                  - text:  
              - columnheader "Project Admins" [ref=f9e218]
              - columnheader "Actions" [ref=f9e219]
          - rowgroup [ref=f9e220]:
            - row [ref=f9e222]:
              - cell "" [ref=f9e223]:
                - generic [ref=f9e226] [cursor=pointer]:
                  - checkbox "" [ref=f9e227]
                  - generic [ref=f9e228]: 
              - cell "CancelDeleteCustomer1787546387707" [ref=f9e230]
              - cell "CancelDeleteProject1787546387707" [ref=f9e232]
              - cell "A8DCo 010Z" [ref=f9e234]
              - cell [ref=f9e236]:
                - generic [ref=f9e237]:
                  - button "" [ref=f9e238] [cursor=pointer]
                  - button "" [ref=f9e240] [cursor=pointer]
    - generic [ref=f9e243]:
      - paragraph [ref=f9e244]: OrangeHRM OS 5.9
      - paragraph [ref=f9e245]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f9e246] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1255 |   await expect(customerRow).toHaveCount(0, {
  1256 |     timeout: 20_000,
  1257 |   });
  1258 | }
  1259 | 
  1260 | async createProject(
  1261 |   details: CreateProjectDetails
  1262 | ): Promise<CreatedProject> {
  1263 |   await this.selectAutocompleteOption(
  1264 |     this.addProjectCustomerInput,
  1265 |     details.customerName,
  1266 |     details.customerName
  1267 |   );
  1268 | 
  1269 |   await this.addProjectNameInput.fill(
  1270 |     details.projectName
  1271 |   );
  1272 | 
  1273 |   const projectAdmin = await this.selectAutocompleteOption(
  1274 |     this.projectAdminInput,
  1275 |     details.projectAdminSearchText
  1276 |   );
  1277 | 
  1278 |   if (details.description !== undefined) {
  1279 |     await this.projectDescriptionInput.fill(
  1280 |       details.description
  1281 |     );
  1282 |   }
  1283 | 
  1284 |   const responsePromise =
  1285 |     this.page.waitForResponse(
  1286 |       response =>
  1287 |         response.url().includes(
  1288 |           '/api/v2/time/projects'
  1289 |         ) &&
  1290 |         response.request().method() === 'POST',
  1291 |       {
  1292 |         timeout: 30_000,
  1293 |       }
  1294 |     );
  1295 | 
  1296 |   await this.projectSaveButton.click();
  1297 | 
  1298 |   const response = await responsePromise;
  1299 | 
  1300 |   expect(
  1301 |     response.ok(),
  1302 |     `Project creation failed: ${response.status()}`
  1303 |   ).toBeTruthy();
  1304 | 
  1305 |   const responseBody = await response.json();
  1306 |   const projectId = String(responseBody.data?.id ?? '');
  1307 | 
  1308 |   expect(projectId).not.toBe('');
  1309 | 
  1310 |   await this.page.waitForURL(
  1311 |     new RegExp(`/time/saveProject/${projectId}$`),
  1312 |     {
  1313 |       timeout: 30_000,
  1314 |     }
  1315 |   );
  1316 | 
  1317 |   await expect(this.loadingSpinner).toBeHidden({
  1318 |     timeout: 30_000,
  1319 |   });
  1320 | 
  1321 |   // A successful creation opens the saved project details page.
  1322 |   // Return to the list so callers can search and verify the project.
  1323 |   await this.gotoProjects();
  1324 | 
  1325 |   return {
  1326 |     projectId,
  1327 |     projectAdmin,
  1328 |   };
  1329 | }
  1330 | 
  1331 | async searchProject(
  1332 |   filters: SearchProjectFilters
  1333 | ): Promise<void> {
  1334 |   await expect(this.loadingSpinner).toBeHidden({
  1335 |     timeout: 30_000,
  1336 |   });
  1337 | 
  1338 |   if (filters.customerName !== undefined) {
  1339 |     await this.selectAutocompleteOption(
  1340 |       this.projectCustomerFilterInput,
  1341 |       filters.customerName,
  1342 |       filters.customerName
  1343 |     );
  1344 |   }
  1345 | 
  1346 |   if (filters.projectName !== undefined) {
  1347 |     await this.selectAutocompleteOption(
  1348 |       this.projectNameFilterInput,
  1349 |       filters.projectName,
  1350 |       filters.projectName
  1351 |     );
  1352 |   }
  1353 | 
  1354 |   const responsePromise =
> 1355 |     this.page.waitForResponse(
       |               ^ TimeoutError: page.waitForResponse: Timeout 30000ms exceeded while waiting for event "response"
  1356 |       response => {
  1357 |         if (
  1358 |           !response.url().includes('/api/v2/time/projects') ||
  1359 |           response.request().method() !== 'GET'
  1360 |         ) {
  1361 |           return false;
  1362 |         }
  1363 | 
  1364 |         return true;
  1365 |       },
  1366 |       {
  1367 |         timeout: 30_000,
  1368 |       }
  1369 |     );
  1370 | 
  1371 |   await this.projectSearchButton.click();
  1372 | 
  1373 |   const response = await responsePromise;
  1374 | 
  1375 |   expect(
  1376 |     response.ok(),
  1377 |     `Project search failed: ${response.status()}`
  1378 |   ).toBeTruthy();
  1379 | 
  1380 |   await expect(this.loadingSpinner).toBeHidden({
  1381 |     timeout: 30_000,
  1382 |   });
  1383 | }
  1384 | 
  1385 | async verifyProjectRow(
  1386 |   details: VerifyProjectRowDetails,
  1387 | ): Promise<Locator> {
  1388 |   const projectRow = this.projectRows.filter({
  1389 |     has: this.page
  1390 |       .locator('.oxd-table-cell')
  1391 |       .nth(2)
  1392 |       .getByText(details.projectName, {
  1393 |         exact: true,
  1394 |       }),
  1395 |   });
  1396 | 
  1397 |   await expect(projectRow).toHaveCount(1, {
  1398 |     timeout: 20_000,
  1399 |   });
  1400 | 
  1401 |   const cells = projectRow.locator(
  1402 |     '.oxd-table-cell'
  1403 |   );
  1404 | 
  1405 |   await expect(cells.nth(2)).toHaveText(
  1406 |     details.projectName
  1407 |   );
  1408 | 
  1409 |   if (details.customerName !== undefined) {
  1410 |     await expect(cells.nth(1)).toHaveText(
  1411 |       details.customerName
  1412 |     );
  1413 |   }
  1414 | 
  1415 |   if (details.projectAdmin !== undefined) {
  1416 |     const adminNameParts = details.projectAdmin
  1417 |       .trim()
  1418 |       .split(/\s+/);
  1419 |     const expectedAdminPattern = new RegExp(
  1420 |       `${adminNameParts[0]}.*${adminNameParts[adminNameParts.length - 1]}`,
  1421 |       'i'
  1422 |     );
  1423 | 
  1424 |     await expect(cells.nth(3)).toContainText(
  1425 |       expectedAdminPattern
  1426 |     );
  1427 |   }
  1428 | 
  1429 |   return projectRow;
  1430 | }
  1431 | 
  1432 | async deleteProjectByName(
  1433 |   projectName: string
  1434 | ): Promise<void> {
  1435 |   const projectRow = this.projectRows.filter({
  1436 |     has: this.page
  1437 |       .locator('.oxd-table-cell')
  1438 |       .nth(2)
  1439 |       .getByText(projectName, {
  1440 |         exact: true,
  1441 |       }),
  1442 |   });
  1443 | 
  1444 |   await expect(projectRow).toHaveCount(1);
  1445 | 
  1446 |   const deleteButton =
  1447 |     projectRow.getByRole('button').filter({
  1448 |       has: this.page.locator('i.bi-trash'),
  1449 |     });
  1450 | 
  1451 |   await deleteButton.click();
  1452 | 
  1453 |   await expect(
  1454 |     this.confirmationDialog
  1455 |   ).toBeVisible();
```