# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression
- Location: tests\Recruitment\recruitment.spec.ts:661:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-checkbox-wrapper').filter({ hasText: 'Consent to keep data' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-checkbox-wrapper').filter({ hasText: 'Consent to keep data' })

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
      - paragraph: mandaMuhammad userTariq
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
- heading "Add Candidate" [level=6]
- separator
- text: Full Name*
- textbox "First Name"
- textbox "Middle Name"
- textbox "Last Name"
- text: Vacancy -- Select --  Email*
- textbox "Type here"
- text: Contact Number
- textbox "Type here"
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- text: Keywords
- textbox "Enter comma seperated words..."
- text: Date of Application
- textbox "yyyy-dd-mm": 2026-15-08
- text:  Notes
- textbox "Type here"
- text: Consent to keep data
- checkbox ""
- text: 
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  607 |         .or(recruitmentPage.noRecordsFound)
  608 |     ).toBeVisible({
  609 |       timeout: 15_000,
  610 |     });
  611 | 
  612 |     const candidateCount =
  613 |       await recruitmentPage.candidateRows.count();
  614 | 
  615 |     if (candidateCount > 0) {
  616 |       for (
  617 |         let index = 0;
  618 |         index < candidateCount;
  619 |         index++
  620 |       ) {
  621 |         const cells =
  622 |           recruitmentPage.candidateRows
  623 |             .nth(index)
  624 |             .locator('.oxd-table-cell');
  625 | 
  626 |         const vacancyCell = cells.nth(1);
  627 |         const statusCell = cells.nth(5);
  628 | 
  629 |         await expect(
  630 |           vacancyCell
  631 |         ).toContainText(selectedVacancy);
  632 | 
  633 |         await expect(
  634 |           statusCell
  635 |         ).toContainText(
  636 |           data.candidateStatus
  637 |         );
  638 |       }
  639 |     } else {
  640 |       await expect(
  641 |         recruitmentPage.noRecordsFound
  642 |       ).toBeVisible();
  643 |     }
  644 | 
  645 |     await recruitmentPage.restButton.click();
  646 | 
  647 |     await expect(
  648 |       recruitmentPage.vacancyDropdown
  649 |     ).toContainText(
  650 |       data.defaultDropdownValue
  651 |     );
  652 | 
  653 |     await expect(
  654 |       recruitmentPage.candidateStatusDropdown
  655 |     ).toContainText(
  656 |       data.defaultDropdownValue
  657 |     );
  658 |   }
  659 | );
  660 | 
  661 | test.only('TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression',
  662 |   async ({ page, navigationPage, recruitmentPage }) => {
  663 |     // Navigate to Recruitment → Candidates.
  664 |        await navigationPage.gotoRecruitment();
  665 |        await recruitmentPage.navigateToCandidate();
  666 |     // Click the Add button.
  667 |         await recruitmentPage.addCandidateButton.click()
  668 |     // Verify navigation to the Add Candidate page.
  669 |       await expect(page).toHaveURL(/recruitment\/addCandidate/);
  670 |     // Verify the Add Candidate heading.
  671 |        await expect(recruitmentPage.addCandidateHeading).toBeVisible();
  672 |     // Verify First Name input.
  673 |         await expect(recruitmentPage.firstNameInput).toBeVisible();
  674 |     // Verify Middle Name input.
  675 |            await expect(recruitmentPage.middleNameInput).toBeVisible();
  676 | 
  677 |     // Verify Last Name input.
  678 |         await expect(recruitmentPage.lastNameInput).toBeVisible();
  679 | 
  680 |     // Verify Vacancy dropdown.
  681 |         await expect(recruitmentPage.vacancyDropdown).toBeVisible();
  682 | 
  683 |     // Verify Email input.
  684 |         await expect(recruitmentPage.emailInput).toBeVisible();
  685 | 
  686 |     // Verify Contact Number input.
  687 |              await expect(recruitmentPage.contactNumberInput).toBeVisible();
  688 | 
  689 | 
  690 |     // Verify Resume upload field.
  691 | 
  692 | await expect(
  693 |   recruitmentPage.resumeInput
  694 | ).toBeAttached();
  695 | 
  696 | await expect(
  697 |   recruitmentPage.resumeUploadControl
  698 | ).toBeVisible();
  699 |     // Verify Keywords input.
  700 |       await expect(recruitmentPage.addkeywordsInput).toBeVisible();
  701 |     // Verify Date of Application input.
  702 | await expect(recruitmentPage.applicationDateInput).toBeVisible();
  703 |     // Verify Notes input.
  704 |     await expect(recruitmentPage.notesInput).toBeVisible();
  705 | 
  706 |     // Verify Consent to Keep Data checkbox.
> 707 |  await expect(recruitmentPage.consentCheckboxLabel).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  708 | 
  709 |     // Verify Save and Cancel buttons.
  710 |     await expect(recruitmentPage.saveButton).toBeVisible();
  711 |     await expect(recruitmentPage.cancelButton).toBeVisible();
  712 |   }
  713 | );
  714 | 
  715 | 
  716 | });
  717 | 
```