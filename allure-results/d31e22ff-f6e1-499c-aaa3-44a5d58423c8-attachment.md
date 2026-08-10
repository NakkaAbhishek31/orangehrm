# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression
- Location: tests\PIM\pim-employee.spec.ts:82:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: 'ERSYDW4EK9' }).locator('.oxd-table-cell').nth(2)

```

# Page snapshot

```yaml
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
              - paragraph [ref=f5e127]: mandaa t
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
              - textbox [ref=f5e173]: ERSYDW4EK9
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
```

# Test source

```ts
  319 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  320 |     await this.firstnameInput.fill(details.firstName);
  321 | 
  322 |     if (details.middleName !== undefined) {
  323 |       await this.middlenameInput.fill(details.middleName);
  324 |     }
  325 | 
  326 |     await this.lastnameInput.fill(details.lastName);
  327 | 
  328 |     // Always use a unique ID unless the test provides one.
  329 |     const employeeId = details.employeeId ?? this.generateUniqueEmployeeId();
  330 | 
  331 |     await this.employeeID.fill(employeeId);
  332 |     await this.employeeID.blur();
  333 | 
  334 |     await expect(this.employeeID).toHaveValue(employeeId);
  335 | 
  336 |     // Upload an optional profile picture.
  337 |     if (details.profilePicturePath !== undefined) {
  338 |       const originalImageSource =
  339 |         await this.profilePicturePreview.getAttribute("src");
  340 | 
  341 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  342 | 
  343 |       await expect
  344 |         .poll(async () => this.profilePicturePreview.getAttribute("src"), {
  345 |           timeout: 10_000,
  346 |           message: "Waiting for profile picture preview",
  347 |         })
  348 |         .not.toBe(originalImageSource);
  349 |     }
  350 | 
  351 |     // Save and wait for the Personal Details page.
  352 |     await Promise.all([
  353 |       this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  354 |         timeout: 30_000,
  355 |       }),
  356 |       this.SaveEmployeeButton.click(),
  357 |     ]);
  358 | 
  359 |     await expect(this.personalDetailsHeading).toBeVisible({
  360 |       timeout: 20_000,
  361 |     });
  362 | 
  363 |     await expect(this.loadingSpinner).toBeHidden({
  364 |       timeout: 20_000,
  365 |     });
  366 | 
  367 |     // Verify the saved employee data.
  368 |     await expect(this.firstnameInput).toHaveValue(details.firstName, {
  369 |       timeout: 20_000,
  370 |     });
  371 | 
  372 |     await expect(this.lastnameInput).toHaveValue(details.lastName, {
  373 |       timeout: 20_000,
  374 |     });
  375 | 
  376 |     if (details.middleName !== undefined) {
  377 |       await expect(this.middlenameInput).toHaveValue(details.middleName, {
  378 |         timeout: 20_000,
  379 |       });
  380 |     }
  381 | 
  382 |     await expect(this.employeeID).toHaveValue(employeeId);
  383 | 
  384 |     return employeeId;
  385 |   }
  386 |   async gotoEmployeeList(): Promise<void> {
  387 |     await this.employeeListLink.click();
  388 |   }
  389 | 
  390 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  391 |     if (filters.employeeId !== undefined) {
  392 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  393 |     }
  394 | 
  395 |     if (filters.employeeName !== undefined) {
  396 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  397 | 
  398 |       const matchingOption = this.autocompleteOptions
  399 |         .filter({ hasText: filters.employeeName })
  400 |         .first();
  401 | 
  402 |       await expect(matchingOption).toBeVisible();
  403 |       await matchingOption.click();
  404 |     }
  405 |   }
  406 | 
  407 |   async clickOnFilterSearch(): Promise<void> {
  408 |     await this.filterSearchButton.click();
  409 |   }
  410 | 
  411 |   async verifyEmployeeSearchResult(
  412 |     employeeId: string,
  413 |     firstName: string,
  414 |     lastName: string,
  415 |   ): Promise<void> {
  416 |     await expect(this.loadingSpinner).toBeHidden();
  417 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  418 |     const cells = matchingRow.locator(".oxd-table-cell");
> 419 |     const fullName = await cells.nth(2).innerText();
      |                                         ^ Error: locator.innerText: Test timeout of 60000ms exceeded.
  420 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  421 |     await expect(cells.nth(1)).toHaveText(employeeId);
  422 |     expect(actualFirstName).toBe(firstName);
  423 |     await expect(cells.nth(3)).toHaveText(lastName);
  424 |     await expect(this.noRecordsFound).not.toBeVisible();
  425 |   }
  426 | 
  427 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  428 |     await expect(this.loadingSpinner).toBeHidden();
  429 | 
  430 |     await expect(this.noRecordsFound).toBeVisible();
  431 |     await expect(this.employeeRows).toHaveCount(0);
  432 | 
  433 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  434 |   }
  435 | 
  436 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  437 |     await expect(this.personalDetailsHeading).toBeVisible();
  438 |     //await expect(this.loadingSpinner).toBeHidden();
  439 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  440 | 
  441 |     if (details.middleName !== undefined) {
  442 |       await this.middlenameInput.fill(details.middleName);
  443 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  444 |     }
  445 | 
  446 |     if (details.lastName !== undefined) {
  447 |       await this.lastnameInput.fill(details.lastName);
  448 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  449 |     }
  450 | 
  451 |     const updateResponse = this.page.waitForResponse(
  452 |       (response) =>
  453 |         response.url().includes("/personal-details") &&
  454 |         response.request().method() === "PUT" &&
  455 |         response.ok(),
  456 |       { timeout: 20_000 },
  457 |     );
  458 | 
  459 |     await this.personalDetailsSaveButton.click();
  460 |     await updateResponse;
  461 | 
  462 |     await expect(this.successToast).toContainText("Successfully Updated");
  463 | 
  464 |     //await expect(this.loadingSpinner).toBeHidden();
  465 | 
  466 |     if (details.middleName !== undefined) {
  467 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  468 |     }
  469 | 
  470 |     if (details.lastName !== undefined) {
  471 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  472 |     }
  473 |   }
  474 |   //deleting the Records
  475 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  476 |     await expect(this.loadingSpinner).toBeHidden();
  477 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  478 |     await expect(matchingRow).toHaveCount(1);
  479 |     const deleteButton = matchingRow.locator("button").filter({
  480 |       has: this.page.locator("i.bi-trash"),
  481 |     });
  482 |     await deleteButton.click();
  483 | 
  484 |     const confirmationDilaog = this.page.getByRole("dialog");
  485 |     await expect(confirmationDilaog).toBeVisible();
  486 |     const deleteResponse = this.page.waitForResponse(
  487 |       (response) =>
  488 |         response.url().includes("/api/v2/pim/employees") &&
  489 |         response.request().method() === "DELETE" &&
  490 |         response.ok(),
  491 |       { timeout: 20_000 },
  492 |     );
  493 | 
  494 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  495 | 
  496 |     await deleteResponse;
  497 | 
  498 |     await expect(this.successToast).toContainText("Successfully Deleted");
  499 | 
  500 |     await expect(matchingRow).toHaveCount(0);
  501 |   }
  502 | 
  503 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  504 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  505 | 
  506 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  507 |       timeout: 20_000,
  508 |     });
  509 | 
  510 |     await expect(this.profilePictureValidation).toBeVisible();
  511 | 
  512 |     await expect(this.profilePictureValidation).toContainText(
  513 |       "File type not allowed",
  514 |     );
  515 |   }
  516 | 
  517 |   async getVisibleEmployeeIds(): Promise<string[]> {
  518 |     await expect(this.employeeRows.first()).toBeVisible({
  519 |       timeout: 15_000,
```