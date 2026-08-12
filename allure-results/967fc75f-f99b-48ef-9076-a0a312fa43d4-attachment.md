# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_051 - Password mismatch validation should appear @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:238:8

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: LfVJZqyBDe user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Auto1786518893511439
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0576"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [ref=f3e191]
        - separator [ref=f3e193]
        - generic [ref=f3e194]:
          - paragraph [ref=f3e195]: "* Required"
          - button "Cancel" [ref=f3e196] [cursor=pointer]
          - button "Save" [active] [ref=f3e197] [cursor=pointer]
    - generic [ref=f3e198]:
      - paragraph [ref=f3e199]: OrangeHRM OS 5.9
      - paragraph [ref=f3e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  289 | 
  290 |   //   // if (duplicateIdFound) {
  291 |   //   //   employeeId = `E${Date.now().toString().slice(-9)}`;
  292 | 
  293 |   //   //   await this.employeeID.fill(employeeId);
  294 |   //   //   await this.employeeID.blur();
  295 | 
  296 |   //   //   await expect(this.employeeID).toHaveValue(employeeId);
  297 |   //   //   await expect(this.employeeIdValidation).toBeHidden();
  298 |   //   // }
  299 | 
  300 |   //   if (details.profilePicturePath !== undefined) {
  301 |   //     const defaultImageSrc =
  302 |   //       await this.profilePicturePreview.getAttribute("src");
  303 | 
  304 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  305 | 
  306 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  307 |   //       "src",
  308 |   //       defaultImageSrc ?? "",
  309 |   //     );
  310 |   //   }
  311 | 
  312 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  313 |   //     (response) =>
  314 |   //       response.url().includes("/personal-details") &&
  315 |   //       response.request().method() === "GET" &&
  316 |   //       response.ok(),
  317 |   //     { timeout: 20_000 },
  318 |   //   );
  319 | 
  320 |   //   await this.SaveEmployeeButton.click();
  321 | 
  322 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  323 |   //     timeout: 20_000,
  324 |   //   });
  325 | 
  326 |   //   await personalDetailsLoaded;
  327 |   //   await expect(this.loadingSpinner).toBeHidden();
  328 |   //   await expect(this.personalDetailsHeading).toBeVisible();
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
  380 |     if (data.employeeId !== undefined) {
  381 |       await this.employeeID.fill(data.employeeId);
  382 |     }
  383 | 
  384 |     if (data.profilePicturePath) {
  385 |       await this.profilePictureInput.setInputFiles(data.profilePicturePath);
  386 |     }
  387 | 
  388 |     const employeeId = await this.employeeID.inputValue();
> 389 |     const createEmployeeResponse = this.page.waitForResponse(
      |                                              ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
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
  429 |     await this.filterSearchButton.click();
  430 |   }
  431 | 
  432 |   async verifyEmployeeSearchResult(
  433 |     employeeId: string,
  434 |     firstName: string,
  435 |     lastName: string,
  436 |   ): Promise<void> {
  437 |     await expect(this.loadingSpinner).toBeHidden();
  438 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  439 |     const cells = matchingRow.locator(".oxd-table-cell");
  440 |     const fullName = await cells.nth(2).innerText();
  441 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  442 |     await expect(cells.nth(1)).toHaveText(employeeId);
  443 |     expect(actualFirstName).toBe(firstName);
  444 |     await expect(cells.nth(3)).toHaveText(lastName);
  445 |     await expect(this.noRecordsFound).not.toBeVisible();
  446 |   }
  447 | 
  448 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  449 |     await expect(this.loadingSpinner).toBeHidden({
  450 |       timeout: 15_000,
  451 |     });
  452 | 
  453 |     await expect(this.employeeRows).toHaveCount(0, {
  454 |       timeout: 15_000,
  455 |     });
  456 | 
  457 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  458 |   }
  459 | 
  460 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  461 |     await expect(this.personalDetailsHeading).toBeVisible();
  462 |     await expect(this.loadingSpinner).toBeHidden();
  463 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  464 | 
  465 |     if (details.middleName !== undefined) {
  466 |       await this.middlenameInput.fill(details.middleName);
  467 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  468 |     }
  469 | 
  470 |     if (details.lastName !== undefined) {
  471 |       await this.lastnameInput.fill(details.lastName);
  472 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  473 |     }
  474 | 
  475 |     const updateResponse = this.page.waitForResponse(
  476 |       (response) =>
  477 |         response.url().includes("/personal-details") &&
  478 |         response.request().method() === "PUT" &&
  479 |         response.ok(),
  480 |       { timeout: 20_000 },
  481 |     );
  482 | 
  483 |     await this.personalDetailsSaveButton.click();
  484 |     await updateResponse;
  485 | 
  486 |     await expect(this.successToast).toContainText("Successfully Updated");
  487 | 
  488 |     await expect(this.loadingSpinner).toBeHidden();
  489 | 
```