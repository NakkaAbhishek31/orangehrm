# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_075 - ID and name belonging to different employees should return no records @negative @search @regression
- Location: tests\Admin\admin-users.spec.ts:985:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 120000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f7e3]:
  - generic:
    - complementary [ref=f7e4]:
      - navigation "Sidepanel" [ref=f7e5]:
        - generic [ref=f7e6]:
          - link [ref=f7e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f7e9]
          - text: 
        - generic [ref=f7e10]:
          - generic [ref=f7e11]:
            - generic [ref=f7e12]:
              - textbox "Search" [ref=f7e15]
              - button "" [ref=f7e16] [cursor=pointer]
            - separator [ref=f7e18]
          - list [ref=f7e19]:
            - listitem [ref=f7e20]:
              - link "Admin" [ref=f7e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f7e25]:
              - link "PIM" [ref=f7e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f7e41]:
              - link "Leave" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f7e46]:
              - link "Time" [ref=f7e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f7e54]:
              - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f7e62]:
              - link "My Info" [ref=f7e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e70]:
              - link "Performance" [ref=f7e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e80]:
              - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e85]:
              - link "Directory" [ref=f7e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e90]:
              - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f7e96]:
              - link "Claim" [ref=f7e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e105]:
              - link "Buzz" [ref=f7e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e110]:
      - generic [ref=f7e111]:
        - generic [ref=f7e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f7e114]
        - link [ref=f7e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f7e117] [cursor=pointer]
        - list [ref=f7e123]:
          - listitem [ref=f7e124]:
            - generic [ref=f7e125] [cursor=pointer]:
              - img "profile picture" [ref=f7e126]
              - paragraph [ref=f7e127]: manda user
              - generic [ref=f7e128]: 
      - navigation "Topbar Menu" [ref=f7e130]:
        - list [ref=f7e131]:
          - listitem [ref=f7e132] [cursor=pointer]:
            - generic [ref=f7e133]:
              - text: Configuration
              - generic [ref=f7e134]: 
          - listitem [ref=f7e135] [cursor=pointer]:
            - link "Employee List" [ref=f7e136]:
              - /url: "#"
          - listitem [ref=f7e137] [cursor=pointer]:
            - link "Add Employee" [ref=f7e138]:
              - /url: "#"
          - listitem [ref=f7e139] [cursor=pointer]:
            - link "Reports" [ref=f7e140]:
              - /url: "#"
          - button "" [ref=f7e142] [cursor=pointer]
  - generic [ref=f7e144]:
    - generic [ref=f7e146]:
      - generic [ref=f7e147]:
        - generic [ref=f7e148]:
          - heading "Employee Information" [level=5] [ref=f7e150]
          - button "" [ref=f7e153] [cursor=pointer]
        - separator [ref=f7e155]
        - generic [ref=f7e157]:
          - generic [ref=f7e159]:
            - generic [ref=f7e161]:
              - generic [ref=f7e162]: Employee Name
              - textbox "Type for hints..." [ref=f7e167]
            - generic [ref=f7e169]:
              - generic [ref=f7e170]: Employee Id
              - textbox [ref=f7e173]: "184730317"
            - generic [ref=f7e175]:
              - generic [ref=f7e176]: Employment Status
              - generic [ref=f7e180] [cursor=pointer]:
                - generic [ref=f7e181]: "-- Select --"
                - generic [ref=f7e182]: 
            - generic [ref=f7e185]:
              - generic [ref=f7e186]: Include
              - generic [ref=f7e190] [cursor=pointer]:
                - generic [ref=f7e191]: Current Employees Only
                - generic [ref=f7e192]: 
            - generic [ref=f7e195]:
              - generic [ref=f7e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f7e201]
            - generic [ref=f7e203]:
              - generic [ref=f7e204]: Job Title
              - generic [ref=f7e208] [cursor=pointer]:
                - generic [ref=f7e209]: "-- Select --"
                - generic [ref=f7e210]: 
            - generic [ref=f7e213]:
              - generic [ref=f7e214]: Sub Unit
              - generic [ref=f7e218] [cursor=pointer]:
                - generic [ref=f7e219]: "-- Select --"
                - generic [ref=f7e220]: 
          - separator [ref=f7e222]
          - generic [ref=f7e223]:
            - button "Reset" [ref=f7e224] [cursor=pointer]
            - button "Search" [active] [ref=f7e225] [cursor=pointer]
      - generic [ref=f7e226]:
        - button " Add" [ref=f7e228] [cursor=pointer]:
          - generic [ref=f7e229]: 
          - text: Add
        - table [ref=f7e231]
        - navigation "Pagination Navigation" [ref=f7e236]:
          - list [ref=f7e237]:
            - listitem [ref=f7e238]:
              - button "1" [ref=f7e239] [cursor=pointer]
            - listitem [ref=f7e240]:
              - button "2" [ref=f7e241] [cursor=pointer]
            - listitem [ref=f7e242]:
              - button "3" [ref=f7e243] [cursor=pointer]
            - listitem [ref=f7e244]:
              - button "" [ref=f7e245] [cursor=pointer]
    - generic [ref=f7e247]:
      - paragraph [ref=f7e248]: OrangeHRM OS 5.9
      - paragraph [ref=f7e249]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e250] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
      |                                            ^ Error: page.waitForResponse: Test timeout of 120000ms exceeded.
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