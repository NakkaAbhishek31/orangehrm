# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_138 - Admin should filter Candidates by candidate status @positive @filter @regression
- Location: tests\Recruitment\recruitment.spec.ts:263:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').nth(15).locator('.oxd-table-cell').nth(5)
Expected substring: "Application Initiated"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').nth(15).locator('.oxd-table-cell').nth(5)

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
      - paragraph: manda user
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
- text: Job Title -- Select --  Vacancy -- Select --  Hiring Manager -- Select --  Status Application Initiated  Candidate Name
- textbox "Type for hints..."
- text: Keywords
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
- text: (15) Records Found
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
    - row " Software Engineer Doug North Brekke (Deleted) 2026-14-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Software Engineer"
      - cell "Doug North Brekke"
      - cell "(Deleted)"
      - cell "2026-14-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Software Engineer Alexandrea Skyler Davis (Deleted) 2026-14-08 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Software Engineer"
      - cell "Alexandrea Skyler Davis"
      - cell "(Deleted)"
      - cell "2026-14-08"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
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
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN manda akhil user 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "manda akhil user"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Murali13s Krishna7d5 Veerfa3 (Deleted) 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Murali13s Krishna7d5 Veerfa3"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Sales Representative Manoj Regmi (Deleted) 2024-05-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sales Representative"
      - cell "Manoj Regmi"
      - cell "(Deleted)"
      - cell "2024-05-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Sales Representative Manoj Regmi (Deleted) 2024-05-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sales Representative"
      - cell "Manoj Regmi"
      - cell "(Deleted)"
      - cell "2024-05-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Sales Representative Jo Denton (Deleted) 2022-08-07 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sales Representative"
      - cell "Jo Denton"
      - cell "(Deleted)"
      - cell "2022-08-07"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  207 |     );
  208 | 
  209 |     await expect(recruitmentPage.fromDateInput).toHaveValue(defaultFromDate);
  210 | 
  211 |     await expect(recruitmentPage.toDateInput).toHaveValue(defaultToDate);
  212 | 
  213 |     await expect(recruitmentPage.candidatesTable).toBeVisible();
  214 | 
  215 |     await expect(
  216 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  217 |     ).toBeVisible({
  218 |       timeout: 15_000,
  219 |     });
  220 |   });
  221 | 
  222 |   test.only("TC_RECRUITMENT_137 - Admin should filter Candidates by job title @positive @filter @regression", async ({
  223 |     navigationPage,
  224 |     recruitmentPage,
  225 |   }) => {
  226 |     // Read the configured Job Title from JSON.
  227 |     const data = recruitmentData.TC_RECRUITMENT_136;
  228 |     // Navigate to Recruitment → Candidates.
  229 |     await navigationPage.gotoRecruitment();
  230 |     await recruitmentPage.navigateToCandidate();
  231 |     // Select the configured Job Title.
  232 |     await recruitmentPage.selectDropdownOption(
  233 |       recruitmentPage.jobTitleDropdown,
  234 |       data.jobTitle,
  235 |     );
  236 |     // Verify the selected Job Title remains displayed.
  237 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
  238 |     // Click Search.
  239 |     await recruitmentPage.searchButton.click();
  240 |     // Wait for the loading spinner to disappear.
  241 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  242 |     await expect(
  243 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  244 |     ).toBeVisible({
  245 |       timeout: 15_000,
  246 |     });
  247 | 
  248 |     const candidateCount = await recruitmentPage.candidateRows.count();
  249 | 
  250 |     if (candidateCount > 0) {
  251 |       await expect(recruitmentPage.candidateRows.first()).toBeVisible();
  252 |     } else {
  253 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  254 |     }
  255 | 
  256 |     await recruitmentPage.restButton.click();
  257 | 
  258 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(
  259 |       data.defaultDropdownValue,
  260 |     );
  261 |   });
  262 | 
  263 |  test.only('TC_RECRUITMENT_138 - Admin should filter Candidates by candidate status @positive @filter @regression',
  264 |   async ({ navigationPage, recruitmentPage }) => {
  265 |     // Read Candidate Status and default dropdown value from JSON.
  266 |       const data = recruitmentData.TC_RECRUITMENT_138;
  267 |     // Navigate to Recruitment → Candidates.
  268 |        await navigationPage.gotoRecruitment();
  269 |        await recruitmentPage.navigateToCandidate();
  270 |     // Select the configured Candidate Status.
  271 |              await recruitmentPage.selectDropdownOption(
  272 |       recruitmentPage.candidateStatusDropdown,
  273 |       data.candidateStatus,
  274 |     );
  275 |     // Verify Candidate Status remains selected.
  276 |          await expect(recruitmentPage.candidateStatusDropdown).toContainText(data.candidateStatus);
  277 |     // Click Search.
  278 |       await recruitmentPage.searchButton.click();
  279 | 
  280 |     // Wait for the loading spinner to disappear.
  281 |      await expect(recruitmentPage.loadingSpinner).toBeHidden({
  282 |       timeout: 20_000,
  283 |     });
  284 | 
  285 |      await expect(
  286 |       recruitmentPage.candidateRows
  287 |         .first()
  288 |         .or(recruitmentPage.noRecordsFound)
  289 |     ).toBeVisible({
  290 |       timeout: 15_000,
  291 |     });
  292 |      const candidateCount =
  293 |       await recruitmentPage.candidateRows.count();
  294 | 
  295 |     if (candidateCount > 0) {
  296 |       for (
  297 |         let index = 0;
  298 |         index < candidateCount;
  299 |         index++
  300 |       ) {
  301 |         const statusCell =
  302 |           recruitmentPage.candidateRows
  303 |             .nth(index)
  304 |             .locator('.oxd-table-cell')
  305 |             .nth(5);
  306 | 
> 307 |         await expect(statusCell).toContainText(
      |                                  ^ Error: expect(locator).toContainText(expected) failed
  308 |           data.candidateStatus
  309 |         );
  310 |       }
  311 |     } else {
  312 |       await expect(
  313 |         recruitmentPage.noRecordsFound
  314 |       ).toBeVisible();
  315 |     }
  316 |     // Reset the filters.
  317 |    await  recruitmentPage.restButton.click();
  318 |     // Verify Candidate Status returns to “-- Select --”.
  319 | 
  320 |         await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  321 |       data.defaultDropdownValue,
  322 |     );
  323 |   }
  324 | );
  325 | 
  326 | test.only( 'TC_RECRUITMENT_139 - Admin should filter Candidates by vacancy @positive @filter @regression',
  327 |   async ({
  328 |     navigationPage,
  329 |     recruitmentPage,
  330 |   }) => {
  331 |     const data =recruitmentData.TC_RECRUITMENT_139;
  332 |     await navigationPage.gotoRecruitment();
  333 |     await recruitmentPage.navigateToCandidate();
  334 |     const selectedVacancy =
  335 |       await recruitmentPage
  336 |         .selectFirstAvailableVacancy();
  337 | 
  338 |     await expect(
  339 |       recruitmentPage.vacancyDropdown
  340 |     ).toContainText(selectedVacancy);
  341 | 
  342 |     await recruitmentPage.searchButton.click();
  343 | 
  344 |     await expect(
  345 |       recruitmentPage.loadingSpinner
  346 |     ).toBeHidden({
  347 |       timeout: 20_000,
  348 |     });
  349 | 
  350 |     await expect(
  351 |       recruitmentPage.candidateRows
  352 |         .first()
  353 |         .or(recruitmentPage.noRecordsFound)
  354 |     ).toBeVisible({
  355 |       timeout: 15_000,
  356 |     });
  357 | 
  358 |     const candidateCount =
  359 |       await recruitmentPage.candidateRows.count();
  360 | 
  361 |     if (candidateCount > 0) {
  362 |       for (
  363 |         let index = 0;
  364 |         index < candidateCount;
  365 |         index++
  366 |       ) {
  367 |         const vacancyCell =
  368 |           recruitmentPage.candidateRows
  369 |             .nth(index)
  370 |             .locator('.oxd-table-cell')
  371 |             .nth(1);
  372 | 
  373 |         await expect(
  374 |           vacancyCell
  375 |         ).toContainText(selectedVacancy);
  376 |       }
  377 |     } else {
  378 |       await expect(
  379 |         recruitmentPage.noRecordsFound
  380 |       ).toBeVisible();
  381 |     }
  382 | 
  383 |     await recruitmentPage.restButton.click();
  384 | 
  385 |     await expect(
  386 |       recruitmentPage.vacancyDropdown
  387 |     ).toContainText(
  388 |       data.defaultDropdownValue
  389 |     );
  390 |   }
  391 | );
  392 | 
  393 | test( 'TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression',
  394 |   async ({
  395 |     navigationPage,
  396 |     recruitmentPage,
  397 |   }) => {
  398 |     const data =
  399 |       recruitmentData.TC_RECRUITMENT_140;
  400 | 
  401 |     await navigationPage.gotoRecruitment();
  402 |     await recruitmentPage.navigateToCandidate();
  403 | 
  404 |     const selectedManager =
  405 |       await recruitmentPage
  406 |         .selectFirstAvailableHiringManager();
  407 | 
```