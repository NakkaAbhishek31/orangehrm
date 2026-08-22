# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_169 - Admin should view a valid employee timesheet @positive @timesheet @regression
- Location: tests\Time\time.spec.ts:151:9

# Error details

```
Error: No employee was found for: TimesheetEmployee1787198229144
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
          - generic [ref=f6e113]:
            - heading "Time" [level=6] [ref=f6e114]
            - heading "/ Timesheets" [level=6] [ref=f6e115]
        - link [ref=f6e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e118] [cursor=pointer]
        - list [ref=f6e124]:
          - listitem [ref=f6e125]:
            - generic [ref=f6e126] [cursor=pointer]:
              - img "profile picture" [ref=f6e127]
              - paragraph [ref=f6e128]: manda user
              - generic [ref=f6e129]: 
      - navigation "Topbar Menu" [ref=f6e131]:
        - list [ref=f6e132]:
          - listitem [ref=f6e133] [cursor=pointer]:
            - generic [ref=f6e134]:
              - text: Timesheets
              - generic [ref=f6e135]: 
          - listitem [ref=f6e136] [cursor=pointer]:
            - generic [ref=f6e137]:
              - text: Attendance
              - generic [ref=f6e138]: 
          - listitem [ref=f6e139] [cursor=pointer]:
            - generic [ref=f6e140]:
              - text: Reports
              - generic [ref=f6e141]: 
          - listitem [ref=f6e142] [cursor=pointer]:
            - generic [ref=f6e143]:
              - text: Project Info
              - generic [ref=f6e144]: 
          - button "" [ref=f6e146] [cursor=pointer]
  - generic [ref=f6e148]:
    - generic [ref=f6e150]:
      - generic [ref=f6e151]:
        - heading "Select Employee" [level=6] [ref=f6e152]
        - separator [ref=f6e153]
        - generic [ref=f6e154]:
          - generic [ref=f6e158]:
            - generic [ref=f6e159]: Employee Name*
            - generic [ref=f6e162]:
              - textbox "Type for hints..." [active] [ref=f6e164]: TimesheetEmployee1787198229144
              - listbox [ref=f6e165]:
                - option "Searching...." [ref=f6e166] [cursor=pointer]
          - separator [ref=f6e167]
          - generic [ref=f6e168]:
            - paragraph [ref=f6e169]: "* Required"
            - button "View" [ref=f6e170] [cursor=pointer]
      - generic [ref=f6e171]:
        - heading "Timesheets Pending Action" [level=6] [ref=f6e173]
        - table [ref=f6e175]
    - generic [ref=f6e180]:
      - paragraph [ref=f6e181]: OrangeHRM OS 5.9
      - paragraph [ref=f6e182]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e183] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  285 | 
  286 |     const myTimesheetLink =
  287 |       this.page.getByRole('menuitem', {
  288 |         name: 'My Timesheets',
  289 |         exact: true,
  290 |       });
  291 | 
  292 |     await expect(
  293 |       myTimesheetLink
  294 |     ).toBeVisible();
  295 | 
  296 |     await myTimesheetLink.click();
  297 | 
  298 |     await this.page.waitForURL(
  299 |       /\/time\/viewMyTimesheet$/,
  300 |       {
  301 |         timeout: 30_000,
  302 |       }
  303 |     );
  304 |   }
  305 | 
  306 |   async gotoEmployeeAttendanceRecords():
  307 |   Promise<void> {
  308 |     await this.attendanceMenu.click();
  309 | 
  310 |     const employeeRecordsLink =
  311 |       this.page.getByRole('menuitem', {
  312 |         name: 'Employee Records',
  313 |         exact: true,
  314 |       });
  315 | 
  316 |     await expect(
  317 |       employeeRecordsLink
  318 |     ).toBeVisible();
  319 | 
  320 |     await employeeRecordsLink.click();
  321 | 
  322 |     await this.page.waitForURL(
  323 |       /\/attendance\/viewAttendanceRecord$/,
  324 |       {
  325 |         timeout: 30_000,
  326 |       }
  327 |     );
  328 | 
  329 |     await expect(
  330 |       this.attendanceHeading
  331 |     ).toBeVisible();
  332 |   }
  333 | 
  334 |   async gotoProjectReports(): Promise<void> {
  335 |     await this.reportsMenu.click();
  336 | 
  337 |     const projectReportsLink =
  338 |       this.page.getByRole('menuitem', {
  339 |         name: 'Project Reports',
  340 |         exact: true,
  341 |       });
  342 | 
  343 |     await expect(
  344 |       projectReportsLink
  345 |     ).toBeVisible();
  346 | 
  347 |     await projectReportsLink.click();
  348 | 
  349 |     await this.page.waitForURL(
  350 |       /\/time\/displayProjectReportCriteria$/,
  351 |       {
  352 |         timeout: 30_000,
  353 |       }
  354 |     );
  355 | 
  356 |     await expect(
  357 |       this.projectReportHeading
  358 |     ).toBeVisible();
  359 |   }
  360 | 
  361 |   async selectEmployeeFromAutocomplete(
  362 |     searchText: string
  363 |   ): Promise<string> {
  364 |     await this.employeeNameInput.fill(
  365 |       searchText
  366 |     );
  367 | 
  368 |     await expect(
  369 |       this.employeeAutocompleteDropdown
  370 |     ).toBeVisible({
  371 |       timeout: 15_000,
  372 |     });
  373 | 
  374 |     const validOptions =
  375 |       this.employeeAutocompleteOptions
  376 |         .filter({
  377 |           hasNotText:
  378 |             /Searching|No Records Found/i,
  379 |         });
  380 | 
  381 |     const optionCount =
  382 |       await validOptions.count();
  383 | 
  384 |     if (optionCount === 0) {
> 385 |       throw new Error(
      |             ^ Error: No employee was found for: TimesheetEmployee1787198229144
  386 |         `No employee was found for: ${searchText}`
  387 |       );
  388 |     }
  389 | 
  390 |     const firstOption =
  391 |       validOptions.first();
  392 | 
  393 |     const employeeName = (
  394 |       await firstOption.innerText()
  395 |     ).trim();
  396 | 
  397 |     await firstOption.click();
  398 | 
  399 |     await expect(
  400 |       this.employeeNameInput
  401 |     ).toHaveValue(employeeName);
  402 | 
  403 |     return employeeName;
  404 |   }
  405 | 
  406 |   async waitForLoadingToFinish():
  407 |   Promise<void> {
  408 |     await expect(
  409 |       this.loadingSpinner
  410 |     ).toBeHidden({
  411 |       timeout: 30_000,
  412 |     });
  413 |   }
  414 | }
```