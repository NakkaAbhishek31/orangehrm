# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_037 - Admin should cancel employee deletion @negative @delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:221:7

# Error details

```
TimeoutError: locator.innerText: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: '2327' }).locator('.oxd-table-cell').nth(2)

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: mandatest user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: "2327"
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: No Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup
    - generic [ref=f4e267]:
      - paragraph [ref=f4e268]: OrangeHRM OS 5.9
      - paragraph [ref=f4e269]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e270] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  333 | 
  334 |   //   return employeeId;
  335 |   // }
  336 | // async addEmployee(employee: EmployeeData): Promise<string> {
  337 | //   await this.firstnameInput.fill(employee.firstName);
  338 | 
  339 | //   if (employee.middleName) {
  340 | //     await this.middlenameInput.fill(employee.middleName);
  341 | //   }
  342 | 
  343 | //   await this.lastnameInput.fill(employee.lastName);
  344 | 
  345 | //   /*
  346 | //    * OrangeHRM generates the same next ID when multiple workers
  347 | //    * open Add Employee simultaneously. Override it with a unique ID.
  348 | //    */
  349 | //   const employeeId =
  350 | //     employee.employeeId ??
  351 | //     `${Date.now().toString().slice(-6)}${Math.floor(
  352 | //       Math.random() * 1000
  353 | //     )
  354 | //       .toString()
  355 | //       .padStart(3, "0")}`;
  356 | 
  357 | //   await this.employeeID.fill(employeeId);
  358 | 
  359 | //   await this.SaveEmployeeButton.click();
  360 | 
  361 | //   await expect(this.page).toHaveURL(
  362 | //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  363 | //     {
  364 | //       timeout: 30_000,
  365 | //     }
  366 | //   );
  367 | 
  368 | //   await expect(this.personalDetailsHeading).toBeVisible({
  369 | //     timeout: 15_000,
  370 | //   });
  371 | 
  372 | //   return employeeId;
  373 | // }
  374 | 
  375 | 
  376 | async addEmployee(data: EmployeeData): Promise<string> {
  377 |   await this.firstnameInput.fill(data.firstName);
  378 | 
  379 |   if (data.middleName !== undefined) {
  380 |     await this.middlenameInput.fill(data.middleName);
  381 |   }
  382 | 
  383 |   await this.lastnameInput.fill(data.lastName);
  384 | 
  385 |   if (data.employeeId !== undefined) {
  386 |     await this.employeeID.fill(data.employeeId);
  387 |   }
  388 | 
  389 |   if (data.profilePicturePath) {
  390 |     await this.profilePictureInput.setInputFiles(
  391 |       data.profilePicturePath,
  392 |     );
  393 |   }
  394 | 
  395 |   await this.SaveEmployeeButton.click();
  396 | 
  397 |   return await this.employeeID.inputValue();
  398 | }
  399 | 
  400 |   async gotoEmployeeList(): Promise<void> {
  401 |     await this.employeeListLink.click();
  402 |   }
  403 | 
  404 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  405 |     if (filters.employeeId !== undefined) {
  406 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  407 |     }
  408 | 
  409 |     if (filters.employeeName !== undefined) {
  410 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  411 | 
  412 |       const matchingOption = this.autocompleteOptions
  413 |         .filter({ hasText: filters.employeeName })
  414 |         .first();
  415 | 
  416 |       await expect(matchingOption).toBeVisible();
  417 |       await matchingOption.click();
  418 |     }
  419 |   }
  420 | 
  421 |   async clickOnFilterSearch(): Promise<void> {
  422 |     await this.filterSearchButton.click();
  423 |   }
  424 | 
  425 |   async verifyEmployeeSearchResult(
  426 |     employeeId: string,
  427 |     firstName: string,
  428 |     lastName: string,
  429 |   ): Promise<void> {
  430 |     await expect(this.loadingSpinner).toBeHidden();
  431 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  432 |     const cells = matchingRow.locator(".oxd-table-cell");
> 433 |     const fullName = await cells.nth(2).innerText();
      |                                         ^ TimeoutError: locator.innerText: Timeout 30000ms exceeded.
  434 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  435 |     await expect(cells.nth(1)).toHaveText(employeeId);
  436 |     expect(actualFirstName).toBe(firstName);
  437 |     await expect(cells.nth(3)).toHaveText(lastName);
  438 |     await expect(this.noRecordsFound).not.toBeVisible();
  439 |   }
  440 | 
  441 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  442 |   await expect(this.loadingSpinner).toBeHidden({
  443 |     timeout: 15_000,
  444 |   });
  445 | 
  446 |   await expect(this.employeeRows).toHaveCount(0, {
  447 |     timeout: 15_000,
  448 |   });
  449 | 
  450 |   await expect(this.employeeIdFilterInput).toHaveValue(
  451 |     employeeId
  452 |   );
  453 | }
  454 | 
  455 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  456 |     await expect(this.personalDetailsHeading).toBeVisible();
  457 |     //await expect(this.loadingSpinner).toBeHidden();
  458 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  459 | 
  460 |     if (details.middleName !== undefined) {
  461 |       await this.middlenameInput.fill(details.middleName);
  462 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  463 |     }
  464 | 
  465 |     if (details.lastName !== undefined) {
  466 |       await this.lastnameInput.fill(details.lastName);
  467 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  468 |     }
  469 | 
  470 |     const updateResponse = this.page.waitForResponse(
  471 |       (response) =>
  472 |         response.url().includes("/personal-details") &&
  473 |         response.request().method() === "PUT" &&
  474 |         response.ok(),
  475 |       { timeout: 20_000 },
  476 |     );
  477 | 
  478 |     await this.personalDetailsSaveButton.click();
  479 |     await updateResponse;
  480 | 
  481 |     await expect(this.successToast).toContainText("Successfully Updated");
  482 | 
  483 |     //await expect(this.loadingSpinner).toBeHidden();
  484 | 
  485 |     if (details.middleName !== undefined) {
  486 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  487 |     }
  488 | 
  489 |     if (details.lastName !== undefined) {
  490 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  491 |     }
  492 |   }
  493 |   //deleting the Records
  494 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  495 |     await expect(this.loadingSpinner).toBeHidden();
  496 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  497 |     await expect(matchingRow).toHaveCount(1);
  498 |     const deleteButton = matchingRow.locator("button").filter({
  499 |       has: this.page.locator("i.bi-trash"),
  500 |     });
  501 |     await deleteButton.click();
  502 | 
  503 |     const confirmationDilaog = this.page.getByRole("dialog");
  504 |     await expect(confirmationDilaog).toBeVisible();
  505 |     const deleteResponse = this.page.waitForResponse(
  506 |       (response) =>
  507 |         response.url().includes("/api/v2/pim/employees") &&
  508 |         response.request().method() === "DELETE" &&
  509 |         response.ok(),
  510 |       { timeout: 20_000 },
  511 |     );
  512 | 
  513 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  514 | 
  515 |     await deleteResponse;
  516 | 
  517 |     await expect(this.successToast).toContainText("Successfully Deleted");
  518 | 
  519 |     await expect(matchingRow).toHaveCount(0);
  520 |   }
  521 | 
  522 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  523 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  524 | 
  525 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  526 |       timeout: 20_000,
  527 |     });
  528 | 
  529 |     await expect(this.profilePictureValidation).toBeVisible();
  530 | 
  531 |     await expect(this.profilePictureValidation).toContainText(
  532 |       "File type not allowed",
  533 |     );
```