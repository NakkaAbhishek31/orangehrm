# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1892:6

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
- paragraph: Shortlist1787031850711 Test User
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
- textbox "First Name" [disabled]: Shortlist1787031850711
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: shortlistcandidate1787031850711@example.com
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
    - row "2026-18-08 cocomelon T added Shortlist1787031850711 Test User":
      - cell "2026-18-08"
      - cell "cocomelon T added Shortlist1787031850711 Test User"
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
  1857 |       recruitmentPage.loadingSpinner
  1858 |     ).toBeHidden();
  1859 | 
  1860 |     await expect(
  1861 |       recruitmentPage.emailInput
  1862 |     ).toHaveValue(updatedEmail);
  1863 | 
  1864 |     await expect(
  1865 |       recruitmentPage.contactNumberInput
  1866 |     ).toHaveValue(
  1867 |       data.updatedContactNumber
  1868 |     );
  1869 | 
  1870 |     await expect(
  1871 |       recruitmentPage.keywordsInput
  1872 |     ).toHaveValue(
  1873 |       data.updatedKeywords
  1874 |     );
  1875 | 
  1876 |     await expect(
  1877 |       recruitmentPage.notesInput
  1878 |     ).toHaveValue(
  1879 |       data.updatedNotes
  1880 |     );
  1881 | 
  1882 |     // Cleanup.
  1883 |     await navigationPage.gotoRecruitment();
  1884 | 
  1885 |     await recruitmentPage.deleteCandidateByName(
  1886 |       firstName
  1887 |     );
  1888 |   }
  1889 | );
  1890 | 
  1891 | 
  1892 | test.only( 'TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression',
  1893 |   async ({
  1894 |     page,
  1895 |     navigationPage,
  1896 |     recruitmentPage,
  1897 |   }) => {
  1898 |     const data =
  1899 |       recruitmentData.TC_RECRUITMENT_156;
  1900 | 
  1901 |     const uniqueValue = Date.now();
  1902 | 
  1903 |     const firstName =
  1904 |       `${data.firstNamePrefix}${uniqueValue}`;
  1905 | 
  1906 |     const email =
  1907 |       `${data.emailPrefix}${uniqueValue}` +
  1908 |       `${data.emailDomain}`;
  1909 | 
  1910 |     await navigationPage.gotoRecruitment();
  1911 | 
  1912 |     await recruitmentPage.navigateToCandidate();
  1913 |     await recruitmentPage.addCandidateButton.click();
  1914 | 
  1915 |     const createdCandidate =
  1916 |       await recruitmentPage.createCandidate({
  1917 |         firstName,
  1918 |         middleName: data.middleName,
  1919 |         lastName: data.lastName,
  1920 |         email,
  1921 |         contactNumber: data.contactNumber,
  1922 |       });
  1923 | 
  1924 |     const candidateId =
  1925 |       createdCandidate.candidateId;
  1926 | 
  1927 |     expect(candidateId).not.toBe('');
  1928 | 
  1929 |     await expect(page).toHaveURL(
  1930 |       new RegExp(
  1931 |         `/recruitment/addCandidate/${candidateId}$`
  1932 |       ),
  1933 |       {
  1934 |         timeout: 30_000,
  1935 |       }
  1936 |     );
  1937 | 
  1938 |     // Return to Candidates List.
  1939 |     await navigationPage.gotoRecruitment();
  1940 | 
  1941 |     await expect(page).toHaveURL(
  1942 |       /\/recruitment\/viewCandidates$/
  1943 |     );
  1944 | 
  1945 |     await recruitmentPage.openCandidateProfile(
  1946 |       firstName
  1947 |     );
  1948 | 
  1949 |     await expect(page).toHaveURL(
  1950 |       new RegExp(
  1951 |         `/recruitment/addCandidate/${candidateId}$`
  1952 |       )
  1953 |     );
  1954 | 
  1955 |     await expect(
  1956 |       recruitmentPage.shortlistButton
> 1957 |     ).toBeVisible();
       |       ^ Error: expect(locator).toBeVisible() failed
  1958 | 
  1959 |     await recruitmentPage.shortlistButton.click();
  1960 | 
  1961 |     await expect(
  1962 |       recruitmentPage.shortlistHeading
  1963 |     ).toBeVisible();
  1964 | 
  1965 |     await recruitmentPage
  1966 |       .shortlistNotesInput
  1967 |       .fill(data.shortlistNotes);
  1968 | 
  1969 |     await expect(
  1970 |       recruitmentPage.shortlistNotesInput
  1971 |     ).toHaveValue(data.shortlistNotes);
  1972 | 
  1973 |     // Start waiting before clicking Save.
  1974 |     const shortlistResponsePromise =
  1975 |       page.waitForResponse(
  1976 |         response =>
  1977 |           response.url().includes(
  1978 |             '/api/v2/recruitment/candidates'
  1979 |           ) &&
  1980 |           response.url().includes(
  1981 |             'shortlist'
  1982 |           ) &&
  1983 |           ['POST', 'PUT'].includes(
  1984 |             response.request().method()
  1985 |           ),
  1986 |         {
  1987 |           timeout: 30_000,
  1988 |         }
  1989 |       );
  1990 |     const successToastPromise =
  1991 |       recruitmentPage.updateSuccessToast
  1992 |         .waitFor({
  1993 |           state: 'visible',
  1994 |           timeout: 15_000,
  1995 |         });
  1996 | 
  1997 |     await recruitmentPage
  1998 |       .shortlistSaveButton
  1999 |       .click();
  2000 | 
  2001 |     const shortlistResponse =
  2002 |       await shortlistResponsePromise;
  2003 | 
  2004 |     await successToastPromise;
  2005 | 
  2006 |     expect(
  2007 |       shortlistResponse.ok()
  2008 |     ).toBeTruthy();
  2009 | 
  2010 |     await expect(
  2011 |       recruitmentPage.candidateStatusText
  2012 |     ).toContainText(
  2013 |       data.expectedStatus
  2014 |     );
  2015 | 
  2016 |     // Verify status from Candidates List.
  2017 |     await navigationPage.gotoRecruitment();
  2018 | 
  2019 |     const selectedCandidate =
  2020 |       await recruitmentPage
  2021 |         .selectFirstAvailableCandidate(firstName);
  2022 | 
  2023 |     if (selectedCandidate === null) {
  2024 |       throw new Error(
  2025 |         `Shortlisted candidate was not found: ${firstName}`
  2026 |       );
  2027 |     }
  2028 | 
  2029 |     await recruitmentPage.searchButton.click();
  2030 | 
  2031 |     await expect(
  2032 |       recruitmentPage.loadingSpinner
  2033 |     ).toBeHidden({
  2034 |       timeout: 20_000,
  2035 |     });
  2036 | 
  2037 |     await expect(
  2038 |       recruitmentPage.candidateRows
  2039 |     ).toHaveCount(1, {
  2040 |       timeout: 20_000,
  2041 |     });
  2042 | 
  2043 |     const matchingRow =
  2044 |       recruitmentPage.candidateRows.first();
  2045 | 
  2046 |     const cells = matchingRow.locator(
  2047 |       '.oxd-table-cell'
  2048 |     );
  2049 | 
  2050 |     await expect(
  2051 |       cells.nth(2)
  2052 |     ).toContainText(firstName);
  2053 | 
  2054 |     // Status column.
  2055 |     await expect(
  2056 |       cells.nth(5)
  2057 |     ).toContainText(
```