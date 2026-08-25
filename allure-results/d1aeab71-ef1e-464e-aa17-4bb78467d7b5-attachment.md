# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_158 - Required validation should appear when scheduling an empty interview @negative @validation @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:2076:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Shortlist' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('button', { name: 'Shortlist' })

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
      - paragraph: Emp_YJQynJ User_KwCyeJnB
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
- paragraph: EmptyInterview1787642234131 Test Candidate
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
- textbox "First Name" [disabled]: EmptyInterview1787642234131
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: Candidate
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: emptyinterview1787642234131@example.com
- text: Contact Number
- textbox "Type here" [disabled]
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]
- text: Date of Application
- textbox "yyyy-dd-mm" [disabled]: 2026-25-08
- text:  Notes
- textbox "Type here" [disabled]
- text: Consent to keep data
- checkbox "" [disabled]
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
    - row "2026-25-08 Emp_YJQynJ Opens User_KwCyeJnB added EmptyInterview1787642234131 Test Candidate":
      - cell "2026-25-08"
      - cell "Emp_YJQynJ Opens User_KwCyeJnB added EmptyInterview1787642234131 Test Candidate"
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
  983  |     await expect(this.loadingSpinner).toBeHidden({
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
> 1064 |   await expect(actionButton).toBeVisible({
       |                              ^ Error: expect(locator).toBeVisible() failed
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
  1084 |           '/api/v2/recruitment/'
  1085 |         ) &&
  1086 |         ['POST', 'PUT'].includes(
  1087 |           response.request().method()
  1088 |         ),
  1089 |       {
  1090 |         timeout: 30_000,
  1091 |       }
  1092 |     );
  1093 | 
  1094 |   await this.workflowSaveButton.click();
  1095 | 
  1096 |   const response = await responsePromise;
  1097 | 
  1098 |   const responseText =
  1099 |     await response.text();
  1100 | 
  1101 |   expect(
  1102 |     response.ok(),
  1103 |     `Candidate workflow failed with ${response.status()}: ${responseText}`
  1104 |   ).toBeTruthy();
  1105 | 
  1106 |   await expect(
  1107 |     this.loadingSpinner
  1108 |   ).toBeHidden({
  1109 |     timeout: 30_000,
  1110 |   });
  1111 | 
  1112 |   await expect(
  1113 |     this.candidateStatusText
  1114 |   ).toContainText(expectedStatus, {
  1115 |     timeout: 30_000,
  1116 |   });
  1117 | }
  1118 | 
  1119 | async shortlistCurrentCandidate(
  1120 |   notes: string
  1121 | ): Promise<void> {
  1122 |   await this.completeCandidateWorkflowAction(
  1123 |     this.shortlistButton,
  1124 |     notes,
  1125 |     'Shortlisted'
  1126 |   );
  1127 | }
  1128 | 
  1129 | async scheduleCurrentCandidateInterview(
  1130 |   details: InterviewDetails
  1131 | ): Promise<string> {
  1132 |   await expect(
  1133 |     this.scheduleInterviewButton
  1134 |   ).toBeVisible({
  1135 |     timeout: 20_000,
  1136 |   });
  1137 | 
  1138 |   await this.scheduleInterviewButton.click();
  1139 | 
  1140 |   await expect(
  1141 |     this.scheduleInterviewHeading
  1142 |   ).toBeVisible();
  1143 | 
  1144 |   await this.interviewTitleInput.fill(
  1145 |     details.title
  1146 |   );
  1147 | 
  1148 |   const interviewer =
  1149 |     await this.selectFirstAvailableInterviewer(
  1150 |       details.interviewerSearchText
  1151 |     );
  1152 | 
  1153 |   await this.interviewDateInput.fill(
  1154 |     details.date
  1155 |   );
  1156 | 
  1157 |   await this.interviewTimeInput.fill(
  1158 |     details.time
  1159 |   );
  1160 | 
  1161 |   await expect(
  1162 |     this.interviewTitleInput
  1163 |   ).toHaveValue(details.title);
  1164 | 
```