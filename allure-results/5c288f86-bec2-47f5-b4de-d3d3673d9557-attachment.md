# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_172 - Admin should navigate to the Project Reports page @smoke @navigation @report @regression
- Location: tests\Time\time.spec.ts:297:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')

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
  - heading "Time" [level=6]
  - heading "/ Reports" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Project Report" [level=5]
- button ""
- separator
- text: Project Name*
- textbox "Type for hints..."
- text: Project Date Range
- textbox "From"
- text: 
- textbox "To"
- text: 
- paragraph: Only Include Approved Timesheets
- checkbox
- separator
- paragraph: "* Required"
- button "View"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  226 |         timePage,
  227 |       }) => {
  228 |         const data =
  229 |           timeData.TC_TIME_170;
  230 | 
  231 |         await navigationPage.gotoTime();
  232 | 
  233 |         await timePage.gotoMyTimesheet();
  234 | 
  235 |         await expect(page).toHaveURL(
  236 |           new RegExp(
  237 |             `${data.expectedUrlPath}$`
  238 |           )
  239 |         );
  240 | 
  241 |         await expect(
  242 |           timePage.myTimesheetHeading
  243 |         ).toBeVisible();
  244 | 
  245 |         await expect(
  246 |           timePage.timesheetPeriod
  247 |         ).toBeVisible();
  248 | 
  249 |         await expect(
  250 |           timePage.timesheetTable
  251 |         ).toBeVisible();
  252 | 
  253 |         await expect(
  254 |           timePage.editTimesheetButton
  255 |         ).toBeVisible();
  256 |       }
  257 |     );
  258 | 
  259 |     test( 'TC_TIME_171 - Admin should navigate to Employee Attendance Records @smoke @navigation @attendance @regression',
  260 |       async ({
  261 |         page,
  262 |         navigationPage,
  263 |         timePage,
  264 |       }) => {
  265 |         const data =
  266 |           timeData.TC_TIME_171;
  267 | 
  268 |         await navigationPage.gotoTime();
  269 | 
  270 |         await timePage
  271 |           .gotoEmployeeAttendanceRecords();
  272 | 
  273 |         await expect(page).toHaveURL(
  274 |           new RegExp(
  275 |             `${data.expectedUrlPath}$`
  276 |           )
  277 |         );
  278 | 
  279 |         await expect(
  280 |           timePage.attendanceHeading
  281 |         ).toHaveText(data.pageHeading);
  282 | 
  283 |         await expect(
  284 |           timePage.attendanceEmployeeInput
  285 |         ).toBeVisible();
  286 | 
  287 |         await expect(
  288 |           timePage.attendanceDateInput
  289 |         ).toBeVisible();
  290 | 
  291 |         await expect(
  292 |           timePage.attendanceViewButton
  293 |         ).toBeVisible();
  294 |       }
  295 |     );
  296 | 
  297 |     test('TC_TIME_172 - Admin should navigate to the Project Reports page @smoke @navigation @report @regression',
  298 |       async ({
  299 |         page,
  300 |         navigationPage,
  301 |         timePage,
  302 |       }) => {
  303 |         const data =
  304 |           timeData.TC_TIME_172;
  305 | 
  306 |         await navigationPage.gotoTime();
  307 | 
  308 |         await timePage.gotoProjectReports();
  309 | 
  310 |         await expect(page).toHaveURL(
  311 |           new RegExp(
  312 |             `${data.expectedUrlPath}$`
  313 |           )
  314 |         );
  315 | 
  316 |         await expect(
  317 |           timePage.projectReportHeading
  318 |         ).toHaveText(data.pageHeading);
  319 | 
  320 |         await expect(
  321 |           timePage.projectNameInput
  322 |         ).toBeVisible();
  323 | 
  324 |         await expect(
  325 |           timePage.projectFromDateInput
> 326 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  327 | 
  328 |         await expect(
  329 |           timePage.projectToDateInput
  330 |         ).toBeVisible();
  331 | 
  332 |         await expect(
  333 |           timePage.projectReportViewButton
  334 |         ).toBeVisible();
  335 |       }
  336 |     );
  337 | 
  338 |     test(
  339 |   'TC_TIME_173 - Required validation should appear when viewing attendance without selecting an employee @negative @validation @attendance @regression',
  340 |   async ({ page, navigationPage, timePage }) => {
  341 |     // Read validation data from JSON.
  342 |       const data =timeData.TC_TIME_172;
  343 | 
  344 |         await navigationPage.gotoTime();
  345 | 
  346 |         await timePage.gotoProjectReports();
  347 | 
  348 |     // Navigate to Time → Attendance → Employee Records.
  349 | 
  350 |     // Verify Employee Attendance Records page is displayed.
  351 | 
  352 |     // Leave Employee Name empty.
  353 | 
  354 |     // Keep the default attendance date.
  355 | 
  356 |     // Click View.
  357 | 
  358 |     // Verify Required validation appears
  359 |     // below Employee Name.
  360 | 
  361 |     // Verify Employee Name remains empty.
  362 | 
  363 |     // Verify the user remains on the
  364 |     // Employee Attendance Records page.
  365 | 
  366 |     // Verify no attendance records are loaded.
  367 |   }
  368 | );
  369 | 
  370 | 
  371 |   }
  372 | );
```