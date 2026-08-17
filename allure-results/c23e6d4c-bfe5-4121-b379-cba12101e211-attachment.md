# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1536:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Records Found', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText('No Records Found', { exact: true })

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
      - paragraph: Surya king
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
- heading "Candidates" [level=5]
- button ""
- separator
- text: Job Title -- Select --  Vacancy -- Select --  Hiring Manager -- Select --  Status -- Select --  Candidate Name
- textbox "Type for hints...": DeleteCandidate1786953328291
- text: Invalid Keywords
- textbox "Enter comma seperated words..."
- text: Date of Application
- textbox "From"
- text: 
- textbox "To"
- text:  Method of Application -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (83) Records Found
- table:
  - rowgroup:
    - row " Vacancy  Candidate  Hiring Manager  Date of Application  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Vacancy "
      - columnheader "Candidate "
      - columnheader "Hiring Manager "
      - columnheader "Date of Application "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Testa7177387 Candidateb29afc5d (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Testa7177387 Candidateb29afc5d"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Dasia Emma Kassulke (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Dasia Emma Kassulke"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Senior QA Lead John Doe M (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe M"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Senior QA Lead John Doe M (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe M"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Candidate2CEEC9D6 Auto Robot2CEEC9D6 (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Candidate2CEEC9D6 Auto Robot2CEEC9D6"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Candidate83628623 Auto Robot83628623 (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Candidate83628623 Auto Robot83628623"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " CandidateBA0DD169 Auto RobotBA0DD169 (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "CandidateBA0DD169 Auto RobotBA0DD169"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " CandidateD6FEAE2E Auto RobotD6FEAE2E (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "CandidateD6FEAE2E Auto RobotD6FEAE2E"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator testing automation task Surya N king 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "testing automation task"
      - cell "Surya N king"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator testing automation task Surya N king 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "testing automation task"
      - cell "Surya N king"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Candidate095536 Tester (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Candidate095536 Tester"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " AutoCandidate1786946765558 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "AutoCandidate1786946765558 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ResumeCandidate1786946807412 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "ResumeCandidate1786946807412 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant AutoCandidate1786947153739 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "AutoCandidate1786947153739 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " ResumeCandidate1786947169505 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "ResumeCandidate1786947169505 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant AutoCandidate1786948482628 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "AutoCandidate1786948482628 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " ResumeCandidate1786948503440 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "ResumeCandidate1786948503440 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " SearchCandidate1786948537591 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "SearchCandidate1786948537591 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " SearchCandidate1786948696919 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "SearchCandidate1786948696919 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant SearchCandidate1786949061708 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "SearchCandidate1786949061708 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant SearchCandidate1786949210389 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "SearchCandidate1786949210389 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant ProfileCandidate1786949725106 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "ProfileCandidate1786949725106 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " DeleteCandidate1786950614368 Test User (Deleted) 2026-17-08  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "DeleteCandidate1786950614368 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant DeleteCandidate1786951239374 Test User (Deleted) 2026-17-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "DeleteCandidate1786951239374 Test User"
      - cell "(Deleted)"
      - cell "2026-17-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Tanmay Anderson O'Keefe (Deleted) 2024-29-03  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Tanmay Anderson O'Keefe"
      - cell "(Deleted)"
      - cell "2024-29-03"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Tanmay sree Dachu (Deleted) 2024-06-02   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Tanmay sree Dachu"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Rejected   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Rejected"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Rejected"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  1631 |     await expect(
  1632 |       recruitmentPage.candidateRows
  1633 |     ).toHaveCount(0);
  1634 | 
  1635 |     await expect(
  1636 |       recruitmentPage.noRecordsFound
> 1637 |     ).toBeVisible();
       |       ^ Error: expect(locator).toBeVisible() failed
  1638 | 
  1639 |     // Clear the filter after verification.
  1640 |     await recruitmentPage.candidateNameInput.clear();
  1641 | 
  1642 |     await expect(
  1643 |       recruitmentPage.candidateNameValidation
  1644 |     ).toBeHidden();
  1645 |   }
  1646 | );
  1647 | 
  1648 | 
  1649 | test.only( 'TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression',
  1650 |   async ({
  1651 |     page,
  1652 |     navigationPage,
  1653 |     recruitmentPage,
  1654 |   }) => {
  1655 |     const data =
  1656 |       recruitmentData.TC_RECRUITMENT_154;
  1657 | 
  1658 |     const uniqueValue = Date.now();
  1659 | 
  1660 |     const firstName =
  1661 |       `${data.firstNamePrefix}${uniqueValue}`;
  1662 | 
  1663 |     const email =
  1664 |       `${data.emailPrefix}${uniqueValue}` +
  1665 |       `${data.emailDomain}`;
  1666 | 
  1667 |     await navigationPage.gotoRecruitment();
  1668 | 
  1669 |     await recruitmentPage.navigateToCandidate();
  1670 |     await recruitmentPage.addCandidateButton.click();
  1671 | 
  1672 |     const createdCandidate =
  1673 |       await recruitmentPage.createCandidate({
  1674 |         firstName,
  1675 |         middleName: data.middleName,
  1676 |         lastName: data.lastName,
  1677 |         email,
  1678 |         contactNumber: data.contactNumber,
  1679 |       });
  1680 | 
  1681 |     const candidateId =
  1682 |       createdCandidate.candidateId;
  1683 | 
  1684 |     expect(candidateId).not.toBe('');
  1685 | 
  1686 |     await expect(page).toHaveURL(
  1687 |       new RegExp(
  1688 |         `/recruitment/addCandidate/${candidateId}$`
  1689 |       ),
  1690 |       {
  1691 |         timeout: 30_000,
  1692 |       }
  1693 |     );
  1694 | 
  1695 |     await navigationPage.gotoRecruitment();
  1696 | 
  1697 |     await expect(page).toHaveURL(
  1698 |       /\/recruitment\/viewCandidates$/
  1699 |     );
  1700 | 
  1701 |     // Open deletion dialog and cancel.
  1702 |     await recruitmentPage
  1703 |       .cancelCandidateDeletion(firstName);
  1704 | 
  1705 |     // Reset and search again to prove
  1706 |     // the candidate was not deleted.
  1707 |     await recruitmentPage.restButton.click();
  1708 | 
  1709 |     const selectedCandidate =
  1710 |       await recruitmentPage
  1711 |         .selectFirstAvailableCandidate(firstName);
  1712 | 
  1713 |     if (selectedCandidate === null) {
  1714 |       throw new Error(
  1715 |         `Candidate disappeared after cancelling deletion: ${firstName}`
  1716 |       );
  1717 |     }
  1718 | 
  1719 |     await recruitmentPage.searchButton.click();
  1720 | 
  1721 |     await expect(
  1722 |       recruitmentPage.loadingSpinner
  1723 |     ).toBeHidden({
  1724 |       timeout: 20_000,
  1725 |     });
  1726 | 
  1727 |     await expect(
  1728 |       recruitmentPage.candidateRows
  1729 |     ).toHaveCount(1, {
  1730 |       timeout: 20_000,
  1731 |     });
  1732 | 
  1733 |     const candidateCell =
  1734 |       recruitmentPage.candidateRows
  1735 |         .first()
  1736 |         .locator('.oxd-table-cell')
  1737 |         .nth(2);
```