# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_141 - Admin should search for a candidate by name @positive @search @autocomplete @regression
- Location: tests\Recruitment\recruitment.spec.ts:395:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-container').getByText('No Records Found', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.orangehrm-container').getByText('No Records Found', { exact: true })

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
      - paragraph: Lucious Sources
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
- textbox "Type for hints...": Auto47094 Automation10607
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
- text: (1) Record Found
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
    - row " Auto47094 Automation10607 (Deleted) 2026-25-08   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Auto47094 Automation10607"
      - cell "(Deleted)"
      - cell "2026-25-08"
      - cell
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
  336 |       .allTextContents();
  337 | 
  338 |     if (vacancyTexts.length > 0) {
  339 |       for (const vacancyText of vacancyTexts) {
  340 |         expect(vacancyText).toContain(selectedVacancy);
  341 |       }
  342 |     }
  343 | 
  344 |     await recruitmentPage.restButton.click();
  345 | 
  346 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  347 |       data.defaultDropdownValue,
  348 |     );
  349 |   });
  350 |   test("TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression", async ({
  351 |     navigationPage,
  352 |     recruitmentPage,
  353 |   }) => {
  354 |     const data = recruitmentData.TC_RECRUITMENT_140;
  355 | 
  356 |     await navigationPage.gotoRecruitment();
  357 |     await recruitmentPage.navigateToCandidate();
  358 | 
  359 |     const selectedManager =
  360 |       await recruitmentPage.selectFirstAvailableHiringManager();
  361 | 
  362 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  363 |       selectedManager,
  364 |     );
  365 | 
  366 |     await recruitmentPage.searchCandidates();
  367 | 
  368 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  369 |       timeout: 20_000,
  370 |     });
  371 | 
  372 |     const managerTexts = await recruitmentPage.candidateRows
  373 |       .locator(".oxd-table-cell:nth-child(4)")
  374 |       .allTextContents();
  375 | 
  376 |     if (managerTexts.length > 0) {
  377 |       const selectedNameParts = selectedManager.split(/\s+/).filter(Boolean);
  378 | 
  379 |       for (const managerText of managerTexts.filter(
  380 |         text => !/\(Deleted\)/i.test(text),
  381 |       )) {
  382 |         for (const namePart of selectedNameParts) {
  383 |           expect(managerText).toContain(namePart);
  384 |         }
  385 |       }
  386 |     }
  387 | 
  388 |     await recruitmentPage.restButton.click();
  389 | 
  390 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  391 |       data.defaultDropdownValue,
  392 |     );
  393 |   });
  394 | 
  395 |   test("TC_RECRUITMENT_141 - Admin should search for a candidate by name @positive @search @autocomplete @regression", async ({
  396 |     navigationPage,
  397 |     recruitmentPage,
  398 |   }) => {
  399 |     // Read the candidate-name search value from JSON.
  400 |     const data = recruitmentData.TC_RECRUITMENT_141;
  401 |     // Navigate to Recruitment → Candidates.
  402 | 
  403 |     await navigationPage.gotoRecruitment();
  404 |     await recruitmentPage.navigateToCandidate();
  405 |     // Enter the candidate name into the Candidate Name field.
  406 |     await recruitmentPage.candidateNameInput.fill(data.candidateSearchText);
  407 |     // Wait for the autocomplete options.
  408 |     const selectedCandidate =
  409 |       await recruitmentPage.selectFirstAvailableCandidate(
  410 |         data.candidateSearchText,
  411 |       );
  412 | 
  413 |     // Click Search.
  414 |     await recruitmentPage.searchButton.click();
  415 |     // Wait for the loading spinner to disappear.
  416 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  417 |     // Verify either candidate rows or
  418 |     // “No Records Found” appears.
  419 |     await expect(
  420 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  421 |     ).toBeVisible({
  422 |       timeout: 15_000,
  423 |     });
  424 |     const candidateCount = await recruitmentPage.candidateRows.count();
  425 | 
  426 |     if (candidateCount > 0) {
  427 |       for (let index = 0; index < candidateCount; index++) {
  428 |         const candidateNameCell = recruitmentPage.candidateRows
  429 |           .nth(index)
  430 |           .locator(".oxd-table-cell")
  431 |           .nth(2);
  432 | 
  433 |         await expect(candidateNameCell).toContainText(selectedCandidate!);
  434 |       }
  435 |     } else {
> 436 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  437 |     }
  438 | 
  439 |     await recruitmentPage.restButton.click();
  440 | 
  441 |     await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  442 |   });
  443 | 
  444 |   test("TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression", async ({
  445 |     page,
  446 |     navigationPage,
  447 |     recruitmentPage,
  448 |   }) => {
  449 |     const data = recruitmentData.TC_RECRUITMENT_142;
  450 | 
  451 |     const invalidCandidateName = `${data.candidateNamePrefix}${Date.now()}`;
  452 | 
  453 |     await navigationPage.gotoRecruitment();
  454 |     await recruitmentPage.navigateToCandidate();
  455 | 
  456 |     await recruitmentPage.candidateNameInput.fill(invalidCandidateName);
  457 | 
  458 |     await expect(recruitmentPage.candidateAutocompleteDropdown).toBeVisible({
  459 |       timeout: 15_000,
  460 |     });
  461 | 
  462 |     await expect(recruitmentPage.candidateAutocompleteNoRecords).toHaveText(
  463 |       data.autocompleteMessage,
  464 |     );
  465 | 
  466 |     // Close autocomplete without selecting a value.
  467 |     await recruitmentPage.candidateNameInput.press("Escape");
  468 | 
  469 |     await recruitmentPage.searchButton.click();
  470 | 
  471 |     await expect(recruitmentPage.candidateNameValidation).toBeVisible();
  472 | 
  473 |     await expect(recruitmentPage.candidateNameValidation).toHaveText(
  474 |       data.validationMessage,
  475 |     );
  476 | 
  477 |     await expect(recruitmentPage.candidateNameInput).toHaveValue(
  478 |       invalidCandidateName,
  479 |     );
  480 | 
  481 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  482 | 
  483 |     await recruitmentPage.restButton.click();
  484 | 
  485 |     await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  486 | 
  487 |     await expect(recruitmentPage.candidateNameValidation).toBeHidden();
  488 |   });
  489 | 
  490 |   test("TC_RECRUITMENT_143 - Admin should search Candidates using combined vacancy, status, and date filters @positive @filter @regression", async ({
  491 |     navigationPage,
  492 |     recruitmentPage,
  493 |   }) => {
  494 |     const data = recruitmentData.TC_RECRUITMENT_143;
  495 | 
  496 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  497 | 
  498 |     const toDate = dateFromOffset(data.toDaysOffset);
  499 | 
  500 |     await navigationPage.gotoRecruitment();
  501 |     await recruitmentPage.navigateToCandidate();
  502 | 
  503 |     const selectedVacancy = await recruitmentPage.selectFirstAvailableVacancy();
  504 | 
  505 |     await recruitmentPage.selectDropdownOption(
  506 |       recruitmentPage.candidateStatusDropdown,
  507 |       data.candidateStatus,
  508 |     );
  509 | 
  510 |     await recruitmentPage.fromDateInput.fill(fromDate);
  511 | 
  512 |     await recruitmentPage.toDateInput.fill(toDate);
  513 | 
  514 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  515 |       selectedVacancy,
  516 |     );
  517 | 
  518 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  519 |       data.candidateStatus,
  520 |     );
  521 | 
  522 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  523 | 
  524 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  525 | 
  526 |     // Wait for the filtered candidates API response. Waiting only for a
  527 |     // currently-hidden spinner can read the previous, unfiltered table.
  528 |     await recruitmentPage.searchCandidates();
  529 | 
  530 |     // Verify that filters remain selected.
  531 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  532 |       selectedVacancy,
  533 |     );
  534 | 
  535 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  536 |       data.candidateStatus,
```