# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:215:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 1
Received:   1
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Leave" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: Shakti Mishra
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - listitem [ref=f2e132] [cursor=pointer]:
            - link "Apply" [ref=f2e133]:
              - /url: "#"
          - listitem [ref=f2e134] [cursor=pointer]:
            - link "My Leave" [ref=f2e135]:
              - /url: "#"
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Entitlements
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Reports
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Configure
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Leave List" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Assign Leave" [ref=f2e148]:
              - /url: "#"
          - button "" [ref=f2e150] [cursor=pointer]
  - generic [ref=f2e152]:
    - generic [ref=f2e154]:
      - generic [ref=f2e155]:
        - generic [ref=f2e156]:
          - heading "Leave List" [level=5] [ref=f2e158]
          - button "" [ref=f2e161] [cursor=pointer]
        - separator [ref=f2e163]
        - generic [ref=f2e165]:
          - generic [ref=f2e167]:
            - generic [ref=f2e169]:
              - generic [ref=f2e170]: From Date
              - generic [ref=f2e174]:
                - textbox "yyyy-dd-mm" [ref=f2e175]
                - generic [ref=f2e176] [cursor=pointer]: 
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: To Date
              - generic [ref=f2e183]:
                - textbox "yyyy-dd-mm" [ref=f2e184]
                - generic [ref=f2e185] [cursor=pointer]: 
            - generic [ref=f2e187]:
              - generic [ref=f2e188]: Show Leave with Status*
              - generic [ref=f2e191]:
                - generic [ref=f2e192] [cursor=pointer]:
                  - generic [ref=f2e193]: "-- Select --"
                  - generic [ref=f2e194]: 
                - generic [ref=f2e197]:
                  - text: Pending Approval
                  - generic [ref=f2e198] [cursor=pointer]: 
            - generic [ref=f2e200]:
              - generic [ref=f2e201]: Leave Type
              - generic [ref=f2e204]:
                - generic [ref=f2e205] [cursor=pointer]:
                  - generic [active] [ref=f2e206]: "-- Select --"
                  - generic [ref=f2e207]: 
                - listbox [ref=f2e209]:
                  - option "No Records Found" [ref=f2e210] [cursor=pointer]
          - generic [ref=f2e212]:
            - generic [ref=f2e214]:
              - generic [ref=f2e215]: Employee Name
              - textbox "Type for hints..." [ref=f2e220]
            - generic [ref=f2e222]:
              - generic [ref=f2e223]: Sub Unit
              - generic [ref=f2e227] [cursor=pointer]:
                - generic [ref=f2e228]: "-- Select --"
                - generic [ref=f2e229]: 
            - generic [ref=f2e231]:
              - paragraph [ref=f2e232]: Include Past Employees
              - checkbox [ref=f2e235]
          - separator [ref=f2e237]
          - generic [ref=f2e238]:
            - paragraph [ref=f2e239]: "* Required"
            - button "Reset" [ref=f2e240] [cursor=pointer]
            - button "Search" [ref=f2e241] [cursor=pointer]
      - generic [ref=f2e242]:
        - generic [ref=f2e243]: No Records Found
        - table [ref=f2e246]
    - generic [ref=f2e251]:
      - paragraph [ref=f2e252]: OrangeHRM OS 5.9
      - paragraph [ref=f2e253]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e254] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  216 |   async verifyLeaveListPage(): Promise<void> {
  217 |     await expect(this.leaveListHeading).toBeVisible();
  218 | 
  219 |     await expect(this.fromDateInput).toBeVisible();
  220 | 
  221 |     await expect(this.toDateInput).toBeVisible();
  222 | 
  223 |     await expect(this.leaveStatusDropdown).toBeVisible();
  224 | 
  225 |     await expect(this.employeeNameInput).toBeVisible();
  226 | 
  227 |     await expect(this.leaveTypeDropdown).toBeVisible();
  228 | 
  229 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
  230 | 
  231 |     await expect(this.searchButton).toBeVisible();
  232 | 
  233 |     await expect(this.resetButton).toBeVisible();
  234 | 
  235 |     await expect(this.leaveTable).toBeVisible();
  236 |   }
  237 | 
  238 | async selectLeaveStatus(
  239 |   status: string
  240 | ): Promise<void> {
  241 |   await this.leaveStatusDropdown.click();
  242 | 
  243 |   const dropdown =
  244 |     this.page.locator(
  245 |       '.oxd-select-dropdown:visible'
  246 |     );
  247 | 
  248 |   await expect(dropdown).toBeVisible();
  249 | 
  250 |   const option = dropdown
  251 |     .locator('.oxd-select-option')
  252 |     .filter({
  253 |       hasText: new RegExp(
  254 |         `^\\s*${status}\\s*$`,
  255 |         'i'
  256 |       ),
  257 |     })
  258 |     .first();
  259 | 
  260 |   await expect(option).toBeVisible();
  261 | 
  262 |   await option.click();
  263 | 
  264 |   await expect(
  265 |     this.leaveStatusField.getByText(
  266 |       status,
  267 |       { exact: true }
  268 |     )
  269 |   ).toBeVisible({
  270 |     timeout: 10_000,
  271 |   });
  272 | }
  273 |   async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
  274 |     const isChecked = await this.includePastEmployeesCheckbox.isChecked();
  275 | 
  276 |     if (isChecked !== shouldInclude) {
  277 |       await this.includePastEmployeesLabel.click();
  278 |     }
  279 | 
  280 |     if (shouldInclude) {
  281 |       await expect(this.includePastEmployeesCheckbox).toBeChecked();
  282 |     } else {
  283 |       await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
  284 |     }
  285 |   }
  286 | 
  287 |   async selectFirstAvailableEmployee(partialName: string): Promise<string> {
  288 |     await this.employeeNameInput.fill(partialName);
  289 | 
  290 |     const validOptions = this.autocompleteOptions.filter({
  291 |       hasNotText: /Searching|No Records Found/i,
  292 |     });
  293 | 
  294 |     await expect(validOptions.first()).toBeVisible({
  295 |       timeout: 15_000,
  296 |     });
  297 | 
  298 |     const firstEmployeeOption = validOptions.first();
  299 | 
  300 |     const employeeName = (await firstEmployeeOption.innerText()).trim();
  301 | 
  302 |     await firstEmployeeOption.click();
  303 | 
  304 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  305 | 
  306 |     return employeeName;
  307 |   }
  308 | 
  309 |   async selectFirstAvailableLeaveType(): Promise<string> {
  310 |     await this.leaveTypeDropdown.click();
  311 | 
  312 |     await expect(this.dropdownOptions.first()).toBeVisible();
  313 | 
  314 |     const optionCount = await this.dropdownOptions.count();
  315 | 
> 316 |     expect(optionCount).toBeGreaterThan(1);
      |                         ^ Error: expect(received).toBeGreaterThan(expected)
  317 | 
  318 |     const firstLeaveTypeOption = this.dropdownOptions.nth(1);
  319 | 
  320 |     const leaveType = (await firstLeaveTypeOption.innerText()).trim();
  321 | 
  322 |     await firstLeaveTypeOption.click();
  323 | 
  324 |     await expect(this.leaveTypeDropdown).toContainText(leaveType);
  325 | 
  326 |     return leaveType;
  327 |   }
  328 | 
  329 | //   async removeSelectedLeaveStatus(
  330 | //   status: string
  331 | // ): Promise<void> {
  332 | //   const selectedStatus =
  333 | //     this.leaveStatusDropdown.locator(
  334 | //       '.oxd-select-text-selected'
  335 | //     ).filter({
  336 | //       hasText: status,
  337 | //     });
  338 | 
  339 | //   await expect(
  340 | //     selectedStatus
  341 | //   ).toBeVisible();
  342 | 
  343 | //   await selectedStatus
  344 | //     .locator('.oxd-select-text--close')
  345 | //     .click();
  346 | 
  347 | //   await expect(
  348 | //     selectedStatus
  349 | //   ).toHaveCount(0);
  350 | // }
  351 | 
  352 | async getVisibleLeaveRecords():
  353 | Promise<string[]> {
  354 |   await expect(
  355 |     this.loadingSpinner
  356 |   ).toBeHidden();
  357 | 
  358 |   return this.leaveRows.allInnerTexts();
  359 | }
  360 | 
  361 | async waitForDefaultDateRange(): Promise<{
  362 |   fromDate: string;
  363 |   toDate: string;
  364 | }> {
  365 |   await expect(
  366 |     this.fromDateInput
  367 |   ).toBeVisible();
  368 | 
  369 |   await expect(
  370 |     this.toDateInput
  371 |   ).toBeVisible();
  372 | 
  373 |   await expect
  374 |     .poll(
  375 |       async () =>
  376 |         (
  377 |           await this.fromDateInput
  378 |             .inputValue()
  379 |         ).trim(),
  380 |       {
  381 |         timeout: 20_000,
  382 |         message:
  383 |           'Waiting for From Date to be populated',
  384 |       }
  385 |     )
  386 |     .not.toBe('');
  387 | 
  388 |   await expect
  389 |     .poll(
  390 |       async () =>
  391 |         (
  392 |           await this.toDateInput
  393 |             .inputValue()
  394 |         ).trim(),
  395 |       {
  396 |         timeout: 20_000,
  397 |         message:
  398 |           'Waiting for To Date to be populated',
  399 |       }
  400 |     )
  401 |     .not.toBe('');
  402 | 
  403 |   const fromDate = (
  404 |     await this.fromDateInput.inputValue()
  405 |   ).trim();
  406 | 
  407 |   const toDate = (
  408 |     await this.toDateInput.inputValue()
  409 |   ).trim();
  410 | 
  411 |   return {
  412 |     fromDate,
  413 |     toDate,
  414 |   };
  415 | }
  416 | 
```