# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_163 - Admin should hire a candidate after offering the job @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:2411:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('.oxd-loading-spinner')
Expected: hidden
Received: visible

Call log:
  - Expect "toBeHidden" with timeout 20000ms
  - waiting for locator('.oxd-loading-spinner')
    9 × locator resolved to <div data-v-a6dfc6a9="" class="oxd-loading-spinner"></div>
      - unexpected value "visible"
  - Test timeout of 120000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: Demo Kumar
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - link "Candidates" [ref=f6e133]:
              - /url: "#"
          - listitem [ref=f6e134] [cursor=pointer]:
            - link "Vacancies" [ref=f6e135]:
              - /url: "#"
          - button "" [ref=f6e137] [cursor=pointer]
  - generic [ref=f6e139]:
    - generic [ref=f6e141]:
      - generic [ref=f6e142]:
        - generic [ref=f6e143]:
          - heading "Candidates" [level=5] [ref=f6e145]
          - button "" [ref=f6e148] [cursor=pointer]
        - separator [ref=f6e150]
        - generic [ref=f6e152]:
          - generic [ref=f6e154]:
            - generic [ref=f6e156]:
              - generic [ref=f6e157]: Job Title
              - generic [ref=f6e161] [cursor=pointer]:
                - generic [ref=f6e162]: "-- Select --"
                - generic [ref=f6e163]: 
            - generic [ref=f6e166]:
              - generic [ref=f6e167]: Vacancy
              - generic [ref=f6e171] [cursor=pointer]:
                - generic [ref=f6e172]: "-- Select --"
                - generic [ref=f6e173]: 
            - generic [ref=f6e176]:
              - generic [ref=f6e177]: Hiring Manager
              - generic [ref=f6e181] [cursor=pointer]:
                - generic [ref=f6e182]: "-- Select --"
                - generic [ref=f6e183]: 
            - generic [ref=f6e186]:
              - generic [ref=f6e187]: Status
              - generic [ref=f6e191] [cursor=pointer]:
                - generic [ref=f6e192]: "-- Select --"
                - generic [ref=f6e193]: 
          - generic [ref=f6e196]:
            - generic [ref=f6e198]:
              - generic [ref=f6e199]: Candidate Name
              - textbox "Type for hints..." [ref=f6e204]: HireCandidate1787821977164 Test Candidate
            - generic [ref=f6e206]:
              - generic [ref=f6e207]: Keywords
              - textbox "Enter comma seperated words..." [ref=f6e210]
            - generic [ref=f6e212]:
              - generic [ref=f6e213]: Date of Application
              - generic [ref=f6e217]:
                - textbox "From" [ref=f6e218]
                - generic [ref=f6e219] [cursor=pointer]: 
            - generic [ref=f6e226]:
              - textbox "To" [ref=f6e227]
              - generic [ref=f6e228] [cursor=pointer]: 
          - generic [ref=f6e232]:
            - generic [ref=f6e233]: Method of Application
            - generic [ref=f6e237] [cursor=pointer]:
              - generic [ref=f6e238]: "-- Select --"
              - generic [ref=f6e239]: 
          - separator [ref=f6e241]
          - generic [ref=f6e242]:
            - button "Reset" [ref=f6e243] [cursor=pointer]
            - button "Search" [active] [ref=f6e244] [cursor=pointer]
      - generic [ref=f6e245]:
        - button " Add" [ref=f6e247] [cursor=pointer]:
          - generic [ref=f6e248]: 
          - text: Add
        - generic [ref=f6e249]:
          - separator [ref=f6e250]
          - generic [ref=f6e251]: (1) Record Found
        - table [ref=f6e254]:
          - rowgroup [ref=f6e255]:
            - row [ref=f6e256]:
              - columnheader "" [ref=f6e257]:
                - generic [ref=f6e259] [cursor=pointer]:
                  - checkbox "" [ref=f6e260]
                  - generic [ref=f6e261]: 
              - columnheader "Vacancy " [ref=f6e263]:
                - text: Vacancy
                - generic [ref=f6e264]:
                  - generic [ref=f6e265] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=f6e266]:
                - text: Candidate
                - generic [ref=f6e267]:
                  - generic [ref=f6e268] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=f6e269]:
                - text: Hiring Manager
                - generic [ref=f6e270]:
                  - generic [ref=f6e271] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=f6e272]:
                - text: Date of Application
                - generic [ref=f6e273]:
                  - generic [ref=f6e274] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f6e275]:
                - text: Status
                - generic [ref=f6e276]:
                  - generic [ref=f6e277] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f6e278]
          - rowgroup [ref=f6e279]:
            - row [ref=f6e281]:
              - cell "" [ref=f6e282]:
                - generic [ref=f6e285] [cursor=pointer]:
                  - checkbox "" [ref=f6e286]
                  - generic [ref=f6e287]: 
              - cell "Junior Account Assistant" [ref=f6e289]
              - cell "HireCandidate1787821977164 Test Candidate" [ref=f6e291]
              - cell "(Deleted)" [ref=f6e293]
              - cell "2026-08-27" [ref=f6e295]
              - cell "Application Initiated" [ref=f6e297]
              - cell [ref=f6e299]:
                - generic [ref=f6e300]:
                  - button "" [ref=f6e301] [cursor=pointer]
                  - button "" [ref=f6e303] [cursor=pointer]
    - generic [ref=f6e306]:
      - paragraph [ref=f6e307]: OrangeHRM OS 5.9
      - paragraph [ref=f6e308]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e309] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  883  |     const confirmationDialog = this.page.getByRole("dialog");
  884  | 
  885  |     await expect(confirmationDialog).toBeVisible();
  886  | 
  887  |     await confirmationDialog
  888  |       .getByRole("button", {
  889  |         name: "No, Cancel",
  890  |         exact: true,
  891  |       })
  892  |       .click();
  893  | 
  894  |     await expect(confirmationDialog).toBeHidden();
  895  | 
  896  |     await expect(matchingRow).toBeVisible();
  897  |   }
  898  | 
  899  |   async updateCandidateDetails(details: UpdateCandidateDetails): Promise<void> {
  900  |     // Some OrangeHRM versions open the profile
  901  |     // in read-only mode and display an Edit button.
  902  |     const emailAlreadyEditable = await this.emailInput
  903  |       .isEditable()
  904  |       .catch(() => false);
  905  | 
  906  |     if (!emailAlreadyEditable) {
  907  |       await expect(this.editCandidateButton).toBeVisible({
  908  |         timeout: 20_000,
  909  |       });
  910  |       await this.editCandidateButton.click();
  911  |     }
  912  | 
  913  |     await expect(this.emailInput).toBeEditable();
  914  | 
  915  |     if (details.email !== undefined) {
  916  |       await this.emailInput.fill(details.email);
  917  |     }
  918  | 
  919  |     if (details.contactNumber !== undefined) {
  920  |       await this.contactNumberInput.fill(details.contactNumber);
  921  |     }
  922  | 
  923  |     if (details.keywords !== undefined) {
  924  |       await this.keywordsInput.fill(details.keywords);
  925  |     }
  926  | 
  927  |     if (details.notes !== undefined) {
  928  |       await this.notesInput.fill(details.notes);
  929  |     }
  930  | 
  931  |     if (details.email !== undefined) {
  932  |       await expect(this.emailInput).toHaveValue(details.email);
  933  |     }
  934  | 
  935  |     if (details.contactNumber !== undefined) {
  936  |       await expect(this.contactNumberInput).toHaveValue(details.contactNumber);
  937  |     }
  938  | 
  939  |     const updateResponsePromise = this.page.waitForResponse(
  940  |       (response) =>
  941  |         response.url().includes("/api/v2/recruitment/candidates/") &&
  942  |         response.request().method() === "PUT",
  943  |       {
  944  |         timeout: 30_000,
  945  |       },
  946  |     );
  947  | 
  948  |     await this.saveButton.click();
  949  | 
  950  |     const updateResponse = await updateResponsePromise;
  951  | 
  952  |     expect(updateResponse.ok()).toBeTruthy();
  953  | 
  954  |     if (details.email !== undefined) {
  955  |       await expect(this.emailInput).toHaveValue(details.email);
  956  |     }
  957  | 
  958  |     if (details.contactNumber !== undefined) {
  959  |       await expect(this.contactNumberInput).toHaveValue(details.contactNumber);
  960  |     }
  961  | 
  962  |     if (details.keywords !== undefined) {
  963  |       await expect(this.keywordsInput).toHaveValue(details.keywords);
  964  |     }
  965  | 
  966  |     if (details.notes !== undefined) {
  967  |       await expect(this.notesInput).toHaveValue(details.notes);
  968  |     }
  969  |   }
  970  | 
  971  |   async openCandidateProfile(candidateName: string): Promise<void> {
  972  |     const selectedCandidate =
  973  |       await this.selectFirstAvailableCandidate(candidateName);
  974  | 
  975  |     if (selectedCandidate === null) {
  976  |       throw new Error(`Candidate was not found: ${candidateName}`);
  977  |     }
  978  | 
  979  |     await expect(this.candidateNameInput).toHaveValue(selectedCandidate);
  980  | 
  981  |     await this.searchButton.click();
  982  | 
> 983  |     await expect(this.loadingSpinner).toBeHidden({
       |                                       ^ Error: expect(locator).toBeHidden() failed
  984  |       timeout: 20_000,
  985  |     });
  986  | 
  987  |     const matchingRow = this.candidateRows
  988  |       .filter({
  989  |         has: this.page.locator(".oxd-table-cell").nth(2).filter({
  990  |           hasText: candidateName,
  991  |         }),
  992  |       })
  993  |       .first();
  994  | 
  995  |     await expect(matchingRow).toBeVisible({
  996  |       timeout: 20_000,
  997  |     });
  998  | 
  999  |     const viewButton = matchingRow.getByRole("button").filter({
  1000 |       has: this.page.locator("i.bi-eye-fill"),
  1001 |     });
  1002 | 
  1003 |     await expect(viewButton).toBeVisible();
  1004 | 
  1005 |     await viewButton.click();
  1006 | 
  1007 |     await this.page.waitForURL(/\/recruitment\/addCandidate\/\d+$/, {
  1008 |       timeout: 30_000,
  1009 |     });
  1010 | 
  1011 |     await expect(this.candidateProfileHeading).toBeVisible();
  1012 |   }
  1013 | 
  1014 |   async selectFirstAvailableInterviewer(
  1015 |   searchText: string
  1016 | ): Promise<string> {
  1017 |   await this.interviewerInput.fill(
  1018 |     searchText
  1019 |   );
  1020 | 
  1021 |   await expect(
  1022 |     this.interviewerDropdown
  1023 |   ).toBeVisible({
  1024 |     timeout: 15_000,
  1025 |   });
  1026 | 
  1027 |   const validOptions =
  1028 |     this.interviewerOptions.filter({
  1029 |       hasNotText:
  1030 |         /Searching|No Records Found/i,
  1031 |     });
  1032 | 
  1033 |   const optionCount =
  1034 |     await validOptions.count();
  1035 | 
  1036 |   if (optionCount === 0) {
  1037 |     throw new Error(
  1038 |       `No interviewer found for: ${searchText}`
  1039 |     );
  1040 |   }
  1041 | 
  1042 |   const firstOption =
  1043 |     validOptions.first();
  1044 | 
  1045 |   const interviewerName = (
  1046 |     await firstOption.innerText()
  1047 |   ).trim();
  1048 | 
  1049 |   await firstOption.click();
  1050 | 
  1051 |   await expect(
  1052 |     this.interviewerInput
  1053 |   ).toHaveValue(interviewerName);
  1054 | 
  1055 |   return interviewerName;
  1056 | }
  1057 | 
  1058 | 
  1059 | private async completeCandidateWorkflowAction(
  1060 |   actionButton: Locator,
  1061 |   notes: string,
  1062 |   expectedStatus: string
  1063 | ): Promise<void> {
  1064 |   await expect(actionButton).toBeVisible({
  1065 |     timeout: 20_000,
  1066 |   });
  1067 | 
  1068 |   await actionButton.click();
  1069 | 
  1070 |   await expect(
  1071 |     this.workflowNotesInput
  1072 |   ).toBeVisible();
  1073 | 
  1074 |   await this.workflowNotesInput.fill(notes);
  1075 | 
  1076 |   await expect(
  1077 |     this.workflowNotesInput
  1078 |   ).toHaveValue(notes);
  1079 | 
  1080 |   const responsePromise =
  1081 |     this.page.waitForResponse(
  1082 |       response =>
  1083 |         response.url().includes(
```