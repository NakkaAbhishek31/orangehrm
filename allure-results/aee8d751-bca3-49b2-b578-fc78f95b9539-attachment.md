# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression
- Location: tests\Recruitment\recruitment.spec.ts:73:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true }))
Expected: visible
Error: strict mode violation: locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true })) resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-5a621acd="" class="oxd-text oxd-text--span">No Records Found</span> aka locator('span').filter({ hasText: 'No Records Found' })
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka locator('#oxd-toaster_1').getByText('No Records Found')

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').first().or(getByText('No Records Found', { exact: true }))

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic:
      - complementary [ref=f3e4]:
        - navigation "Sidepanel" [ref=f3e5]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f3e9]
            - text: 
          - generic [ref=f3e10]:
            - generic [ref=f3e11]:
              - generic [ref=f3e12]:
                - textbox "Search" [ref=f3e15]
                - button "" [ref=f3e16] [cursor=pointer]
              - separator [ref=f3e18]
            - list [ref=f3e19]:
              - listitem [ref=f3e20]:
                - link "Admin" [ref=f3e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f3e25]:
                - link "PIM" [ref=f3e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f3e41]:
                - link "Leave" [ref=f3e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f3e46]:
                - link "Time" [ref=f3e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f3e54]:
                - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f3e62]:
                - link "My Info" [ref=f3e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f3e70]:
                - link "Performance" [ref=f3e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f3e80]:
                - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f3e85]:
                - link "Directory" [ref=f3e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f3e90]:
                - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f3e96]:
                - link "Claim" [ref=f3e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f3e105]:
                - link "Buzz" [ref=f3e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f3e110]:
        - generic [ref=f3e111]:
          - generic [ref=f3e112]:
            - text: 
            - heading "Recruitment" [level=6] [ref=f3e114]
          - link [ref=f3e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f3e117] [cursor=pointer]
          - list [ref=f3e123]:
            - listitem [ref=f3e124]:
              - generic [ref=f3e125] [cursor=pointer]:
                - img "profile picture" [ref=f3e126]
                - paragraph [ref=f3e127]: manda user
                - generic [ref=f3e128]: 
        - navigation "Topbar Menu" [ref=f3e130]:
          - list [ref=f3e131]:
            - listitem [ref=f3e132] [cursor=pointer]:
              - link "Candidates" [ref=f3e133]:
                - /url: "#"
            - listitem [ref=f3e134] [cursor=pointer]:
              - link "Vacancies" [ref=f3e135]:
                - /url: "#"
            - button "" [ref=f3e137] [cursor=pointer]
    - generic [ref=f3e139]:
      - generic [ref=f3e141]:
        - generic [ref=f3e142]:
          - generic [ref=f3e143]:
            - heading "Candidates" [level=5] [ref=f3e145]
            - button "" [ref=f3e148] [cursor=pointer]
          - separator [ref=f3e150]
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - generic [ref=f3e156]:
                - generic [ref=f3e157]: Job Title
                - generic [ref=f3e161] [cursor=pointer]:
                  - generic [ref=f3e162]: "-- Select --"
                  - generic [ref=f3e163]: 
              - generic [ref=f3e166]:
                - generic [ref=f3e167]: Vacancy
                - generic [ref=f3e171] [cursor=pointer]:
                  - generic [ref=f3e172]: "-- Select --"
                  - generic [ref=f3e173]: 
              - generic [ref=f3e176]:
                - generic [ref=f3e177]: Hiring Manager
                - generic [ref=f3e181] [cursor=pointer]:
                  - generic [ref=f3e182]: "-- Select --"
                  - generic [ref=f3e183]: 
              - generic [ref=f3e186]:
                - generic [ref=f3e187]: Status
                - generic [ref=f3e191] [cursor=pointer]:
                  - generic [ref=f3e192]: "-- Select --"
                  - generic [ref=f3e193]: 
            - generic [ref=f3e196]:
              - generic [ref=f3e198]:
                - generic [ref=f3e199]: Candidate Name
                - textbox "Type for hints..." [ref=f3e204]
              - generic [ref=f3e206]:
                - generic [ref=f3e207]: Keywords
                - textbox "Enter comma seperated words..." [ref=f3e210]
              - generic [ref=f3e212]:
                - generic [ref=f3e213]: Date of Application
                - generic [ref=f3e217]:
                  - textbox "From" [ref=f3e218]: 2026-15-07
                  - generic [ref=f3e219] [cursor=pointer]: 
              - generic [ref=f3e226]:
                - textbox "To" [ref=f3e227]: 2026-14-08
                - generic [ref=f3e228] [cursor=pointer]: 
            - generic [ref=f3e232]:
              - generic [ref=f3e233]: Method of Application
              - generic [ref=f3e237] [cursor=pointer]:
                - generic [ref=f3e238]: "-- Select --"
                - generic [ref=f3e239]: 
            - separator [ref=f3e241]
            - generic [ref=f3e242]:
              - button "Reset" [ref=f3e243] [cursor=pointer]
              - button "Search" [active] [ref=f3e244] [cursor=pointer]
        - generic [ref=f3e245]:
          - button " Add" [ref=f3e247] [cursor=pointer]:
            - generic [ref=f3e248]: 
            - text: Add
          - generic [ref=f3e249]:
            - separator [ref=f3e250]
            - generic [ref=f3e251]: No Records Found
          - table [ref=f3e254]:
            - rowgroup [ref=f3e255]:
              - row [ref=f3e256]:
                - columnheader "" [ref=f3e257]:
                  - generic [ref=f3e259] [cursor=pointer]:
                    - checkbox "" [ref=f3e260]
                    - generic [ref=f3e261]: 
                - columnheader "Vacancy " [ref=f3e263]:
                  - text: Vacancy
                  - generic [ref=f3e264]:
                    - generic [ref=f3e265] [cursor=pointer]: 
                    - text:  
                - columnheader "Candidate " [ref=f3e266]:
                  - text: Candidate
                  - generic [ref=f3e267]:
                    - generic [ref=f3e268] [cursor=pointer]: 
                    - text:  
                - columnheader "Hiring Manager " [ref=f3e269]:
                  - text: Hiring Manager
                  - generic [ref=f3e270]:
                    - generic [ref=f3e271] [cursor=pointer]: 
                    - text:  
                - columnheader "Date of Application " [ref=f3e272]:
                  - text: Date of Application
                  - generic [ref=f3e273]:
                    - generic [ref=f3e274] [cursor=pointer]: 
                    - text:  
                - columnheader "Status " [ref=f3e275]:
                  - text: Status
                  - generic [ref=f3e276]:
                    - generic [ref=f3e277] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f3e278]
            - rowgroup
      - generic [ref=f3e280]:
        - paragraph [ref=f3e281]: OrangeHRM OS 5.9
        - paragraph [ref=f3e282]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f3e283] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f3e285] [cursor=pointer]:
    - generic [ref=f3e286]:
      - generic [ref=f3e287]: 
      - generic [ref=f3e290]:
        - paragraph [ref=f3e291]: Info
        - paragraph [ref=f3e292]: No Records Found
    - button "×" [ref=f3e294]
