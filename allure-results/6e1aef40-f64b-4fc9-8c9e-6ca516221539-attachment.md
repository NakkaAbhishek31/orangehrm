# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_146 - Admin should cancel adding a new candidate @negative @cancel @regression
- Location: tests\Recruitment\recruitment.spec.ts:720:6

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('textbox', { name: 'Type for hints...', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
Expected: hidden
Received: visible
Timeout:  20000ms

Call log:
  - Expect "toBeHidden" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'Type for hints...', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
    42 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Invalid</span>
       - unexpected value "visible"

```

```yaml
- text: Invalid
```

# Test source

```ts
  697 | 
  698 |     // The user must remain on Add Candidate.
  699 |     await expect(page).toHaveURL(
  700 |       new RegExp(
  701 |         `${data.addCandidateUrlPath}$`
  702 |       )
  703 |     );
  704 | 
  705 |     await expect(
  706 |       recruitmentPage.successToast
  707 |     ).not.toBeVisible();
  708 | 
  709 |     await recruitmentPage.cancelButton.click();
  710 | 
  711 |     await expect(page).toHaveURL(
  712 |       new RegExp(
  713 |         `{data.candidatesUrlPath}`
  714 |       )
  715 |     );
  716 |   }
  717 | );
  718 | 
  719 | 
  720 | test.only('TC_RECRUITMENT_146 - Admin should cancel adding a new candidate @negative @cancel @regression',
  721 |   async ({ page, navigationPage, recruitmentPage }) => {
  722 |     // Read candidate details from JSON.
  723 |      const data=recruitmentData.TC_RECRUITMENT_146
  724 |     // Generate a unique candidate email.
  725 |     const uniqueValue = Date.now();
  726 | const firstName =
  727 |   `${data.firstNamePrefix}${uniqueValue}`;
  728 | const email =
  729 |   `${data.emailPrefix}${uniqueValue}${data.emailDomain}`;
  730 | 
  731 |     // Navigate to Recruitment → Candidates.
  732 |       await navigationPage.gotoRecruitment();
  733 |     await recruitmentPage.navigateToCandidate();
  734 |     // Open the Add Candidate page.
  735 |      await recruitmentPage.addCandidateButton.click();
  736 |     // Fill First Name.
  737 |        await recruitmentPage.firstNameInput.fill(firstName);
  738 |     // Fill Middle Name.
  739 |     await recruitmentPage.middleNameInput.fill(data.middleName);
  740 |     // Fill Last Name.
  741 |     await recruitmentPage.lastNameInput.fill(data.lastName);
  742 |     // Fill Email.
  743 |     await recruitmentPage.emailInput.fill(email);
  744 |     // Fill Contact Number.
  745 |     await recruitmentPage.contactNumberInput.fill(data.contactNumber);
  746 |     // Fill Keywords and Notes
  747 |  await recruitmentPage.addkeywordsInput.fill(data.keywords);
  748 |   await recruitmentPage.notesInput.fill(data.notes);
  749 |     // Verify the entered values.
  750 |      await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
  751 |       await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);
  752 |        await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);
  753 |         await expect(recruitmentPage.emailInput).toHaveValue(email);
  754 |          await expect(recruitmentPage.contactNumberInput).toHaveValue(data.contactNumber);
  755 |           await expect(recruitmentPage.addkeywordsInput).toHaveValue(data.keywords);
  756 |            await expect(recruitmentPage.notesInput).toHaveValue(data.notes);
  757 |     // Click Cancel without saving.
  758 |      await recruitmentPage.cancelButton.click();
  759 |     // Verify navigation back to Candidates.
  760 |      await expect(page).toHaveURL(/recruitment\/viewCandidates/);
  761 |    await recruitmentPage.candidateNameInput.fill(
  762 |   firstName
  763 | );
  764 | 
  765 | // Wait for autocomplete response.
  766 | await expect(
  767 |   recruitmentPage.candidateAutocompleteNoRecords
  768 | ).toBeVisible({
  769 |   timeout: 15_000,
  770 | });
  771 | 
  772 | await recruitmentPage.candidateNameInput.press(
  773 |   'Escape'
  774 | );
  775 | 
  776 | await recruitmentPage.searchButton.click();
  777 | 
  778 | // The cancelled candidate cannot be selected,
  779 | // so OrangeHRM displays Invalid.
  780 | await expect(
  781 |   recruitmentPage.candidateNameValidation
  782 | ).toHaveText('Invalid');
  783 | 
  784 | await expect(
  785 |   recruitmentPage.candidateNameInput
  786 | ).toHaveValue(firstName);
  787 | 
  788 | // Cleanup the filter explicitly.
  789 | await recruitmentPage.candidateNameInput.clear();
  790 | 
  791 | await expect(
  792 |   recruitmentPage.candidateNameInput
  793 | ).toHaveValue('');
  794 | 
  795 | await expect(
  796 |   recruitmentPage.candidateNameValidation
> 797 | ).toBeHidden();  }
      |   ^ Error: expect(locator).toBeHidden() failed
  798 | );
  799 | 
  800 | });
  801 | 
```