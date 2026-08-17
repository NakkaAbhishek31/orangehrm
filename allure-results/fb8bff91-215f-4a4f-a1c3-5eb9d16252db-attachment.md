# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_148 - Admin should add a candidate without a resume successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:1036:6

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
- paragraph: ResumeCandidate1786944711331 Test User
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
- textbox "First Name" [disabled]: ResumeCandidate1786944711331
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: resumecandidate1786944711331@example.com
- text: Contact Number
- textbox "Type here" [disabled]: "9876543210"
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]: Playwright, Resume Upload
- text: Date of Application
- textbox "yyyy-dd-mm" [disabled]: 2026-17-08
- text:  Notes
- textbox "Type here" [disabled]: Candidate created with an uploaded resume
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
    - row "2026-17-08 Matthew Scott LyonsUser added ResumeCandidate1786944711331 Test User":
      - cell "2026-17-08"
      - cell "Matthew Scott LyonsUser added ResumeCandidate1786944711331 Test User"
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
  1071 |     const selectedVacancy =
  1072 |       await recruitmentPage
  1073 |         .selectFirstAvailableAddCandidateVacancy();
  1074 | 
  1075 |     await recruitmentPage.emailInput.fill(
  1076 |       email
  1077 |     );
  1078 | 
  1079 |     await recruitmentPage.contactNumberInput.fill(
  1080 |       data.contactNumber
  1081 |     );
  1082 | 
  1083 |     await recruitmentPage.keywordsInput.fill(
  1084 |       data.keywords
  1085 |     );
  1086 | 
  1087 |     await recruitmentPage.notesInput.fill(
  1088 |       data.notes
  1089 |     );
  1090 | 
  1091 |     // Do not upload a resume.
  1092 |     await expect(
  1093 |       recruitmentPage.resumeInput
  1094 |     ).toHaveValue('');
  1095 | 
  1096 |     // Enable consent.
  1097 |     await recruitmentPage
  1098 |       .consentCheckboxLabel
  1099 |       .click();
  1100 | 
  1101 |     await expect(
  1102 |       recruitmentPage.consentCheckbox
  1103 |     ).toBeChecked();
  1104 | 
  1105 |     // Verify entered values before saving.
  1106 |     await expect(
  1107 |       recruitmentPage.firstNameInput
  1108 |     ).toHaveValue(firstName);
  1109 | 
  1110 |     await expect(
  1111 |       recruitmentPage.middleNameInput
  1112 |     ).toHaveValue(data.middleName);
  1113 | 
  1114 |     await expect(
  1115 |       recruitmentPage.lastNameInput
  1116 |     ).toHaveValue(data.lastName);
  1117 | 
  1118 |     await expect(
  1119 |       recruitmentPage.emailInput
  1120 |     ).toHaveValue(email);
  1121 | 
  1122 |     await expect(
  1123 |       recruitmentPage.contactNumberInput
  1124 |     ).toHaveValue(data.contactNumber);
  1125 | 
  1126 |     if (selectedVacancy) {
  1127 |       await expect(
  1128 |         recruitmentPage.addCandidateVacancyDropdown
  1129 |       ).toContainText(selectedVacancy);
  1130 |     }
  1131 | 
  1132 |     const responsePromise =
  1133 |       page.waitForResponse(
  1134 |         response =>
  1135 |           response.url().includes(
  1136 |             '/api/v2/recruitment/candidates'
  1137 |           ) &&
  1138 |           response.request().method() === 'POST',
  1139 |         {
  1140 |           timeout: 30_000,
  1141 |         }
  1142 |       );
  1143 | 
  1144 |     await recruitmentPage.saveButton.click();
  1145 | 
  1146 |     const createResponse =
  1147 |       await responsePromise;
  1148 | 
  1149 |     expect(createResponse.ok()).toBeTruthy();
  1150 | 
  1151 |     const responseBody =
  1152 |       await createResponse.json();
  1153 | 
  1154 |     const candidateId = String(
  1155 |       responseBody.data.id
  1156 |     );
  1157 | 
  1158 |     expect(candidateId).not.toBe('');
  1159 | 
  1160 |     await expect(page).toHaveURL(
  1161 |       new RegExp(
  1162 |         `/recruitment/addCandidate/${candidateId}$`
  1163 |       ),
  1164 |       {
  1165 |         timeout: 30_000,
  1166 |       }
  1167 |     );
  1168 | 
  1169 |     await expect(
  1170 |       recruitmentPage.successToast
> 1171 |     ).toContainText(
       |       ^ Error: expect(locator).toContainText(expected) failed
  1172 |       data.successMessage
  1173 |     );
  1174 | 
  1175 |     await expect(
  1176 |       recruitmentPage.firstNameInput
  1177 |     ).toHaveValue(firstName);
  1178 | 
  1179 |     await expect(
  1180 |       recruitmentPage.lastNameInput
  1181 |     ).toHaveValue(data.lastName);
  1182 | 
  1183 |     await expect(
  1184 |       recruitmentPage.emailInput
  1185 |     ).toHaveValue(email);
  1186 | 
  1187 |     console.log(
  1188 |       `Created candidate ID: ${candidateId}`
  1189 |     );
  1190 |   }
  1191 | );
  1192 | 
  1193 | test.only('TC_RECRUITMENT_149 - Invalid validation should appear for an incorrectly formatted candidate email @negative @validation @regression',
  1194 |   async ({ page, navigationPage, recruitmentPage }) => {
  1195 |     // Read candidate details and invalid email from JSON.
  1196 |      const data =
  1197 |       recruitmentData.TC_RECRUITMENT_149;
  1198 | 
  1199 |     const uniqueValue = Date.now();
  1200 |       // Generate a unique First Name.
  1201 | 
  1202 |     const firstName =
  1203 |       `${data.firstNamePrefix}${uniqueValue}`;
  1204 | 
  1205 |     // Navigate to Recruitment → Candidates.
  1206 |       
  1207 |     await navigationPage.gotoRecruitment();
  1208 | 
  1209 |     await recruitmentPage.navigateToCandidate();
  1210 |     // Open the Add Candidate page.
  1211 |       await recruitmentPage.addCandidateButton.click()
  1212 | 
  1213 |     // Fill First Name, Middle Name and Last Name.
  1214 |      await recruitmentPage.firstNameInput.fill(
  1215 |       firstName
  1216 |     );
  1217 | 
  1218 |     await recruitmentPage.middleNameInput.fill(
  1219 |       data.middleName
  1220 |     );
  1221 | 
  1222 |     await recruitmentPage.lastNameInput.fill(
  1223 |       data.lastName
  1224 |     );
  1225 | 
  1226 |     await recruitmentPage
  1227 |       .selectFirstAvailableAddCandidateVacancy();
  1228 | 
  1229 |     // Enter an incorrectly formatted email address.
  1230 |       await recruitmentPage.emailInput.fill(data.invalidEmail);
  1231 |     // Click Save.
  1232 |        await recruitmentPage.saveButton.click();
  1233 |     // Verify the Email validation message appears.
  1234 |       await expect(recruitmentPage.emailValidation).toBeVisible();
  1235 |     // Verify the validation message says:
  1236 |     // “Expected format: admin@example.com”.
  1237 |     await expect(recruitmentPage.emailValidation).toHaveText(
  1238 |       data.validationMessage
  1239 |     );
  1240 | 
  1241 |     // Verify the invalid email remains displayed.
  1242 |        await expect (recruitmentPage.emailInput).toHaveValue(data.invalidEmail);
  1243 | 
  1244 |     // Verify the user remains on the Add Candidate page.
  1245 |       await expect(page).toHaveURL(
  1246 |         new RegExp(`${data.addCandidateUrlPath}$`)
  1247 |       );
  1248 |     // Verify no success notification appears.
  1249 |      await expect(recruitmentPage.successToast).not.toBeVisible()
  1250 | 
  1251 |     // Click Cancel and return to Candidates.
  1252 |      await recruitmentPage.cancelButton.click();
  1253 |      await expect(page).toHaveURL(
  1254 |        new RegExp(`${data.candidatesUrlPath}$`)
  1255 |      );
  1256 |     });
  1257 | 
  1258 | 
  1259 | });
  1260 | 
```