```

# Test source

```ts
  7   |   const date = new Date();
  8   | 
  9   |   date.setDate(date.getDate() + daysOffset);
  10  | 
  11  |   const year = date.getFullYear();
  12  | 
  13  |   const day = String(date.getDate()).padStart(2, "0");
  14  | 
  15  |   const month = String(date.getMonth() + 1).padStart(2, "0");
  16  | 
  17  | 
  18  |   return `${year}-${day}-${month}`;
  19  | };
  20  | 
  21  | test.describe("PIM Employee List", () => {
  22  |   test.beforeEach(async ({ loginPage }) => {
  23  |     await loginPage.visitPage();
  24  |     await loginPage.login(
  25  |       loginData.validAdmin.username,
  26  |       loginData.validAdmin.password,
  27  |     );
  28  |     await loginPage.verifyLoginSuccessful();
  29  |   });
  30  | 
  31  |   test.only("TC_RECRUITMENT_133 - Admin should navigate to the Candidates page @smoke @navigation @regression", async ({
  32  |     page,
  33  |     navigationPage,
  34  |     recruitmentPage,
  35  |   }) => {
  36  |     const data = recruitmentData.TC_RECRUITMENT_133;
  37  |     // Click Recruitment in the main navigation.
  38  |     await navigationPage.gotoRecruitment();
  39  |     // Navigate to Candidates.
  40  |     await recruitmentPage.navigateToCandidate();
  41  |     // Verify the Candidates URL.
  42  |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  43  |     // Verify the Candidates heading.
  44  | 
  45  |     await expect(recruitmentPage.candidatePageHeading).toHaveText(
  46  |       data.pageHeading,
  47  |     );
  48  |     // Verify Job Title filter.
  49  |     await expect(recruitmentPage.jobTitleDropdown).toBeVisible();
  50  |     // Verify Vacancy filter.
  51  |     await expect(recruitmentPage.vacancyDropdown).toBeVisible();
  52  | 
  53  |     // Verify Hiring Manager filter.
  54  |     await expect(recruitmentPage.hiringManagerDropdown).toBeVisible();
  55  | 
  56  |     // Verify Candidate Status filter.
  57  |     await expect(recruitmentPage.candidateStatusDropdown).toBeVisible();
  58  | 
  59  |     // Verify Candidate Name input.
  60  |     await expect(recruitmentPage.candidateNameInput).toBeVisible();
  61  | 
  62  |     // Verify From Date and To Date.
  63  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  64  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  65  |     // Verify Search and Reset buttons.
  66  |     await expect(recruitmentPage.restButton).toBeVisible();
  67  |     await expect(recruitmentPage.searchButton).toBeVisible();
  68  | 
  69  |     // Verify the Candidates results table.
  70  |     await expect(recruitmentPage.candidatesTable).toBeVisible();
  71  |   });
  72  | 
  73  |   test.only("TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression", async ({
  74  |     navigationPage,
  75  |     recruitmentPage,
  76  |   }) => {
  77  |     // Read the date offsets from recruitment JSON data.
  78  |     const data = recruitmentData.TC_RECRUITMENT_134;
  79  |     // Generate From Date and To Date dynamically.
  80  |     const fromDate = dateFromOffset(data.fromDaysOffset);
  81  | 
  82  |     const toDate = dateFromOffset(data.toDaysOffset);
  83  | 
  84  |     // Navigate to Recruitment → Candidates.
  85  |     await navigationPage.gotoRecruitment();
  86  |     await recruitmentPage.navigateToCandidate();
  87  |     // Wait until both application date fields are visible.
  88  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  89  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  90  |     // Fill the From Date.
  91  |     // Fill the To Date.
  92  |     await recruitmentPage.fromDateInput.fill(fromDate);
  93  |     await recruitmentPage.toDateInput.fill(toDate);
  94  |     // Click Search.
  95  |     await recruitmentPage.searchCandidates();
  96  | 
  97  |     // Wait for the loading spinner to disappear.
  98  |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  99  |       timeout: 20_000,
  100 |     });
  101 |     // Verify both entered date values remain displayed.
  102 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  103 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  104 | 
  105 |     await expect(
  106 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
> 107 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  108 |       timeout: 15_000,
  109 |     });
  110 | 
  111 |     // Verify no date-validation messages appear.
  112 |     await expect(recruitmentPage.dateValidationMessages).toHaveCount(0);
  113 | 
  114 |     // Reset the filters.
  115 |     await recruitmentPage.restButton.click();
  116 |   });
  117 | 
  118 |   test.only("TC_RECRUITMENT_135 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
  119 |     navigationPage,
  120 |     recruitmentPage,
  121 |   }) => {
  122 |     // Read the invalid date offsets from JSON.
  123 |     const data = recruitmentData.TC_RECRUITMENT_135;
  124 | 
  125 |     // Generate a future From Date.
  126 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  127 | 
  128 |     // Generate an earlier To Date.
  129 |     const toDate = dateFromOffset(data.toDaysOffset);
  130 |     // Navigate to Recruitment → Candidates.
  131 |     await navigationPage.gotoRecruitment();
  132 |     await recruitmentPage.navigateToCandidate();
  133 |     // Fill the From Date with the later date.
  134 |     await recruitmentPage.fromDateInput.fill(fromDate);
  135 |     // Fill the To Date with the earlier date.
  136 | 
  137 |     await recruitmentPage.toDateInput.fill(toDate);
  138 | 
  139 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  140 | 
  141 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  142 | 
  143 |     // Click Search.
  144 |     await recruitmentPage.searchCandidates();
  145 |     // Verify the To Date validation message appears.
  146 |     await expect(recruitmentPage.toDateValidation).toBeVisible();
  147 |     await expect(recruitmentPage.toDateValidation).toHaveText(
  148 |       data.validationMessage,
  149 |     );
  150 | 
  151 |     // Reset the filters.
  152 |     await recruitmentPage.restButton.click();
  153 | 
  154 |     await expect(recruitmentPage.toDateValidation).toBeHidden();
  155 |   });
  156 | 
  157 |   test.only("TC_RECRUITMENT_136 - Admin should reset Candidate search filters @positive @filter @regression", async ({
  158 |     navigationPage,
  159 |     recruitmentPage,
  160 |   }) => {
  161 |     const data = recruitmentData.TC_RECRUITMENT_136;
  162 | 
  163 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  164 | 
  165 |     const toDate = dateFromOffset(data.toDaysOffset);
  166 | 
  167 |     await navigationPage.gotoRecruitment();
  168 |     await recruitmentPage.navigateToCandidate();
  169 | 
  170 |     // Store the default date values before changing them.
  171 |     const defaultFromDate = await recruitmentPage.fromDateInput.inputValue();
  172 | 
  173 |     const defaultToDate = await recruitmentPage.toDateInput.inputValue();
  174 | 
  175 |     await recruitmentPage.selectDropdownOption(
  176 |       recruitmentPage.jobTitleDropdown,
  177 |       data.jobTitle,
  178 |     );
  179 | 
  180 |     await recruitmentPage.selectDropdownOption(
  181 |       recruitmentPage.candidateStatusDropdown,
  182 |       data.candidateStatus,
  183 |     );
  184 | 
  185 |     await recruitmentPage.fromDateInput.fill(fromDate);
  186 | 
  187 |     await recruitmentPage.toDateInput.fill(toDate);
  188 | 
  189 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
  190 | 
  191 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  192 |       data.candidateStatus,
  193 |     );
  194 | 
  195 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  196 | 
  197 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  198 | 
  199 |     await recruitmentPage.restButton.click();
  200 | 
  201 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(
  202 |       data.defaultDropdownValue,
  203 |     );
  204 | 
  205 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  206 |       data.defaultDropdownValue,
  207 |     );
```