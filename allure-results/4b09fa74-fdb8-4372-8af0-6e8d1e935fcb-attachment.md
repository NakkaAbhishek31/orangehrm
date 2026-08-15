# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression
- Location: tests\Recruitment\recruitment.spec.ts:362:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(3)
Expected substring: "first_name_edit1 last_name_edit2"
Received string:    "first_name_edit1 middle_name_edit1 last_name_edit2"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(3)
    43 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "first_name_edit1 middle_name_edit1 last_name_edit2"

```

```yaml
- cell "first_name_edit1 middle_name_edit1 last_name_edit2"
```

# Test source

```ts
  299 |           .locator(".oxd-table-cell")
  300 |           .nth(5);
  301 | 
  302 |         await expect(statusCell).toContainText(data.candidateStatus);
  303 |       }
  304 |     } else {
  305 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  306 |     }
  307 |     // Reset the filters.
  308 |     await recruitmentPage.restButton.click();
  309 |     // Verify Candidate Status returns to “-- Select --”.
  310 | 
  311 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  312 |       data.defaultDropdownValue,
  313 |     );
  314 |   });
  315 | 
  316 |   test("TC_RECRUITMENT_139 - Admin should filter Candidates by vacancy @positive @filter @regression", async ({
  317 |     navigationPage,
  318 |     recruitmentPage,
  319 |   }) => {
  320 |     const data = recruitmentData.TC_RECRUITMENT_139;
  321 |     await navigationPage.gotoRecruitment();
  322 |     await recruitmentPage.navigateToCandidate();
  323 |     const selectedVacancy = await recruitmentPage.selectFirstAvailableVacancy();
  324 | 
  325 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  326 |       selectedVacancy,
  327 |     );
  328 | 
  329 |     await recruitmentPage.searchCandidates();
  330 | 
  331 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  332 |       timeout: 20_000,
  333 |     });
  334 | 
  335 |     await expect(
  336 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  337 |     ).toBeVisible({
  338 |       timeout: 15_000,
  339 |     });
  340 | 
  341 |     const candidateCount = await recruitmentPage.candidateRows.count();
  342 | 
  343 |     if (candidateCount > 0) {
  344 |       for (let index = 0; index < candidateCount; index++) {
  345 |         const vacancyCell = recruitmentPage.candidateRows
  346 |           .nth(index)
  347 |           .locator(".oxd-table-cell")
  348 |           .nth(1);
  349 | 
  350 |         await expect(vacancyCell).toContainText(selectedVacancy);
  351 |       }
  352 |     } else {
  353 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  354 |     }
  355 | 
  356 |     await recruitmentPage.restButton.click();
  357 | 
  358 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  359 |       data.defaultDropdownValue,
  360 |     );
  361 |   });
  362 |   test("TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression", async ({
  363 |     navigationPage,
  364 |     recruitmentPage,
  365 |   }) => {
  366 |     const data = recruitmentData.TC_RECRUITMENT_140;
  367 | 
  368 |     await navigationPage.gotoRecruitment();
  369 |     await recruitmentPage.navigateToCandidate();
  370 | 
  371 |     const selectedManager =
  372 |       await recruitmentPage.selectFirstAvailableHiringManager();
  373 | 
  374 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  375 |       selectedManager,
  376 |     );
  377 | 
  378 |     await recruitmentPage.searchCandidates();
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
> 399 |         await expect(hiringManagerCell).toContainText(selectedManager);
      |                                         ^ Error: expect(locator).toContainText(expected) failed
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
  460 | });
  461 | 
```