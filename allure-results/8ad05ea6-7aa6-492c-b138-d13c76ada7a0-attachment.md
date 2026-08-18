# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_145 - Required validation should appear when adding an empty candidate @negative @validation @regression
- Location: tests\Recruitment\recruitment.spec.ts:645:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByPlaceholder('First Name', { exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
Expected: "Required"
Error: strict mode violation: getByPlaceholder('First Name', { exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Required</span> aka getByText('Required').first()
    2) <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Required</span> aka getByText('Required').nth(1)

Call log:
  - Expect "toHaveText" with timeout 20000ms
  - waiting for getByPlaceholder('First Name', { exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')

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
              - paragraph [ref=f4e127]: manda userTester
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
              - textbox "First Name" [ref=f4e155]
              - generic [ref=f4e156]: Required
            - textbox "Middle Name" [ref=f4e159]
            - generic [ref=f4e160]:
              - textbox "Last Name" [ref=f4e162]
              - generic [ref=f4e163]: Required
        - generic [ref=f4e167]:
          - generic [ref=f4e168]: Vacancy
          - generic [ref=f4e172] [cursor=pointer]:
            - generic [ref=f4e173]: "-- Select --"
            - generic [ref=f4e174]: 
        - generic [ref=f4e177]:
          - generic [ref=f4e179]:
            - generic [ref=f4e180]: Email*
            - textbox "Type here" [ref=f4e183]
            - generic [ref=f4e184]: Required
          - generic [ref=f4e186]:
            - generic [ref=f4e187]: Contact Number
            - textbox "Type here" [ref=f4e190]
        - generic [ref=f4e194]:
          - generic [ref=f4e195]:
            - generic [ref=f4e196]: Resume
            - generic [ref=f4e198]:
              - button "Choose File"
              - generic [ref=f4e199]:
                - generic [ref=f4e200] [cursor=pointer]: Browse
                - generic [ref=f4e201]: No file selected
                - generic [ref=f4e202] [cursor=pointer]: 
          - paragraph [ref=f4e203]: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
        - generic [ref=f4e205]:
          - generic [ref=f4e207]:
            - generic [ref=f4e208]: Keywords
            - textbox "Enter comma seperated words..." [ref=f4e211]
          - generic [ref=f4e213]:
            - generic [ref=f4e214]: Date of Application
            - generic [ref=f4e218]:
              - textbox "yyyy-dd-mm" [ref=f4e219]: 2026-18-08
              - generic [ref=f4e220] [cursor=pointer]: 
        - generic [ref=f4e224]:
          - generic [ref=f4e225]: Notes
          - textbox "Type here" [ref=f4e228]
        - generic [ref=f4e232]:
          - generic [ref=f4e233]: Consent to keep data
          - generic [ref=f4e237] [cursor=pointer]:
            - checkbox "" [ref=f4e238]
            - generic [ref=f4e239]: 
        - separator [ref=f4e241]
        - generic [ref=f4e242]:
          - paragraph [ref=f4e243]: "* Required"
          - button "Cancel" [ref=f4e244] [cursor=pointer]
          - button "Save" [active] [ref=f4e245] [cursor=pointer]
    - generic [ref=f4e246]:
      - paragraph [ref=f4e247]: OrangeHRM OS 5.9
      - paragraph [ref=f4e248]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e249] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  574 |         expect(vacancyText).toContain(selectedVacancy);
  575 |       }
  576 | 
  577 |       for (const statusText of statusTexts) {
  578 |         expect(statusText).toContain(data.candidateStatus);
  579 |       }
  580 |     } else {
  581 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  582 |     }
  583 | 
  584 |     await recruitmentPage.restButton.click();
  585 | 
  586 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  587 |       data.defaultDropdownValue,
  588 |     );
  589 | 
  590 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  591 |       data.defaultDropdownValue,
  592 |     );
  593 |   });
  594 | 
  595 |   test("TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression", async ({
  596 |     page,
  597 |     navigationPage,
  598 |     recruitmentPage,
  599 |   }) => {
  600 |     // Navigate to Recruitment → Candidates.
  601 |     await navigationPage.gotoRecruitment();
  602 |     await recruitmentPage.navigateToCandidate();
  603 |     // Click the Add button.
  604 |     await recruitmentPage.addCandidateButton.click();
  605 |     // Verify navigation to the Add Candidate page.
  606 |     await expect(page).toHaveURL(/recruitment\/addCandidate/);
  607 |     // Verify the Add Candidate heading.
  608 |     await expect(recruitmentPage.addCandidateHeading).toBeVisible();
  609 |     // Verify First Name input.
  610 |     await expect(recruitmentPage.firstNameInput).toBeVisible();
  611 |     // Verify Middle Name input.
  612 |     await expect(recruitmentPage.middleNameInput).toBeVisible();
  613 | 
  614 |     // Verify Last Name input.
  615 |     await expect(recruitmentPage.lastNameInput).toBeVisible();
  616 | 
  617 |     // Verify Vacancy dropdown.
  618 |     await expect(recruitmentPage.addCandidateVacancyDropdown).toBeVisible();
  619 |     // Verify Email input.
  620 |     await expect(recruitmentPage.emailInput).toBeVisible();
  621 | 
  622 |     // Verify Contact Number input.
  623 |     await expect(recruitmentPage.contactNumberInput).toBeVisible();
  624 | 
  625 |     // Verify Resume upload field.
  626 | 
  627 |     await expect(recruitmentPage.resumeInput).toBeAttached();
  628 | 
  629 |     await expect(recruitmentPage.resumeUploadControl).toBeVisible();
  630 |     // Verify Keywords input.
  631 |     await expect(recruitmentPage.addkeywordsInput).toBeVisible();
  632 |     // Verify Date of Application input.
  633 |     await expect(recruitmentPage.applicationDateInput).toBeVisible();
  634 |     // Verify Notes input.
  635 |     await expect(recruitmentPage.notesInput).toBeVisible();
  636 | 
  637 |     // Verify Consent to Keep Data checkbox.
  638 |     await expect(recruitmentPage.consentCheckboxLabel).toBeVisible();
  639 | 
  640 |     // Verify Save and Cancel buttons.
  641 |     await expect(recruitmentPage.saveButton).toBeVisible();
  642 |     await expect(recruitmentPage.cancelButton).toBeVisible();
  643 |   });
  644 | 
  645 |   test("TC_RECRUITMENT_145 - Required validation should appear when adding an empty candidate @negative @validation @regression", async ({
  646 |     page,
  647 |     navigationPage,
  648 |     recruitmentPage,
  649 |   }) => {
  650 |     const data = recruitmentData.TC_RECRUITMENT_145;
  651 | 
  652 |     await navigationPage.gotoRecruitment();
  653 | 
  654 |     await recruitmentPage.navigateToCandidate();
  655 | 
  656 |     await recruitmentPage.addCandidateButton.click();
  657 | 
  658 |     await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
  659 | 
  660 |     // Submit without entering any values.
  661 |     await recruitmentPage.saveButton.click();
  662 | 
  663 |     await expect(recruitmentPage.requiredValidationMessages).toHaveCount(
  664 |       data.requiredValidationCount,
  665 |     );
  666 | 
  667 |     await expect(recruitmentPage.requiredValidationMessages).toHaveText([
  668 |       data.requiredMessage,
  669 |       data.requiredMessage,
  670 |       data.requiredMessage,
  671 |     ]);
  672 | 
  673 |     // Verify individual required fields.
> 674 |     await expect(recruitmentPage.firstNameValidation).toHaveText(
      |                                                       ^ Error: expect(locator).toHaveText(expected) failed
  675 |       data.requiredMessage,
  676 |     );
  677 | 
  678 |     await expect(recruitmentPage.lastNameValidation).toHaveText(
  679 |       data.requiredMessage,
  680 |     );
  681 | 
  682 |     await expect(recruitmentPage.emailValidation).toHaveText(
  683 |       data.requiredMessage,
  684 |     );
  685 | 
  686 |     // The user must remain on Add Candidate.
  687 |     await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
  688 | 
  689 |     await expect(recruitmentPage.successToast).not.toBeVisible();
  690 | 
  691 |     await recruitmentPage.cancelButton.click();
  692 | 
  693 |     await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  694 |   });
  695 | 
  696 |   test("TC_RECRUITMENT_146 - Admin should cancel adding a new candidate @negative @cancel @regression", async ({
  697 |     page,
  698 |     navigationPage,
  699 |     recruitmentPage,
  700 |   }) => {
  701 |     // Read candidate details from JSON.
  702 |     const data = recruitmentData.TC_RECRUITMENT_146;
  703 |     // Generate a unique candidate email.
  704 |     const uniqueValue = Date.now();
  705 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  706 |     const email = `${data.emailPrefix}${uniqueValue}${data.emailDomain}`;
  707 | 
  708 |     // Navigate to Recruitment → Candidates.
  709 |     await navigationPage.gotoRecruitment();
  710 |     await recruitmentPage.navigateToCandidate();
  711 |     // Open the Add Candidate page.
  712 |     await recruitmentPage.addCandidateButton.click();
  713 |     // Fill First Name.
  714 |     await recruitmentPage.firstNameInput.fill(firstName);
  715 |     // Fill Middle Name.
  716 |     await recruitmentPage.middleNameInput.fill(data.middleName);
  717 |     // Fill Last Name.
  718 |     await recruitmentPage.lastNameInput.fill(data.lastName);
  719 |     // Fill Email.
  720 |     await recruitmentPage.emailInput.fill(email);
  721 |     // Fill Contact Number.
  722 |     await recruitmentPage.contactNumberInput.fill(data.contactNumber);
  723 |     // Fill Keywords and Notes
  724 |     await recruitmentPage.addkeywordsInput.fill(data.keywords);
  725 |     await recruitmentPage.notesInput.fill(data.notes);
  726 |     // Verify the entered values.
  727 |     await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
  728 |     await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);
  729 |     await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);
  730 |     await expect(recruitmentPage.emailInput).toHaveValue(email);
  731 |     await expect(recruitmentPage.contactNumberInput).toHaveValue(
  732 |       data.contactNumber,
  733 |     );
  734 |     await expect(recruitmentPage.addkeywordsInput).toHaveValue(data.keywords);
  735 |     await expect(recruitmentPage.notesInput).toHaveValue(data.notes);
  736 |     // Click Cancel without saving.
  737 |     await recruitmentPage.cancelButton.click();
  738 |     // Verify navigation back to Candidates.
  739 |     await expect(page).toHaveURL(/recruitment\/viewCandidates/);
  740 |     await recruitmentPage.candidateNameInput.fill(firstName);
  741 | 
  742 |     // Wait for autocomplete response.
  743 |     await expect(recruitmentPage.candidateAutocompleteNoRecords).toBeVisible({
  744 |       timeout: 15_000,
  745 |     });
  746 | 
  747 |     await recruitmentPage.candidateNameInput.press("Escape");
  748 | 
  749 |     await recruitmentPage.searchButton.click();
  750 | 
  751 |     // The cancelled candidate cannot be selected,
  752 |     // so OrangeHRM displays Invalid.
  753 |     await expect(recruitmentPage.candidateNameValidation).toHaveText("Invalid");
  754 | 
  755 |     await expect(recruitmentPage.candidateNameInput).toHaveValue(firstName);
  756 | 
  757 |     // Cleanup the filter explicitly.
  758 |     await recruitmentPage.candidateNameInput.clear();
  759 | 
  760 |     await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  761 |   });
  762 | 
  763 |   test("TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression", async ({
  764 |     page,
  765 |     navigationPage,
  766 |     recruitmentPage,
  767 |   }) => {
  768 |     const data = recruitmentData.TC_RECRUITMENT_147;
  769 | 
  770 |     const uniqueValue = Date.now();
  771 | 
  772 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  773 | 
  774 |     const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
```