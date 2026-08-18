# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1678:8

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f8e2]:
  - generic [ref=f8e3]:
    - generic:
      - complementary [ref=f8e4]:
        - navigation "Sidepanel" [ref=f8e5]:
          - generic [ref=f8e6]:
            - link [ref=f8e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f8e9]
            - text: 
          - generic [ref=f8e10]:
            - generic [ref=f8e11]:
              - generic [ref=f8e12]:
                - textbox "Search" [ref=f8e15]
                - button "" [ref=f8e16] [cursor=pointer]
              - separator [ref=f8e18]
            - list [ref=f8e19]:
              - listitem [ref=f8e20]:
                - link "Admin" [ref=f8e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f8e25]:
                - link "PIM" [ref=f8e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f8e41]:
                - link "Leave" [ref=f8e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f8e46]:
                - link "Time" [ref=f8e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f8e54]:
                - link "Recruitment" [ref=f8e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f8e62]:
                - link "My Info" [ref=f8e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f8e70]:
                - link "Performance" [ref=f8e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f8e80]:
                - link "Dashboard" [ref=f8e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f8e85]:
                - link "Directory" [ref=f8e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f8e90]:
                - link "Maintenance" [ref=f8e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f8e96]:
                - link "Claim" [ref=f8e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f8e105]:
                - link "Buzz" [ref=f8e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f8e110]:
        - generic [ref=f8e111]:
          - generic [ref=f8e112]:
            - text: 
            - heading "Recruitment" [level=6] [ref=f8e114]
          - link [ref=f8e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f8e117] [cursor=pointer]
          - list [ref=f8e123]:
            - listitem [ref=f8e124]:
              - generic [ref=f8e125] [cursor=pointer]:
                - img "profile picture" [ref=f8e126]
                - paragraph [ref=f8e127]: cocomelon T
                - generic [ref=f8e128]: 
        - navigation "Topbar Menu" [ref=f8e130]:
          - list [ref=f8e131]:
            - listitem [ref=f8e132] [cursor=pointer]:
              - link "Candidates" [ref=f8e133]:
                - /url: "#"
            - listitem [ref=f8e134] [cursor=pointer]:
              - link "Vacancies" [ref=f8e135]:
                - /url: "#"
            - button "" [ref=f8e137] [cursor=pointer]
    - generic [ref=f8e139]:
      - generic [ref=f8e142]:
        - heading "Shortlist Candidate" [level=6] [ref=f8e143]
        - separator [ref=f8e144]
        - generic [ref=f8e145]:
          - generic [ref=f8e150]:
            - generic [ref=f8e152]:
              - generic [ref=f8e153]: Candidate
              - textbox [ref=f8e156]: Shortlist1787032356360 Test User
            - generic [ref=f8e158]:
              - generic [ref=f8e159]: Vacancy
              - textbox [ref=f8e162]: Junior Account Assistant
            - generic [ref=f8e164]:
              - generic [ref=f8e165]: Hiring Manager
              - textbox [ref=f8e168]
            - generic [ref=f8e170]:
              - generic [ref=f8e171]: Current Status
              - textbox [ref=f8e174]: Application Initiated
          - generic [ref=f8e178]:
            - generic [ref=f8e179]: Notes
            - textbox "Type here" [ref=f8e182]: Candidate shortlisted through Playwright automation
          - separator [ref=f8e183]
          - generic [ref=f8e184]:
            - button "Cancel" [ref=f8e185] [cursor=pointer]
            - button "Save" [active] [ref=f8e186] [cursor=pointer]
      - generic [ref=f8e187]:
        - paragraph [ref=f8e188]: OrangeHRM OS 5.9
        - paragraph [ref=f8e189]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f8e190] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f8e192] [cursor=pointer]:
    - generic [ref=f8e193]:
      - generic [ref=f8e194]: 
      - generic [ref=f8e197]:
        - paragraph [ref=f8e198]: Error
        - paragraph [ref=f8e199]: Unexpected Error Occurred
    - button "×" [ref=f8e201]
```

# Test source

```ts
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
  1726 |     await expect(recruitmentPage.shortlistButton).toBeVisible();
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
> 1753 |     expect(shortlistResponse.ok()).toBeTruthy();
       |                                    ^ Error: expect(received).toBeTruthy()
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