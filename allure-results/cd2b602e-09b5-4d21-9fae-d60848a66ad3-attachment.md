# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_155 - Admin should edit an existing candidate contact details @positive @edit @regression
- Location: tests\Recruitment\recruitment.spec.ts:1757:6

# Error details

```
Error: expect(locator).toBeEditable() failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Email', { exact: true }) }).locator('input')
Expected: editable
Received: disabled
Timeout:  20000ms

Call log:
  - Expect "toBeEditable" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Email', { exact: true }) }).locator('input')
    42 × locator resolved to <input disabled data-v-1f99f73c="" placeholder="Type here" class="oxd-input oxd-input--active"/>
       - unexpected value "disabled"

```

```yaml
- textbox "Type here" [disabled]: editcandidate1786954319541@example.com
```

# Test source

```ts
  771 | 
  772 |   const [deleteResponse] = await Promise.all([
  773 |     deleteResponsePromise,
  774 |     deleteToastPromise,
  775 |   ]);
  776 | 
  777 |   expect(deleteResponse.ok()).toBeTruthy();
  778 | 
  779 |   await expect(matchingRow).toBeHidden({
  780 |     timeout: 20_000,
  781 |   });
  782 | }
  783 | 
  784 | async cancelCandidateDeletion(
  785 |   candidateName: string
  786 | ): Promise<void> {
  787 |   const selectedCandidate =
  788 |     await this.selectFirstAvailableCandidate(
  789 |       candidateName
  790 |     );
  791 | 
  792 |   if (selectedCandidate === null) {
  793 |     throw new Error(
  794 |       `Candidate was not found: ${candidateName}`
  795 |     );
  796 |   }
  797 | 
  798 |   await this.searchButton.click();
  799 | 
  800 |   await expect(
  801 |     this.loadingSpinner
  802 |   ).toBeHidden({
  803 |     timeout: 20_000,
  804 |   });
  805 | 
  806 |   const matchingRow = this.candidateRows
  807 |     .filter({
  808 |       has: this.page
  809 |         .locator('.oxd-table-cell')
  810 |         .nth(2)
  811 |         .filter({
  812 |           hasText: candidateName,
  813 |         }),
  814 |     })
  815 |     .first();
  816 | 
  817 |   await expect(matchingRow).toBeVisible({
  818 |     timeout: 20_000,
  819 |   });
  820 | 
  821 |   const deleteButton =
  822 |     matchingRow.getByRole('button').filter({
  823 |       has: this.page.locator(
  824 |         'i.bi-trash'
  825 |       ),
  826 |     });
  827 | 
  828 |   await expect(deleteButton).toBeVisible();
  829 | 
  830 |   await deleteButton.click();
  831 | 
  832 |   const confirmationDialog =
  833 |     this.page.getByRole('dialog');
  834 | 
  835 |   await expect(
  836 |     confirmationDialog
  837 |   ).toBeVisible();
  838 | 
  839 |   await confirmationDialog
  840 |     .getByRole('button', {
  841 |       name: 'No, Cancel',
  842 |       exact: true,
  843 |     })
  844 |     .click();
  845 | 
  846 |   await expect(
  847 |     confirmationDialog
  848 |   ).toBeHidden();
  849 | 
  850 |   await expect(
  851 |     matchingRow
  852 |   ).toBeVisible();
  853 | }
  854 | 
  855 | async updateCandidateDetails(
  856 |   details: UpdateCandidateDetails
  857 | ): Promise<void> {
  858 |   // Some OrangeHRM versions open the profile
  859 |   // in read-only mode and display an Edit button.
  860 |   const editButtonVisible =
  861 |     await this.editCandidateButton
  862 |       .isVisible()
  863 |       .catch(() => false);
  864 | 
  865 |   if (editButtonVisible) {
  866 |     await this.editCandidateButton.click();
  867 |   }
  868 | 
  869 |   await expect(
  870 |     this.emailInput
> 871 |   ).toBeEditable();
      |     ^ Error: expect(locator).toBeEditable() failed
  872 | 
  873 |   if (details.email !== undefined) {
  874 |     await this.emailInput.fill(
  875 |       details.email
  876 |     );
  877 |   }
  878 | 
  879 |   if (details.contactNumber !== undefined) {
  880 |     await this.contactNumberInput.fill(
  881 |       details.contactNumber
  882 |     );
  883 |   }
  884 | 
  885 |   if (details.keywords !== undefined) {
  886 |     await this.keywordsInput.fill(
  887 |       details.keywords
  888 |     );
  889 |   }
  890 | 
  891 |   if (details.notes !== undefined) {
  892 |     await this.notesInput.fill(
  893 |       details.notes
  894 |     );
  895 |   }
  896 | 
  897 |   if (details.email !== undefined) {
  898 |     await expect(
  899 |       this.emailInput
  900 |     ).toHaveValue(details.email);
  901 |   }
  902 | 
  903 |   if (details.contactNumber !== undefined) {
  904 |     await expect(
  905 |       this.contactNumberInput
  906 |     ).toHaveValue(details.contactNumber);
  907 |   }
  908 | 
  909 |   const updateResponsePromise =
  910 |     this.page.waitForResponse(
  911 |       response =>
  912 |         response.url().includes(
  913 |           '/api/v2/recruitment/candidates/'
  914 |         ) &&
  915 |         response.request().method() === 'PUT',
  916 |       {
  917 |         timeout: 30_000,
  918 |       }
  919 |     );
  920 | 
  921 |   const updateToastPromise =
  922 |     this.updateSuccessToast.waitFor({
  923 |       state: 'visible',
  924 |       timeout: 15_000,
  925 |     });
  926 | 
  927 |   await this.saveButton.click();
  928 | 
  929 |   const updateResponse =
  930 |     await updateResponsePromise;
  931 | 
  932 |   await updateToastPromise;
  933 | 
  934 |   expect(updateResponse.ok()).toBeTruthy();
  935 | 
  936 |   if (details.email !== undefined) {
  937 |     await expect(
  938 |       this.emailInput
  939 |     ).toHaveValue(details.email);
  940 |   }
  941 | 
  942 |   if (details.contactNumber !== undefined) {
  943 |     await expect(
  944 |       this.contactNumberInput
  945 |     ).toHaveValue(details.contactNumber);
  946 |   }
  947 | 
  948 |   if (details.keywords !== undefined) {
  949 |     await expect(
  950 |       this.keywordsInput
  951 |     ).toHaveValue(details.keywords);
  952 |   }
  953 | 
  954 |   if (details.notes !== undefined) {
  955 |     await expect(
  956 |       this.notesInput
  957 |     ).toHaveValue(details.notes);
  958 |   }
  959 | }
  960 | 
  961 | async openCandidateProfile(
  962 |   candidateName: string
  963 | ): Promise<void> {
  964 |   const selectedCandidate =
  965 |     await this.selectFirstAvailableCandidate(
  966 |       candidateName
  967 |     );
  968 | 
  969 |   if (selectedCandidate === null) {
  970 |     throw new Error(
  971 |       `Candidate was not found: ${candidateName}`
```