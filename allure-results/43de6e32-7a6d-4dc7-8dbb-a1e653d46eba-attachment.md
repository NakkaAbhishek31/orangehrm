# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1649:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('.oxd-toast').filter({ hasText: /Successfully Saved/i }) to be visible

```

```
Error: page.waitForResponse: Test ended.
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
              - paragraph [ref=f4e127]: Surya king
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
              - textbox "First Name" [ref=f4e155]: CancelDeleteCandidate1786951943226
              - generic [ref=f4e156]: Should not exceed 30 characters
            - textbox "Middle Name" [ref=f4e159]: Test
            - textbox "Last Name" [ref=f4e162]: User
        - generic [ref=f4e166]:
          - generic [ref=f4e167]: Vacancy
          - generic [ref=f4e171] [cursor=pointer]:
            - generic [ref=f4e172]: "-- Select --"
            - generic [ref=f4e173]: 
        - generic [ref=f4e176]:
          - generic [ref=f4e178]:
            - generic [ref=f4e179]: Email*
            - textbox "Type here" [ref=f4e182]: canceldeletecandidate1786951943226@example.com
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
              - textbox "yyyy-dd-mm" [ref=f4e217]: 2026-17-08
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
          - button "Save" [active] [ref=f4e243] [cursor=pointer]
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
  501 |     .locator('.oxd-select-option')
  502 |     .filter({
  503 |       hasNotText:
  504 |         /-- Select --|No Records Found|Searching/i,
  505 |     });
  506 | 
  507 |   const noRecordsOption = visibleDropdown
  508 |     .locator('.oxd-select-option')
  509 |     .filter({ hasText: /No Records Found/i });
  510 | 
  511 |   await validOptions
  512 |     .first()
  513 |     .or(noRecordsOption)
  514 |     .waitFor({
  515 |       state: 'visible',
  516 |       timeout: DEFAULT_TIMEOUT,
  517 |     })
  518 |     .catch(() => undefined);
  519 | 
  520 |   const optionCount =
  521 |     await validOptions.count();
  522 | 
  523 |   if (optionCount === 0) {
  524 |     await this.page.keyboard.press('Escape');
  525 |     return null;
  526 |   }
  527 | 
  528 |   const firstOption =
  529 |     validOptions.first();
  530 | 
  531 |   const vacancyName = (
  532 |     await firstOption.innerText()
  533 |   ).trim();
  534 | 
  535 |   await firstOption.click();
  536 | 
  537 |   await expect(
  538 |     this.addCandidateVacancyDropdown
  539 |   ).toContainText(vacancyName);
  540 | 
  541 |   return vacancyName;
  542 | }
  543 | 
  544 | async createCandidate(
  545 |   details: CandidateDetails
  546 | ): Promise<CreatedCandidate> {
  547 |   await this.firstNameInput.fill(
  548 |     details.firstName
  549 |   );
  550 | 
  551 |   if (details.middleName !== undefined) {
  552 |     await this.middleNameInput.fill(
  553 |       details.middleName
  554 |     );
  555 |   }
  556 | 
  557 |   await this.lastNameInput.fill(
  558 |     details.lastName
  559 |   );
  560 | 
  561 |   const vacancy =
  562 |     await this
  563 |       .selectFirstAvailableAddCandidateVacancy();
  564 | 
  565 |   await this.emailInput.fill(
  566 |     details.email
  567 |   );
  568 | 
  569 |   if (details.contactNumber !== undefined) {
  570 |     await this.contactNumberInput.fill(
  571 |       details.contactNumber
  572 |     );
  573 |   }
  574 | 
  575 |   if (details.keywords !== undefined) {
  576 |     await this.keywordsInput.fill(
  577 |       details.keywords
  578 |     );
  579 |   }
  580 | 
  581 |   if (details.notes !== undefined) {
  582 |     await this.notesInput.fill(
  583 |       details.notes
  584 |     );
  585 |   }
  586 | 
  587 |   if (details.consent === true) {
  588 |     const isChecked =
  589 |       await this.consentCheckbox.isChecked();
  590 | 
  591 |     if (!isChecked) {
  592 |       await this.consentCheckboxLabel.click();
  593 |     }
  594 | 
  595 |     await expect(
  596 |       this.consentCheckbox
  597 |     ).toBeChecked();
  598 |   }
  599 | 
  600 |   const responsePromise =
> 601 |     this.page.waitForResponse(
      |               ^ Error: page.waitForResponse: Test ended.
  602 |       response =>
  603 |         response.url().includes(
  604 |           '/api/v2/recruitment/candidates'
  605 |         ) &&
  606 |         response.request().method() === 'POST',
  607 |       {
  608 |         timeout: 30_000,
  609 |       }
  610 |     );
  611 | 
  612 |   const toastPromise =
  613 |     this.successToast.waitFor({
  614 |       state: 'visible',
  615 |       timeout: 15_000,
  616 |     });
  617 | 
  618 |   await this.saveButton.click();
  619 | 
  620 |   const createResponse =
  621 |     await responsePromise;
  622 | 
  623 |   await toastPromise;
  624 | 
  625 |   expect(createResponse.ok()).toBeTruthy();
  626 | 
  627 |   const responseBody =
  628 |     await createResponse.json();
  629 | 
  630 |   const candidateId = String(
  631 |     responseBody.data.id
  632 |   );
  633 | 
  634 |   if (!candidateId) {
  635 |     throw new Error(
  636 |       'Candidate ID was missing from the creation response'
  637 |     );
  638 |   }
  639 | 
  640 |   await this.page.waitForURL(
  641 |     new RegExp(
  642 |       `/recruitment/addCandidate/${candidateId}$`
  643 |     ),
  644 |     {
  645 |       timeout: 30_000,
  646 |     }
  647 |   );
  648 | 
  649 |   return {
  650 |     candidateId,
  651 |     vacancy,
  652 |   };
  653 | }
  654 | async deleteCandidateByName(
  655 |   candidateName: string
  656 | ): Promise<void> {
  657 |   const selectedCandidate =
  658 |     await this.selectFirstAvailableCandidate(
  659 |       candidateName
  660 |     );
  661 | 
  662 |   if (selectedCandidate === null) {
  663 |     throw new Error(
  664 |       `Candidate was not found: ${candidateName}`
  665 |     );
  666 |   }
  667 | 
  668 |   await this.searchButton.click();
  669 | 
  670 |   await expect(
  671 |     this.loadingSpinner
  672 |   ).toBeHidden({
  673 |     timeout: 20_000,
  674 |   });
  675 | 
  676 |   const matchingRow = this.candidateRows
  677 |     .filter({
  678 |       has: this.page
  679 |         .locator('.oxd-table-cell')
  680 |         .nth(2)
  681 |         .filter({
  682 |           hasText: candidateName,
  683 |         }),
  684 |     })
  685 |     .first();
  686 | 
  687 |   await expect(matchingRow).toBeVisible({
  688 |     timeout: 20_000,
  689 |   });
  690 | 
  691 |   const deleteButton =
  692 |     matchingRow.getByRole('button').filter({
  693 |       has: this.page.locator(
  694 |         'i.bi-trash'
  695 |       ),
  696 |     });
  697 | 
  698 |   await expect(deleteButton).toBeVisible();
  699 | 
  700 |   await deleteButton.click();
  701 | 
```