# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_148 - Admin should add a candidate without a resume successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:1029:6

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator: getByText('Consent to keep data', { exact: true }).locator('input[type="checkbox"]')
Expected: checked
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeChecked" with timeout 20000ms
  - waiting for getByText('Consent to keep data', { exact: true }).locator('input[type="checkbox"]')

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
- heading "Add Candidate" [level=6]
- separator
- text: Full Name*
- textbox "First Name": ResumeCandidate1786944166581
- textbox "Middle Name": Test
- textbox "Last Name": User
- text: Vacancy -- Select --  Email*
- textbox "Type here": resumecandidate1786944166581@example.com
- text: Contact Number
- textbox "Type here": "9876543210"
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- text: Keywords
- textbox "Enter comma seperated words...": Playwright, Resume Upload
- text: Date of Application
- textbox "yyyy-dd-mm": 2026-17-08
- text:  Notes
- textbox "Type here": Candidate created with an uploaded resume
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
  996  | //     await recruitmentPage.notesInput.fill(
  997  | //       data.notes
  998  | //     );
  999  | 
  1000 | //     // The native checkbox is hidden.
  1001 | //     await recruitmentPage
  1002 | //       .consentCheckboxLabel
  1003 | //       .click();
  1004 | 
  1005 | //     await expect(
  1006 | //       recruitmentPage.consentCheckbox
  1007 | //     ).toBeChecked();
  1008 | 
  1009 | //     // Upload the resume file.
  1010 | 
  1011 | //     // Verify the selected resume filename is displayed.'v
  1012 | 
  1013 | //     // Click Save.
  1014 | 
  1015 | //     // Wait for the candidate creation response.
  1016 | 
  1017 | //     // Verify the response is successful.
  1018 | 
  1019 | //     // Store the created Candidate ID.
  1020 | 
  1021 | //     // Verify navigation to the Candidate details page.
  1022 | 
  1023 | //     // Verify the success notification.
  1024 | 
  1025 | //     // Verify the uploaded resume filename appears
  1026 | //     // in the candidate details.
  1027 | //   }
  1028 | // );
  1029 | test.only( 'TC_RECRUITMENT_148 - Admin should add a candidate without a resume successfully @positive @create @regression',
  1030 |   async ({
  1031 |     page,
  1032 |     navigationPage,
  1033 |     recruitmentPage,
  1034 |   }) => {
  1035 |     const data =
  1036 |       recruitmentData.TC_RECRUITMENT_148;
  1037 | 
  1038 |     const uniqueValue = Date.now();
  1039 | 
  1040 |     const firstName =
  1041 |       `${data.firstNamePrefix}${uniqueValue}`;
  1042 | 
  1043 |     const email =
  1044 |       `${data.emailPrefix}${uniqueValue}` +
  1045 |       `${data.emailDomain}`;
  1046 | 
  1047 |     await navigationPage.gotoRecruitment();
  1048 | 
  1049 |     await recruitmentPage.navigateToCandidate();
  1050 |  
  1051 |     await recruitmentPage.addCandidateButton.click()
  1052 |     await recruitmentPage.firstNameInput.fill(
  1053 |       firstName
  1054 |     );
  1055 | 
  1056 |     await recruitmentPage.middleNameInput.fill(
  1057 |       data.middleName
  1058 |     );
  1059 | 
  1060 |     await recruitmentPage.lastNameInput.fill(
  1061 |       data.lastName
  1062 |     );
  1063 | 
  1064 |     const selectedVacancy =
  1065 |       await recruitmentPage
  1066 |         .selectFirstAvailableAddCandidateVacancy();
  1067 | 
  1068 |     await recruitmentPage.emailInput.fill(
  1069 |       email
  1070 |     );
  1071 | 
  1072 |     await recruitmentPage.contactNumberInput.fill(
  1073 |       data.contactNumber
  1074 |     );
  1075 | 
  1076 |     await recruitmentPage.keywordsInput.fill(
  1077 |       data.keywords
  1078 |     );
  1079 | 
  1080 |     await recruitmentPage.notesInput.fill(
  1081 |       data.notes
  1082 |     );
  1083 | 
  1084 |     // Do not upload a resume.
  1085 |     await expect(
  1086 |       recruitmentPage.resumeInput
  1087 |     ).toHaveValue('');
  1088 | 
  1089 |     // Enable consent.
  1090 |     await recruitmentPage
  1091 |       .consentCheckboxLabel
  1092 |       .click();
  1093 | 
  1094 |     await expect(
  1095 |       recruitmentPage.consentCheckbox
> 1096 |     ).toBeChecked();
       |       ^ Error: expect(locator).toBeChecked() failed
  1097 | 
  1098 |     // Verify entered values before saving.
  1099 |     await expect(
  1100 |       recruitmentPage.firstNameInput
  1101 |     ).toHaveValue(firstName);
  1102 | 
  1103 |     await expect(
  1104 |       recruitmentPage.middleNameInput
  1105 |     ).toHaveValue(data.middleName);
  1106 | 
  1107 |     await expect(
  1108 |       recruitmentPage.lastNameInput
  1109 |     ).toHaveValue(data.lastName);
  1110 | 
  1111 |     await expect(
  1112 |       recruitmentPage.emailInput
  1113 |     ).toHaveValue(email);
  1114 | 
  1115 |     await expect(
  1116 |       recruitmentPage.contactNumberInput
  1117 |     ).toHaveValue(data.contactNumber);
  1118 | 
  1119 |     if (selectedVacancy) {
  1120 |       await expect(
  1121 |         recruitmentPage.addCandidateVacancyDropdown
  1122 |       ).toContainText(selectedVacancy);
  1123 |     }
  1124 | 
  1125 |     const responsePromise =
  1126 |       page.waitForResponse(
  1127 |         response =>
  1128 |           response.url().includes(
  1129 |             '/api/v2/recruitment/candidates'
  1130 |           ) &&
  1131 |           response.request().method() === 'POST',
  1132 |         {
  1133 |           timeout: 30_000,
  1134 |         }
  1135 |       );
  1136 | 
  1137 |     await recruitmentPage.saveButton.click();
  1138 | 
  1139 |     const createResponse =
  1140 |       await responsePromise;
  1141 | 
  1142 |     expect(createResponse.ok()).toBeTruthy();
  1143 | 
  1144 |     const responseBody =
  1145 |       await createResponse.json();
  1146 | 
  1147 |     const candidateId = String(
  1148 |       responseBody.data.id
  1149 |     );
  1150 | 
  1151 |     expect(candidateId).not.toBe('');
  1152 | 
  1153 |     await expect(page).toHaveURL(
  1154 |       new RegExp(
  1155 |         `/recruitment/addCandidate/${candidateId}$`
  1156 |       ),
  1157 |       {
  1158 |         timeout: 30_000,
  1159 |       }
  1160 |     );
  1161 | 
  1162 |     await expect(
  1163 |       recruitmentPage.successToast
  1164 |     ).toContainText(
  1165 |       data.successMessage
  1166 |     );
  1167 | 
  1168 |     await expect(
  1169 |       recruitmentPage.firstNameInput
  1170 |     ).toHaveValue(firstName);
  1171 | 
  1172 |     await expect(
  1173 |       recruitmentPage.lastNameInput
  1174 |     ).toHaveValue(data.lastName);
  1175 | 
  1176 |     await expect(
  1177 |       recruitmentPage.emailInput
  1178 |     ).toHaveValue(email);
  1179 | 
  1180 |     console.log(
  1181 |       `Created candidate ID: ${candidateId}`
  1182 |     );
  1183 |   }
  1184 | );
  1185 | 
  1186 | test.only('TC_RECRUITMENT_149 - Invalid validation should appear for an incorrectly formatted candidate email @negative @validation @regression',
  1187 |   async ({ page, navigationPage, recruitmentPage }) => {
  1188 |     // Read candidate details and invalid email from JSON.
  1189 |      const data =
  1190 |       recruitmentData.TC_RECRUITMENT_149;
  1191 | 
  1192 |     const uniqueValue = Date.now();
  1193 |       // Generate a unique First Name.
  1194 | 
  1195 |     const firstName =
  1196 |       `${data.firstNamePrefix}${uniqueValue}`;
```