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