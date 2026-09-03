# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_165 - Admin should cancel rejecting a candidate @negative @cancel @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:2603:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Reject', exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('button', { name: 'Reject', exact: true })

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
      - paragraph: Demo Kumar
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
- paragraph: CancelReject1787821955476 Test Candidate
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
- textbox "First Name" [disabled]: CancelReject1787821955476
- textbox "Middle Name" [disabled]: Test
- textbox "Last Name" [disabled]: Candidate
- text: Job Vacancy -- Select --  Email*
- textbox "Type here" [disabled]: cancelreject1787821955476@example.com
- text: Contact Number
- textbox "Type here" [disabled]: "9876543210"
- separator
- text: Resume
- button "Choose File"
- text: Browse No file selected 
- paragraph: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
- separator
- text: Keywords
- textbox "Enter comma seperated words..." [disabled]
- text: Date of Application
- textbox "yyyy-mm-dd" [disabled]: 2026-08-27
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
    - row "2026-08-27 Demo Open Kumar added CancelReject1787821955476 Test Candidate":
      - cell "2026-08-27"
      - cell "Demo Open Kumar added CancelReject1787821955476 Test Candidate"
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
  1185 |         ) &&
  1186 |         ['POST', 'PUT'].includes(
  1187 |           response.request().method()
  1188 |         ),
  1189 |       {
  1190 |         timeout: 30_000,
  1191 |       }
  1192 |     );
  1193 | 
  1194 |   const toastPromise =
  1195 |     this.updateSuccessToast.waitFor({
  1196 |       state: 'visible',
  1197 |       timeout: 15_000,
  1198 |     });
  1199 | 
  1200 |   await this.interviewSaveButton.click();
  1201 | 
  1202 |   const response = await responsePromise;
  1203 | 
  1204 |   await toastPromise;
  1205 | 
  1206 |   const responseText =
  1207 |     await response.text();
  1208 | 
  1209 |   expect(
  1210 |     response.ok(),
  1211 |     `Scheduling interview failed with ${response.status()}: ${responseText}`
  1212 |   ).toBeTruthy();
  1213 | 
  1214 |   await expect(
  1215 |     this.loadingSpinner
  1216 |   ).toBeHidden({
  1217 |     timeout: 30_000,
  1218 |   });
  1219 | 
  1220 |   await expect(
  1221 |     this.candidateStatusText
  1222 |   ).toContainText(
  1223 |     'Interview Scheduled',
  1224 |     {
  1225 |       timeout: 30_000,
  1226 |     }
  1227 |   );
  1228 | 
  1229 |   return interviewer;
  1230 | }
  1231 | async markInterviewPassed(
  1232 |   notes: string
  1233 | ): Promise<void> {
  1234 |   await this.completeCandidateWorkflowAction(
  1235 |     this.markInterviewPassedButton,
  1236 |     notes,
  1237 |     'Interview Passed'
  1238 |   );
  1239 | }
  1240 | 
  1241 | async markInterviewFailed(
  1242 |   notes: string
  1243 | ): Promise<void> {
  1244 |   await this.completeCandidateWorkflowAction(
  1245 |     this.markInterviewFailedButton,
  1246 |     notes,
  1247 |     'Interview Failed'
  1248 |   );
  1249 | }
  1250 | 
  1251 | async hireCandidate(
  1252 |   notes: string
  1253 | ): Promise<void> {
  1254 |   await this.completeCandidateWorkflowAction(
  1255 |     this.hireCandidateButton,
  1256 |     notes,
  1257 |     'Hired'
  1258 |   );
  1259 | }
  1260 | 
  1261 | async offerJob(
  1262 |   notes: string
  1263 | ): Promise<void> {
  1264 |   await this.completeCandidateWorkflowAction(
  1265 |     this.offerJobButton,
  1266 |     notes,
  1267 |     'Job Offered'
  1268 |   );
  1269 | }
  1270 | 
  1271 | async rejectCandidate(
  1272 |   notes: string
  1273 | ): Promise<void> {
  1274 |   await this.completeCandidateWorkflowAction(
  1275 |     this.rejectButton,
  1276 |     notes,
  1277 |     'Rejected'
  1278 |   );
  1279 | }
  1280 | async cancelCandidateRejection(
  1281 |   notes: string
  1282 | ): Promise<void> {
  1283 |   await expect(
  1284 |     this.rejectButton
> 1285 |   ).toBeVisible({
       |     ^ Error: expect(locator).toBeVisible() failed
  1286 |     timeout: 20_000,
  1287 |   });
  1288 | 
  1289 |   await this.rejectButton.click();
  1290 | 
  1291 |   await expect(
  1292 |     this.rejectCandidateHeading
  1293 |   ).toBeVisible();
  1294 | 
  1295 |   await expect(
  1296 |     this.workflowNotesInput
  1297 |   ).toBeVisible();
  1298 | 
  1299 |   await this.workflowNotesInput.fill(notes);
  1300 | 
  1301 |   await expect(
  1302 |     this.workflowNotesInput
  1303 |   ).toHaveValue(notes);
  1304 | 
  1305 |   await this.workflowCancelButton.click();
  1306 | 
  1307 |   await expect(
  1308 |     this.rejectCandidateHeading
  1309 |   ).toBeHidden();
  1310 | 
  1311 |   await expect(
  1312 |     this.rejectButton
  1313 |   ).toBeVisible();
  1314 | }
  1315 | }
  1316 | 
```