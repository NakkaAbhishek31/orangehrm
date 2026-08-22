# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_196 - Invalid validation should appear for a nonexistent customer in Project search @negative @validation @autocomplete @project-info @regression
- Location: tests\Time\time.spec.ts:1632:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Name', { exact: true }) }).locator('input').locator('xpath=ancestor::form').locator('.oxd-input-group').filter({ hasText: 'Customer Name' }).locator('.oxd-input-field-error-message')
Expected: "Invalid"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Name', { exact: true }) }).locator('input').locator('xpath=ancestor::form').locator('.oxd-input-group').filter({ hasText: 'Customer Name' }).locator('.oxd-input-field-error-message')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Time" [level=6]
  - heading "/ Project Info" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Demo Source
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Projects" [level=5]
- button ""
- separator
- text: Customer Name
- textbox "Type for hints...": UnknownCustomer1787372212018
- text: Invalid Project
- textbox "Type for hints..."
- text: Project Admin
- textbox "Type for hints..."
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (11) Records Found
- table:
  - rowgroup:
    - row " Customer Name  Project  Project Admins Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Customer Name "
      - columnheader "Project "
      - columnheader "Project Admins"
      - columnheader "Actions"
  - rowgroup:
    - row " ACME Ltd ACME Ltd  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ACME Ltd"
      - cell "ACME Ltd"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Apache Software Foundation ASF - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Apache Software Foundation"
      - cell "ASF - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " The Coca-Cola Company Coke - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Coca-Cola Company"
      - cell "Coke - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Fresh Books Software Ltd Fresh Books Software Ltd - Phase I  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Fresh Books Software Ltd"
      - cell "Fresh Books Software Ltd - Phase I"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " FreeWave Technologies, Inc. FWT - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FreeWave Technologies, Inc."
      - cell "FWT - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Internal General HR Tasks Demo Source  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "General HR Tasks"
      - cell "Demo Source"
      - cell " ":
        - button ""
        - button ""
    - row " Global Corp and Co Global Software phase - 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Global Corp and Co"
      - cell "Global Software phase - 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Global Corp and Co Global Software phase - 2  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Global Corp and Co"
      - cell "Global Software phase - 2"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " The Priceline Group Priceline Group - Phase 1 Demo Source  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Priceline Group"
      - cell "Priceline Group - Phase 1"
      - cell "Demo Source"
      - cell " ":
        - button ""
        - button ""
    - row " Internal Recruitment Demo Source  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "Recruitment"
      - cell "Demo Source"
      - cell " ":
        - button ""
        - button ""
    - row " Internal Training and Development Demo Source  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "Training and Development"
      - cell "Demo Source"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1570 |   }
  1571 | );
  1572 | 
  1573 | test(
  1574 |   'TC_TIME_195 - Admin should reset Project search filters @positive @filter @project-info @regression',
  1575 |   async ({
  1576 |     page,
  1577 |     navigationPage,
  1578 |     timePage,
  1579 |   }) => {
  1580 |     const data =
  1581 |       timeData.TC_TIME_195;
  1582 | 
  1583 |     const customerName =
  1584 |       `${data.customerNamePrefix}${Date.now()}`;
  1585 | 
  1586 |     const projectName =
  1587 |       `${data.projectNamePrefix}${Date.now()}`;
  1588 | 
  1589 |     await navigationPage.gotoTime();
  1590 |     await timePage.gotoProjects();
  1591 | 
  1592 |     await timePage
  1593 |       .projectCustomerFilterInput
  1594 |       .fill(customerName);
  1595 | 
  1596 |     await timePage
  1597 |       .projectNameFilterInput
  1598 |       .fill(projectName);
  1599 | 
  1600 |     await expect(
  1601 |       timePage.projectCustomerFilterInput
  1602 |     ).toHaveValue(customerName);
  1603 | 
  1604 |     await expect(
  1605 |       timePage.projectNameFilterInput
  1606 |     ).toHaveValue(projectName);
  1607 | 
  1608 |     await timePage.projectCustomerFilterInput.press('Escape');
  1609 | 
  1610 |     await timePage.projectResetButton.click();
  1611 | 
  1612 |     await expect(
  1613 |       timePage.projectCustomerFilterInput
  1614 |     ).toHaveValue('');
  1615 | 
  1616 |     await expect(
  1617 |       timePage.projectNameFilterInput
  1618 |     ).toHaveValue('');
  1619 | 
  1620 |     await expect(page).toHaveURL(
  1621 |       new RegExp(
  1622 |         `${data.projectsUrlPath}$`
  1623 |       )
  1624 |     );
  1625 | 
  1626 |     await expect(
  1627 |       timePage.projectsTable
  1628 |     ).toBeVisible();
  1629 |   }
  1630 | );
  1631 | 
  1632 | test(
  1633 |   'TC_TIME_196 - Invalid validation should appear for a nonexistent customer in Project search @negative @validation @autocomplete @project-info @regression',
  1634 |   async ({
  1635 |     page,
  1636 |     navigationPage,
  1637 |     timePage,
  1638 |   }) => {
  1639 |     const data =
  1640 |       timeData.TC_TIME_196;
  1641 | 
  1642 |     const invalidCustomer =
  1643 |       `${data.customerNamePrefix}${Date.now()}`;
  1644 | 
  1645 |     await navigationPage.gotoTime();
  1646 |     await timePage.gotoProjects();
  1647 | 
  1648 |     await timePage
  1649 |       .projectCustomerFilterInput
  1650 |       .fill(invalidCustomer);
  1651 | 
  1652 |     await expect(
  1653 |       timePage.visibleAutocompleteDropdown
  1654 |     ).toBeVisible({
  1655 |       timeout: 15_000,
  1656 |     });
  1657 | 
  1658 |     await expect(
  1659 |       timePage.autocompleteNoRecords
  1660 |     ).toHaveText(data.noRecordsMessage);
  1661 | 
  1662 |     await timePage
  1663 |       .projectCustomerFilterInput
  1664 |       .press('Escape');
  1665 | 
  1666 |     await timePage.projectSearchButton.click();
  1667 | 
  1668 |     await expect(
  1669 |       timePage.projectCustomerValidation
> 1670 |     ).toHaveText(data.invalidMessage);
       |       ^ Error: expect(locator).toHaveText(expected) failed
  1671 | 
  1672 |     await expect(
  1673 |       timePage.projectCustomerFilterInput
  1674 |     ).toHaveValue(invalidCustomer);
  1675 | 
  1676 |     await expect(page).toHaveURL(
  1677 |       new RegExp(
  1678 |         `${data.projectsUrlPath}$`
  1679 |       )
  1680 |     );
  1681 |   }
  1682 | );
  1683 | 
  1684 | test(
  1685 |   'TC_TIME_197 - Admin should delete an existing project successfully @positive @delete @project-info @regression',
  1686 |   async ({
  1687 |     navigationPage,
  1688 |     timePage,
  1689 |   }) => {
  1690 |     test.setTimeout(240_000);
  1691 | 
  1692 |     const data =
  1693 |       timeData.TC_TIME_197;
  1694 | 
  1695 |     const uniqueValue = Date.now();
  1696 | 
  1697 |     const customerName =
  1698 |       `${data.customerNamePrefix}${uniqueValue}`;
  1699 | 
  1700 |     const projectName =
  1701 |       `${data.projectNamePrefix}${uniqueValue}`;
  1702 | 
  1703 |     await navigationPage.gotoTime();
  1704 | 
  1705 |     await timePage.gotoCustomers();
  1706 | 
  1707 |     await timePage.createCustomer({
  1708 |       name: customerName,
  1709 |       description: data.customerDescription,
  1710 |     });
  1711 | 
  1712 |     await timePage.gotoProjects();
  1713 | 
  1714 |     await timePage.addProjectButton.click();
  1715 | 
  1716 |     await timePage.createProject({
  1717 |       customerName,
  1718 |       projectName,
  1719 |       projectAdminSearchText:
  1720 |         data.projectAdminSearchText,
  1721 |     });
  1722 | 
  1723 |     await timePage.searchProject({
  1724 |       projectName,
  1725 |     });
  1726 | 
  1727 |     await timePage.verifyProjectRow({
  1728 |       customerName,
  1729 |       projectName,
  1730 |     });
  1731 | 
  1732 |     await timePage.deleteProjectByName(
  1733 |       projectName
  1734 |     );
  1735 | 
  1736 |     await timePage.searchProject({
  1737 |       projectName,
  1738 |     });
  1739 | 
  1740 |     await expect(
  1741 |       timePage.projectRows
  1742 |     ).toHaveCount(0);
  1743 | 
  1744 |     await expect(
  1745 |       timePage.projectNoRecords
  1746 |     ).toBeVisible();
  1747 | 
  1748 |     // Cleanup customer.
  1749 |     await timePage.gotoCustomers();
  1750 | 
  1751 |     await timePage.deleteCustomerByName(
  1752 |       customerName
  1753 |     );
  1754 |   }
  1755 | );
  1756 | 
  1757 | 
  1758 | });
  1759 | 
```