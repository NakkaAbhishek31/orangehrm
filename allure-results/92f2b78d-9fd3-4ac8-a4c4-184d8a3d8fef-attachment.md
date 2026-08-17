# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:797:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast-content-text').filter({ hasText: /Successfully Saved/i })
Expected substring: "Successfully Saved"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-toast-content-text').filter({ hasText: /Successfully Saved/i })

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
      - paragraph: Matthew LyonsUser
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
- paragraph: AutoCandidate1786944650594 Test User
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
- textbox "First Name" [disabled]: AutoCandidate1786944650594
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: candidate1786944650594@example.com
- text: Contact Number
- textbox "Type here" [disabled]: "9876543210"
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]: Playwright, Automation
- text: Date of Application
- textbox "yyyy-dd-mm" [disabled]: 2026-17-08
- text:  Notes
- textbox "Type here" [disabled]: Candidate created using Playwright automation
- text: Consent to keep data
- checkbox "" [checked] [disabled]
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
    - row "2026-17-08 Matthew Scott LyonsUser added AutoCandidate1786944650594 Test User":
      - cell "2026-17-08"
      - cell "Matthew Scott LyonsUser added AutoCandidate1786944650594 Test User"
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
  825  |       firstName
  826  |     );
  827  | 
  828  |     await recruitmentPage.middleNameInput.fill(
  829  |       data.middleName
  830  |     );
  831  | 
  832  |     await recruitmentPage.lastNameInput.fill(
  833  |       data.lastName
  834  |     );
  835  | 
  836  |     await recruitmentPage.emailInput.fill(
  837  |       email
  838  |     );
  839  | 
  840  |     await recruitmentPage.contactNumberInput.fill(
  841  |       data.contactNumber
  842  |     );
  843  | 
  844  |     await recruitmentPage.keywordsInput.fill(
  845  |       data.keywords
  846  |     );
  847  | 
  848  |     await recruitmentPage.notesInput.fill(
  849  |       data.notes
  850  |     );
  851  | 
  852  |     // The native checkbox is hidden.
  853  |     await recruitmentPage
  854  |       .consentCheckboxLabel
  855  |       .click();
  856  | 
  857  |     await expect(
  858  |       recruitmentPage.consentCheckbox
  859  |     ).toBeChecked();
  860  | 
  861  |     // Verify entered values before saving.
  862  |     await expect(
  863  |       recruitmentPage.firstNameInput
  864  |     ).toHaveValue(firstName);
  865  | 
  866  |     await expect(
  867  |       recruitmentPage.middleNameInput
  868  |     ).toHaveValue(data.middleName);
  869  | 
  870  |     await expect(
  871  |       recruitmentPage.lastNameInput
  872  |     ).toHaveValue(data.lastName);
  873  | 
  874  |     await expect(
  875  |       recruitmentPage.emailInput
  876  |     ).toHaveValue(email);
  877  | 
  878  |     if (selectedVacancy) {
  879  |       await expect(
  880  |         recruitmentPage.addCandidateVacancyDropdown
  881  |       ).toContainText(selectedVacancy);
  882  |     }
  883  | 
  884  |     // Start waiting before clicking Save.
  885  |     const createCandidateResponsePromise =
  886  |       page.waitForResponse(
  887  |         response =>
  888  |           response.url().includes(
  889  |             '/api/v2/recruitment/candidates'
  890  |           ) &&
  891  |           response.request().method() === 'POST',
  892  |         {
  893  |           timeout: 30_000,
  894  |         }
  895  |       );
  896  | 
  897  |     await recruitmentPage.saveButton.click();
  898  | 
  899  |     const createCandidateResponse =
  900  |       await createCandidateResponsePromise;
  901  | 
  902  |     expect(
  903  |       createCandidateResponse.ok()
  904  |     ).toBeTruthy();
  905  | 
  906  |     const responseBody =
  907  |       await createCandidateResponse.json();
  908  | 
  909  |     const candidateId =
  910  |       String(responseBody.data.id);
  911  | 
  912  |     expect(candidateId).not.toBe('');
  913  | 
  914  |     await expect(page).toHaveURL(
  915  |       new RegExp(
  916  |         `/recruitment/addCandidate/${candidateId}$`
  917  |       ),
  918  |       {
  919  |         timeout: 30_000,
  920  |       }
  921  |     );
  922  | 
  923  |     await expect(
  924  |       recruitmentPage.successToast
> 925  |     ).toContainText(data.successMessage);
       |       ^ Error: expect(locator).toContainText(expected) failed
  926  | 
  927  |     // Verify saved candidate values.
  928  |     await expect(
  929  |       recruitmentPage.firstNameInput
  930  |     ).toHaveValue(firstName);
  931  | 
  932  |     await expect(
  933  |       recruitmentPage.middleNameInput
  934  |     ).toHaveValue(data.middleName);
  935  | 
  936  |     await expect(
  937  |       recruitmentPage.lastNameInput
  938  |     ).toHaveValue(data.lastName);
  939  | 
  940  |     await expect(
  941  |       recruitmentPage.emailInput
  942  |     ).toHaveValue(email);
  943  | 
  944  |     await expect(
  945  |       recruitmentPage.contactNumberInput
  946  |     ).toHaveValue(data.contactNumber);
  947  | 
  948  |     console.log(
  949  |       `Created candidate ID: ${candidateId}`
  950  |     );
  951  |   }
  952  | );
  953  | 
  954  | // test('TC_RECRUITMENT_148 - Admin should upload a resume while adding a candidate @positive @upload @regression',
  955  | //   async ({ page, navigationPage, recruitmentPage }) => {
  956  | //     // Read candidate details and resume path from JSON.
  957  | //          const data =
  958  | //       recruitmentData.TC_RECRUITMENT_148;
  959  | //     // Generate a unique First Name and Email.
  960  | //            const uniqueValue = Date.now();
  961  | 
  962  | //     const firstName =
  963  | //       `${data.firstNamePrefix}${uniqueValue}`;
  964  | 
  965  | //     const email =
  966  | //       `${data.emailPrefix}${uniqueValue}` +
  967  | //       `${data.emailDomain}`;
  968  | 
  969  | //     // Navigate to Recruitment → Candidates.
  970  | //     await navigationPage.gotoRecruitment();
  971  | //     await recruitmentPage.navigateToCandidate();
  972  | //     // Open the Add Candidate page.
  973  | //        await recruitmentPage.addCandidateButton.click();
  974  | //     // Fill the required candidate fields.
  975  | //      await recruitmentPage.firstNameInput.fill(
  976  | //       firstName
  977  | //     );
  978  | 
  979  | //     await recruitmentPage.middleNameInput.fill(
  980  | //       data.middleName
  981  | //     );
  982  | 
  983  | //     await recruitmentPage.lastNameInput.fill(
  984  | //       data.lastName
  985  | //     );
  986  | 
  987  | //     const selectedVacancy =
  988  | //       await recruitmentPage
  989  | //         .selectFirstAvailableAddCandidateVacancy();
  990  | 
  991  | //     await recruitmentPage.emailInput.fill(
  992  | //       email
  993  | //     );
  994  | 
  995  | //     await recruitmentPage.contactNumberInput.fill(
  996  | //       data.contactNumber
  997  | //     );
  998  | 
  999  | //     await recruitmentPage.keywordsInput.fill(
  1000 | //       data.keywords
  1001 | //     );
  1002 | 
  1003 | //     await recruitmentPage.notesInput.fill(
  1004 | //       data.notes
  1005 | //     );
  1006 | 
  1007 | //     // The native checkbox is hidden.
  1008 | //     await recruitmentPage
  1009 | //       .consentCheckboxLabel
  1010 | //       .click();
  1011 | 
  1012 | //     await expect(
  1013 | //       recruitmentPage.consentCheckbox
  1014 | //     ).toBeChecked();
  1015 | 
  1016 | //     // Upload the resume file.
  1017 | 
  1018 | //     // Verify the selected resume filename is displayed.'v
  1019 | 
  1020 | //     // Click Save.
  1021 | 
  1022 | //     // Wait for the candidate creation response.
  1023 | 
  1024 | //     // Verify the response is successful.
  1025 | 
```