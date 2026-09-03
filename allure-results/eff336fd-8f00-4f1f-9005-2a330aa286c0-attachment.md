# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression
- Location: tests\Recruitment\recruitment.spec.ts:1150:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/recruitment\/addCandidate\/140$/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
Timeout: 30000ms

Call log:
  - Expect "toHaveURL" with timeout 30000ms
    5 × locator resolved to <html>…</html>
      - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"

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
      - paragraph: Demo Source
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
- textbox "First Name": SearchCandidate1787820025144
- textbox "Middle Name": Test
- textbox "Last Name": User
- text: Vacancy -- Select --  Email*
- textbox "Type here": searchcandidate1787820025144@example.com
- text: Contact Number
- textbox "Type here"
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- text: Keywords
- textbox "Enter comma seperated words..."
- text: Date of Application
- textbox "yyyy-mm-dd": 2026-08-27
- text:  Notes
- textbox "Type here"
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
- text: 
- paragraph: Success
- paragraph: Successfully Saved
- button "×"
```

# Test source

```ts
  1112 | 
  1113 |     await navigationPage.gotoRecruitment();
  1114 | 
  1115 |     await recruitmentPage.navigateToCandidate();
  1116 |     // Open the Add Candidate page.
  1117 |     await recruitmentPage.addCandidateButton.click();
  1118 | 
  1119 |     // Fill First Name, Middle Name and Last Name.
  1120 |     await recruitmentPage.firstNameInput.fill(firstName);
  1121 | 
  1122 |     // Leave Last Name empty.
  1123 |     await recruitmentPage.lastNameInput.fill("");
  1124 |     // Select the first available Vacancy dynamically.
  1125 |     await recruitmentPage.selectFirstAvailableAddCandidateVacancy();
  1126 |     // Fill a valid Email.
  1127 |     await recruitmentPage.emailInput.fill(email);
  1128 |     // Click Save.
  1129 |     await recruitmentPage.saveButton.click();
  1130 |     // Verify Required validation appears
  1131 |     // under the Last Name field.
  1132 | 
  1133 |     await expect(recruitmentPage.lastNameValidation).toHaveText(
  1134 |       data.requiredMessage,
  1135 |     );
  1136 | 
  1137 |     await expect(recruitmentPage.lastNameInput).toHaveValue("");
  1138 |     // Verify First Name and Email keep their values.
  1139 |     await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
  1140 |     await expect(recruitmentPage.emailInput).toHaveValue(email);
  1141 |     // Verify the user remains on the Add Candidate page.
  1142 |     await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
  1143 |     // Verify no success notification appears.
  1144 |     await expect(recruitmentPage.successToast).not.toBeVisible();
  1145 |     // Click Cancel and return to Candidates.
  1146 |     await recruitmentPage.cancelButton.click();
  1147 |     await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  1148 |   });
  1149 | 
  1150 |   test("TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression", async ({
  1151 |     page,
  1152 |     navigationPage,
  1153 |     recruitmentPage,
  1154 |   }) => {
  1155 |     const data = recruitmentData.TC_RECRUITMENT_151;
  1156 | 
  1157 |     const uniqueValue = Date.now();
  1158 | 
  1159 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1160 | 
  1161 |     const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
  1162 | 
  1163 |     const expectedFullName =
  1164 |       `${firstName} ${data.middleName} ` + `${data.lastName}`;
  1165 | 
  1166 |     await navigationPage.gotoRecruitment();
  1167 | 
  1168 |     await recruitmentPage.navigateToCandidate();
  1169 |     await recruitmentPage.addCandidateButton.click();
  1170 | 
  1171 |     await recruitmentPage.firstNameInput.fill(firstName);
  1172 | 
  1173 |     await recruitmentPage.middleNameInput.fill(data.middleName);
  1174 | 
  1175 |     await recruitmentPage.lastNameInput.fill(data.lastName);
  1176 | 
  1177 |     const selectedVacancy =
  1178 |       await recruitmentPage.selectFirstAvailableAddCandidateVacancy();
  1179 | 
  1180 |     await recruitmentPage.emailInput.fill(email);
  1181 | 
  1182 |     const responsePromise = page.waitForResponse(
  1183 |       (response) =>
  1184 |         response.url().includes("/api/v2/recruitment/candidates") &&
  1185 |         response.request().method() === "POST",
  1186 |       {
  1187 |         timeout: 30_000,
  1188 |       },
  1189 |     );
  1190 | 
  1191 |     const successToastPromise = expect(
  1192 |       recruitmentPage.successToast,
  1193 |     ).toContainText(data.successMessage, {
  1194 |       timeout: 30_000,
  1195 |     });
  1196 | 
  1197 |     await recruitmentPage.saveButton.click();
  1198 | 
  1199 |     const [createResponse] = await Promise.all([
  1200 |       responsePromise,
  1201 |       successToastPromise,
  1202 |     ]);
  1203 | 
  1204 |     expect(createResponse.ok()).toBeTruthy();
  1205 | 
  1206 |     const responseBody = await createResponse.json();
  1207 | 
  1208 |     const candidateId = String(responseBody.data.id);
  1209 | 
  1210 |     expect(candidateId).not.toBe("");
  1211 | 
> 1212 |     await expect(page).toHaveURL(
       |                        ^ Error: expect(page).toHaveURL(expected) failed
  1213 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1214 |       {
  1215 |         timeout: 30_000,
  1216 |       },
  1217 |     );
  1218 | 
  1219 |     // Return to Candidate List.
  1220 |     await navigationPage.gotoRecruitment();
  1221 | 
  1222 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  1223 | 
  1224 |     // Select the created candidate from autocomplete.
  1225 |     const selectedCandidate =
  1226 |       await recruitmentPage.selectFirstAvailableCandidate(firstName);
  1227 | 
  1228 |     if (!selectedCandidate) {
  1229 |       throw new Error(
  1230 |         `Created candidate was not available in autocomplete: ${firstName}`,
  1231 |       );
  1232 |     }
  1233 | 
  1234 |     await expect(recruitmentPage.candidateNameInput).toHaveValue(
  1235 |       selectedCandidate,
  1236 |     );
  1237 | 
  1238 |     await recruitmentPage.searchButton.click();
  1239 | 
  1240 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  1241 |       timeout: 20_000,
  1242 |     });
  1243 | 
  1244 |     await expect(recruitmentPage.candidateRows).toHaveCount(1, {
  1245 |       timeout: 20_000,
  1246 |     });
  1247 | 
  1248 |     const matchingRow = recruitmentPage.candidateRows.first();
  1249 | 
  1250 |     const cells = matchingRow.locator(".oxd-table-cell");
  1251 | 
  1252 |     // Vacancy is optional in the public demo environment.
  1253 |     if (selectedVacancy) {
  1254 |       await expect(cells.nth(1)).toContainText(selectedVacancy);
  1255 |     }
  1256 | 
  1257 |     // Candidate column.
  1258 |     // OrangeHRM may omit the middle name in the table.
  1259 |     await expect(cells.nth(2)).toContainText(firstName);
  1260 | 
  1261 |     await expect(cells.nth(2)).toContainText(data.lastName);
  1262 | 
  1263 |     console.log(`Created candidate: ${expectedFullName}`);
  1264 | 
  1265 |     console.log(`Candidate ID for cleanup: ${candidateId}`);
  1266 |   });
  1267 | 
  1268 |   test("TC_RECRUITMENT_152 - Admin should open a candidate profile from the Candidates List @positive @navigation @regression", async ({
  1269 |     page,
  1270 |     navigationPage,
  1271 |     recruitmentPage,
  1272 |   }) => {
  1273 |     const data = recruitmentData.TC_RECRUITMENT_152;
  1274 | 
  1275 |     const uniqueValue = Date.now();
  1276 | 
  1277 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1278 | 
  1279 |     const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
  1280 | 
  1281 |     await navigationPage.gotoRecruitment();
  1282 | 
  1283 |     await recruitmentPage.navigateToCandidate();
  1284 |     await recruitmentPage.addCandidateButton.click();
  1285 | 
  1286 |     const createdCandidate = await recruitmentPage.createCandidate({
  1287 |       firstName,
  1288 |       middleName: data.middleName,
  1289 |       lastName: data.lastName,
  1290 |       email,
  1291 |       contactNumber: data.contactNumber,
  1292 |     });
  1293 | 
  1294 |     const { candidateId, vacancy: selectedVacancy } = createdCandidate;
  1295 | 
  1296 |     expect(candidateId).not.toBe("");
  1297 | 
  1298 |     await expect(page).toHaveURL(
  1299 |       new RegExp(`/recruitment/addCandidate/${candidateId}$`),
  1300 |       {
  1301 |         timeout: 30_000,
  1302 |       },
  1303 |     );
  1304 | 
  1305 |     // Return to Candidates List.
  1306 |     await navigationPage.gotoRecruitment();
  1307 | 
  1308 |     await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);
  1309 | 
  1310 |     const selectedCandidate =
  1311 |       await recruitmentPage.selectFirstAvailableCandidate(firstName);
  1312 | 
```