# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1536:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Vacancy', { exact: true }) }).locator('.oxd-select-text')
Expected substring: "Junior Account Assistant"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Vacancy', { exact: true }) }).locator('.oxd-select-text')

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
  - heading "Recruitment" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Ashley King
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Candidates":
          - /url: "#"
      - listitem:
        - link "Vacancies":
          - /url: "#"
      - button ""
- heading "Application Stage" [level=6]
- separator
- text: Name
- paragraph: DeleteCandidate1786951239374 Test User
- text: Vacancy
- paragraph: Junior Account Assistant
- text: Hiring Manager
- paragraph: N/A
- separator
- paragraph: "Status: Application Initiated"
- button "Reject"
- button "Shortlist"
- heading "Candidate Profile" [level=6]
- text: Edit
- checkbox "Edit"
- separator
- text: Full Name*
- textbox "First Name" [disabled]: DeleteCandidate1786951239374
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy Junior Account Assistant  Email*
- textbox "Type here" [disabled]: deletecandidate1786951239374@example.com
- text: Contact Number
- textbox "Type here" [disabled]: "9876543210"
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]
- text: Date of Application
- textbox "yyyy-dd-mm" [disabled]: 2026-17-08
- text:  Notes
- textbox "Type here" [disabled]
- text: Consent to keep data
- checkbox "" [disabled]
- text: 
- heading "Candidate History" [level=6]
- separator
- text: (2) Records Found
- table:
  - rowgroup:
    - row "Performed Date Description Actions":
      - columnheader "Performed Date"
      - columnheader "Description"
      - columnheader "Actions"
  - rowgroup:
    - row "2026-17-08 Ashley Nancy King assigned the job vacancy Junior Account Assistant":
      - cell "2026-17-08"
      - cell "Ashley Nancy King assigned the job vacancy Junior Account Assistant"
      - cell
    - row "2026-17-08 Ashley Nancy King added DeleteCandidate1786951239374 Test User":
      - cell "2026-17-08"
      - cell "Ashley Nancy King added DeleteCandidate1786951239374 Test User"
      - cell
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  1574 |     // createCandidate selects the first vacancy when one is available.
  1575 |     if (createdCandidate.vacancy) {
  1576 |       await expect(
  1577 |         recruitmentPage.addCandidateVacancyDropdown
> 1578 |       ).toContainText(createdCandidate.vacancy);
       |         ^ Error: expect(locator).toContainText(expected) failed
  1579 |     }
  1580 | 
  1581 |     await expect(page).toHaveURL(
  1582 |       new RegExp(
  1583 |         `/recruitment/addCandidate/${candidateId}$`
  1584 |       ),
  1585 |       {
  1586 |         timeout: 30_000,
  1587 |       }
  1588 |     );
  1589 | 
  1590 |     // Return to Candidates List.
  1591 |     await navigationPage.gotoRecruitment();
  1592 | 
  1593 |     await expect(page).toHaveURL(
  1594 |       /\/recruitment\/viewCandidates$/
  1595 |     );
  1596 | 
  1597 |     // Search and delete the created candidate.
  1598 |     await recruitmentPage.deleteCandidateByName(
  1599 |       firstName
  1600 |     );
  1601 | 
  1602 |     // Clear the previous candidate filter.
  1603 |     await recruitmentPage.restButton.click();
  1604 | 
  1605 |     await expect(
  1606 |       recruitmentPage.candidateNameInput
  1607 |     ).toHaveValue('');
  1608 | 
  1609 |     // Search for the deleted candidate again.
  1610 |     await recruitmentPage.candidateNameInput.fill(
  1611 |       firstName
  1612 |     );
  1613 | 
  1614 |     await expect(
  1615 |       recruitmentPage
  1616 |         .candidateAutocompleteDropdown
  1617 |     ).toBeVisible({
  1618 |       timeout: 15_000,
  1619 |     });
  1620 | 
  1621 |     await expect(
  1622 |       recruitmentPage
  1623 |         .candidateAutocompleteNoRecords
  1624 |     ).toHaveText(data.noRecordsMessage);
  1625 | 
  1626 |     await recruitmentPage.candidateNameInput.press(
  1627 |       'Escape'
  1628 |     );
  1629 | 
  1630 |     await recruitmentPage.searchButton.click();
  1631 | 
  1632 |     // Since no autocomplete option was selected,
  1633 |     // OrangeHRM should display Invalid.
  1634 |     await expect(
  1635 |       recruitmentPage.candidateNameValidation
  1636 |     ).toHaveText(data.invalidMessage);
  1637 | 
  1638 |     await expect(
  1639 |       recruitmentPage.candidateRows
  1640 |     ).toHaveCount(0);
  1641 | 
  1642 |     await expect(
  1643 |       recruitmentPage.noRecordsFound
  1644 |     ).toBeVisible();
  1645 | 
  1646 |     // Clear the filter after verification.
  1647 |     await recruitmentPage.candidateNameInput.clear();
  1648 | 
  1649 |     await expect(
  1650 |       recruitmentPage.candidateNameValidation
  1651 |     ).toBeHidden();
  1652 |   }
  1653 | );
  1654 | 
  1655 | });
  1656 | 
```