# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_072 - Reset should clear employee ID and name filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:870:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Test Employee' }).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Test Employee' }).first()

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
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: John Smith
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Test Employee
- listbox:
  - option "No Records Found"
- text: Employee Id
- textbox: "999999"
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (148) Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " 0312 A8DCo 4Ys 010Z  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0312"
      - cell "A8DCo 4Ys"
      - cell "010Z"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0388 admin Admin123  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0388"
      - cell "admin"
      - cell "Admin123"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0370 admin Admin123  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0370"
      - cell "admin"
      - cell "Admin123"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0436 admin Admin123  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0436"
      - cell "admin"
      - cell "Admin123"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0455 admin Admin123  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0455"
      - cell "admin"
      - cell "Admin123"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 367 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "367"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367 Ash J Tyson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367"
      - cell "Ash J"
      - cell "Tyson"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Ebc3765 Auto Employeebc3765  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ebc3765"
      - cell "Auto"
      - cell "Employeebc3765"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 511379544 Auto1786551126733 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "511379544"
      - cell "Auto1786551126733 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 511606897 Auto1786551156470563 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "511606897"
      - cell "Auto1786551156470563 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 511885463 Auto1786551185142800 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "511885463"
      - cell "Auto1786551185142800 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 511899237 Auto1786551186592519 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "511899237"
      - cell "Auto1786551186592519 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 512049044 Auto1786551201632377 UpdatedTest UpdatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "512049044"
      - cell "Auto1786551201632377 UpdatedTest"
      - cell "UpdatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 512069054 Auto1786551203570238 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "512069054"
      - cell "Auto1786551203570238 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 512709788 Auto1786551266169775 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "512709788"
      - cell "Auto1786551266169775 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0416 Auto1786551411227866 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0416"
      - cell "Auto1786551411227866 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 516729443 Auto1786551669760514 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "516729443"
      - cell "Auto1786551669760514 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 521690314 Auto1786552164792418 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "521690314"
      - cell "Auto1786552164792418 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 514412365 AutoA1786551436840100 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "514412365"
      - cell "AutoA1786551436840100 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 519498612 AutoA1786551946252828 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "519498612"
      - cell "AutoA1786551946252828 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 514482474 AutoB1786551436840100 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "514482474"
      - cell "AutoB1786551436840100 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 519562851 AutoB1786551946252828 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "519562851"
      - cell "AutoB1786551946252828 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 bala kumar ravi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "bala kumar"
      - cell "ravi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0292"
      - cell "bmrtahvwhibmrtahvwhi"
      - cell "hbfqkhjfqbhbfqkhjfqb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0320 Charles Carter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0320"
      - cell "Charles"
      - cell "Carter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00392 Charlotte Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00392"
      - cell "Charlotte"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0487 Checkbox143 C Test44  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0487"
      - cell "Checkbox143 C"
      - cell "Test44"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0423 Checkbox615 C Test347  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0423"
      - cell "Checkbox615 C"
      - cell "Test347"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0387 Checkbox827 C Test478  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0387"
      - cell "Checkbox827 C"
      - cell "Test478"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0363 Christopher Mcmillan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0363"
      - cell "Christopher"
      - cell "Mcmillan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0290"
      - cell "dhbrukkuzldhbrukkuzl"
      - cell "ibuvlwtfsfibuvlwtfsf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0294 DHINA KARAN P  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0294"
      - cell "DHINA KARAN"
      - cell "P"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0389 Dropdown116 D Test15  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0389"
      - cell "Dropdown116 D"
      - cell "Test15"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0489 Dropdown594 D Test739  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0489"
      - cell "Dropdown594 D"
      - cell "Test739"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0427 Dropdown900 D Test151  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0427"
      - cell "Dropdown900 D"
      - cell "Test151"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0497 E2E156 E Test979  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0497"
      - cell "E2E156 E"
      - cell "Test979"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0392 E2E500 E Test321  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0392"
      - cell "E2E500 E"
      - cell "Test321"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 09557 Emily Jones  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "09557"
      - cell "Emily"
      - cell "Jones"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1235 FName Mname LName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1235"
      - cell "FName Mname"
      - cell "LName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftdkux ltsxgy  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftdkux"
      - cell "ltsxgy"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthyfv ltrhtm  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthyfv"
      - cell "ltrhtm"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftndlm ltdyyf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftndlm"
      - cell "ltdyyf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
> 423 |       await expect(matchingOption).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
  424 |       await matchingOption.click();
  425 |     }
  426 |   }
  427 | 
  428 |   async clickOnFilterSearch(): Promise<void> {
  429 |     const employeeListResponse = this.page.waitForResponse(
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
```