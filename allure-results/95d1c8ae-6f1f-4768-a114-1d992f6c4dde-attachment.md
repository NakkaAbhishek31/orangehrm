# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_074 - Employee should remain after deletion is cancelled @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:967:7

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic:
      - complementary [ref=f5e4]:
        - navigation "Sidepanel" [ref=f5e5]:
          - generic [ref=f5e6]:
            - link [ref=f5e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f5e9]
            - text: 
          - generic [ref=f5e10]:
            - generic [ref=f5e11]:
              - generic [ref=f5e12]:
                - textbox "Search" [ref=f5e15]
                - button "" [ref=f5e16] [cursor=pointer]
              - separator [ref=f5e18]
            - list [ref=f5e19]:
              - listitem [ref=f5e20]:
                - link "Admin" [ref=f5e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f5e25]:
                - link "PIM" [ref=f5e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f5e41]:
                - link "Leave" [ref=f5e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f5e46]:
                - link "Time" [ref=f5e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f5e54]:
                - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f5e62]:
                - link "My Info" [ref=f5e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f5e70]:
                - link "Performance" [ref=f5e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f5e80]:
                - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f5e85]:
                - link "Directory" [ref=f5e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f5e90]:
                - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f5e96]:
                - link "Claim" [ref=f5e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f5e105]:
                - link "Buzz" [ref=f5e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f5e110]:
        - generic [ref=f5e111]:
          - generic [ref=f5e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f5e114]
          - link [ref=f5e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f5e117] [cursor=pointer]
          - list [ref=f5e123]:
            - listitem [ref=f5e124]:
              - generic [ref=f5e125] [cursor=pointer]:
                - img "profile picture" [ref=f5e126]
                - paragraph [ref=f5e127]: lPUQEuubtM user
                - generic [ref=f5e128]: 
        - navigation "Topbar Menu" [ref=f5e130]:
          - list [ref=f5e131]:
            - listitem [ref=f5e132] [cursor=pointer]:
              - generic [ref=f5e133]:
                - text: Configuration
                - generic [ref=f5e134]: 
            - listitem [ref=f5e135] [cursor=pointer]:
              - link "Employee List" [ref=f5e136]:
                - /url: "#"
            - listitem [ref=f5e137] [cursor=pointer]:
              - link "Add Employee" [ref=f5e138]:
                - /url: "#"
            - listitem [ref=f5e139] [cursor=pointer]:
              - link "Reports" [ref=f5e140]:
                - /url: "#"
            - button "" [ref=f5e142] [cursor=pointer]
    - generic [ref=f5e144]:
      - generic [ref=f5e146]:
        - generic [ref=f5e147]:
          - generic [ref=f5e148]:
            - heading "Employee Information" [level=5] [ref=f5e150]
            - button "" [ref=f5e153] [cursor=pointer]
          - separator [ref=f5e155]
          - generic [ref=f5e157]:
            - generic [ref=f5e159]:
              - generic [ref=f5e161]:
                - generic [ref=f5e162]: Employee Name
                - textbox "Type for hints..." [ref=f5e167]
              - generic [ref=f5e169]:
                - generic [ref=f5e170]: Employee Id
                - textbox [ref=f5e173]: "379211942"
              - generic [ref=f5e175]:
                - generic [ref=f5e176]: Employment Status
                - generic [ref=f5e180] [cursor=pointer]:
                  - generic [ref=f5e181]: "-- Select --"
                  - generic [ref=f5e182]: 
              - generic [ref=f5e185]:
                - generic [ref=f5e186]: Include
                - generic [ref=f5e190] [cursor=pointer]:
                  - generic [ref=f5e191]: Current Employees Only
                  - generic [ref=f5e192]: 
              - generic [ref=f5e195]:
                - generic [ref=f5e196]: Supervisor Name
                - textbox "Type for hints..." [ref=f5e201]
              - generic [ref=f5e203]:
                - generic [ref=f5e204]: Job Title
                - generic [ref=f5e208] [cursor=pointer]:
                  - generic [ref=f5e209]: "-- Select --"
                  - generic [ref=f5e210]: 
              - generic [ref=f5e213]:
                - generic [ref=f5e214]: Sub Unit
                - generic [ref=f5e218] [cursor=pointer]:
                  - generic [ref=f5e219]: "-- Select --"
                  - generic [ref=f5e220]: 
            - separator [ref=f5e222]
            - generic [ref=f5e223]:
              - button "Reset" [ref=f5e224] [cursor=pointer]
              - button "Search" [active] [ref=f5e225] [cursor=pointer]
        - generic [ref=f5e226]:
          - button " Add" [ref=f5e228] [cursor=pointer]:
            - generic [ref=f5e229]: 
            - text: Add
          - generic [ref=f5e230]:
            - separator [ref=f5e231]
            - generic [ref=f5e232]: No Records Found
          - table [ref=f5e235]:
            - rowgroup [ref=f5e236]:
              - row [ref=f5e237]:
                - columnheader "" [ref=f5e238]:
                  - generic [ref=f5e240] [cursor=pointer]:
                    - checkbox "" [ref=f5e241]
                    - generic [ref=f5e242]: 
                - columnheader "Id " [ref=f5e244]:
                  - text: Id
                  - generic [ref=f5e245]:
                    - generic [ref=f5e246] [cursor=pointer]: 
                    - text:  
                - columnheader "First (& Middle) Name " [ref=f5e247]:
                  - text: First (& Middle) Name
                  - generic [ref=f5e248]:
                    - generic [ref=f5e249] [cursor=pointer]: 
                    - text:  
                - columnheader "Last Name " [ref=f5e250]:
                  - text: Last Name
                  - generic [ref=f5e251]:
                    - generic [ref=f5e252] [cursor=pointer]: 
                    - text:  
                - columnheader "Job Title " [ref=f5e253]:
                  - text: Job Title
                  - generic [ref=f5e254]:
                    - generic [ref=f5e255] [cursor=pointer]: 
                    - text:  
                - columnheader "Employment Status " [ref=f5e256]:
                  - text: Employment Status
                  - generic [ref=f5e257]:
                    - generic [ref=f5e258] [cursor=pointer]: 
                    - text:  
                - columnheader "Sub Unit " [ref=f5e259]:
                  - text: Sub Unit
                  - generic [ref=f5e260]:
                    - generic [ref=f5e261] [cursor=pointer]: 
                    - text:  
                - columnheader "Supervisor " [ref=f5e262]:
                  - text: Supervisor
                  - generic [ref=f5e263]:
                    - generic [ref=f5e264] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f5e265]
            - rowgroup
      - generic [ref=f5e267]:
        - paragraph [ref=f5e268]: OrangeHRM OS 5.9
        - paragraph [ref=f5e269]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f5e270] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f5e271]:
    - generic [ref=f5e272] [cursor=pointer]:
      - generic [ref=f5e273]:
        - generic [ref=f5e274]: 
        - generic [ref=f5e277]:
          - paragraph [ref=f5e278]: Error
          - paragraph [ref=f5e279]: Unexpected Error!
      - button "×" [ref=f5e281]
    - generic [ref=f5e282] [cursor=pointer]:
      - generic [ref=f5e283]:
        - generic [ref=f5e284]: 
        - generic [ref=f5e287]:
          - paragraph [ref=f5e288]: Error
          - paragraph [ref=f5e289]: Unexpected Error!
      - button "×" [ref=f5e291]
    - generic [ref=f5e292] [cursor=pointer]:
      - generic [ref=f5e293]:
        - generic [ref=f5e294]: 
        - generic [ref=f5e297]:
          - paragraph [ref=f5e298]: Error
          - paragraph [ref=f5e299]: Unexpected Error!
      - button "×" [ref=f5e301]
    - generic [ref=f5e302] [cursor=pointer]:
      - generic [ref=f5e303]:
        - generic [ref=f5e304]: 
        - generic [ref=f5e307]:
          - paragraph [ref=f5e308]: Error
          - paragraph [ref=f5e309]: Unexpected Error!
      - button "×" [ref=f5e311]
