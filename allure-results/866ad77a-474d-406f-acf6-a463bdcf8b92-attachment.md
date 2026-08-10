# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_074 - Employee should remain after deletion is cancelled @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:2500:6

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('.oxd-loading-spinner').first()
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" with timeout 10000ms
  - waiting for locator('.oxd-loading-spinner').first()
    23 × locator resolved to <div data-v-a6dfc6a9="" class="oxd-loading-spinner"></div>
       - unexpected value "visible"

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
              - paragraph [ref=f5e127]: George Russell
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
              - textbox [ref=f5e173]: "159616969"
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
        - table [ref=f5e231]
    - generic [ref=f5e236]:
      - paragraph [ref=f5e237]: OrangeHRM OS 5.9
      - paragraph [ref=f5e238]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e239] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  302 |   //   if (details.profilePicturePath !== undefined) {
  303 |   //     const defaultImageSrc =
  304 |   //       await this.profilePicturePreview.getAttribute("src");
  305 | 
  306 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  307 | 
  308 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  309 |   //       "src",
  310 |   //       defaultImageSrc ?? "",
  311 |   //     );
  312 |   //   }
  313 | 
  314 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  315 |   //     (response) =>
  316 |   //       response.url().includes("/personal-details") &&
  317 |   //       response.request().method() === "GET" &&
  318 |   //       response.ok(),
  319 |   //     { timeout: 20_000 },
  320 |   //   );
  321 | 
  322 |   //   await this.SaveEmployeeButton.click();
  323 | 
  324 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  325 |   //     timeout: 20_000,
  326 |   //   });
  327 | 
  328 |   //   await personalDetailsLoaded;
  329 |   //   await expect(this.loadingSpinner).toBeHidden();
  330 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  331 | 
  332 |   //   return employeeId;
  333 |   // }
  334 | async addEmployee(employee: EmployeeData): Promise<string> {
  335 |   await this.firstnameInput.fill(employee.firstName);
  336 | 
  337 |   if (employee.middleName) {
  338 |     await this.middlenameInput.fill(employee.middleName);
  339 |   }
  340 | 
  341 |   await this.lastnameInput.fill(employee.lastName);
  342 | 
  343 |   /*
  344 |    * OrangeHRM generates the same next ID when multiple workers
  345 |    * open Add Employee simultaneously. Override it with a unique ID.
  346 |    */
  347 |   const employeeId =
  348 |     employee.employeeId ??
  349 |     `${Date.now().toString().slice(-6)}${Math.floor(
  350 |       Math.random() * 1000
  351 |     )
  352 |       .toString()
  353 |       .padStart(3, "0")}`;
  354 | 
  355 |   await this.employeeID.fill(employeeId);
  356 | 
  357 |   await this.SaveEmployeeButton.click();
  358 | 
  359 |   await expect(this.page).toHaveURL(
  360 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  361 |     {
  362 |       timeout: 30_000,
  363 |     }
  364 |   );
  365 | 
  366 |   await expect(this.personalDetailsHeading).toBeVisible({
  367 |     timeout: 15_000,
  368 |   });
  369 | 
  370 |   return employeeId;
  371 | }
  372 |   async gotoEmployeeList(): Promise<void> {
  373 |     await this.employeeListLink.click();
  374 |   }
  375 | 
  376 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  377 |     if (filters.employeeId !== undefined) {
  378 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  379 |     }
  380 | 
  381 |     if (filters.employeeName !== undefined) {
  382 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  383 | 
  384 |       const matchingOption = this.autocompleteOptions
  385 |         .filter({ hasText: filters.employeeName })
  386 |         .first();
  387 | 
  388 |       await expect(matchingOption).toBeVisible();
  389 |       await matchingOption.click();
  390 |     }
  391 |   }
  392 | 
  393 |   async clickOnFilterSearch(): Promise<void> {
  394 |     await this.filterSearchButton.click();
  395 |   }
  396 | 
  397 |   async verifyEmployeeSearchResult(
  398 |     employeeId: string,
  399 |     firstName: string,
  400 |     lastName: string,
  401 |   ): Promise<void> {
> 402 |     await expect(this.loadingSpinner).toBeHidden();
      |                                       ^ Error: expect(locator).toBeHidden() failed
  403 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  404 |     const cells = matchingRow.locator(".oxd-table-cell");
  405 |     const fullName = await cells.nth(2).innerText();
  406 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  407 |     await expect(cells.nth(1)).toHaveText(employeeId);
  408 |     expect(actualFirstName).toBe(firstName);
  409 |     await expect(cells.nth(3)).toHaveText(lastName);
  410 |     await expect(this.noRecordsFound).not.toBeVisible();
  411 |   }
  412 | 
  413 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  414 |   await expect(this.loadingSpinner).toBeHidden({
  415 |     timeout: 15_000,
  416 |   });
  417 | 
  418 |   await expect(this.employeeRows).toHaveCount(0, {
  419 |     timeout: 15_000,
  420 |   });
  421 | 
  422 |   await expect(this.employeeIdFilterInput).toHaveValue(
  423 |     employeeId
  424 |   );
  425 | }
  426 | 
  427 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  428 |     await expect(this.personalDetailsHeading).toBeVisible();
  429 |     //await expect(this.loadingSpinner).toBeHidden();
  430 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  431 | 
  432 |     if (details.middleName !== undefined) {
  433 |       await this.middlenameInput.fill(details.middleName);
  434 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  435 |     }
  436 | 
  437 |     if (details.lastName !== undefined) {
  438 |       await this.lastnameInput.fill(details.lastName);
  439 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  440 |     }
  441 | 
  442 |     const updateResponse = this.page.waitForResponse(
  443 |       (response) =>
  444 |         response.url().includes("/personal-details") &&
  445 |         response.request().method() === "PUT" &&
  446 |         response.ok(),
  447 |       { timeout: 20_000 },
  448 |     );
  449 | 
  450 |     await this.personalDetailsSaveButton.click();
  451 |     await updateResponse;
  452 | 
  453 |     await expect(this.successToast).toContainText("Successfully Updated");
  454 | 
  455 |     //await expect(this.loadingSpinner).toBeHidden();
  456 | 
  457 |     if (details.middleName !== undefined) {
  458 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  459 |     }
  460 | 
  461 |     if (details.lastName !== undefined) {
  462 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  463 |     }
  464 |   }
  465 |   //deleting the Records
  466 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  467 |     await expect(this.loadingSpinner).toBeHidden();
  468 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  469 |     await expect(matchingRow).toHaveCount(1);
  470 |     const deleteButton = matchingRow.locator("button").filter({
  471 |       has: this.page.locator("i.bi-trash"),
  472 |     });
  473 |     await deleteButton.click();
  474 | 
  475 |     const confirmationDilaog = this.page.getByRole("dialog");
  476 |     await expect(confirmationDilaog).toBeVisible();
  477 |     const deleteResponse = this.page.waitForResponse(
  478 |       (response) =>
  479 |         response.url().includes("/api/v2/pim/employees") &&
  480 |         response.request().method() === "DELETE" &&
  481 |         response.ok(),
  482 |       { timeout: 20_000 },
  483 |     );
  484 | 
  485 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  486 | 
  487 |     await deleteResponse;
  488 | 
  489 |     await expect(this.successToast).toContainText("Successfully Deleted");
  490 | 
  491 |     await expect(matchingRow).toHaveCount(0);
  492 |   }
  493 | 
  494 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  495 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  496 | 
  497 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  498 |       timeout: 20_000,
  499 |     });
  500 | 
  501 |     await expect(this.profilePictureValidation).toBeVisible();
  502 | 
```