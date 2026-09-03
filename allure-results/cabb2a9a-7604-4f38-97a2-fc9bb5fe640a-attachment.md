# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression
- Location: tests\Admin\admin-users.spec.ts:1450:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'First Name' })
Expected: "Details1787818758489689"
Received: ""

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'First Name' })
    2 × locator resolved to <input name="firstName" data-v-1f99f73c="" placeholder="First Name" class="oxd-input oxd-input--active orangehrm-firstname"/>
      - unexpected value ""
  - Test timeout of 120000ms exceeded.

```

```yaml
- textbox "First Name"
```

# Test source

```ts
  1366 |     const firstId = await pimPage.addEmployee(first);
  1367 |     await pimPage.gotoAddEmployee();
  1368 |     const secondId = await pimPage.addEmployee(second);
  1369 |     await pimPage.gotoEmployeeList();
  1370 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1371 |     await pimPage.clickOnFilterSearch();
  1372 |     await pimPage.deleteEmployeeById(firstId);
  1373 |     await pimPage.filterEmployeeList({ employeeId: firstId });
  1374 |     await pimPage.clickOnFilterSearch();
  1375 |     await pimPage.verifyNoEmployeeRecordsFound(firstId);
  1376 |     await pimPage.resetEmployeeFilters();
  1377 |     await pimPage.filterEmployeeList({ employeeId: secondId });
  1378 |     await pimPage.clickOnFilterSearch();
  1379 |     await pimPage.verifyEmployeeSearchResult(
  1380 |       secondId,
  1381 |       second.firstName,
  1382 |       second.lastName,
  1383 |     );
  1384 |     await pimPage.deleteEmployeeById(secondId);
  1385 |   });
  1386 | 
  1387 |   test("TC_PIM_093 - Admin should distinguish employees with similar names using employee ID @positive @search @regression", async ({
  1388 |     navigationPage,
  1389 |     pimPage,
  1390 |   }) => {
  1391 |     const data = adminData.TC_PIM_093;
  1392 |     test.setTimeout(data.timeout);
  1393 |     const name = `${data.sharedFirstNamePrefix}${unique()}`;
  1394 |     const first = {
  1395 |       firstName: name,
  1396 |       middleName: data.middleName,
  1397 |       lastName: data.firstLastName,
  1398 |     };
  1399 |     const second = {
  1400 |       firstName: name,
  1401 |       middleName: data.middleName,
  1402 |       lastName: data.secondLastName,
  1403 |     };
  1404 |     await navigationPage.gotoPIM();
  1405 |     await pimPage.gotoAddEmployee();
  1406 |     const firstId = await pimPage.addEmployee(first);
  1407 |     await pimPage.gotoAddEmployee();
  1408 |     const secondId = await pimPage.addEmployee(second);
  1409 |     expect(firstId).not.toBe(secondId);
  1410 |     await pimPage.gotoEmployeeList();
  1411 |     for (const [id, e] of [
  1412 |       [firstId, first],
  1413 |       [secondId, second],
  1414 |     ] as const) {
  1415 |       await pimPage.filterEmployeeList({ employeeId: id });
  1416 |       await pimPage.clickOnFilterSearch();
  1417 |       await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1418 |       await pimPage.resetEmployeeFilters();
  1419 |     }
  1420 |     for (const id of [secondId, firstId]) {
  1421 |       await pimPage.filterEmployeeList({ employeeId: id });
  1422 |       await pimPage.clickOnFilterSearch();
  1423 |       await pimPage.deleteEmployeeById(id);
  1424 |       await pimPage.resetEmployeeFilters();
  1425 |     }
  1426 |   });
  1427 | 
  1428 |   test("TC_PIM_094 - New employee ID should replace previous employee ID filter @positive @filter @regression", async ({
  1429 |     navigationPage,
  1430 |     pimPage,
  1431 |   }) => {
  1432 |     const data = adminData.TC_PIM_094;
  1433 |     test.setTimeout(data.timeout);
  1434 |     const e = employeeFrom(data.employee);
  1435 |     await navigationPage.gotoPIM();
  1436 |     await pimPage.gotoAddEmployee();
  1437 |     const id = await pimPage.addEmployee(e);
  1438 |     await pimPage.gotoEmployeeList();
  1439 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1440 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(
  1441 |       data.invalidEmployeeId,
  1442 |     );
  1443 |     await pimPage.filterEmployeeList({ employeeId: id });
  1444 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1445 |     await pimPage.clickOnFilterSearch();
  1446 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1447 |     await pimPage.deleteEmployeeById(id);
  1448 |   });
  1449 | 
  1450 |   test("TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression", async ({
  1451 |     page,
  1452 |     navigationPage,
  1453 |     pimPage,
  1454 |   }) => {
  1455 |     const data = adminData.TC_PIM_095;
  1456 |     test.setTimeout(data.timeout);
  1457 |     const e = employeeFrom(data.employee);
  1458 |     await navigationPage.gotoPIM();
  1459 |     await pimPage.gotoAddEmployee();
  1460 |     const id = await pimPage.addEmployee(e);
  1461 |     await pimPage.gotoEmployeeList();
  1462 |     await pimPage.filterEmployeeList({ employeeId: id });
  1463 |     await pimPage.clickOnFilterSearch();
  1464 |     await pimPage.openEmployeeById(id);
  1465 |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
> 1466 |     await expect(pimPage.firstnameInput).toHaveValue(e.firstName);
       |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  1467 |     await expect(pimPage.middlenameInput).toHaveValue(e.middleName);
  1468 |     await expect(pimPage.lastnameInput).toHaveValue(e.lastName);
  1469 |     await expect(pimPage.employeeID).toHaveValue(id);
  1470 |     await pimPage.gotoEmployeeList();
  1471 |     await pimPage.filterEmployeeList({ employeeId: id });
  1472 |     await pimPage.clickOnFilterSearch();
  1473 |     await pimPage.deleteEmployeeById(id);
  1474 |   });
  1475 | 
  1476 |   test("TC_PIM_096 - Admin should search successfully after invalid employee ID search @positive @search @regression", async ({
  1477 |     navigationPage,
  1478 |     pimPage,
  1479 |   }) => {
  1480 |     const data = adminData.TC_PIM_096;
  1481 |     test.setTimeout(data.timeout);
  1482 |     const e = employeeFrom(data.employee);
  1483 |     await navigationPage.gotoPIM();
  1484 |     await pimPage.gotoAddEmployee();
  1485 |     const id = await pimPage.addEmployee(e);
  1486 |     await pimPage.gotoEmployeeList();
  1487 |     await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
  1488 |     await pimPage.clickOnFilterSearch();
  1489 |     await pimPage.verifyNoEmployeeRecordsFound(data.invalidEmployeeId);
  1490 |     await pimPage.resetEmployeeFilters();
  1491 |     await pimPage.filterEmployeeList({ employeeId: id });
  1492 |     await pimPage.clickOnFilterSearch();
  1493 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1494 |     await pimPage.deleteEmployeeById(id);
  1495 |   });
  1496 | 
  1497 |   test("TC_PIM_097 - Admin should search using a partial employee name @positive @search @regression", async ({
  1498 |     navigationPage,
  1499 |     pimPage,
  1500 |   }) => {
  1501 |     const data = adminData.TC_PIM_097;
  1502 |     test.setTimeout(data.timeout);
  1503 |     const e = employeeFrom(data.employee);
  1504 |     await navigationPage.gotoPIM();
  1505 |     await pimPage.gotoAddEmployee();
  1506 |     const id = await pimPage.addEmployee(e);
  1507 |     await pimPage.gotoEmployeeList();
  1508 |     await pimPage.selectEmployeeFromAutocomplete(
  1509 |       e.firstName.substring(0, data.partialNameLength),
  1510 |       `${e.firstName} ${e.middleName} ${e.lastName}`,
  1511 |     );
  1512 |     await pimPage.clickOnFilterSearch();
  1513 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1514 |     await pimPage.deleteEmployeeById(id);
  1515 |   });
  1516 | 
  1517 |   test("TC_PIM_098 - Employee should remain searchable after deletion is cancelled @negative @delete @regression", async ({
  1518 |     navigationPage,
  1519 |     pimPage,
  1520 |   }) => {
  1521 |     const data = adminData.TC_PIM_098;
  1522 |     test.setTimeout(data.timeout);
  1523 |     const e = employeeFrom(data.employee);
  1524 |     await navigationPage.gotoPIM();
  1525 |     await pimPage.gotoAddEmployee();
  1526 |     const id = await pimPage.addEmployee(e);
  1527 |     await pimPage.gotoEmployeeList();
  1528 |     await pimPage.filterEmployeeList({ employeeId: id });
  1529 |     await pimPage.clickOnFilterSearch();
  1530 |     await pimPage.cancelEmployeeDeletion(id);
  1531 |     await pimPage.resetEmployeeFilters();
  1532 |     await pimPage.filterEmployeeList({ employeeId: id });
  1533 |     await pimPage.clickOnFilterSearch();
  1534 |     await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
  1535 |     await pimPage.deleteEmployeeById(id);
  1536 |   });
  1537 | 
  1538 |   test("TC_PIM_099 - Reset should clear employee ID and name together @positive @filter @regression", async ({
  1539 |     navigationPage,
  1540 |     pimPage,
  1541 |   }) => {
  1542 |     const data = adminData.TC_PIM_099;
  1543 |     test.setTimeout(data.timeout);
  1544 |     const e = employeeFrom(data.employee);
  1545 |     await navigationPage.gotoPIM();
  1546 |     await pimPage.gotoAddEmployee();
  1547 |     const id = await pimPage.addEmployee(e);
  1548 |     await pimPage.gotoEmployeeList();
  1549 |     await pimPage.filterEmployeeList({
  1550 |       employeeId: id,
  1551 |       employeeName: e.firstName,
  1552 |     });
  1553 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
  1554 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(
  1555 |       new RegExp(e.firstName),
  1556 |     );
  1557 |     await pimPage.resetEmployeeFilters();
  1558 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
  1559 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
  1560 |     await pimPage.filterEmployeeList({ employeeId: id });
  1561 |     await pimPage.clickOnFilterSearch();
  1562 |     await pimPage.deleteEmployeeById(id);
  1563 |   });
  1564 | 
  1565 |   test("TC_PIM_100 - Admin should return to Employee List after opening employee details @positive @navigation @regression", async ({
  1566 |     page,
```