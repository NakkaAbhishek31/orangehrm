# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression
- Location: tests\Recruitment\recruitment.spec.ts:1178:6

# Error details

```
Error: No candidate found for: SearchCandidate1786949061708
```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: aMTZUDRuhb king
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - link "Candidates" [ref=f6e133]:
              - /url: "#"
          - listitem [ref=f6e134] [cursor=pointer]:
            - link "Vacancies" [ref=f6e135]:
              - /url: "#"
          - button "" [ref=f6e137] [cursor=pointer]
  - generic [ref=f6e139]:
    - generic [ref=f6e141]:
      - generic [ref=f6e142]:
        - generic [ref=f6e143]:
          - heading "Candidates" [level=5] [ref=f6e145]
          - button "" [ref=f6e148] [cursor=pointer]
        - separator [ref=f6e150]
        - generic [ref=f6e152]:
          - generic [ref=f6e154]:
            - generic [ref=f6e156]:
              - generic [ref=f6e157]: Job Title
              - generic [ref=f6e161] [cursor=pointer]:
                - generic [ref=f6e162]: "-- Select --"
                - generic [ref=f6e163]: 
            - generic [ref=f6e166]:
              - generic [ref=f6e167]: Vacancy
              - generic [ref=f6e171] [cursor=pointer]:
                - generic [ref=f6e172]: "-- Select --"
                - generic [ref=f6e173]: 
            - generic [ref=f6e176]:
              - generic [ref=f6e177]: Hiring Manager
              - generic [ref=f6e181] [cursor=pointer]:
                - generic [ref=f6e182]: "-- Select --"
                - generic [ref=f6e183]: 
            - generic [ref=f6e186]:
              - generic [ref=f6e187]: Status
              - generic [ref=f6e191] [cursor=pointer]:
                - generic [ref=f6e192]: "-- Select --"
                - generic [ref=f6e193]: 
          - generic [ref=f6e196]:
            - generic [ref=f6e198]:
              - generic [ref=f6e199]: Candidate Name
              - generic [ref=f6e202]:
                - textbox "Type for hints..." [active] [ref=f6e204]: SearchCandidate1786949061708
                - listbox [ref=f6e205]:
                  - option "Searching...." [ref=f6e206] [cursor=pointer]
            - generic [ref=f6e208]:
              - generic [ref=f6e209]: Keywords
              - textbox "Enter comma seperated words..." [ref=f6e212]
            - generic [ref=f6e214]:
              - generic [ref=f6e215]: Date of Application
              - generic [ref=f6e219]:
                - textbox "From" [ref=f6e220]
                - generic [ref=f6e221] [cursor=pointer]: 
            - generic [ref=f6e228]:
              - textbox "To" [ref=f6e229]
              - generic [ref=f6e230] [cursor=pointer]: 
          - generic [ref=f6e234]:
            - generic [ref=f6e235]: Method of Application
            - generic [ref=f6e239] [cursor=pointer]:
              - generic [ref=f6e240]: "-- Select --"
              - generic [ref=f6e241]: 
          - separator [ref=f6e243]
          - generic [ref=f6e244]:
            - button "Reset" [ref=f6e245] [cursor=pointer]
            - button "Search" [ref=f6e246] [cursor=pointer]
      - generic [ref=f6e247]:
        - button " Add" [ref=f6e249] [cursor=pointer]:
          - generic [ref=f6e250]: 
          - text: Add
        - table [ref=f6e252]
    - generic [ref=f6e257]:
      - paragraph [ref=f6e258]: OrangeHRM OS 5.9
      - paragraph [ref=f6e259]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e260] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  313 | 
  314 | this.lastNameValidation =
  315 |   this.lastNameInput
  316 |     .locator(
  317 |       'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
  318 |     )
  319 |     .locator(
  320 |       '.oxd-input-field-error-message'
  321 |     );
  322 | 
  323 | this.emailValidation =
  324 |   this.emailInput
  325 |     .locator(
  326 |       'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
  327 |     )
  328 |     .locator(
  329 |       '.oxd-input-field-error-message'
  330 |     );
  331 | 
  332 | this.successToast = page
  333 |   .locator('.oxd-toast')
  334 |   .filter({
  335 |     hasText: /Successfully Saved/i,
  336 |   });
  337 |   }
  338 | 
  339 |   async navigateToCandidate(): Promise<void> {
  340 |     await this.candidateLink.click();
  341 |     await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
  342 |     await expect(this.candidatePageHeading).toBeVisible();
  343 |   }
  344 | 
  345 |   async searchCandidates(): Promise<void> {
  346 |     const candidatesResponse = this.page.waitForResponse(
  347 |       (response) =>
  348 |         response.url().includes("/api/v2/recruitment/candidates") &&
  349 |         response.request().method() === "GET" &&
  350 |         response.ok(),
  351 |       { timeout: API_TIMEOUT },
  352 |     );
  353 | 
  354 |     await this.searchButton.click();
  355 |     await candidatesResponse;
  356 |     await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  357 |   }
  358 | 
  359 |   async selectDropdownOption(
  360 |     dropdown: Locator,
  361 |     optionText: string,
  362 |   ): Promise<void> {
  363 |     await expect(dropdown).toBeVisible();
  364 |     await dropdown.click();
  365 | 
  366 |     const option = this.visibleDropdown()
  367 |       .locator(".oxd-select-option")
  368 |       .filter({
  369 |         hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
  370 |       })
  371 |       .first();
  372 | 
  373 |     await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  374 |     await option.click();
  375 |     await expect(dropdown).toContainText(optionText);
  376 |   }
  377 | 
  378 |   async selectFirstAvailableVacancy(): Promise<string> {
  379 |     return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  380 |   }
  381 | 
  382 |   async selectFirstAvailableHiringManager(): Promise<string> {
  383 |     return this.selectFirstAvailableDropdownOption(
  384 |       this.hiringManagerDropdown,
  385 |     );
  386 |   }
  387 | 
  388 | async selectFirstAvailableCandidate(
  389 |   searchText: string
  390 | ): Promise<string> {
  391 |   await this.candidateNameInput.fill(
  392 |     searchText
  393 |   );
  394 | 
  395 |   const dropdown = this.page.locator(
  396 |     '.oxd-autocomplete-dropdown:visible'
  397 |   );
  398 | 
  399 |   await expect(dropdown).toBeVisible({
  400 |     timeout: 15_000,
  401 |   });
  402 | 
  403 |   const options = dropdown
  404 |     .locator('.oxd-autocomplete-option')
  405 |     .filter({
  406 |       hasNotText:
  407 |         /Searching|No Records Found/i,
  408 |     });
  409 | 
  410 |   const optionCount = await options.count();
  411 | 
  412 |   if (optionCount === 0) {
> 413 |     throw new Error(
      |           ^ Error: No candidate found for: SearchCandidate1786949061708
  414 |       `No candidate found for: ${searchText}`
  415 |     );
  416 |   }
  417 | 
  418 |   const option = options.first();
  419 | 
  420 |   const selectedCandidate = (
  421 |     await option.innerText()
  422 |   ).trim();
  423 | 
  424 |   await option.click();
  425 | 
  426 |   await expect(
  427 |     this.candidateNameInput
  428 |   ).toHaveValue(selectedCandidate);
  429 | 
  430 |   return selectedCandidate;
  431 | }
  432 | 
  433 |   private inputGroupByLabel(label: string): Locator {
  434 |     return this.page.locator(".oxd-input-group").filter({
  435 |       has: this.page.locator("label").getByText(label, { exact: true }),
  436 |     });
  437 |   }
  438 | 
  439 |   private dropdownByLabel(label: string): Locator {
  440 |     return this.inputGroupByLabel(label).locator(".oxd-select-text");
  441 |   }
  442 | 
  443 |   private visibleDropdown(): Locator {
  444 |     return this.page.locator(".oxd-select-dropdown:visible");
  445 |   }
  446 | 
  447 |   private async selectFirstAvailableDropdownOption(
  448 |     dropdown: Locator,
  449 |   ): Promise<string> {
  450 |     await expect(dropdown).toBeVisible();
  451 |     await dropdown.click();
  452 | 
  453 |     const options = this.visibleDropdown()
  454 |       .locator(".oxd-select-option")
  455 |       .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
  456 |     const firstOption = options.first();
  457 | 
  458 |     await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  459 |     const selectedText = (await firstOption.innerText()).trim();
  460 | 
  461 |     await firstOption.click();
  462 |     await expect(dropdown).toContainText(selectedText);
  463 | 
  464 |     return selectedText;
  465 |   }
  466 | 
  467 |   async selectFirstAvailableAddCandidateVacancy():
  468 | Promise<string | null> {
  469 |   await this.addCandidateVacancyDropdown.click();
  470 | 
  471 |   const visibleDropdown = this.page.locator(
  472 |     '.oxd-select-dropdown:visible'
  473 |   );
  474 | 
  475 |   await expect(
  476 |     visibleDropdown
  477 |   ).toBeVisible();
  478 | 
  479 |   const validOptions = visibleDropdown
  480 |     .locator('.oxd-select-option')
  481 |     .filter({
  482 |       hasNotText:
  483 |         /-- Select --|No Records Found|Searching/i,
  484 |     });
  485 | 
  486 |   const noRecordsOption = visibleDropdown
  487 |     .locator('.oxd-select-option')
  488 |     .filter({ hasText: /No Records Found/i });
  489 | 
  490 |   await validOptions
  491 |     .first()
  492 |     .or(noRecordsOption)
  493 |     .waitFor({
  494 |       state: 'visible',
  495 |       timeout: DEFAULT_TIMEOUT,
  496 |     })
  497 |     .catch(() => undefined);
  498 | 
  499 |   const optionCount =
  500 |     await validOptions.count();
  501 | 
  502 |   if (optionCount === 0) {
  503 |     await this.page.keyboard.press('Escape');
  504 |     return null;
  505 |   }
  506 | 
  507 |   const firstOption =
  508 |     validOptions.first();
  509 | 
  510 |   const vacancyName = (
  511 |     await firstOption.innerText()
  512 |   ).trim();
  513 | 
```