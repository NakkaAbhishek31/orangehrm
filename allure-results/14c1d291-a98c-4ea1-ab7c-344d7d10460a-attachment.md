# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression
- Location: tests\Admin\admin-users.spec.ts:1391:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: getByRole('textbox', { name: 'First Name' })
Expected: "Details1786554146471515"
Error: element(s) not found

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'First Name' })
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Test source

```ts
  1307 |     const firstId = await pimPage.addEmployee(first);
  1308 |     await pimPage.gotoAddEmployee();
  1309 |     const secondId = await pimPage.addEmployee(second);
  1310 |     await pimPage.gotoEmployeeList();
  1311 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1312 |     await pimPage.clickOnFilterSearch();
  1313 |     await pimPage.deleteEmployeeById(firstId);
  1314 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1315 |     await pimPage.clickOnFilterSearch();
  1316 |     await pimPage.verifyNoEmployeeRecordsFound(firstId);
  1317 |     await pimPage.resetEmployeeFilters();
  1318 |     await pimPage.filterEmployeeList({ employeeId: secondId });
  1319 |     await pimPage.clickOnFilterSearch();
  1320 |     await pimPage.verifyEmployeeSearchResult(
  1321 |       secondId,
  1322 |       second.firstName,
  1323 |       second.lastName,
  1324 |     );
  1325 |     await pimPage.deleteEmployeeById(secondId);
  1326 |   });
  1327 | 
  1328 |   test("TC_PIM_093 - Admin should distinguish employees with similar names using employee ID @positive @search @regression", async ({
  1329 |     navigationPage,
  1330 |     pimPage,
  1331 |   }) => {
  1332 |     const data = adminData.TC_PIM_093;
  1333 |     test.setTimeout(data.timeout);
  1334 |     const name = `${data.sharedFirstNamePrefix}${unique()}`;
  1335 |     const first = {
  1336 |       firstName: name,
  1337 |       middleName: data.middleName,
  1338 |       lastName: data.firstLastName,
  1339 |     };
  1340 |     const second = {
  1341 |       firstName: name,
  1342 |       middleName: data.middleName,
  1343 |       lastName: data.secondLastName,
  1344 |     };
  1345 |     await navigationPage.gotoPIM();
  1346 |     await pimPage.gotoAddEmployee();
  1347 |     const firstId = await pimPage.addEmployee(first);
  1348 |     await pimPage.gotoAddEmployee();
  1349 |     const secondId = await pimPage.addEmployee(second);
  1350 |     expect(firstId).not.toBe(secondId);
  1351 |     await pimPage.gotoEmployeeList();
  1352 |     for (const [id, e] of [
  1353 |       [firstId, first],
  1354 |       [secondId, second],
  1355 |     ] as const) {
  1356 |       await pimPage.filterEmployeeList({ employeeId: id });
  1357 |       await pimPage.clickOnFilterSearch();
  1358 |       await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1359 |       await pimPage.resetEmployeeFilters();
  1360 |     }
  1361 |     for (const id of [secondId, firstId]) {
  1362 |       await pimPage.filterEmployeeList({ employeeId: id });
  1363 |       await pimPage.clickOnFilterSearch();
  1364 |       await pimPage.deleteEmployeeById(id);
  1365 |       await pimPage.resetEmployeeFilters();
  1366 |     }
  1367 |   });
  1368 | 
  1369 |   test("TC_PIM_094 - New employee ID should replace previous employee ID filter @positive @filter @regression", async ({
  1370 |     navigationPage,
  1371 |     pimPage,
  1372 |   }) => {
  1373 |     const data = adminData.TC_PIM_094;
  1374 |     test.setTimeout(data.timeout);
  1375 |     const e = employeeFrom(data.employee);
  1376 |     await navigationPage.gotoPIM();
  1377 |     await pimPage.gotoAddEmployee();
  1378 |     const id = await pimPage.addEmployee(e);
  1379 |     await pimPage.gotoEmployeeList();
  1380 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1381 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(
  1382 |       data.invalidEmployeeId,
  1383 |     );
  1384 |     await pimPage.filterEmployeeList({ employeeId: id });
  1385 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1386 |     await pimPage.clickOnFilterSearch();
  1387 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1388 |     await pimPage.deleteEmployeeById(id);
  1389 |   });
  1390 | 
  1391 |   test("TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression", async ({
  1392 |     page,
  1393 |     navigationPage,
  1394 |     pimPage,
  1395 |   }) => {
  1396 |     const data = adminData.TC_PIM_095;
  1397 |     test.setTimeout(data.timeout);
  1398 |     const e = employeeFrom(data.employee);
  1399 |     await navigationPage.gotoPIM();
  1400 |     await pimPage.gotoAddEmployee();
  1401 |     const id = await pimPage.addEmployee(e);
  1402 |     await pimPage.gotoEmployeeList();
  1403 |     await pimPage.filterEmployeeList({ employeeId: id });
  1404 |     await pimPage.clickOnFilterSearch();
  1405 |     await pimPage.openEmployeeById(id);
  1406 |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
> 1407 |     await expect(pimPage.firstnameInput).toHaveValue(e.firstName);
       |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  1408 |     await expect(pimPage.middlenameInput).toHaveValue(e.middleName);
  1409 |     await expect(pimPage.lastnameInput).toHaveValue(e.lastName);
  1410 |     await expect(pimPage.employeeID).toHaveValue(id);
  1411 |     await pimPage.gotoEmployeeList();
  1412 |     await pimPage.filterEmployeeList({ employeeId: id });
  1413 |     await pimPage.clickOnFilterSearch();
  1414 |     await pimPage.deleteEmployeeById(id);
  1415 |   });
  1416 | 
  1417 |   test("TC_PIM_096 - Admin should search successfully after invalid employee ID search @positive @search @regression", async ({
  1418 |     navigationPage,
  1419 |     pimPage,
  1420 |   }) => {
  1421 |     const data = adminData.TC_PIM_096;
  1422 |     test.setTimeout(data.timeout);
  1423 |     const e = employeeFrom(data.employee);
  1424 |     await navigationPage.gotoPIM();
  1425 |     await pimPage.gotoAddEmployee();
  1426 |     const id = await pimPage.addEmployee(e);
  1427 |     await pimPage.gotoEmployeeList();
  1428 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1429 |     await pimPage.clickOnFilterSearch();
  1430 |     await pimPage.verifyNoEmployeeRecordsFound(data.invalidEmployeeId);
  1431 |     await pimPage.resetEmployeeFilters();
  1432 |     await pimPage.filterEmployeeList({ employeeId: id });
  1433 |     await pimPage.clickOnFilterSearch();
  1434 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1435 |     await pimPage.deleteEmployeeById(id);
  1436 |   });
  1437 | 
  1438 |   test("TC_PIM_097 - Admin should search using a partial employee name @positive @search @regression", async ({
  1439 |     navigationPage,
  1440 |     pimPage,
  1441 |   }) => {
  1442 |     const data = adminData.TC_PIM_097;
  1443 |     test.setTimeout(data.timeout);
  1444 |     const e = employeeFrom(data.employee);
  1445 |     await navigationPage.gotoPIM();
  1446 |     await pimPage.gotoAddEmployee();
  1447 |     const id = await pimPage.addEmployee(e);
  1448 |     await pimPage.gotoEmployeeList();
  1449 |     await pimPage.selectEmployeeFromAutocomplete(
  1450 |       e.firstName.substring(0, data.partialNameLength),
  1451 |       `${e.firstName} ${e.middleName} ${e.lastName}`,
  1452 |     );
  1453 |     await pimPage.clickOnFilterSearch();
  1454 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1455 |     await pimPage.deleteEmployeeById(id);
  1456 |   });
  1457 | 
  1458 |   test("TC_PIM_098 - Employee should remain searchable after deletion is cancelled @negative @delete @regression", async ({
  1459 |     navigationPage,
  1460 |     pimPage,
  1461 |   }) => {
  1462 |     const data = adminData.TC_PIM_098;
  1463 |     test.setTimeout(data.timeout);
  1464 |     const e = employeeFrom(data.employee);
  1465 |     await navigationPage.gotoPIM();
  1466 |     await pimPage.gotoAddEmployee();
  1467 |     const id = await pimPage.addEmployee(e);
  1468 |     await pimPage.gotoEmployeeList();
  1469 |     await pimPage.filterEmployeeList({ employeeId: id });
  1470 |     await pimPage.clickOnFilterSearch();
  1471 |     await pimPage.cancelEmployeeDeletion(id);
  1472 |     await pimPage.resetEmployeeFilters();
  1473 |     await pimPage.filterEmployeeList({ employeeId: id });
  1474 |     await pimPage.clickOnFilterSearch();
  1475 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1476 |     await pimPage.deleteEmployeeById(id);
  1477 |   });
  1478 | 
  1479 |   test("TC_PIM_099 - Reset should clear employee ID and name together @positive @filter @regression", async ({
  1480 |     navigationPage,
  1481 |     pimPage,
  1482 |   }) => {
  1483 |     const data = adminData.TC_PIM_099;
  1484 |     test.setTimeout(data.timeout);
  1485 |     const e = employeeFrom(data.employee);
  1486 |     await navigationPage.gotoPIM();
  1487 |     await pimPage.gotoAddEmployee();
  1488 |     const id = await pimPage.addEmployee(e);
  1489 |     await pimPage.gotoEmployeeList();
  1490 |     await pimPage.filterEmployeeList({
  1491 |       employeeId: id,
  1492 |       employeeName: e.firstName,
  1493 |     });
  1494 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1495 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(
  1496 |       new RegExp(e.firstName),
  1497 |     );
  1498 |     await pimPage.resetEmployeeFilters();
  1499 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
  1500 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
  1501 |     await pimPage.filterEmployeeList({ employeeId: id });
  1502 |     await pimPage.clickOnFilterSearch();
  1503 |     await pimPage.deleteEmployeeById(id);
  1504 |   });
  1505 | 
  1506 |   test("TC_PIM_100 - Admin should return to Employee List after opening employee details @positive @navigation @regression", async ({
  1507 |     page,
```