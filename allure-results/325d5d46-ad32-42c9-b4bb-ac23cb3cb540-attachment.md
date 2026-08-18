# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_160 - Admin should mark a candidate interview as passed @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:2268:5

# Error details

```
Error: No interviewer found for: a
```

# Page snapshot

```yaml
- generic [ref=f10e3]:
  - generic:
    - complementary [ref=f10e4]:
      - navigation "Sidepanel" [ref=f10e5]:
        - generic [ref=f10e6]:
          - link [ref=f10e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f10e9]
          - text: 
        - generic [ref=f10e10]:
          - generic [ref=f10e11]:
            - generic [ref=f10e12]:
              - textbox "Search" [ref=f10e15]
              - button "" [ref=f10e16] [cursor=pointer]
            - separator [ref=f10e18]
          - list [ref=f10e19]:
            - listitem [ref=f10e20]:
              - link "Admin" [ref=f10e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f10e25]:
              - link "PIM" [ref=f10e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f10e41]:
              - link "Leave" [ref=f10e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f10e46]:
              - link "Time" [ref=f10e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f10e54]:
              - link "Recruitment" [ref=f10e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f10e62]:
              - link "My Info" [ref=f10e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f10e70]:
              - link "Performance" [ref=f10e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f10e80]:
              - link "Dashboard" [ref=f10e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f10e85]:
              - link "Directory" [ref=f10e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f10e90]:
              - link "Maintenance" [ref=f10e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f10e96]:
              - link "Claim" [ref=f10e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f10e105]:
              - link "Buzz" [ref=f10e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f10e110]:
      - generic [ref=f10e111]:
        - generic [ref=f10e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f10e114]
        - link [ref=f10e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f10e117] [cursor=pointer]
        - list [ref=f10e123]:
          - listitem [ref=f10e124]:
            - generic [ref=f10e125] [cursor=pointer]:
              - img "profile picture" [ref=f10e126]
              - paragraph [ref=f10e127]: manda userTester
              - generic [ref=f10e128]: 
      - navigation "Topbar Menu" [ref=f10e130]:
        - list [ref=f10e131]:
          - listitem [ref=f10e132] [cursor=pointer]:
            - link "Candidates" [ref=f10e133]:
              - /url: "#"
          - listitem [ref=f10e134] [cursor=pointer]:
            - link "Vacancies" [ref=f10e135]:
              - /url: "#"
          - button "" [ref=f10e137] [cursor=pointer]
  - generic [ref=f10e139]:
    - generic [ref=f10e142]:
      - heading "Schedule Interview" [level=6] [ref=f10e143]
      - separator [ref=f10e144]
      - generic [ref=f10e145]:
        - generic [ref=f10e147]:
          - generic [ref=f10e149]:
            - generic [ref=f10e150]: Candidate
            - textbox [ref=f10e153]: PassedInterview1787038931181 Test Candidate
          - generic [ref=f10e155]:
            - generic [ref=f10e156]: Vacancy
            - textbox [ref=f10e159]: Nabil Anane
          - generic [ref=f10e161]:
            - generic [ref=f10e162]: Hiring Manager
            - textbox [ref=f10e165]: Rahul Mulge Patil
          - generic [ref=f10e167]:
            - generic [ref=f10e168]: Current Status
            - textbox [ref=f10e171]: Shortlisted
        - generic [ref=f10e173]:
          - generic [ref=f10e175]:
            - generic [ref=f10e176]: Interview Title*
            - textbox [ref=f10e179]: Passed Automation Interview 1787038931181
          - generic [ref=f10e180]:
            - generic [ref=f10e182]:
              - generic [ref=f10e183]: Interviewer*
              - generic [ref=f10e186]:
                - textbox "Type for hints..." [active] [ref=f10e188]: a
                - listbox [ref=f10e189]:
                  - option "Searching...." [ref=f10e190] [cursor=pointer]
            - button " Add Another" [ref=f10e191] [cursor=pointer]:
              - generic [ref=f10e192]: 
              - text: Add Another
          - generic [ref=f10e194]:
            - generic [ref=f10e195]: Date*
            - generic [ref=f10e199]:
              - textbox "yyyy-dd-mm" [ref=f10e200]
              - generic [ref=f10e201] [cursor=pointer]: 
          - generic [ref=f10e203]:
            - generic [ref=f10e204]: Time
            - generic [ref=f10e208]:
              - textbox "hh:mm" [ref=f10e209]
              - generic [ref=f10e210] [cursor=pointer]: 
          - generic [ref=f10e212]:
            - generic [ref=f10e213]: Notes
            - textbox "Type here" [ref=f10e216]
        - separator [ref=f10e217]
        - paragraph [ref=f10e218]: "* Required"
        - generic [ref=f10e219]:
          - button "Cancel" [ref=f10e220] [cursor=pointer]
          - button "Save" [ref=f10e221] [cursor=pointer]
    - generic [ref=f10e222]:
      - paragraph [ref=f10e223]: OrangeHRM OS 5.9
      - paragraph [ref=f10e224]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f10e225] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  905  |     await expect(this.emailInput).toBeEditable();
  906  | 
  907  |     if (details.email !== undefined) {
  908  |       await this.emailInput.fill(details.email);
  909  |     }
  910  | 
  911  |     if (details.contactNumber !== undefined) {
  912  |       await this.contactNumberInput.fill(details.contactNumber);
  913  |     }
  914  | 
  915  |     if (details.keywords !== undefined) {
  916  |       await this.keywordsInput.fill(details.keywords);
  917  |     }
  918  | 
  919  |     if (details.notes !== undefined) {
  920  |       await this.notesInput.fill(details.notes);
  921  |     }
  922  | 
  923  |     if (details.email !== undefined) {
  924  |       await expect(this.emailInput).toHaveValue(details.email);
  925  |     }
  926  | 
  927  |     if (details.contactNumber !== undefined) {
  928  |       await expect(this.contactNumberInput).toHaveValue(details.contactNumber);
  929  |     }
  930  | 
  931  |     const updateResponsePromise = this.page.waitForResponse(
  932  |       (response) =>
  933  |         response.url().includes("/api/v2/recruitment/candidates/") &&
  934  |         response.request().method() === "PUT",
  935  |       {
  936  |         timeout: 30_000,
  937  |       },
  938  |     );
  939  | 
  940  |     await this.saveButton.click();
  941  | 
  942  |     const updateResponse = await updateResponsePromise;
  943  | 
  944  |     expect(updateResponse.ok()).toBeTruthy();
  945  | 
  946  |     if (details.email !== undefined) {
  947  |       await expect(this.emailInput).toHaveValue(details.email);
  948  |     }
  949  | 
  950  |     if (details.contactNumber !== undefined) {
  951  |       await expect(this.contactNumberInput).toHaveValue(details.contactNumber);
  952  |     }
  953  | 
  954  |     if (details.keywords !== undefined) {
  955  |       await expect(this.keywordsInput).toHaveValue(details.keywords);
  956  |     }
  957  | 
  958  |     if (details.notes !== undefined) {
  959  |       await expect(this.notesInput).toHaveValue(details.notes);
  960  |     }
  961  |   }
  962  | 
  963  |   async openCandidateProfile(candidateName: string): Promise<void> {
  964  |     const selectedCandidate =
  965  |       await this.selectFirstAvailableCandidate(candidateName);
  966  | 
  967  |     if (selectedCandidate === null) {
  968  |       throw new Error(`Candidate was not found: ${candidateName}`);
  969  |     }
  970  | 
  971  |     await expect(this.candidateNameInput).toHaveValue(selectedCandidate);
  972  | 
  973  |     await this.searchButton.click();
  974  | 
  975  |     await expect(this.loadingSpinner).toBeHidden({
  976  |       timeout: 20_000,
  977  |     });
  978  | 
  979  |     const matchingRow = this.candidateRows
  980  |       .filter({
  981  |         has: this.page.locator(".oxd-table-cell").nth(2).filter({
  982  |           hasText: candidateName,
  983  |         }),
  984  |       })
  985  |       .first();
  986  | 
  987  |     await expect(matchingRow).toBeVisible({
  988  |       timeout: 20_000,
  989  |     });
  990  | 
  991  |     const viewButton = matchingRow.getByRole("button").filter({
  992  |       has: this.page.locator("i.bi-eye-fill"),
  993  |     });
  994  | 
  995  |     await expect(viewButton).toBeVisible();
  996  | 
  997  |     await viewButton.click();
  998  | 
  999  |     await this.page.waitForURL(/\/recruitment\/addCandidate\/\d+$/, {
  1000 |       timeout: 30_000,
  1001 |     });
  1002 | 
  1003 |     await expect(this.candidateProfileHeading).toBeVisible();
  1004 |   }
> 1005 | 
       |           ^ Error: No interviewer found for: a
  1006 |   async selectFirstAvailableInterviewer(
  1007 |   searchText: string
  1008 | ): Promise<string> {
  1009 |   await this.interviewerInput.fill(
  1010 |     searchText
  1011 |   );
  1012 | 
  1013 |   await expect(
  1014 |     this.interviewerDropdown
  1015 |   ).toBeVisible({
  1016 |     timeout: 15_000,
  1017 |   });
  1018 | 
  1019 |   const validOptions =
  1020 |     this.interviewerOptions.filter({
  1021 |       hasNotText:
  1022 |         /Searching|No Records Found/i,
  1023 |     });
  1024 | 
  1025 |   const optionCount =
  1026 |     await validOptions.count();
  1027 | 
  1028 |   if (optionCount === 0) {
  1029 |     throw new Error(
  1030 |       `No interviewer found for: ${searchText}`
  1031 |     );
  1032 |   }
  1033 | 
  1034 |   const firstOption =
  1035 |     validOptions.first();
  1036 | 
  1037 |   const interviewerName = (
  1038 |     await firstOption.innerText()
  1039 |   ).trim();
  1040 | 
  1041 |   await firstOption.click();
  1042 | 
  1043 |   await expect(
  1044 |     this.interviewerInput
  1045 |   ).toHaveValue(interviewerName);
  1046 | 
  1047 |   return interviewerName;
  1048 | }
  1049 | 
  1050 | 
  1051 | private async completeCandidateWorkflowAction(
  1052 |   actionButton: Locator,
  1053 |   notes: string,
  1054 |   expectedStatus: string
  1055 | ): Promise<void> {
  1056 |   await expect(actionButton).toBeVisible({
  1057 |     timeout: 20_000,
  1058 |   });
  1059 | 
  1060 |   await actionButton.click();
  1061 | 
  1062 |   await expect(
  1063 |     this.workflowNotesInput
  1064 |   ).toBeVisible();
  1065 | 
  1066 |   await this.workflowNotesInput.fill(notes);
  1067 | 
  1068 |   await expect(
  1069 |     this.workflowNotesInput
  1070 |   ).toHaveValue(notes);
  1071 | 
  1072 |   const responsePromise =
  1073 |     this.page.waitForResponse(
  1074 |       response =>
  1075 |         response.url().includes(
  1076 |           '/api/v2/recruitment/'
  1077 |         ) &&
  1078 |         ['POST', 'PUT'].includes(
  1079 |           response.request().method()
  1080 |         ),
  1081 |       {
  1082 |         timeout: 30_000,
  1083 |       }
  1084 |     );
  1085 | 
  1086 |   const toastPromise =
  1087 |     this.updateSuccessToast.waitFor({
  1088 |       state: 'visible',
  1089 |       timeout: 15_000,
  1090 |     });
  1091 | 
  1092 |   await this.workflowSaveButton.click();
  1093 | 
  1094 |   const response = await responsePromise;
  1095 | 
  1096 |   await toastPromise;
  1097 | 
  1098 |   const responseText =
  1099 |     await response.text();
  1100 | 
  1101 |   expect(
  1102 |     response.ok(),
  1103 |     `Candidate workflow failed with ${response.status()}: ${responseText}`
  1104 |   ).toBeTruthy();
  1105 | 
```