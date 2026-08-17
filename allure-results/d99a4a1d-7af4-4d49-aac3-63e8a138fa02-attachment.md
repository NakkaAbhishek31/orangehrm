# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1536:6

# Error details

```
TypeError: recruitmentPage.navigateToAddCandidate is not a function
```

# Test source

```ts
  1455 |     await recruitmentPage.searchButton.click();
  1456 | 
  1457 |     await expect(
  1458 |       recruitmentPage.loadingSpinner
  1459 |     ).toBeHidden({
  1460 |       timeout: 20_000,
  1461 |     });
  1462 | 
  1463 |     await expect(
  1464 |       recruitmentPage.candidateRows
  1465 |     ).toHaveCount(1, {
  1466 |       timeout: 20_000,
  1467 |     });
  1468 | 
  1469 |     const matchingRow =
  1470 |       recruitmentPage.candidateRows.first();
  1471 | 
  1472 |     const cells = matchingRow.locator(
  1473 |       '.oxd-table-cell'
  1474 |     );
  1475 | 
  1476 |     await expect(
  1477 |       cells.nth(1)
  1478 |     ).toContainText(selectedVacancy);
  1479 | 
  1480 |     await expect(
  1481 |       cells.nth(2)
  1482 |     ).toContainText(firstName);
  1483 | 
  1484 |     await expect(
  1485 |       cells.nth(2)
  1486 |     ).toContainText(data.lastName);
  1487 | 
  1488 |     // Open Candidate Profile using the View action.
  1489 |     const viewCandidateButton =
  1490 |       matchingRow.getByRole('button').filter({
  1491 |         has: page.locator('i.bi-eye-fill'),
  1492 |       });
  1493 | 
  1494 |     await expect(
  1495 |       viewCandidateButton
  1496 |     ).toBeVisible();
  1497 | 
  1498 |     await viewCandidateButton.click();
  1499 | 
  1500 |     await expect(page).toHaveURL(
  1501 |       new RegExp(
  1502 |         `/recruitment/addCandidate/${candidateId}$`
  1503 |       ),
  1504 |       {
  1505 |         timeout: 30_000,
  1506 |       }
  1507 |     );
  1508 | 
  1509 |     await expect(
  1510 |       recruitmentPage.candidateProfileHeading
  1511 |     ).toBeVisible();
  1512 | 
  1513 |     await expect(
  1514 |       recruitmentPage.firstNameInput
  1515 |     ).toHaveValue(firstName);
  1516 | 
  1517 |     await expect(
  1518 |       recruitmentPage.middleNameInput
  1519 |     ).toHaveValue(data.middleName);
  1520 | 
  1521 |     await expect(
  1522 |       recruitmentPage.lastNameInput
  1523 |     ).toHaveValue(data.lastName);
  1524 | 
  1525 |     await expect(
  1526 |       recruitmentPage.emailInput
  1527 |     ).toHaveValue(email);
  1528 | 
  1529 |     await expect(
  1530 |       recruitmentPage.contactNumberInput
  1531 |     ).toHaveValue(data.contactNumber);
  1532 |   }
  1533 | );
  1534 | 
  1535 | 
  1536 | test.only('TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression', async ({
  1537 |     page,
  1538 |     navigationPage,
  1539 |     recruitmentPage,
  1540 |   }) => {
  1541 |     const data =
  1542 |       recruitmentData.TC_RECRUITMENT_153;
  1543 | 
  1544 |     const uniqueValue = Date.now();
  1545 | 
  1546 |     const firstName =
  1547 |       `${data.firstNamePrefix}${uniqueValue}`;
  1548 | 
  1549 |     const email =
  1550 |       `${data.emailPrefix}${uniqueValue}` +
  1551 |       `${data.emailDomain}`;
  1552 | 
  1553 |     await navigationPage.gotoRecruitment();
  1554 | 
> 1555 |     await recruitmentPage.navigateToAddCandidate();
       |                           ^ TypeError: recruitmentPage.navigateToAddCandidate is not a function
  1556 | 
  1557 |     const createdCandidate =
  1558 |       await recruitmentPage.createCandidate({
  1559 |         firstName,
  1560 |         middleName: data.middleName,
  1561 |         lastName: data.lastName,
  1562 |         email,
  1563 |         contactNumber: data.contactNumber,
  1564 |       });
  1565 | 
  1566 |     const candidateId =
  1567 |       createdCandidate.candidateId;
  1568 | 
  1569 |     expect(candidateId).not.toBe('');
  1570 | 
  1571 |     await expect(page).toHaveURL(
  1572 |       new RegExp(
  1573 |         `/recruitment/addCandidate/${candidateId}$`
  1574 |       ),
  1575 |       {
  1576 |         timeout: 30_000,
  1577 |       }
  1578 |     );
  1579 | 
  1580 |     // Return to Candidates List.
  1581 |     await navigationPage.gotoRecruitment();
  1582 | 
  1583 |     await expect(page).toHaveURL(
  1584 |       /\/recruitment\/viewCandidates$/
  1585 |     );
  1586 | 
  1587 |     // Search and delete the created candidate.
  1588 |     await recruitmentPage.deleteCandidateByName(
  1589 |       firstName
  1590 |     );
  1591 | 
  1592 |     // Clear the previous candidate filter.
  1593 |     await recruitmentPage.resetButton.click();
  1594 | 
  1595 |     await expect(
  1596 |       recruitmentPage.candidateNameInput
  1597 |     ).toHaveValue('');
  1598 | 
  1599 |     // Search for the deleted candidate again.
  1600 |     await recruitmentPage.candidateNameInput.fill(
  1601 |       firstName
  1602 |     );
  1603 | 
  1604 |     await expect(
  1605 |       recruitmentPage
  1606 |         .candidateAutocompleteDropdown
  1607 |     ).toBeVisible({
  1608 |       timeout: 15_000,
  1609 |     });
  1610 | 
  1611 |     await expect(
  1612 |       recruitmentPage
  1613 |         .candidateAutocompleteNoRecords
  1614 |     ).toHaveText(data.noRecordsMessage);
  1615 | 
  1616 |     await recruitmentPage.candidateNameInput.press(
  1617 |       'Escape'
  1618 |     );
  1619 | 
  1620 |     await recruitmentPage.searchButton.click();
  1621 | 
  1622 |     // Since no autocomplete option was selected,
  1623 |     // OrangeHRM should display Invalid.
  1624 |     await expect(
  1625 |       recruitmentPage.candidateNameValidation
  1626 |     ).toHaveText(data.invalidMessage);
  1627 | 
  1628 |     await expect(
  1629 |       recruitmentPage.candidateRows
  1630 |     ).toHaveCount(0);
  1631 | 
  1632 |     await expect(
  1633 |       recruitmentPage.noRecordsFound
  1634 |     ).toBeVisible();
  1635 | 
  1636 |     // Clear the filter after verification.
  1637 |     await recruitmentPage.candidateNameInput.clear();
  1638 | 
  1639 |     await expect(
  1640 |       recruitmentPage.candidateNameValidation
  1641 |     ).toBeHidden();
  1642 |   }
  1643 | );
  1644 | 
  1645 | });
  1646 | 
```