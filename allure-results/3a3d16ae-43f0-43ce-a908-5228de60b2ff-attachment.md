# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1892:6

# Error details

```
TimeoutError: page.waitForResponse: Timeout 30000ms exceeded while waiting for event "response"
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
              - paragraph [ref=f4e127]: cocomelon T
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
            - generic [ref=f4e153]:
              - textbox "First Name" [ref=f4e155]: ShortlistCandidate1787031165128
              - generic [ref=f4e156]: Should not exceed 30 characters
            - textbox "Middle Name" [ref=f4e159]: Test
            - textbox "Last Name" [ref=f4e162]: User
        - generic [ref=f4e166]:
          - generic [ref=f4e167]: Vacancy
          - generic [ref=f4e171] [cursor=pointer]:
            - generic [ref=f4e172]: Junior Account Assistant
            - generic [ref=f4e173]: 
        - generic [ref=f4e176]:
          - generic [ref=f4e178]:
            - generic [ref=f4e179]: Email*
            - textbox "Type here" [ref=f4e182]: shortlistcandidate1787031165128@example.com
          - generic [ref=f4e184]:
            - generic [ref=f4e185]: Contact Number
            - textbox "Type here" [ref=f4e188]: "9876543210"
        - generic [ref=f4e192]:
          - generic [ref=f4e193]:
            - generic [ref=f4e194]: Resume
            - generic [ref=f4e196]:
              - button "Choose File"
              - generic [ref=f4e197]:
                - generic [ref=f4e198] [cursor=pointer]: Browse
                - generic [ref=f4e199]: No file selected
                - generic [ref=f4e200] [cursor=pointer]: 
          - paragraph [ref=f4e201]: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
        - generic [ref=f4e203]:
          - generic [ref=f4e205]:
            - generic [ref=f4e206]: Keywords
            - textbox "Enter comma seperated words..." [ref=f4e209]
          - generic [ref=f4e211]:
            - generic [ref=f4e212]: Date of Application
            - generic [ref=f4e216]:
              - textbox "yyyy-dd-mm" [ref=f4e217]: 2026-18-08
              - generic [ref=f4e218] [cursor=pointer]: 
        - generic [ref=f4e222]:
          - generic [ref=f4e223]: Notes
          - textbox "Type here" [ref=f4e226]
        - generic [ref=f4e230]:
          - generic [ref=f4e231]: Consent to keep data
          - generic [ref=f4e235] [cursor=pointer]:
            - checkbox "" [ref=f4e236]
            - generic [ref=f4e237]: 
        - separator [ref=f4e239]
        - generic [ref=f4e240]:
          - paragraph [ref=f4e241]: "* Required"
          - button "Cancel" [ref=f4e242] [cursor=pointer]
          - button "Save" [ref=f4e243] [cursor=pointer]
    - generic [ref=f4e244]:
      - paragraph [ref=f4e245]: OrangeHRM OS 5.9
      - paragraph [ref=f4e246]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e247] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  421 |     return this.page.locator(".oxd-select-dropdown:visible");
  422 |   }
  423 | 
  424 |   private async selectFirstAvailableDropdownOption(
  425 |     dropdown: Locator,
  426 |   ): Promise<string> {
  427 |     await expect(dropdown).toBeVisible();
  428 |     await dropdown.click();
  429 | 
  430 |     const options = this.visibleDropdown()
  431 |       .locator(".oxd-select-option")
  432 |       .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
  433 |     const firstOption = options.first();
  434 | 
  435 |     await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  436 |     const selectedText = (await firstOption.innerText()).trim();
  437 | 
  438 |     await firstOption.click();
  439 |     await expect(dropdown).toContainText(selectedText);
  440 | 
  441 |     return selectedText;
  442 |   }
  443 | 
  444 |   async selectFirstAvailableAddCandidateVacancy(): Promise<string | null> {
  445 |     await this.addCandidateVacancyDropdown.click();
  446 | 
  447 |     const visibleDropdown = this.page.locator(".oxd-select-dropdown:visible");
  448 | 
  449 |     await expect(visibleDropdown).toBeVisible();
  450 | 
  451 |     const validOptions = visibleDropdown.locator(".oxd-select-option").filter({
  452 |       hasNotText: /-- Select --|No Records Found|Searching/i,
  453 |     });
  454 | 
  455 |     const noRecordsOption = visibleDropdown
  456 |       .locator(".oxd-select-option")
  457 |       .filter({ hasText: /No Records Found/i });
  458 | 
  459 |     await validOptions
  460 |       .first()
  461 |       .or(noRecordsOption)
  462 |       .waitFor({
  463 |         state: "visible",
  464 |         timeout: DEFAULT_TIMEOUT,
  465 |       })
  466 |       .catch(() => undefined);
  467 | 
  468 |     const optionCount = await validOptions.count();
  469 | 
  470 |     if (optionCount === 0) {
  471 |       await this.page.keyboard.press("Escape");
  472 |       return null;
  473 |     }
  474 | 
  475 |     const firstOption = validOptions.first();
  476 | 
  477 |     const vacancyName = (await firstOption.innerText()).trim();
  478 | 
  479 |     await firstOption.click();
  480 | 
  481 |     await expect(this.addCandidateVacancyDropdown).toContainText(vacancyName);
  482 | 
  483 |     return vacancyName;
  484 |   }
  485 | 
  486 |   async createCandidate(details: CandidateDetails): Promise<CreatedCandidate> {
  487 |     await this.firstNameInput.fill(details.firstName);
  488 | 
  489 |     if (details.middleName !== undefined) {
  490 |       await this.middleNameInput.fill(details.middleName);
  491 |     }
  492 | 
  493 |     await this.lastNameInput.fill(details.lastName);
  494 | 
  495 |     const vacancy = await this.selectFirstAvailableAddCandidateVacancy();
  496 | 
  497 |     await this.emailInput.fill(details.email);
  498 | 
  499 |     if (details.contactNumber !== undefined) {
  500 |       await this.contactNumberInput.fill(details.contactNumber);
  501 |     }
  502 | 
  503 |     if (details.keywords !== undefined) {
  504 |       await this.keywordsInput.fill(details.keywords);
  505 |     }
  506 | 
  507 |     if (details.notes !== undefined) {
  508 |       await this.notesInput.fill(details.notes);
  509 |     }
  510 | 
  511 |     if (details.consent === true) {
  512 |       const isChecked = await this.consentCheckbox.isChecked();
  513 | 
  514 |       if (!isChecked) {
  515 |         await this.consentCheckboxLabel.click();
  516 |       }
  517 | 
  518 |       await expect(this.consentCheckbox).toBeChecked();
  519 |     }
  520 | 
> 521 |     const responsePromise = this.page.waitForResponse(
      |                                       ^ TimeoutError: page.waitForResponse: Timeout 30000ms exceeded while waiting for event "response"
  522 |       (response) =>
  523 |         response.url().includes("/api/v2/recruitment/candidates") &&
  524 |         response.request().method() === "POST",
  525 |       {
  526 |         timeout: 30_000,
  527 |       },
  528 |     );
  529 | 
  530 |     await this.saveButton.click();
  531 | 
  532 |     const createResponse = await responsePromise;
  533 | 
  534 |     expect(createResponse.ok()).toBeTruthy();
  535 | 
  536 |     const responseBody = await createResponse.json();
  537 | 
  538 |     const candidateId = String(responseBody.data.id);
  539 | 
  540 |     if (!candidateId) {
  541 |       throw new Error("Candidate ID was missing from the creation response");
  542 |     }
  543 | 
  544 |     await this.page.waitForURL(
  545 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  546 |       {
  547 |         timeout: 30_000,
  548 |       },
  549 |     );
  550 | 
  551 |     return {
  552 |       candidateId,
  553 |       vacancy,
  554 |     };
  555 |   }
  556 |   async deleteCandidateByName(candidateName: string): Promise<void> {
  557 |     const selectedCandidate =
  558 |       await this.selectFirstAvailableCandidate(candidateName);
  559 | 
  560 |     if (selectedCandidate === null) {
  561 |       throw new Error(`Candidate was not found: ${candidateName}`);
  562 |     }
  563 | 
  564 |     await this.searchButton.click();
  565 | 
  566 |     await expect(this.loadingSpinner).toBeHidden({
  567 |       timeout: 20_000,
  568 |     });
  569 | 
  570 |     const matchingRow = this.candidateRows
  571 |       .filter({
  572 |         has: this.page.locator(".oxd-table-cell").nth(2).filter({
  573 |           hasText: candidateName,
  574 |         }),
  575 |       })
  576 |       .first();
  577 | 
  578 |     await expect(matchingRow).toBeVisible({
  579 |       timeout: 20_000,
  580 |     });
  581 | 
  582 |     const deleteButton = matchingRow.getByRole("button").filter({
  583 |       has: this.page.locator("i.bi-trash"),
  584 |     });
  585 | 
  586 |     await expect(deleteButton).toBeVisible();
  587 | 
  588 |     await deleteButton.click();
  589 | 
  590 |     const confirmationDialog = this.page.getByRole("dialog");
  591 | 
  592 |     await expect(confirmationDialog).toBeVisible();
  593 | 
  594 |     const deleteResponsePromise = this.page.waitForResponse(
  595 |       (response) =>
  596 |         response.url().includes("/api/v2/recruitment/candidates") &&
  597 |         response.request().method() === "DELETE",
  598 |       {
  599 |         timeout: 30_000,
  600 |       },
  601 |     );
  602 | 
  603 |     const deleteToast = this.page.locator(".oxd-toast").filter({
  604 |       hasText: /Successfully Deleted/i,
  605 |     });
  606 | 
  607 |     const deleteToastPromise = expect(deleteToast).toContainText(
  608 |       "Successfully Deleted",
  609 |       {
  610 |         timeout: 30_000,
  611 |       },
  612 |     );
  613 | 
  614 |     const confirmDeleteButton = confirmationDialog.getByRole("button", {
  615 |       name: /Yes, Delete/i,
  616 |     });
  617 | 
  618 |     await expect(confirmDeleteButton).toBeVisible();
  619 |     await confirmDeleteButton.click();
  620 | 
  621 |     const [deleteResponse] = await Promise.all([
```