# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1629:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Shortlist' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('button', { name: 'Shortlist' })

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
      - paragraph: reshma Sources
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
- paragraph: Shortlist1787642131913 Test User
- text: Vacancy
- paragraph: N/A
- text: Hiring Manager
- paragraph: N/A
- separator
- heading "Candidate Profile" [level=6]
- text: Edit
- checkbox "Edit"
- separator
- text: Full Name*
- textbox "First Name" [disabled]: Shortlist1787642131913
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: shortlistcandidate1787642131913@example.com
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
- textbox "yyyy-dd-mm" [disabled]: 2026-25-08
- text:  Notes
- textbox "Type here" [disabled]
- text: Consent to keep data
- checkbox "" [disabled]
- text: 
- heading "Candidate History" [level=6]
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row "Performed Date Description Actions":
      - columnheader "Performed Date"
      - columnheader "Description"
      - columnheader "Actions"
  - rowgroup:
    - row "2026-25-08 reshma Opens Sources added Shortlist1787642131913 Test User":
      - cell "2026-25-08"
      - cell "reshma Opens Sources added Shortlist1787642131913 Test User"
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
  1577 | 
  1578 |     // This method searches and opens the profile.
  1579 |     await recruitmentPage.openCandidateProfile(firstName);
  1580 | 
  1581 |     await expect(page).toHaveURL(
  1582 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1583 |     );
  1584 | 
  1585 |     await recruitmentPage.updateCandidateDetails({
  1586 |       email: updatedEmail,
  1587 |       contactNumber: data.updatedContactNumber,
  1588 |       keywords: data.updatedKeywords,
  1589 |       notes: data.updatedNotes,
  1590 |     });
  1591 | 
  1592 |     await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);
  1593 | 
  1594 |     await expect(recruitmentPage.contactNumberInput).toHaveValue(
  1595 |       data.updatedContactNumber,
  1596 |     );
  1597 | 
  1598 |     await expect(recruitmentPage.keywordsInput).toHaveValue(
  1599 |       data.updatedKeywords,
  1600 |     );
  1601 | 
  1602 |     await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);
  1603 | 
  1604 |     // Refresh and verify persistence.
  1605 |     await page.reload({
  1606 |       waitUntil: "domcontentloaded",
  1607 |     });
  1608 | 
  1609 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  1610 | 
  1611 |     await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);
  1612 | 
  1613 |     await expect(recruitmentPage.contactNumberInput).toHaveValue(
  1614 |       data.updatedContactNumber,
  1615 |     );
  1616 | 
  1617 |     await expect(recruitmentPage.keywordsInput).toHaveValue(
  1618 |       data.updatedKeywords,
  1619 |     );
  1620 | 
  1621 |     await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);
  1622 | 
  1623 |     // Cleanup.
  1624 |     await navigationPage.gotoRecruitment();
  1625 | 
  1626 |     await recruitmentPage.deleteCandidateByName(firstName);
  1627 |   });
  1628 | 
  1629 |   test("TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression", async ({
  1630 |     page,
  1631 |     navigationPage,
  1632 |     recruitmentPage,
  1633 |   }) => {
  1634 |     const data = recruitmentData.TC_RECRUITMENT_156;
  1635 | 
  1636 |     const uniqueValue = Date.now();
  1637 | 
  1638 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1639 | 
  1640 |     const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
  1641 | 
  1642 |     await navigationPage.gotoRecruitment();
  1643 | 
  1644 |     await recruitmentPage.navigateToCandidate();
  1645 |     await recruitmentPage.addCandidateButton.click();
  1646 | 
  1647 |     const createdCandidate = await recruitmentPage.createCandidate({
  1648 |       firstName,
  1649 |       middleName: data.middleName,
  1650 |       lastName: data.lastName,
  1651 |       email,
  1652 |       contactNumber: data.contactNumber,
  1653 |     });
  1654 | 
  1655 |     const candidateId = createdCandidate.candidateId;
  1656 | 
  1657 |     expect(candidateId).not.toBe("");
  1658 | 
  1659 |     await expect(page).toHaveURL(
  1660 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1661 |       {
  1662 |         timeout: 30_000,
  1663 |       },
  1664 |     );
  1665 | 
  1666 |     // Return to Candidates List.
  1667 |     await navigationPage.gotoRecruitment();
  1668 | 
  1669 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  1670 | 
  1671 |     await recruitmentPage.openCandidateProfile(firstName);
  1672 | 
  1673 |     await expect(page).toHaveURL(
  1674 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1675 |     );
  1676 | 
> 1677 |     await expect(recruitmentPage.shortlistButton).toBeVisible();
       |                                                   ^ Error: expect(locator).toBeVisible() failed
  1678 | 
  1679 |     await recruitmentPage.shortlistButton.click();
  1680 | 
  1681 |     await expect(recruitmentPage.shortlistHeading).toBeVisible();
  1682 | 
  1683 |     await recruitmentPage.shortlistNotesInput.fill(data.shortlistNotes);
  1684 | 
  1685 |     await expect(recruitmentPage.shortlistNotesInput).toHaveValue(
  1686 |       data.shortlistNotes,
  1687 |     );
  1688 | 
  1689 |    const submitShortlist = async () => {
  1690 |   const responsePromise = page.waitForResponse(
  1691 |     response =>
  1692 |       response.url().includes(
  1693 |         "/api/v2/recruitment/candidates"
  1694 |       ) &&
  1695 |       response.url().includes("shortlist") &&
  1696 |       ["POST", "PUT"].includes(
  1697 |         response.request().method()
  1698 |       ),
  1699 |     {
  1700 |       timeout: 30_000,
  1701 |     }
  1702 |   );
  1703 | 
  1704 |   await recruitmentPage.shortlistSaveButton.click();
  1705 | 
  1706 |   return responsePromise;
  1707 | };
  1708 | 
  1709 | let shortlistResponse = await submitShortlist();
  1710 | 
  1711 | if (
  1712 |   !shortlistResponse.ok() &&
  1713 |   shortlistResponse.status() >= 500
  1714 | ) {
  1715 |   await expect(
  1716 |     recruitmentPage.loadingSpinner
  1717 |   ).toBeHidden({
  1718 |     timeout: 30_000,
  1719 |   });
  1720 | 
  1721 |   await page.waitForTimeout(1_500);
  1722 | 
  1723 |   shortlistResponse = await submitShortlist();
  1724 | }
  1725 | 
  1726 | const responseBody =
  1727 |   await shortlistResponse.text();
  1728 | 
  1729 | expect(
  1730 |   shortlistResponse.ok(),
  1731 |   `Shortlist API failed with ${shortlistResponse.status()}: ${responseBody}`
  1732 | ).toBeTruthy();
  1733 | 
  1734 | await expect(
  1735 |   recruitmentPage.loadingSpinner
  1736 | ).toBeHidden({
  1737 |   timeout: 30_000,
  1738 | });
  1739 | 
  1740 | await expect(
  1741 |   recruitmentPage.candidateStatusText
  1742 | ).toContainText(data.expectedStatus, {
  1743 |   timeout: 30_000,
  1744 | });
  1745 |     // Verify status from Candidates List.
  1746 |     await navigationPage.gotoRecruitment();
  1747 | 
  1748 |     const selectedCandidate =
  1749 |       await recruitmentPage.selectFirstAvailableCandidate(firstName);
  1750 | 
  1751 |     if (selectedCandidate === null) {
  1752 |       throw new Error(`Shortlisted candidate was not found: ${firstName}`);
  1753 |     }
  1754 | 
  1755 |     await recruitmentPage.searchButton.click();
  1756 | 
  1757 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  1758 |       timeout: 20_000,
  1759 |     });
  1760 | 
  1761 |     await expect(recruitmentPage.candidateRows).toHaveCount(1, {
  1762 |       timeout: 20_000,
  1763 |     });
  1764 | 
  1765 |     const matchingRow = recruitmentPage.candidateRows.first();
  1766 | 
  1767 |     const cells = matchingRow.locator(".oxd-table-cell");
  1768 | 
  1769 |     await expect(cells.nth(2)).toContainText(firstName);
  1770 | 
  1771 |     // Status column.
  1772 |     await expect(cells.nth(5)).toContainText(data.expectedStatus);
  1773 | 
  1774 |     // Cleanup.
  1775 |     await recruitmentPage.restButton.click();
  1776 | 
  1777 |     await recruitmentPage.deleteCandidateByName(firstName);
```