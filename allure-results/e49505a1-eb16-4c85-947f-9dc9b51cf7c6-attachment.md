# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_093 - Admin should distinguish employees with similar names using employee ID @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:1326:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not "0596"
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
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Nguyễn Đức
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e147]:
      - heading "Add Employee" [level=6] [ref=f4e148]
      - separator [ref=f4e149]
      - generic [ref=f4e150]:
        - generic [ref=f4e151]:
          - generic [ref=f4e152]:
            - generic [ref=f4e154]:
              - button "Choose File"
              - generic [ref=f4e155]:
                - img "profile picture" [ref=f4e157]
                - button "" [ref=f4e158] [cursor=pointer]
            - paragraph [ref=f4e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f4e161]:
            - generic [ref=f4e162]:
              - generic [ref=f4e165]:
                - generic [ref=f4e166]: Employee Full Name*
                - generic [ref=f4e168]:
                  - textbox "First Name" [ref=f4e171]: Similar1786454174854276
                  - textbox "Middle Name" [ref=f4e174]: Test
                  - textbox "Last Name" [ref=f4e177]: Second
              - generic [ref=f4e180]:
                - generic [ref=f4e181]: Employee Id
                - textbox [ref=f4e184]: "0596"
            - separator [ref=f4e185]
            - generic [ref=f4e186]:
              - paragraph [ref=f4e187]: Create Login Details
              - checkbox [ref=f4e190]
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
  1248 |     navigationPage,
  1249 |     pimPage,
  1250 |   }) => {
  1251 |     const data = adminData.TC_PIM_090;
  1252 |     test.setTimeout(data.timeout);
  1253 |     const e = employeeFrom(data.employee);
  1254 |     await navigationPage.gotoPIM();
  1255 |     await pimPage.gotoAddEmployee();
  1256 |     const id = await pimPage.addEmployee(e);
  1257 |     await pimPage.gotoEmployeeList();
  1258 |     await pimPage.filterEmployeeList({
  1259 |       employeeId: id,
  1260 |       employeeName: e.firstName,
  1261 |     });
  1262 |     await pimPage.clickOnFilterSearch();
  1263 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1264 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1265 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(
  1266 |       new RegExp(e.firstName),
  1267 |     );
  1268 |     await pimPage.deleteEmployeeById(id);
  1269 |   });
  1270 | 
  1271 |   test("TC_PIM_091 - Admin should reset employee search filters multiple times @positive @filter @regression", async ({
  1272 |     navigationPage,
  1273 |     pimPage,
  1274 |   }) => {
  1275 |     const data = adminData.TC_PIM_091;
  1276 |     test.setTimeout(data.timeout);
  1277 |     const e = employeeFrom(data.employee);
  1278 |     await navigationPage.gotoPIM();
  1279 |     await pimPage.gotoAddEmployee();
  1280 |     const id = await pimPage.addEmployee(e);
  1281 |     await pimPage.gotoEmployeeList();
  1282 |     for (let i = 0; i < 2; i++) {
  1283 |       await pimPage.filterEmployeeList({ employeeId: id });
  1284 |       await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1285 |       await pimPage.resetEmployeeFilters();
  1286 |       await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
  1287 |     }
  1288 |     await pimPage.filterEmployeeList({ employeeId: id });
  1289 |     await pimPage.clickOnFilterSearch();
  1290 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1291 |     await pimPage.deleteEmployeeById(id);
  1292 |   });
  1293 | 
  1294 |   test("TC_PIM_092 - Deleting one employee should not delete another @positive @delete @regression", async ({
  1295 |     navigationPage,
  1296 |     pimPage,
  1297 |   }) => {
  1298 |     const data = adminData.TC_PIM_092;
  1299 |     test.setTimeout(data.timeout);
  1300 |     const value = unique();
  1301 |     const first = employeeFrom(data.firstEmployee, value);
  1302 |     const second = employeeFrom(data.secondEmployee, value);
  1303 |     await navigationPage.gotoPIM();
  1304 |     await pimPage.gotoAddEmployee();
  1305 |     const firstId = await pimPage.addEmployee(first);
  1306 |     await pimPage.gotoAddEmployee();
  1307 |     const secondId = await pimPage.addEmployee(second);
  1308 |     await pimPage.gotoEmployeeList();
  1309 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1310 |     await pimPage.clickOnFilterSearch();
  1311 |     await pimPage.deleteEmployeeById(firstId);
  1312 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1313 |     await pimPage.clickOnFilterSearch();
  1314 |     await pimPage.verifyNoEmployeeRecordsFound(firstId);
  1315 |     await pimPage.resetEmployeeFilters();
  1316 |     await pimPage.filterEmployeeList({ employeeId: secondId });
  1317 |     await pimPage.clickOnFilterSearch();
  1318 |     await pimPage.verifyEmployeeSearchResult(
  1319 |       secondId,
  1320 |       second.firstName,
  1321 |       second.lastName,
  1322 |     );
  1323 |     await pimPage.deleteEmployeeById(secondId);
  1324 |   });
  1325 | 
  1326 |   test("TC_PIM_093 - Admin should distinguish employees with similar names using employee ID @positive @search @regression", async ({
  1327 |     navigationPage,
  1328 |     pimPage,
  1329 |   }) => {
  1330 |     const data = adminData.TC_PIM_093;
  1331 |     test.setTimeout(data.timeout);
  1332 |     const name = `${data.sharedFirstNamePrefix}${unique()}`;
  1333 |     const first = {
  1334 |       firstName: name,
  1335 |       middleName: data.middleName,
  1336 |       lastName: data.firstLastName,
  1337 |     };
  1338 |     const second = {
  1339 |       firstName: name,
  1340 |       middleName: data.middleName,
  1341 |       lastName: data.secondLastName,
  1342 |     };
  1343 |     await navigationPage.gotoPIM();
  1344 |     await pimPage.gotoAddEmployee();
  1345 |     const firstId = await pimPage.addEmployee(first);
  1346 |     await pimPage.gotoAddEmployee();
  1347 |     const secondId = await pimPage.addEmployee(second);
> 1348 |     expect(firstId).not.toBe(secondId);
       |                         ^ Error: expect(received).not.toBe(expected) // Object.is equality
  1349 |     await pimPage.gotoEmployeeList();
  1350 |     for (const [id, e] of [
  1351 |       [firstId, first],
  1352 |       [secondId, second],
  1353 |     ] as const) {
  1354 |       await pimPage.filterEmployeeList({ employeeId: id });
  1355 |       await pimPage.clickOnFilterSearch();
  1356 |       await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1357 |       await pimPage.resetEmployeeFilters();
  1358 |     }
  1359 |     for (const id of [secondId, firstId]) {
  1360 |       await pimPage.filterEmployeeList({ employeeId: id });
  1361 |       await pimPage.clickOnFilterSearch();
  1362 |       await pimPage.deleteEmployeeById(id);
  1363 |       await pimPage.resetEmployeeFilters();
  1364 |     }
  1365 |   });
  1366 | 
  1367 |   test("TC_PIM_094 - New employee ID should replace previous employee ID filter @positive @filter @regression", async ({
  1368 |     navigationPage,
  1369 |     pimPage,
  1370 |   }) => {
  1371 |     const data = adminData.TC_PIM_094;
  1372 |     test.setTimeout(data.timeout);
  1373 |     const e = employeeFrom(data.employee);
  1374 |     await navigationPage.gotoPIM();
  1375 |     await pimPage.gotoAddEmployee();
  1376 |     const id = await pimPage.addEmployee(e);
  1377 |     await pimPage.gotoEmployeeList();
  1378 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1379 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(
  1380 |       data.invalidEmployeeId,
  1381 |     );
  1382 |     await pimPage.filterEmployeeList({ employeeId: id });
  1383 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1384 |     await pimPage.clickOnFilterSearch();
  1385 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1386 |     await pimPage.deleteEmployeeById(id);
  1387 |   });
  1388 | 
  1389 |   test("TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression", async ({
  1390 |     page,
  1391 |     navigationPage,
  1392 |     pimPage,
  1393 |   }) => {
  1394 |     const data = adminData.TC_PIM_095;
  1395 |     test.setTimeout(data.timeout);
  1396 |     const e = employeeFrom(data.employee);
  1397 |     await navigationPage.gotoPIM();
  1398 |     await pimPage.gotoAddEmployee();
  1399 |     const id = await pimPage.addEmployee(e);
  1400 |     await pimPage.gotoEmployeeList();
  1401 |     await pimPage.filterEmployeeList({ employeeId: id });
  1402 |     await pimPage.clickOnFilterSearch();
  1403 |     await pimPage.openEmployeeById(id);
  1404 |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
  1405 |     await expect(pimPage.firstnameInput).toHaveValue(e.firstName);
  1406 |     await expect(pimPage.middlenameInput).toHaveValue(e.middleName);
  1407 |     await expect(pimPage.lastnameInput).toHaveValue(e.lastName);
  1408 |     await expect(pimPage.employeeID).toHaveValue(id);
  1409 |     await pimPage.gotoEmployeeList();
  1410 |     await pimPage.filterEmployeeList({ employeeId: id });
  1411 |     await pimPage.clickOnFilterSearch();
  1412 |     await pimPage.deleteEmployeeById(id);
  1413 |   });
  1414 | 
  1415 |   test("TC_PIM_096 - Admin should search successfully after invalid employee ID search @positive @search @regression", async ({
  1416 |     navigationPage,
  1417 |     pimPage,
  1418 |   }) => {
  1419 |     const data = adminData.TC_PIM_096;
  1420 |     test.setTimeout(data.timeout);
  1421 |     const e = employeeFrom(data.employee);
  1422 |     await navigationPage.gotoPIM();
  1423 |     await pimPage.gotoAddEmployee();
  1424 |     const id = await pimPage.addEmployee(e);
  1425 |     await pimPage.gotoEmployeeList();
  1426 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1427 |     await pimPage.clickOnFilterSearch();
  1428 |     await pimPage.verifyNoEmployeeRecordsFound(data.invalidEmployeeId);
  1429 |     await pimPage.resetEmployeeFilters();
  1430 |     await pimPage.filterEmployeeList({ employeeId: id });
  1431 |     await pimPage.clickOnFilterSearch();
  1432 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1433 |     await pimPage.deleteEmployeeById(id);
  1434 |   });
  1435 | 
  1436 |   test("TC_PIM_097 - Admin should search using a partial employee name @positive @search @regression", async ({
  1437 |     navigationPage,
  1438 |     pimPage,
  1439 |   }) => {
  1440 |     const data = adminData.TC_PIM_097;
  1441 |     test.setTimeout(data.timeout);
  1442 |     const e = employeeFrom(data.employee);
  1443 |     await navigationPage.gotoPIM();
  1444 |     await pimPage.gotoAddEmployee();
  1445 |     const id = await pimPage.addEmployee(e);
  1446 |     await pimPage.gotoEmployeeList();
  1447 |     await pimPage.selectEmployeeFromAutocomplete(
  1448 |       e.firstName.substring(0, data.partialNameLength),
```