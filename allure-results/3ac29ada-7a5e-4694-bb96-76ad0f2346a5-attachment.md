# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_199 - Admin should edit an existing project successfully @positive @edit @project-info @regression
- Location: tests\Time\time.spec.ts:1586:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(2).getByText('UpdatedProject1787546021278', { exact: true }) })
Expected: 1
Received: 0
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(2).getByText('UpdatedProject1787546021278', { exact: true }) })
    43 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f11e3]:
  - generic:
    - complementary [ref=f11e4]:
      - navigation "Sidepanel" [ref=f11e5]:
        - generic [ref=f11e6]:
          - link [ref=f11e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f11e9]
          - text: 
        - generic [ref=f11e10]:
          - generic [ref=f11e11]:
            - generic [ref=f11e12]:
              - textbox "Search" [ref=f11e15]
              - button "" [ref=f11e16] [cursor=pointer]
            - separator [ref=f11e18]
          - list [ref=f11e19]:
            - listitem [ref=f11e20]:
              - link "Admin" [ref=f11e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f11e25]:
              - link "PIM" [ref=f11e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f11e41]:
              - link "Leave" [ref=f11e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f11e46]:
              - link "Time" [ref=f11e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f11e54]:
              - link "Recruitment" [ref=f11e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f11e62]:
              - link "My Info" [ref=f11e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f11e70]:
              - link "Performance" [ref=f11e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f11e80]:
              - link "Dashboard" [ref=f11e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f11e85]:
              - link "Directory" [ref=f11e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f11e90]:
              - link "Maintenance" [ref=f11e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f11e96]:
              - link "Claim" [ref=f11e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f11e105]:
              - link "Buzz" [ref=f11e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f11e110]:
      - generic [ref=f11e111]:
        - generic [ref=f11e112]:
          - text: 
          - generic [ref=f11e113]:
            - heading "Time" [level=6] [ref=f11e114]
            - heading "/ Project Info" [level=6] [ref=f11e115]
        - link [ref=f11e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f11e118] [cursor=pointer]
        - list [ref=f11e124]:
          - listitem [ref=f11e125]:
            - generic [ref=f11e126] [cursor=pointer]:
              - img "profile picture" [ref=f11e127]
              - paragraph [ref=f11e128]: Timothy Rice
              - generic [ref=f11e129]: 
      - navigation "Topbar Menu" [ref=f11e131]:
        - list [ref=f11e132]:
          - listitem [ref=f11e133] [cursor=pointer]:
            - generic [ref=f11e134]:
              - text: Timesheets
              - generic [ref=f11e135]: 
          - listitem [ref=f11e136] [cursor=pointer]:
            - generic [ref=f11e137]:
              - text: Attendance
              - generic [ref=f11e138]: 
          - listitem [ref=f11e139] [cursor=pointer]:
            - generic [ref=f11e140]:
              - text: Reports
              - generic [ref=f11e141]: 
          - listitem [ref=f11e142] [cursor=pointer]:
            - generic [ref=f11e143]:
              - text: Project Info
              - generic [ref=f11e144]: 
          - button "" [ref=f11e146] [cursor=pointer]
  - generic [ref=f11e148]:
    - generic [ref=f11e150]:
      - generic [ref=f11e151]:
        - generic [ref=f11e152]:
          - heading "Projects" [level=5] [ref=f11e154]
          - button "" [ref=f11e157] [cursor=pointer]
        - separator [ref=f11e159]
        - generic [ref=f11e161]:
          - generic [ref=f11e163]:
            - generic [ref=f11e165]:
              - generic [ref=f11e166]: Customer Name
              - textbox "Type for hints..." [ref=f11e171]
            - generic [ref=f11e173]:
              - generic [ref=f11e174]: Project
              - textbox "Type for hints..." [ref=f11e179]: UpdatedProject1787546021278
              - generic [ref=f11e180]: Invalid
            - generic [ref=f11e183]:
              - generic [ref=f11e184]: Project Admin
              - textbox "Type for hints..." [ref=f11e189]
          - separator [ref=f11e190]
          - generic [ref=f11e191]:
            - button "Reset" [ref=f11e192] [cursor=pointer]
            - button "Search" [active] [ref=f11e193] [cursor=pointer]
      - generic [ref=f11e194]:
        - button " Add" [ref=f11e196] [cursor=pointer]:
          - generic [ref=f11e197]: 
          - text: Add
        - generic [ref=f11e198]:
          - separator [ref=f11e199]
          - generic [ref=f11e200]: (15) Records Found
        - table [ref=f11e203]:
          - rowgroup [ref=f11e204]:
            - row [ref=f11e205]:
              - columnheader "" [ref=f11e206]:
                - generic [ref=f11e208] [cursor=pointer]:
                  - checkbox "" [ref=f11e209]
                  - generic [ref=f11e210]: 
              - columnheader "Customer Name " [ref=f11e212]:
                - text: Customer Name
                - generic [ref=f11e213]:
                  - generic [ref=f11e214] [cursor=pointer]: 
                  - text:  
              - columnheader "Project " [ref=f11e215]:
                - text: Project
                - generic [ref=f11e216]:
                  - generic [ref=f11e217] [cursor=pointer]: 
                  - text:  
              - columnheader "Project Admins" [ref=f11e218]
              - columnheader "Actions" [ref=f11e219]
          - rowgroup [ref=f11e220]:
            - row [ref=f11e222]:
              - cell "" [ref=f11e223]:
                - generic [ref=f11e227]:
                  - checkbox "" [ref=f11e228]
                  - generic [ref=f11e229]: 
              - cell "ACME Ltd" [ref=f11e231]
              - cell "ACME Ltd" [ref=f11e233]
              - cell [ref=f11e235]
              - cell [ref=f11e236]:
                - generic [ref=f11e237]:
                  - button "" [ref=f11e238] [cursor=pointer]
                  - button "" [ref=f11e240] [cursor=pointer]
            - row [ref=f11e243]:
              - cell "" [ref=f11e244]:
                - generic [ref=f11e248]:
                  - checkbox "" [ref=f11e249]
                  - generic [ref=f11e250]: 
              - cell "Apache Software Foundation" [ref=f11e252]
              - cell "ASF - Phase 1" [ref=f11e254]
              - cell [ref=f11e256]
              - cell [ref=f11e257]:
                - generic [ref=f11e258]:
                  - button "" [ref=f11e259] [cursor=pointer]
                  - button "" [ref=f11e261] [cursor=pointer]
            - row [ref=f11e264]:
              - cell "" [ref=f11e265]:
                - generic [ref=f11e268] [cursor=pointer]:
                  - checkbox "" [ref=f11e269]
                  - generic [ref=f11e270]: 
              - cell "ProjectCustomer1787545006514" [ref=f11e272]
              - cell "AutoProject1787545006514" [ref=f11e274]
              - cell "A8DCo 010Z" [ref=f11e276]
              - cell [ref=f11e278]:
                - generic [ref=f11e279]:
                  - button "" [ref=f11e280] [cursor=pointer]
                  - button "" [ref=f11e282] [cursor=pointer]
            - row [ref=f11e285]:
              - cell "" [ref=f11e286]:
                - generic [ref=f11e290]:
                  - checkbox "" [ref=f11e291]
                  - generic [ref=f11e292]: 
              - cell "The Coca-Cola Company" [ref=f11e294]
              - cell "Coke - Phase 1" [ref=f11e296]
              - cell [ref=f11e298]
              - cell [ref=f11e299]:
                - generic [ref=f11e300]:
                  - button "" [ref=f11e301] [cursor=pointer]
                  - button "" [ref=f11e303] [cursor=pointer]
            - row [ref=f11e306]:
              - cell "" [ref=f11e307]:
                - generic [ref=f11e310] [cursor=pointer]:
                  - checkbox "" [ref=f11e311]
                  - generic [ref=f11e312]: 
              - cell "EditCustomer1787546021278" [ref=f11e314]
              - cell "EditProject1787546021278" [ref=f11e316]
              - cell "A8DCo 010Z" [ref=f11e318]
              - cell [ref=f11e320]:
                - generic [ref=f11e321]:
                  - button "" [ref=f11e322] [cursor=pointer]
                  - button "" [ref=f11e324] [cursor=pointer]
            - row [ref=f11e327]:
              - cell "" [ref=f11e328]:
                - generic [ref=f11e331] [cursor=pointer]:
                  - checkbox "" [ref=f11e332]
                  - generic [ref=f11e333]: 
              - cell "FilterCustomer1787545119909" [ref=f11e335]
              - cell "FilterProject1787545119909" [ref=f11e337]
              - cell "A8DCo 010Z" [ref=f11e339]
              - cell [ref=f11e341]:
                - generic [ref=f11e342]:
                  - button "" [ref=f11e343] [cursor=pointer]
                  - button "" [ref=f11e345] [cursor=pointer]
            - row [ref=f11e348]:
              - cell "" [ref=f11e349]:
                - generic [ref=f11e353]:
                  - checkbox "" [ref=f11e354]
                  - generic [ref=f11e355]: 
              - cell "Fresh Books Software Ltd" [ref=f11e357]
              - cell "Fresh Books Software Ltd - Phase I" [ref=f11e359]
              - cell [ref=f11e361]
              - cell [ref=f11e362]:
                - generic [ref=f11e363]:
                  - button "" [ref=f11e364] [cursor=pointer]
                  - button "" [ref=f11e366] [cursor=pointer]
            - row [ref=f11e369]:
              - cell "" [ref=f11e370]:
                - generic [ref=f11e374]:
                  - checkbox "" [ref=f11e375]
                  - generic [ref=f11e376]: 
              - cell "FreeWave Technologies, Inc." [ref=f11e378]
              - cell "FWT - Phase 1" [ref=f11e380]
              - cell [ref=f11e382]
              - cell [ref=f11e383]:
                - generic [ref=f11e384]:
                  - button "" [ref=f11e385] [cursor=pointer]
                  - button "" [ref=f11e387] [cursor=pointer]
            - row [ref=f11e390]:
              - cell "" [ref=f11e391]:
                - generic [ref=f11e395]:
                  - checkbox "" [ref=f11e396]
                  - generic [ref=f11e397]: 
              - cell "Internal" [ref=f11e399]
              - cell "General HR Tasks" [ref=f11e401]
              - cell "Timothy Rice" [ref=f11e403]
              - cell [ref=f11e405]:
                - generic [ref=f11e406]:
                  - button "" [ref=f11e407] [cursor=pointer]
                  - button "" [ref=f11e409] [cursor=pointer]
            - row [ref=f11e412]:
              - cell "" [ref=f11e413]:
                - generic [ref=f11e417]:
                  - checkbox "" [ref=f11e418]
                  - generic [ref=f11e419]: 
              - cell "Global Corp and Co" [ref=f11e421]
              - cell "Global Software phase - 1" [ref=f11e423]
              - cell [ref=f11e425]
              - cell [ref=f11e426]:
                - generic [ref=f11e427]:
                  - button "" [ref=f11e428] [cursor=pointer]
                  - button "" [ref=f11e430] [cursor=pointer]
            - row [ref=f11e433]:
              - cell "" [ref=f11e434]:
                - generic [ref=f11e438]:
                  - checkbox "" [ref=f11e439]
                  - generic [ref=f11e440]: 
              - cell "Global Corp and Co" [ref=f11e442]
              - cell "Global Software phase - 2" [ref=f11e444]
              - cell [ref=f11e446]
              - cell [ref=f11e447]:
                - generic [ref=f11e448]:
                  - button "" [ref=f11e449] [cursor=pointer]
                  - button "" [ref=f11e451] [cursor=pointer]
            - row [ref=f11e454]:
              - cell "" [ref=f11e455]:
                - generic [ref=f11e459]:
                  - checkbox "" [ref=f11e460]
                  - generic [ref=f11e461]: 
              - cell "The Priceline Group" [ref=f11e463]
              - cell "Priceline Group - Phase 1" [ref=f11e465]
              - cell "Timothy Rice" [ref=f11e467]
              - cell [ref=f11e469]:
                - generic [ref=f11e470]:
                  - button "" [ref=f11e471] [cursor=pointer]
                  - button "" [ref=f11e473] [cursor=pointer]
            - row [ref=f11e476]:
              - cell "" [ref=f11e477]:
                - generic [ref=f11e481]:
                  - checkbox "" [ref=f11e482]
                  - generic [ref=f11e483]: 
              - cell "Internal" [ref=f11e485]
              - cell "Recruitment" [ref=f11e487]
              - cell "Timothy Rice" [ref=f11e489]
              - cell [ref=f11e491]:
                - generic [ref=f11e492]:
                  - button "" [ref=f11e493] [cursor=pointer]
                  - button "" [ref=f11e495] [cursor=pointer]
            - row [ref=f11e498]:
              - cell "" [ref=f11e499]:
                - generic [ref=f11e502] [cursor=pointer]:
                  - checkbox "" [ref=f11e503]
                  - generic [ref=f11e504]: 
              - cell "SearchCustomer1787545063045" [ref=f11e506]
              - cell "SearchProject1787545063045" [ref=f11e508]
              - cell "A8DCo 010Z" [ref=f11e510]
              - cell [ref=f11e512]:
                - generic [ref=f11e513]:
                  - button "" [ref=f11e514] [cursor=pointer]
                  - button "" [ref=f11e516] [cursor=pointer]
            - row [ref=f11e519]:
              - cell "" [ref=f11e520]:
                - generic [ref=f11e524]:
                  - checkbox "" [ref=f11e525]
                  - generic [ref=f11e526]: 
              - cell "Internal" [ref=f11e528]
              - cell "Training and Development" [ref=f11e530]
              - cell "Timothy Rice" [ref=f11e532]
              - cell [ref=f11e534]:
                - generic [ref=f11e535]:
                  - button "" [ref=f11e536] [cursor=pointer]
                  - button "" [ref=f11e538] [cursor=pointer]
    - generic [ref=f11e541]:
      - paragraph [ref=f11e542]: OrangeHRM OS 5.9
      - paragraph [ref=f11e543]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f11e544] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  1347 |     await this.projectNameFilterInput.fill(
  1348 |       filters.projectName
  1349 |     );
  1350 |   }
  1351 | 
  1352 |   const responsePromise =
  1353 |     this.page.waitForResponse(
  1354 |       response => {
  1355 |         if (
  1356 |           !response.url().includes('/api/v2/time/projects') ||
  1357 |           response.request().method() !== 'GET'
  1358 |         ) {
  1359 |           return false;
  1360 |         }
  1361 | 
  1362 |         if (filters.projectName !== undefined) {
  1363 |           return decodeURIComponent(response.url()).includes(
  1364 |             filters.projectName
  1365 |           );
  1366 |         }
  1367 | 
  1368 |         return true;
  1369 |       },
  1370 |       {
  1371 |         timeout: 30_000,
  1372 |       }
  1373 |     );
  1374 | 
  1375 |   await this.projectSearchButton.click();
  1376 | 
  1377 |   const response = await responsePromise;
  1378 | 
  1379 |   expect(
  1380 |     response.ok(),
  1381 |     `Project search failed: ${response.status()}`
  1382 |   ).toBeTruthy();
  1383 | 
  1384 |   await expect(this.loadingSpinner).toBeHidden({
  1385 |     timeout: 30_000,
  1386 |   });
  1387 | }
  1388 | 
  1389 | async verifyProjectRow(
  1390 |   details: VerifyProjectRowDetails,
  1391 | ): Promise<Locator> {
  1392 |   const projectRow = this.projectRows.filter({
  1393 |     has: this.page
  1394 |       .locator('.oxd-table-cell')
  1395 |       .nth(2)
  1396 |       .getByText(details.projectName, {
  1397 |         exact: true,
  1398 |       }),
  1399 |   });
  1400 | 
> 1401 |   await expect(projectRow).toHaveCount(1, {
       |                            ^ Error: expect(locator).toHaveCount(expected) failed
  1402 |     timeout: 20_000,
  1403 |   });
  1404 | 
  1405 |   const cells = projectRow.locator(
  1406 |     '.oxd-table-cell'
  1407 |   );
  1408 | 
  1409 |   await expect(cells.nth(2)).toHaveText(
  1410 |     details.projectName
  1411 |   );
  1412 | 
  1413 |   if (details.customerName !== undefined) {
  1414 |     await expect(cells.nth(1)).toHaveText(
  1415 |       details.customerName
  1416 |     );
  1417 |   }
  1418 | 
  1419 |   if (details.projectAdmin !== undefined) {
  1420 |     const adminNameParts = details.projectAdmin
  1421 |       .trim()
  1422 |       .split(/\s+/);
  1423 |     const expectedAdminPattern = new RegExp(
  1424 |       `${adminNameParts[0]}.*${adminNameParts[adminNameParts.length - 1]}`,
  1425 |       'i'
  1426 |     );
  1427 | 
  1428 |     await expect(cells.nth(3)).toContainText(
  1429 |       expectedAdminPattern
  1430 |     );
  1431 |   }
  1432 | 
  1433 |   return projectRow;
  1434 | }
  1435 | 
  1436 | async deleteProjectByName(
  1437 |   projectName: string
  1438 | ): Promise<void> {
  1439 |   const projectRow = this.projectRows.filter({
  1440 |     has: this.page
  1441 |       .locator('.oxd-table-cell')
  1442 |       .nth(2)
  1443 |       .getByText(projectName, {
  1444 |         exact: true,
  1445 |       }),
  1446 |   });
  1447 | 
  1448 |   await expect(projectRow).toHaveCount(1);
  1449 | 
  1450 |   const deleteButton =
  1451 |     projectRow.getByRole('button').filter({
  1452 |       has: this.page.locator('i.bi-trash'),
  1453 |     });
  1454 | 
  1455 |   await deleteButton.click();
  1456 | 
  1457 |   await expect(
  1458 |     this.confirmationDialog
  1459 |   ).toBeVisible();
  1460 | 
  1461 |   const responsePromise =
  1462 |     this.page.waitForResponse(
  1463 |       response =>
  1464 |         response.url().includes(
  1465 |           '/api/v2/time/projects'
  1466 |         ) &&
  1467 |         response.request().method() === 'DELETE',
  1468 |       {
  1469 |         timeout: 30_000,
  1470 |       }
  1471 |     );
  1472 | 
  1473 |   await this.confirmDeleteButton.click();
  1474 | 
  1475 |   const response = await responsePromise;
  1476 | 
  1477 |   expect(
  1478 |     response.ok(),
  1479 |     `Project deletion failed: ${response.status()}`
  1480 |   ).toBeTruthy();
  1481 | 
  1482 |   await expect(projectRow).toHaveCount(0, {
  1483 |     timeout: 20_000,
  1484 |   });
  1485 | }
  1486 | }
  1487 | 
```