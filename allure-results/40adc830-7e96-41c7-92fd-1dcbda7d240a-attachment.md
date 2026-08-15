# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression
- Location: tests\Recruitment\recruitment.spec.ts:461:8

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-autocomplete-dropdown:visible').getByText('No Records Found', { exact: true })
Expected: "No Records Found"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 20000ms
  - waiting for locator('.oxd-autocomplete-dropdown:visible').getByText('No Records Found', { exact: true })
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

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
      - paragraph: first_name_edit1 last_name_edit2
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
- textbox "Type for hints...": UnknownCandidate1786787578743
- listbox:
  - option "Searching...."
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
- table
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  379 | 
  380 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  381 |       timeout: 20_000,
  382 |     });
  383 | 
  384 |     await expect(
  385 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  386 |     ).toBeVisible({
  387 |       timeout: 15_000,
  388 |     });
  389 | 
  390 |     const candidateCount = await recruitmentPage.candidateRows.count();
  391 | 
  392 |     if (candidateCount > 0) {
  393 |       for (let index = 0; index < candidateCount; index++) {
  394 |         const hiringManagerCell = recruitmentPage.candidateRows
  395 |           .nth(index)
  396 |           .locator(".oxd-table-cell")
  397 |           .nth(3);
  398 | 
  399 |         await expect(hiringManagerCell).toContainText(selectedManager);
  400 |       }
  401 |     } else {
  402 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  403 |     }
  404 | 
  405 |     await recruitmentPage.restButton.click();
  406 | 
  407 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  408 |       data.defaultDropdownValue,
  409 |     );
  410 |   });
  411 | 
  412 |   test("TC_RECRUITMENT_141 - Admin should search for a candidate by name @positive @search @autocomplete @regression", async ({
  413 |     navigationPage,
  414 |     recruitmentPage,
  415 |   }) => {
  416 |     // Read the candidate-name search value from JSON.
  417 |     const data = recruitmentData.TC_RECRUITMENT_141;
  418 |     // Navigate to Recruitment → Candidates.
  419 | 
  420 |     await navigationPage.gotoRecruitment();
  421 |     await recruitmentPage.navigateToCandidate();
  422 |     // Enter the candidate name into the Candidate Name field.
  423 |     await recruitmentPage.candidateNameInput.fill(data.candidateSearchText);
  424 |     // Wait for the autocomplete options.
  425 |     const selectedCandidate =
  426 |       await recruitmentPage.selectFirstAvailableCandidate(
  427 |         data.candidateSearchText,
  428 |       );
  429 | 
  430 |     // Click Search.
  431 |     await recruitmentPage.searchButton.click();
  432 |     // Wait for the loading spinner to disappear.
  433 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  434 |     // Verify either candidate rows or
  435 |     // “No Records Found” appears.
  436 |     await expect(
  437 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  438 |     ).toBeVisible({
  439 |       timeout: 15_000,
  440 |     });
  441 |     const candidateCount = await recruitmentPage.candidateRows.count();
  442 | 
  443 |     if (candidateCount > 0) {
  444 |       for (let index = 0; index < candidateCount; index++) {
  445 |         const candidateNameCell = recruitmentPage.candidateRows
  446 |           .nth(index)
  447 |           .locator(".oxd-table-cell")
  448 |           .nth(2);
  449 | 
  450 |         await expect(candidateNameCell).toContainText(selectedCandidate!);
  451 |       }
  452 |     } else {
  453 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  454 |     }
  455 | 
  456 |     await recruitmentPage.restButton.click();
  457 | 
  458 |     await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  459 |   });
  460 | 
  461 |   test.only("TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression", async ({
  462 |     page,
  463 |     navigationPage,
  464 |     recruitmentPage,
  465 |   }) => {
  466 |     // Read a unique nonexistent candidate name from JSON.
  467 |     const data = recruitmentData.TC_RECRUITMENT_142;
  468 |     const invalidCandidateName = `${data.candidateNamePrefix}${Date.now()}`;
  469 |     // Navigate to Recruitment → Candidates.
  470 |     await navigationPage.gotoRecruitment();
  471 |     await recruitmentPage.navigateToCandidate();
  472 |     // Fill the Candidate Name field with the invalid name.
  473 |     await recruitmentPage.candidateNameInput.fill(invalidCandidateName);
  474 |     // Wait for the autocomplete dropdown.
  475 |     await expect(recruitmentPage.candidateAutocompleteDropdown).toBeVisible({
  476 |       timeout: 15_000,
  477 |     });
  478 | 
> 479 |     await expect(recruitmentPage.candidateAutocompleteNoRecords).toHaveText(
      |                                                                  ^ Error: expect(locator).toHaveText(expected) failed
  480 |       data.autocompleteMessage,
  481 |     );
  482 |     // Close the autocomplete without selecting anything.
  483 |     await recruitmentPage.candidateNameInput.press("Escape");
  484 |     // Click Search.
  485 |     await recruitmentPage.searchButton.click();
  486 | 
  487 |     // Verify “Invalid” validation appears
  488 |     // below the Candidate Name field.
  489 |     await expect(recruitmentPage.candidateNameValidation).toBeVisible();
  490 |     await expect(recruitmentPage.candidateNameValidation).toHaveText(
  491 |       data.validationMessage,
  492 |     );
  493 |     await expect(recruitmentPage.candidateNameInput).toHaveValue(
  494 |       invalidCandidateName,
  495 |     );
  496 | 
  497 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  498 | 
  499 |     // Reset the filters.
  500 |     await recruitmentPage.restButton.click();
  501 |     // Verify Candidate Name is cleared.
  502 |     await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  503 |     await expect(recruitmentPage.candidateNameValidation).toBeHidden();
  504 |   });
  505 | });
  506 | 
```