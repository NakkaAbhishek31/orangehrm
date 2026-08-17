# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_148 - Admin should add a candidate without a resume successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:1033:6

# Error details

```
Error: No vacancy is currently available
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Matthew LyonsUser
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - link "Candidates" [ref=f4e133]:
              - /url: "#"
          - listitem [ref=f4e134] [cursor=pointer]:
            - link "Vacancies" [ref=f4e135]:
              - /url: "#"
          - button "" [ref=f4e137] [cursor=pointer]
  - generic [ref=f4e139]:
    - generic [ref=f4e142]:
      - heading "Add Candidate" [level=6] [ref=f4e143]
      - separator [ref=f4e144]
      - generic [ref=f4e145]:
        - generic [ref=f4e149]:
          - generic [ref=f4e150]: Full Name*
          - generic [ref=f4e152]:
            - textbox "First Name" [ref=f4e155]: ResumeCandidate1786943506839
            - textbox "Middle Name" [ref=f4e158]: Test
            - textbox "Last Name" [ref=f4e161]: User
        - generic [ref=f4e165]:
          - generic [ref=f4e166]: Vacancy
          - generic [ref=f4e169]:
            - generic [ref=f4e170] [cursor=pointer]:
              - generic [active] [ref=f4e171]: "-- Select --"
              - generic [ref=f4e172]: 
            - listbox [ref=f4e174]:
              - option "No Records Found" [ref=f4e175] [cursor=pointer]
        - generic [ref=f4e177]:
          - generic [ref=f4e179]:
            - generic [ref=f4e180]: Email*
            - textbox "Type here" [ref=f4e183]
          - generic [ref=f4e185]:
            - generic [ref=f4e186]: Contact Number
            - textbox "Type here" [ref=f4e189]
        - generic [ref=f4e193]:
          - generic [ref=f4e194]:
            - generic [ref=f4e195]: Resume
            - generic [ref=f4e197]:
              - button "Choose File"
              - generic [ref=f4e198]:
                - generic [ref=f4e199] [cursor=pointer]: Browse
                - generic [ref=f4e200]: No file selected
                - generic [ref=f4e201] [cursor=pointer]: 
          - paragraph [ref=f4e202]: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
        - generic [ref=f4e204]:
          - generic [ref=f4e206]:
            - generic [ref=f4e207]: Keywords
            - textbox "Enter comma seperated words..." [ref=f4e210]
          - generic [ref=f4e212]:
            - generic [ref=f4e213]: Date of Application
            - generic [ref=f4e217]:
              - textbox "yyyy-dd-mm" [ref=f4e218]: 2026-17-08
              - generic [ref=f4e219] [cursor=pointer]: 
        - generic [ref=f4e223]:
          - generic [ref=f4e224]: Notes
          - textbox "Type here" [ref=f4e227]
        - generic [ref=f4e231]:
          - generic [ref=f4e232]: Consent to keep data
          - generic [ref=f4e236] [cursor=pointer]:
            - checkbox "" [ref=f4e237]
            - generic [ref=f4e238]: 
        - separator [ref=f4e240]
        - generic [ref=f4e241]:
          - paragraph [ref=f4e242]: "* Required"
          - button "Cancel" [ref=f4e243] [cursor=pointer]
          - button "Save" [ref=f4e244] [cursor=pointer]
    - generic [ref=f4e245]:
      - paragraph [ref=f4e246]: OrangeHRM OS 5.9
      - paragraph [ref=f4e247]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e248] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  377 | 
  378 |   async selectFirstAvailableHiringManager(): Promise<string> {
  379 |     return this.selectFirstAvailableDropdownOption(
  380 |       this.hiringManagerDropdown,
  381 |     );
  382 |   }
  383 | 
  384 |   async selectFirstAvailableCandidate(
  385 |     searchText: string,
  386 |   ): Promise<string | null> {
  387 |     await this.candidateNameInput.fill(searchText);
  388 | 
  389 |     const autocompleteDropdown = this.page.locator(
  390 |       ".oxd-autocomplete-dropdown:visible",
  391 |     );
  392 |     await expect(autocompleteDropdown).toBeVisible({
  393 |       timeout: DEFAULT_TIMEOUT,
  394 |     });
  395 | 
  396 |     const validOptions = autocompleteDropdown
  397 |       .locator(".oxd-autocomplete-option")
  398 |       .filter({ hasNotText: /Searching|No Records Found/i });
  399 |     const noRecords = autocompleteDropdown.getByText("No Records Found", {
  400 |       exact: true,
  401 |     });
  402 | 
  403 |     await expect(validOptions.first().or(noRecords)).toBeVisible({
  404 |       timeout: DEFAULT_TIMEOUT,
  405 |     });
  406 | 
  407 |     if ((await validOptions.count()) === 0) {
  408 |       return null;
  409 |     }
  410 | 
  411 |     const firstOption = validOptions.first();
  412 |     const selectedCandidate = (await firstOption.innerText()).trim();
  413 | 
  414 |     await firstOption.click();
  415 |     await expect(this.candidateNameInput).toHaveValue(selectedCandidate);
  416 | 
  417 |     return selectedCandidate;
  418 |   }
  419 | 
  420 |   private inputGroupByLabel(label: string): Locator {
  421 |     return this.page.locator(".oxd-input-group").filter({
  422 |       has: this.page.locator("label").getByText(label, { exact: true }),
  423 |     });
  424 |   }
  425 | 
  426 |   private dropdownByLabel(label: string): Locator {
  427 |     return this.inputGroupByLabel(label).locator(".oxd-select-text");
  428 |   }
  429 | 
  430 |   private visibleDropdown(): Locator {
  431 |     return this.page.locator(".oxd-select-dropdown:visible");
  432 |   }
  433 | 
  434 |   private async selectFirstAvailableDropdownOption(
  435 |     dropdown: Locator,
  436 |   ): Promise<string> {
  437 |     await expect(dropdown).toBeVisible();
  438 |     await dropdown.click();
  439 | 
  440 |     const options = this.visibleDropdown()
  441 |       .locator(".oxd-select-option")
  442 |       .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
  443 |     const firstOption = options.first();
  444 | 
  445 |     await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  446 |     const selectedText = (await firstOption.innerText()).trim();
  447 | 
  448 |     await firstOption.click();
  449 |     await expect(dropdown).toContainText(selectedText);
  450 | 
  451 |     return selectedText;
  452 |   }
  453 | 
  454 |   async selectFirstAvailableAddCandidateVacancy():
  455 | Promise<string> {
  456 |   await this.addCandidateVacancyDropdown.click();
  457 | 
  458 |   const visibleDropdown = this.page.locator(
  459 |     '.oxd-select-dropdown:visible'
  460 |   );
  461 | 
  462 |   await expect(
  463 |     visibleDropdown
  464 |   ).toBeVisible();
  465 | 
  466 |   const validOptions = visibleDropdown
  467 |     .locator('.oxd-select-option')
  468 |     .filter({
  469 |       hasNotText:
  470 |         /-- Select --|No Records Found|Searching/i,
  471 |     });
  472 | 
  473 |   const optionCount =
  474 |     await validOptions.count();
  475 | 
  476 |   if (optionCount === 0) {
> 477 |     throw new Error(
      |           ^ Error: No vacancy is currently available
  478 |       'No vacancy is currently available'
  479 |     );
  480 |   }
  481 | 
  482 |   const firstOption =
  483 |     validOptions.first();
  484 | 
  485 |   const vacancyName = (
  486 |     await firstOption.innerText()
  487 |   ).trim();
  488 | 
  489 |   await firstOption.click();
  490 | 
  491 |   await expect(
  492 |     this.addCandidateVacancyDropdown
  493 |   ).toContainText(vacancyName);
  494 | 
  495 |   return vacancyName;
  496 | }
  497 | }
  498 | 
```