```

# Test source

```ts
  329 | 
  330 |   //   return employeeId;
  331 |   // }
  332 |   // async addEmployee(employee: EmployeeData): Promise<string> {
  333 |   //   await this.firstnameInput.fill(employee.firstName);
  334 | 
  335 |   //   if (employee.middleName) {
  336 |   //     await this.middlenameInput.fill(employee.middleName);
  337 |   //   }
  338 | 
  339 |   //   await this.lastnameInput.fill(employee.lastName);
  340 | 
  341 |   //   /*
  342 |   //    * OrangeHRM generates the same next ID when multiple workers
  343 |   //    * open Add Employee simultaneously. Override it with a unique ID.
  344 |   //    */
  345 |   //   const employeeId =
  346 |   //     employee.employeeId ??
  347 |   //     `${Date.now().toString().slice(-6)}${Math.floor(
  348 |   //       Math.random() * 1000
  349 |   //     )
  350 |   //       .toString()
  351 |   //       .padStart(3, "0")}`;
  352 | 
  353 |   //   await this.employeeID.fill(employeeId);
  354 | 
  355 |   //   await this.SaveEmployeeButton.click();
  356 | 
  357 |   //   await expect(this.page).toHaveURL(
  358 |   //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  359 |   //     {
  360 |   //       timeout: 30_000,
  361 |   //     }
  362 |   //   );
  363 | 
  364 |   //   await expect(this.personalDetailsHeading).toBeVisible({
  365 |   //     timeout: 15_000,
  366 |   //   });
  367 | 
  368 |   //   return employeeId;
  369 |   // }
  370 | 
  371 |   async addEmployee(data: EmployeeData): Promise<string> {
  372 |     await this.firstnameInput.fill(data.firstName);
  373 | 
  374 |     if (data.middleName !== undefined) {
  375 |       await this.middlenameInput.fill(data.middleName);
  376 |     }
  377 | 
  378 |     await this.lastnameInput.fill(data.lastName);
  379 | 
  380 |     const employeeId =
  381 |       data.employeeId ??
  382 |       `${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 10)}`;
  383 |     await this.employeeID.fill(employeeId);
  384 | 
  385 |     if (data.profilePicturePath) {
  386 |       await this.profilePictureInput.setInputFiles(data.profilePicturePath);
  387 |     }
  388 | 
  389 |     const createEmployeeResponse = this.page.waitForResponse(
  390 |       (response) =>
  391 |         response.url().includes("/api/v2/pim/employees") &&
  392 |         response.request().method() === "POST" &&
  393 |         response.ok(),
  394 |       { timeout: 20_000 },
  395 |     );
  396 | 
  397 |     await this.SaveEmployeeButton.click();
  398 |     await createEmployeeResponse;
  399 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  400 |       timeout: 20_000,
  401 |     });
  402 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  403 | 
  404 |     return employeeId;
  405 |   }
  406 | 
  407 |   async gotoEmployeeList(): Promise<void> {
  408 |     await this.employeeListLink.click();
  409 |   }
  410 | 
  411 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  412 |     if (filters.employeeId !== undefined) {
  413 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  414 |     }
  415 | 
  416 |     if (filters.employeeName !== undefined) {
  417 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  418 | 
  419 |       const matchingOption = this.autocompleteOptions
  420 |         .filter({ hasText: filters.employeeName })
  421 |         .first();
  422 | 
  423 |       await expect(matchingOption).toBeVisible();
  424 |       await matchingOption.click();
  425 |     }
  426 |   }
  427 | 
  428 |   async clickOnFilterSearch(): Promise<void> {
> 429 |     const employeeListResponse = this.page.waitForResponse(
      |                                            ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  430 |       (response) =>
  431 |         response.url().includes("/api/v2/pim/employees") &&
  432 |         response.request().method() === "GET" &&
  433 |         response.ok(),
  434 |       { timeout: 20_000 },
  435 |     );
  436 | 
  437 |     await this.filterSearchButton.click();
  438 |     await employeeListResponse;
  439 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  440 |   }
  441 | 
  442 |   async verifyEmployeeSearchResult(
  443 |     employeeId: string,
  444 |     firstName: string,
  445 |     lastName: string,
  446 |   ): Promise<void> {
  447 |     await expect(this.loadingSpinner).toBeHidden();
  448 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  449 |     const cells = matchingRow.locator(".oxd-table-cell");
  450 |     const fullName = await cells.nth(2).innerText();
  451 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  452 |     await expect(cells.nth(1)).toHaveText(employeeId);
  453 |     expect(actualFirstName).toBe(firstName);
  454 |     await expect(cells.nth(3)).toHaveText(lastName);
  455 |     await expect(this.noRecordsFound).not.toBeVisible();
  456 |   }
  457 | 
  458 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  459 |     await expect(this.loadingSpinner).toBeHidden({
  460 |       timeout: 15_000,
  461 |     });
  462 | 
  463 |     await expect(this.employeeRows).toHaveCount(0, {
  464 |       timeout: 15_000,
  465 |     });
  466 | 
  467 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  468 |   }
  469 | 
  470 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  471 |     await expect(this.personalDetailsHeading).toBeVisible();
  472 |     await expect(this.loadingSpinner).toBeHidden();
  473 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  474 | 
  475 |     if (details.middleName !== undefined) {
  476 |       await this.middlenameInput.fill(details.middleName);
  477 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  478 |     }
  479 | 
  480 |     if (details.lastName !== undefined) {
  481 |       await this.lastnameInput.fill(details.lastName);
  482 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  483 |     }
  484 | 
  485 |     const updateResponse = this.page.waitForResponse(
  486 |       (response) =>
  487 |         response.url().includes("/personal-details") &&
  488 |         response.request().method() === "PUT" &&
  489 |         response.ok(),
  490 |       { timeout: 20_000 },
  491 |     );
  492 | 
  493 |     await this.personalDetailsSaveButton.click();
  494 |     await updateResponse;
  495 | 
  496 |     await expect(this.successToast).toContainText("Successfully Updated");
  497 | 
  498 |     await expect(this.loadingSpinner).toBeHidden();
  499 | 
  500 |     if (details.middleName !== undefined) {
  501 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  502 |     }
  503 | 
  504 |     if (details.lastName !== undefined) {
  505 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  506 |     }
  507 |   }
  508 |   //deleting the Records
  509 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  510 |     await expect(this.loadingSpinner).toBeHidden();
  511 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  512 |     await expect(matchingRow).toHaveCount(1);
  513 |     const deleteButton = matchingRow.locator("button").filter({
  514 |       has: this.page.locator("i.bi-trash"),
  515 |     });
  516 |     await deleteButton.click();
  517 | 
  518 |     const confirmationDilaog = this.page.getByRole("dialog");
  519 |     await expect(confirmationDilaog).toBeVisible();
  520 |     const deleteResponse = this.page.waitForResponse(
  521 |       (response) =>
  522 |         response.url().includes("/api/v2/pim/employees") &&
  523 |         response.request().method() === "DELETE" &&
  524 |         response.ok(),
  525 |       { timeout: 20_000 },
  526 |     );
  527 | 
  528 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  529 | 
```