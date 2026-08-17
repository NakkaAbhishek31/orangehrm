# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression
- Location: tests\Recruitment\recruitment.spec.ts:661:6

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
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
              - paragraph [ref=f4e127]: mandaMuhammad userTariq
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
            - textbox "First Name" [ref=f4e155]
            - textbox "Middle Name" [ref=f4e158]
            - textbox "Last Name" [ref=f4e161]
        - generic [ref=f4e165]:
          - generic [ref=f4e166]: Vacancy
          - generic [ref=f4e170] [cursor=pointer]:
            - generic [ref=f4e171]: "-- Select --"
            - generic [ref=f4e172]: 
        - generic [ref=f4e175]:
          - generic [ref=f4e177]:
            - generic [ref=f4e178]: Email*
            - textbox "Type here" [ref=f4e181]
          - generic [ref=f4e183]:
            - generic [ref=f4e184]: Contact Number
            - textbox "Type here" [ref=f4e187]
        - generic [ref=f4e191]:
          - generic [ref=f4e192]:
            - generic [ref=f4e193]: Resume
            - generic [ref=f4e195]:
              - button "Choose File"
              - generic [ref=f4e196]:
                - generic [ref=f4e197] [cursor=pointer]: Browse
                - generic [ref=f4e198]: No file selected
                - generic [ref=f4e199] [cursor=pointer]: 
          - paragraph [ref=f4e200]: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
        - generic [ref=f4e202]:
          - generic [ref=f4e204]:
            - generic [ref=f4e205]: Keywords
            - textbox "Enter comma seperated words..." [ref=f4e208]
          - generic [ref=f4e210]:
            - generic [ref=f4e211]: Date of Application
            - generic [ref=f4e215]:
              - textbox "yyyy-dd-mm" [ref=f4e216]: 2026-15-08
              - generic [ref=f4e217] [cursor=pointer]: 
        - generic [ref=f4e221]:
          - generic [ref=f4e222]: Notes
          - textbox "Type here" [ref=f4e225]
        - generic [ref=f4e229]:
          - generic [ref=f4e230]: Consent to keep data
          - generic [ref=f4e234] [cursor=pointer]:
            - checkbox "" [ref=f4e235]
            - generic [ref=f4e236]: 
        - separator [ref=f4e238]
        - generic [ref=f4e239]:
          - paragraph [ref=f4e240]: "* Required"
          - button "Cancel" [ref=f4e241] [cursor=pointer]
          - button "Save" [ref=f4e242] [cursor=pointer]
    - generic [ref=f4e243]:
      - paragraph [ref=f4e244]: OrangeHRM OS 5.9
      - paragraph [ref=f4e245]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e246] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  571 |     await expect(
  572 |       recruitmentPage.fromDateInput
  573 |     ).toHaveValue(fromDate);
  574 | 
  575 |     await expect(
  576 |       recruitmentPage.toDateInput
  577 |     ).toHaveValue(toDate);
  578 | 
  579 |     await recruitmentPage.searchButton.click();
  580 | 
  581 |     await expect(
  582 |       recruitmentPage.loadingSpinner
  583 |     ).toBeHidden({
  584 |       timeout: 20_000,
  585 |     });
  586 | 
  587 |     // Verify that filters remain selected.
  588 |     await expect(
  589 |       recruitmentPage.vacancyDropdown
  590 |     ).toContainText(selectedVacancy);
  591 | 
  592 |     await expect(
  593 |       recruitmentPage.candidateStatusDropdown
  594 |     ).toContainText(data.candidateStatus);
  595 | 
  596 |     await expect(
  597 |       recruitmentPage.fromDateInput
  598 |     ).toHaveValue(fromDate);
  599 | 
  600 |     await expect(
  601 |       recruitmentPage.toDateInput
  602 |     ).toHaveValue(toDate);
  603 | 
  604 |     await expect(
  605 |       recruitmentPage.candidateRows
  606 |         .first()
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
> 671 |        await expect(recruitmentPage.addCandidateHeading).toBeVisible();
      |                                                          ^ Error: toBeVisible can be only used with Locator object, was called with undefined
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
  692 |       await expect(recruitmentPage.resumeInput).toBeVisible();
  693 | 
  694 |     // Verify Keywords input.
  695 |       await expect(recruitmentPage.addkeywordsInput).toBeVisible();
  696 |     // Verify Date of Application input.
  697 | await expect(recruitmentPage.applicationDateInput).toBeVisible();
  698 |     // Verify Notes input.
  699 |     await expect(recruitmentPage.notesInput).toBeVisible();
  700 | 
  701 |     // Verify Consent to Keep Data checkbox.
  702 |  await expect(recruitmentPage.consentCheckboxLabel).toBeVisible();
  703 | 
  704 |     // Verify Save and Cancel buttons.
  705 |     await expect(recruitmentPage.saveButton).toBeVisible();
  706 |     await expect(recruitmentPage.cancelButton).toBeVisible();
  707 |   }
  708 | );
  709 | 
  710 | 
  711 | });
  712 | 
```