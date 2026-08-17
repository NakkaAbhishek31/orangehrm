# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression
- Location: tests\Recruitment\recruitment.spec.ts:1178:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast').filter({ hasText: /Successfully Saved/i })
Expected substring: "Successfully Saved"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-toast').filter({ hasText: /Successfully Saved/i })

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
      - paragraph: aMTZUDRuhb king
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
- paragraph: SearchCandidate1786948696919 Test User
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
- textbox "First Name" [disabled]: SearchCandidate1786948696919
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: User
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: searchcandidate1786948696919@example.com
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
- textbox "yyyy-dd-mm" [disabled]: 2026-17-08
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
    - row "2026-17-08 aMTZUDRuhb hello king added SearchCandidate1786948696919 Test User":
      - cell "2026-17-08"
      - cell "aMTZUDRuhb hello king added SearchCandidate1786948696919 Test User"
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
  1164 |     // Verify the user remains on the Add Candidate page. 
  1165 |      await expect(page).toHaveURL(
  1166 |        new RegExp(`${data.addCandidateUrlPath}$`)
  1167 |      );
  1168 |     // Verify no success notification appears.
  1169 |       await expect(recruitmentPage.successToast).not.toBeVisible();
  1170 |     // Click Cancel and return to Candidates.
  1171 |    await recruitmentPage.cancelButton.click();
  1172 |          await expect(page).toHaveURL(
  1173 |            new RegExp(`${data.candidatesUrlPath}$`)
  1174 |          );
  1175 |   }
  1176 | );
  1177 | 
  1178 | test.only( 'TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression',
  1179 |   async ({
  1180 |     page,
  1181 |     navigationPage,
  1182 |     recruitmentPage,
  1183 |   }) => {
  1184 |     const data =
  1185 |       recruitmentData.TC_RECRUITMENT_151;
  1186 | 
  1187 |     const uniqueValue = Date.now();
  1188 | 
  1189 |     const firstName =
  1190 |       `${data.firstNamePrefix}${uniqueValue}`;
  1191 | 
  1192 |     const email =
  1193 |       `${data.emailPrefix}${uniqueValue}` +
  1194 |       `${data.emailDomain}`;
  1195 | 
  1196 |     const expectedFullName =
  1197 |       `${firstName} ${data.middleName} ` +
  1198 |       `${data.lastName}`;
  1199 | 
  1200 |     await navigationPage.gotoRecruitment();
  1201 | 
  1202 |     await recruitmentPage.navigateToCandidate();
  1203 |      await recruitmentPage.addCandidateButton.click();
  1204 | 
  1205 |     await recruitmentPage.firstNameInput.fill(
  1206 |       firstName
  1207 |     );
  1208 | 
  1209 |     await recruitmentPage.middleNameInput.fill(
  1210 |       data.middleName
  1211 |     );
  1212 | 
  1213 |     await recruitmentPage.lastNameInput.fill(
  1214 |       data.lastName
  1215 |     );
  1216 | 
  1217 |     const selectedVacancy =
  1218 |       await recruitmentPage
  1219 |         .selectFirstAvailableAddCandidateVacancy();
  1220 | 
  1221 |     await recruitmentPage.emailInput.fill(
  1222 |       email
  1223 |     );
  1224 | 
  1225 |     const responsePromise =
  1226 |       page.waitForResponse(
  1227 |         response =>
  1228 |           response.url().includes(
  1229 |             '/api/v2/recruitment/candidates'
  1230 |           ) &&
  1231 |           response.request().method() === 'POST',
  1232 |         {
  1233 |           timeout: 30_000,
  1234 |         }
  1235 |       );
  1236 | 
  1237 |     await recruitmentPage.saveButton.click();
  1238 | 
  1239 |     const createResponse =
  1240 |       await responsePromise;
  1241 | 
  1242 |     expect(createResponse.ok()).toBeTruthy();
  1243 | 
  1244 |     const responseBody =
  1245 |       await createResponse.json();
  1246 | 
  1247 |     const candidateId = String(
  1248 |       responseBody.data.id
  1249 |     );
  1250 | 
  1251 |     expect(candidateId).not.toBe('');
  1252 | 
  1253 |     await expect(page).toHaveURL(
  1254 |       new RegExp(
  1255 |         `/recruitment/addCandidate/${candidateId}$`
  1256 |       ),
  1257 |       {
  1258 |         timeout: 30_000,
  1259 |       }
  1260 |     );
  1261 | 
  1262 |     await expect(
  1263 |       recruitmentPage.successToast
> 1264 |     ).toContainText(
       |       ^ Error: expect(locator).toContainText(expected) failed
  1265 |       data.successMessage
  1266 |     );
  1267 | 
  1268 |     // Return to Candidate List.
  1269 |     await navigationPage.gotoRecruitment();
  1270 | 
  1271 |     await expect(page).toHaveURL(
  1272 |       /\/recruitment\/viewCandidates$/
  1273 |     );
  1274 | 
  1275 |     // Select the created candidate from autocomplete.
  1276 |     const selectedCandidate =
  1277 |       await recruitmentPage
  1278 |         .selectFirstAvailableCandidate(
  1279 |           firstName
  1280 |         );
  1281 | 
  1282 |     expect(selectedCandidate).not.toBeNull();
  1283 | 
  1284 |     await expect(
  1285 |       recruitmentPage.candidateNameInput
  1286 |     ).toContainText;
  1287 | 
  1288 |     await recruitmentPage.searchButton.click();
  1289 | 
  1290 |     await expect(
  1291 |       recruitmentPage.loadingSpinner
  1292 |     ).toBeHidden({
  1293 |       timeout: 20_000,
  1294 |     });
  1295 | 
  1296 |     await expect(
  1297 |       recruitmentPage.candidateRows
  1298 |     ).toHaveCount(1, {
  1299 |       timeout: 20_000,
  1300 |     });
  1301 | 
  1302 |     const matchingRow =
  1303 |       recruitmentPage.candidateRows.first();
  1304 | 
  1305 |     const cells = matchingRow.locator(
  1306 |       '.oxd-table-cell'
  1307 |     );
  1308 | 
  1309 |     // Vacancy column.
  1310 |     await expect(
  1311 |       cells.nth(1)
  1312 |     ).toContainText(selectedVacancy);
  1313 | 
  1314 |     // Candidate column.
  1315 |     // OrangeHRM may omit the middle name in the table.
  1316 |     await expect(
  1317 |       cells.nth(2)
  1318 |     ).toContainText(firstName);
  1319 | 
  1320 |     await expect(
  1321 |       cells.nth(2)
  1322 |     ).toContainText(data.lastName);
  1323 | 
  1324 |     console.log(
  1325 |       `Created candidate: ${expectedFullName}`
  1326 |     );
  1327 | 
  1328 |     console.log(
  1329 |       `Candidate ID for cleanup: ${candidateId}`
  1330 |     );
  1331 |   }
  1332 | );
  1333 | 
  1334 | });
  1335 | 
```