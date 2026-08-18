# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1678:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Shortlist' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('button', { name: 'Shortlist' })
  - Target page, context or browser has been closed

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
      - paragraph: cocomelon T
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
- paragraph: Shortlist1787032301851 Test User
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
- textbox "First Name" [disabled]: Shortlist1787032301851
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: shortlistcandidate1787032301851@example.com
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
- textbox "yyyy-dd-mm" [disabled]: 2026-18-08
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
    - row "2026-18-08 cocomelon T added Shortlist1787032301851 Test User":
      - cell "2026-18-08"
      - cell "cocomelon T added Shortlist1787032301851 Test User"
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
  1626 | 
  1627 |     // This method searches and opens the profile.
  1628 |     await recruitmentPage.openCandidateProfile(firstName);
  1629 | 
  1630 |     await expect(page).toHaveURL(
  1631 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1632 |     );
  1633 | 
  1634 |     await recruitmentPage.updateCandidateDetails({
  1635 |       email: updatedEmail,
  1636 |       contactNumber: data.updatedContactNumber,
  1637 |       keywords: data.updatedKeywords,
  1638 |       notes: data.updatedNotes,
  1639 |     });
  1640 | 
  1641 |     await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);
  1642 | 
  1643 |     await expect(recruitmentPage.contactNumberInput).toHaveValue(
  1644 |       data.updatedContactNumber,
  1645 |     );
  1646 | 
  1647 |     await expect(recruitmentPage.keywordsInput).toHaveValue(
  1648 |       data.updatedKeywords,
  1649 |     );
  1650 | 
  1651 |     await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);
  1652 | 
  1653 |     // Refresh and verify persistence.
  1654 |     await page.reload({
  1655 |       waitUntil: "domcontentloaded",
  1656 |     });
  1657 | 
  1658 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  1659 | 
  1660 |     await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);
  1661 | 
  1662 |     await expect(recruitmentPage.contactNumberInput).toHaveValue(
  1663 |       data.updatedContactNumber,
  1664 |     );
  1665 | 
  1666 |     await expect(recruitmentPage.keywordsInput).toHaveValue(
  1667 |       data.updatedKeywords,
  1668 |     );
  1669 | 
  1670 |     await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);
  1671 | 
  1672 |     // Cleanup.
  1673 |     await navigationPage.gotoRecruitment();
  1674 | 
  1675 |     await recruitmentPage.deleteCandidateByName(firstName);
  1676 |   });
  1677 | 
  1678 |   test.only("TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression", async ({
  1679 |     page,
  1680 |     navigationPage,
  1681 |     recruitmentPage,
  1682 |   }) => {
  1683 |     const data = recruitmentData.TC_RECRUITMENT_156;
  1684 | 
  1685 |     const uniqueValue = Date.now();
  1686 | 
  1687 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1688 | 
  1689 |     const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
  1690 | 
  1691 |     await navigationPage.gotoRecruitment();
  1692 | 
  1693 |     await recruitmentPage.navigateToCandidate();
  1694 |     await recruitmentPage.addCandidateButton.click();
  1695 | 
  1696 |     const createdCandidate = await recruitmentPage.createCandidate({
  1697 |       firstName,
  1698 |       middleName: data.middleName,
  1699 |       lastName: data.lastName,
  1700 |       email,
  1701 |       contactNumber: data.contactNumber,
  1702 |     });
  1703 | 
  1704 |     const candidateId = createdCandidate.candidateId;
  1705 | 
  1706 |     expect(candidateId).not.toBe("");
  1707 | 
  1708 |     await expect(page).toHaveURL(
  1709 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1710 |       {
  1711 |         timeout: 30_000,
  1712 |       },
  1713 |     );
  1714 | 
  1715 |     // Return to Candidates List.
  1716 |     await navigationPage.gotoRecruitment();
  1717 | 
  1718 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  1719 | 
  1720 |     await recruitmentPage.openCandidateProfile(firstName);
  1721 | 
  1722 |     await expect(page).toHaveURL(
  1723 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1724 |     );
  1725 | 
> 1726 |     await expect(recruitmentPage.shortlistButton).toBeVisible();
       |                                                   ^ Error: expect(locator).toBeVisible() failed
  1727 | 
  1728 |     await recruitmentPage.shortlistButton.click();
  1729 | 
  1730 |     await expect(recruitmentPage.shortlistHeading).toBeVisible();
  1731 | 
  1732 |     await recruitmentPage.shortlistNotesInput.fill(data.shortlistNotes);
  1733 | 
  1734 |     await expect(recruitmentPage.shortlistNotesInput).toHaveValue(
  1735 |       data.shortlistNotes,
  1736 |     );
  1737 | 
  1738 |     // Start waiting before clicking Save.
  1739 |     const shortlistResponsePromise = page.waitForResponse(
  1740 |       (response) =>
  1741 |         response.url().includes("/api/v2/recruitment/candidates") &&
  1742 |         response.url().includes("shortlist") &&
  1743 |         ["POST", "PUT"].includes(response.request().method()),
  1744 |       {
  1745 |         timeout: 30_000,
  1746 |       },
  1747 |     );
  1748 | 
  1749 |     await recruitmentPage.shortlistSaveButton.click();
  1750 | 
  1751 |     const shortlistResponse = await shortlistResponsePromise;
  1752 | 
  1753 |     expect(shortlistResponse.ok()).toBeTruthy();
  1754 | 
  1755 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  1756 |       timeout: 30_000,
  1757 |     });
  1758 | 
  1759 |     await expect(recruitmentPage.candidateStatusText).toContainText(
  1760 |       data.expectedStatus,
  1761 |       {
  1762 |         timeout: 30_000,
  1763 |       },
  1764 |     );
  1765 |     // Verify status from Candidates List.
  1766 |     await navigationPage.gotoRecruitment();
  1767 | 
  1768 |     const selectedCandidate =
  1769 |       await recruitmentPage.selectFirstAvailableCandidate(firstName);
  1770 | 
  1771 |     if (selectedCandidate === null) {
  1772 |       throw new Error(`Shortlisted candidate was not found: ${firstName}`);
  1773 |     }
  1774 | 
  1775 |     await recruitmentPage.searchButton.click();
  1776 | 
  1777 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  1778 |       timeout: 20_000,
  1779 |     });
  1780 | 
  1781 |     await expect(recruitmentPage.candidateRows).toHaveCount(1, {
  1782 |       timeout: 20_000,
  1783 |     });
  1784 | 
  1785 |     const matchingRow = recruitmentPage.candidateRows.first();
  1786 | 
  1787 |     const cells = matchingRow.locator(".oxd-table-cell");
  1788 | 
  1789 |     await expect(cells.nth(2)).toContainText(firstName);
  1790 | 
  1791 |     // Status column.
  1792 |     await expect(cells.nth(5)).toContainText(data.expectedStatus);
  1793 | 
  1794 |     // Cleanup.
  1795 |     await recruitmentPage.restButton.click();
  1796 | 
  1797 |     await recruitmentPage.deleteCandidateByName(firstName);
  1798 |   });
  1799 | });
  1800 | 
```