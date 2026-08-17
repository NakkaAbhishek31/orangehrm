# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1536:6

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('textbox', { name: 'Type for hints...', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
Expected: hidden
Received: visible
Timeout:  20000ms

Call log:
  - Expect "toBeHidden" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'Type for hints...', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
    41 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Invalid</span>
       - unexpected value "visible"

```

```yaml
- text: Invalid
```

# Test source

```ts
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
  1555 |     await recruitmentPage.navigateToCandidate();
  1556 | 
  1557 |     await recruitmentPage.addCandidateButton.click();
  1558 |  
  1559 | 
  1560 |     const createdCandidate =
  1561 |       await recruitmentPage.createCandidate({
  1562 |         firstName,
  1563 |         middleName: data.middleName,
  1564 |         lastName: data.lastName,
  1565 |         email,
  1566 |         contactNumber: data.contactNumber,
  1567 |       });
  1568 | 
  1569 |     const candidateId =
  1570 |       createdCandidate.candidateId;
  1571 | 
  1572 |     expect(candidateId).not.toBe('');
  1573 | 
  1574 |     await expect(page).toHaveURL(
  1575 |       new RegExp(
  1576 |         `/recruitment/addCandidate/${candidateId}$`
  1577 |       ),
  1578 |       {
  1579 |         timeout: 30_000,
  1580 |       }
  1581 |     );
  1582 | 
  1583 |     // Return to Candidates List.
  1584 |     await navigationPage.gotoRecruitment();
  1585 | 
  1586 |     await expect(page).toHaveURL(
  1587 |       /\/recruitment\/viewCandidates$/
  1588 |     );
  1589 | 
  1590 |     // Search and delete the created candidate.
  1591 |     await recruitmentPage.deleteCandidateByName(
  1592 |       firstName
  1593 |     );
  1594 | 
  1595 |     // Clear the previous candidate filter.
  1596 |     await recruitmentPage.restButton.click();
  1597 | 
  1598 |     await expect(
  1599 |       recruitmentPage.candidateNameInput
  1600 |     ).toHaveValue('');
  1601 | 
  1602 |     // Search for the deleted candidate again.
  1603 |     await recruitmentPage.candidateNameInput.fill(
  1604 |       firstName
  1605 |     );
  1606 | 
  1607 |     await expect(
  1608 |       recruitmentPage
  1609 |         .candidateAutocompleteDropdown
  1610 |     ).toBeVisible({
  1611 |       timeout: 15_000,
  1612 |     });
  1613 | 
  1614 |     await expect(
  1615 |       recruitmentPage
  1616 |         .candidateAutocompleteNoRecords
  1617 |     ).toHaveText(data.noRecordsMessage);
  1618 | 
  1619 |     await recruitmentPage.candidateNameInput.press(
  1620 |       'Escape'
  1621 |     );
  1622 | 
  1623 |     await recruitmentPage.searchButton.click();
  1624 | 
  1625 |     // Since no autocomplete option was selected,
  1626 |     // OrangeHRM should display Invalid.
  1627 |     await expect(
  1628 |       recruitmentPage.candidateNameValidation
  1629 |     ).toHaveText(data.invalidMessage);
  1630 | 
  1631 |     // Clear the filter after verification.
  1632 |     await recruitmentPage.candidateNameInput.clear();
  1633 | 
  1634 |     await expect(
  1635 |       recruitmentPage.candidateNameValidation
> 1636 |     ).toBeHidden();
       |       ^ Error: expect(locator).toBeHidden() failed
  1637 |   }
  1638 | );
  1639 | 
  1640 | 
  1641 | test.only( 'TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression',
  1642 |   async ({
  1643 |     page,
  1644 |     navigationPage,
  1645 |     recruitmentPage,
  1646 |   }) => {
  1647 |     const data =
  1648 |       recruitmentData.TC_RECRUITMENT_154;
  1649 | 
  1650 |     const uniqueValue = Date.now();
  1651 | 
  1652 |     const firstName =
  1653 |       `${data.firstNamePrefix}${uniqueValue}`;
  1654 | 
  1655 |     const email =
  1656 |       `${data.emailPrefix}${uniqueValue}` +
  1657 |       `${data.emailDomain}`;
  1658 | 
  1659 |     await navigationPage.gotoRecruitment();
  1660 | 
  1661 |     await recruitmentPage.navigateToCandidate();
  1662 |     await recruitmentPage.addCandidateButton.click();
  1663 | 
  1664 |     const createdCandidate =
  1665 |       await recruitmentPage.createCandidate({
  1666 |         firstName,
  1667 |         middleName: data.middleName,
  1668 |         lastName: data.lastName,
  1669 |         email,
  1670 |         contactNumber: data.contactNumber,
  1671 |       });
  1672 | 
  1673 |     const candidateId =
  1674 |       createdCandidate.candidateId;
  1675 | 
  1676 |     expect(candidateId).not.toBe('');
  1677 | 
  1678 |     await expect(page).toHaveURL(
  1679 |       new RegExp(
  1680 |         `/recruitment/addCandidate/${candidateId}$`
  1681 |       ),
  1682 |       {
  1683 |         timeout: 30_000,
  1684 |       }
  1685 |     );
  1686 | 
  1687 |     await navigationPage.gotoRecruitment();
  1688 | 
  1689 |     await expect(page).toHaveURL(
  1690 |       /\/recruitment\/viewCandidates$/
  1691 |     );
  1692 | 
  1693 |     // Open deletion dialog and cancel.
  1694 |     await recruitmentPage
  1695 |       .cancelCandidateDeletion(firstName);
  1696 | 
  1697 |     // Reset and search again to prove
  1698 |     // the candidate was not deleted.
  1699 |     await recruitmentPage.restButton.click();
  1700 | 
  1701 |     const selectedCandidate =
  1702 |       await recruitmentPage
  1703 |         .selectFirstAvailableCandidate(firstName);
  1704 | 
  1705 |     if (selectedCandidate === null) {
  1706 |       throw new Error(
  1707 |         `Candidate disappeared after cancelling deletion: ${firstName}`
  1708 |       );
  1709 |     }
  1710 | 
  1711 |     await recruitmentPage.searchButton.click();
  1712 | 
  1713 |     await expect(
  1714 |       recruitmentPage.loadingSpinner
  1715 |     ).toBeHidden({
  1716 |       timeout: 20_000,
  1717 |     });
  1718 | 
  1719 |     await expect(
  1720 |       recruitmentPage.candidateRows
  1721 |     ).toHaveCount(1, {
  1722 |       timeout: 20_000,
  1723 |     });
  1724 | 
  1725 |     const candidateCell =
  1726 |       recruitmentPage.candidateRows
  1727 |         .first()
  1728 |         .locator('.oxd-table-cell')
  1729 |         .nth(2);
  1730 | 
  1731 |     await expect(
  1732 |       candidateCell
  1733 |     ).toContainText(firstName);
  1734 | 
  1735 |     await expect(
  1736 |       candidateCell
```