# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_161 - Admin should mark a candidate interview as failed @negative @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:2331:5

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
      - paragraph: manda userTester
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
- paragraph: FailedInterview1787038980940 Test Candidate
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
- textbox "First Name" [disabled]: FailedInterview1787038980940
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: Candidate
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: failedinterview1787038980940@example.com
- text: Contact Number
- textbox "Type here" [disabled]
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
    - row "2026-18-08 manda akhil userTester added FailedInterview1787038980940 Test Candidate":
      - cell "2026-18-08"
      - cell "manda akhil userTester added FailedInterview1787038980940 Test Candidate"
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
  541 |   }
  542 | 
  543 |   async navigateToCandidate(): Promise<void> {
  544 |     await this.candidateLink.click();
  545 |     await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
  546 |     await expect(this.candidatePageHeading).toBeVisible();
  547 |   }
  548 | 
  549 |   async searchCandidates(): Promise<void> {
  550 |     const candidatesResponse = this.page.waitForResponse(
  551 |       (response) =>
  552 |         response.url().includes("/api/v2/recruitment/candidates") &&
  553 |         response.request().method() === "GET" &&
  554 |         response.ok(),
  555 |       { timeout: API_TIMEOUT },
  556 |     );
  557 | 
  558 |     await this.searchButton.click();
  559 |     await candidatesResponse;
  560 |     await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  561 |   }
  562 | 
  563 |   async selectDropdownOption(
  564 |     dropdown: Locator,
  565 |     optionText: string,
  566 |   ): Promise<void> {
  567 |     await expect(dropdown).toBeVisible();
  568 |     await dropdown.click();
  569 | 
  570 |     const option = this.visibleDropdown()
  571 |       .locator(".oxd-select-option")
  572 |       .filter({
  573 |         hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
  574 |       })
  575 |       .first();
  576 | 
  577 |     await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  578 |     await option.click();
  579 |     await expect(dropdown).toContainText(optionText);
  580 |   }
  581 | 
  582 |   async selectFirstAvailableVacancy(): Promise<string> {
  583 |     return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  584 |   }
  585 | 
  586 |   async selectFirstAvailableHiringManager(): Promise<string> {
  587 |     return this.selectFirstAvailableDropdownOption(this.hiringManagerDropdown);
  588 |   }
  589 | 
  590 |   async selectFirstAvailableCandidate(searchText: string): Promise<string> {
  591 |     await this.candidateNameInput.fill(searchText);
  592 | 
  593 |     const dropdown = this.page.locator(".oxd-autocomplete-dropdown:visible");
  594 | 
  595 |     await expect(dropdown).toBeVisible({
  596 |       timeout: 15_000,
  597 |     });
  598 | 
  599 |     const options = dropdown.locator(".oxd-autocomplete-option").filter({
  600 |       hasNotText: /Searching|No Records Found/i,
  601 |     });
  602 | 
  603 |     const option = options.first();
  604 | 
  605 |     await expect(option).toBeVisible({
  606 |       timeout: 30_000,
  607 |     });
  608 | 
  609 |     const selectedCandidate = (await option.innerText()).trim();
  610 | 
  611 |     await option.click();
  612 | 
  613 |     await expect(this.candidateNameInput).toHaveValue(selectedCandidate);
  614 | 
  615 |     return selectedCandidate;
  616 |   }
  617 | 
  618 |   private inputGroupByLabel(label: string): Locator {
  619 |     return this.page.locator(".oxd-input-group").filter({
  620 |       has: this.page.locator("label").getByText(label, { exact: true }),
  621 |     });
  622 |   }
  623 | 
  624 |   private dropdownByLabel(label: string): Locator {
  625 |     return this.inputGroupByLabel(label).locator(".oxd-select-text");
  626 |   }
  627 | 
  628 |   private visibleDropdown(): Locator {
  629 |     return this.page.locator(".oxd-select-dropdown:visible");
  630 |   }
  631 | 
  632 |   private async selectFirstAvailableDropdownOption(
  633 |     dropdown: Locator,
  634 |   ): Promise<string> {
  635 |     await expect(dropdown).toBeVisible();
  636 |     await dropdown.click();
  637 | 
  638 |     const options = this.visibleDropdown()
  639 |       .locator(".oxd-select-option")
  640 |       .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
> 641 |     const firstOption = options.first();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  642 | 
  643 |     await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  644 |     const selectedText = (await firstOption.innerText()).trim();
  645 | 
  646 |     await firstOption.click();
  647 |     await expect(dropdown).toContainText(selectedText);
  648 | 
  649 |     return selectedText;
  650 |   }
  651 | 
  652 |   async selectFirstAvailableAddCandidateVacancy(): Promise<string | null> {
  653 |     await this.addCandidateVacancyDropdown.click();
  654 | 
  655 |     const visibleDropdown = this.page.locator(".oxd-select-dropdown:visible");
  656 | 
  657 |     await expect(visibleDropdown).toBeVisible();
  658 | 
  659 |     const validOptions = visibleDropdown.locator(".oxd-select-option").filter({
  660 |       hasNotText: /-- Select --|No Records Found|Searching/i,
  661 |     });
  662 | 
  663 |     const noRecordsOption = visibleDropdown
  664 |       .locator(".oxd-select-option")
  665 |       .filter({ hasText: /No Records Found/i });
  666 | 
  667 |     await validOptions
  668 |       .first()
  669 |       .or(noRecordsOption)
  670 |       .waitFor({
  671 |         state: "visible",
  672 |         timeout: DEFAULT_TIMEOUT,
  673 |       })
  674 |       .catch(() => undefined);
  675 | 
  676 |     const optionCount = await validOptions.count();
  677 | 
  678 |     if (optionCount === 0) {
  679 |       await this.page.keyboard.press("Escape");
  680 |       return null;
  681 |     }
  682 | 
  683 |     const firstOption = validOptions.first();
  684 | 
  685 |     const vacancyName = (await firstOption.innerText()).trim();
  686 | 
  687 |     await firstOption.click();
  688 | 
  689 |     await expect(this.addCandidateVacancyDropdown).toContainText(vacancyName);
  690 | 
  691 |     return vacancyName;
  692 |   }
  693 | 
  694 |   async createCandidate(details: CandidateDetails): Promise<CreatedCandidate> {
  695 |     await this.firstNameInput.fill(details.firstName);
  696 | 
  697 |     if (details.middleName !== undefined) {
  698 |       await this.middleNameInput.fill(details.middleName);
  699 |     }
  700 | 
  701 |     await this.lastNameInput.fill(details.lastName);
  702 | 
  703 |     const vacancy = await this.selectFirstAvailableAddCandidateVacancy();
  704 | 
  705 |     await this.emailInput.fill(details.email);
  706 | 
  707 |     if (details.contactNumber !== undefined) {
  708 |       await this.contactNumberInput.fill(details.contactNumber);
  709 |     }
  710 | 
  711 |     if (details.keywords !== undefined) {
  712 |       await this.keywordsInput.fill(details.keywords);
  713 |     }
  714 | 
  715 |     if (details.notes !== undefined) {
  716 |       await this.notesInput.fill(details.notes);
  717 |     }
  718 | 
  719 |     if (details.consent === true) {
  720 |       const isChecked = await this.consentCheckbox.isChecked();
  721 | 
  722 |       if (!isChecked) {
  723 |         await this.consentCheckboxLabel.click();
  724 |       }
  725 | 
  726 |       await expect(this.consentCheckbox).toBeChecked();
  727 |     }
  728 | 
  729 |     const responsePromise = this.page.waitForResponse(
  730 |       (response) =>
  731 |         response.url().includes("/api/v2/recruitment/candidates") &&
  732 |         response.request().method() === "POST",
  733 |       {
  734 |         timeout: 30_000,
  735 |       },
  736 |     );
  737 | 
  738 |     await this.saveButton.click();
  739 | 
  740 |     const createResponse = await responsePromise;
  741 | 
```