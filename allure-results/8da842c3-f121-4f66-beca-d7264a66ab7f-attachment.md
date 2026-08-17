# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:797:6

# Error details

```
TypeError: recruitmentPage.navigateToAddCandidate is not a function
```

# Test source

```ts
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
  794 |  }
  795 | );
  796 | 
  797 | test.only('TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression',
  798 |   async ({
  799 |     page,
  800 |     navigationPage,
  801 |     recruitmentPage,
  802 |   }) => {
  803 |     const data =
  804 |       recruitmentData.TC_RECRUITMENT_147;
  805 | 
  806 |     const uniqueValue = Date.now();
  807 | 
  808 |     const firstName =
  809 |       `${data.firstNamePrefix}${uniqueValue}`;
  810 | 
  811 |     const email =
  812 |       `${data.emailPrefix}${uniqueValue}` +
  813 |       `${data.emailDomain}`;
  814 | 
  815 |     await navigationPage.gotoRecruitment();
  816 | 
> 817 |     await recruitmentPage.navigateToAddCandidate();
      |                           ^ TypeError: recruitmentPage.navigateToAddCandidate is not a function
  818 | 
  819 |     await recruitmentPage.firstNameInput.fill(
  820 |       firstName
  821 |     );
  822 | 
  823 |     await recruitmentPage.middleNameInput.fill(
  824 |       data.middleName
  825 |     );
  826 | 
  827 |     await recruitmentPage.lastNameInput.fill(
  828 |       data.lastName
  829 |     );
  830 | 
  831 |     const selectedVacancy =
  832 |       await recruitmentPage
  833 |         .selectFirstAvailableAddCandidateVacancy();
  834 | 
  835 |     await recruitmentPage.emailInput.fill(
  836 |       email
  837 |     );
  838 | 
  839 |     await recruitmentPage.contactNumberInput.fill(
  840 |       data.contactNumber
  841 |     );
  842 | 
  843 |     await recruitmentPage.keywordsInput.fill(
  844 |       data.keywords
  845 |     );
  846 | 
  847 |     await recruitmentPage.notesInput.fill(
  848 |       data.notes
  849 |     );
  850 | 
  851 |     // The native checkbox is hidden.
  852 |     await recruitmentPage
  853 |       .consentCheckboxLabel
  854 |       .click();
  855 | 
  856 |     await expect(
  857 |       recruitmentPage.consentCheckbox
  858 |     ).toBeChecked();
  859 | 
  860 |     // Verify entered values before saving.
  861 |     await expect(
  862 |       recruitmentPage.firstNameInput
  863 |     ).toHaveValue(firstName);
  864 | 
  865 |     await expect(
  866 |       recruitmentPage.middleNameInput
  867 |     ).toHaveValue(data.middleName);
  868 | 
  869 |     await expect(
  870 |       recruitmentPage.lastNameInput
  871 |     ).toHaveValue(data.lastName);
  872 | 
  873 |     await expect(
  874 |       recruitmentPage.emailInput
  875 |     ).toHaveValue(email);
  876 | 
  877 |     await expect(
  878 |       recruitmentPage.addCandidateVacancyDropdown
  879 |     ).toContainText(selectedVacancy);
  880 | 
  881 |     // Start waiting before clicking Save.
  882 |     const createCandidateResponsePromise =
  883 |       page.waitForResponse(
  884 |         response =>
  885 |           response.url().includes(
  886 |             '/api/v2/recruitment/candidates'
  887 |           ) &&
  888 |           response.request().method() === 'POST',
  889 |         {
  890 |           timeout: 30_000,
  891 |         }
  892 |       );
  893 | 
  894 |     await recruitmentPage.saveButton.click();
  895 | 
  896 |     const createCandidateResponse =
  897 |       await createCandidateResponsePromise;
  898 | 
  899 |     expect(
  900 |       createCandidateResponse.ok()
  901 |     ).toBeTruthy();
  902 | 
  903 |     const responseBody =
  904 |       await createCandidateResponse.json();
  905 | 
  906 |     const candidateId =
  907 |       String(responseBody.data.id);
  908 | 
  909 |     expect(candidateId).not.toBe('');
  910 | 
  911 |     await expect(page).toHaveURL(
  912 |       new RegExp(
  913 |         `/recruitment/addCandidate/${candidateId}$`
  914 |       ),
  915 |       {
  916 |         timeout: 30_000,
  917 |       }
```