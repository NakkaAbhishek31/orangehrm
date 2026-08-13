# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_072 - Reset should clear employee ID and name filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:960:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Test Employee' }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Test Employee' }).first()
  - Target page, context or browser has been closed

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
      - paragraph: manda Panchal
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
- text: (231) Records Found
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
    - row " 0568 Alison Helen Wintheiser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0568"
      - cell "Alison Helen"
      - cell "Wintheiser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 401 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "401"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 793711 Anita Patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "793711"
      - cell "Anita"
      - cell "Patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 822052 Anita Patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "822052"
      - cell "Anita"
      - cell "Patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 2515 Aquib Javed Bhai  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2515"
      - cell "Aquib Javed"
      - cell "Bhai"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0523 Ash M Dup  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0523"
      - cell "Ash M"
      - cell "Dup"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0407 Ash M Dup  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0407"
      - cell "Ash M"
      - cell "Dup"
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
    - row " 966416350 Auto1786596637596130 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "966416350"
      - cell "Auto1786596637596130 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 968055602 Auto1786596802363583 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "968055602"
      - cell "Auto1786596802363583 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0445 Auto710646 Engineer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0445"
      - cell "Auto710646"
      - cell "Engineer"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0470 Auto747451 Engineer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0470"
      - cell "Auto747451"
      - cell "Engineer"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " E30638 AutoF1786593830638 AutoL1786593830638  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "E30638"
      - cell "AutoF1786593830638"
      - cell "AutoL1786593830638"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " E35807 AutoF1786593835807 AutoL1786593835807  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "E35807"
      - cell "AutoF1786593835807"
      - cell "AutoL1786593835807"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 6234 AutoFirst1786594601412 AutoLast1786594601412  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "6234"
      - cell "AutoFirst1786594601412"
      - cell "AutoLast1786594601412"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 2483 AutoFirst1786594663137 AutoLast1786594663137  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2483"
      - cell "AutoFirst1786594663137"
      - cell "AutoLast1786594663137"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0542 AutoFirstName7400 AutoLastName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0542"
      - cell "AutoFirstName7400"
      - cell "AutoLastName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " AutoTest User1786594739621  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "AutoTest"
      - cell "User1786594739621"
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
    - row " 0500 Cathrine Berge  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0500"
      - cell "Cathrine"
      - cell "Berge"
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
    - row " 0566 Checkbox310 C Test622  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0566"
      - cell "Checkbox310 C"
      - cell "Test622"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0539 Checkbox702 C Test499  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0539"
      - cell "Checkbox702 C"
      - cell "Test499"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0604 Checkbox956 C Test568  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0604"
      - cell "Checkbox956 C"
      - cell "Test568"
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
    - row " 0371 Christopher Thomas  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0371"
      - cell "Christopher"
      - cell "Thomas"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DA74785 DataA1786593774785 LastA1786593774785  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DA74785"
      - cell "DataA1786593774785"
      - cell "LastA1786593774785"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DA79504 DataA1786593779504 LastA1786593779504  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DA79504"
      - cell "DataA1786593779504"
      - cell "LastA1786593779504"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DB74786 DataB1786593774786 LastB1786593774786  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DB74786"
      - cell "DataB1786593774786"
      - cell "LastB1786593774786"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DB79505 DataB1786593779505 LastB1786593779505  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DB79505"
      - cell "DataB1786593779505"
      - cell "LastB1786593779505"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DC74787 DataC1786593774787 LastC1786593774787  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DC74787"
      - cell "DataC1786593774787"
      - cell "LastC1786593774787"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " DC79506 DataC1786593779506 LastC1786593779506  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "DC79506"
      - cell "DataC1786593779506"
      - cell "LastC1786593779506"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0813040039 DataUser02 TestLast02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0813040039"
      - cell "DataUser02"
      - cell "TestLast02"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0813040104 DataUser03 TestLast03  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0813040104"
      - cell "DataUser03"
      - cell "TestLast03"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0813040132 DataUser04 TestLast04  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0813040132"
      - cell "DataUser04"
      - cell "TestLast04"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0813040157 DataUser05 TestLast05  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0813040157"
      - cell "DataUser05"
      - cell "TestLast05"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0519 Deanna Rice  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0519"
      - cell "Deanna"
      - cell "Rice"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 5762698 Delete Cancel  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "5762698"
      - cell "Delete"
      - cell "Cancel"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0608 Delete576 D Test653  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0608"
      - cell "Delete576 D"
      - cell "Test653"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " EMPW306792 Devon Jaden Cole  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "EMPW306792"
      - cell "Devon Jaden"
      - cell "Cole"
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
    - row " 0544 Dilum Test Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0544"
      - cell "Dilum Test"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0540 Dropdown31 D Test903  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0540"
      - cell "Dropdown31 D"
      - cell "Test903"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0567 Dropdown885 D Test432  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0567"
      - cell "Dropdown885 D"
      - cell "Test432"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0607 Dropdown902 D Test370  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0607"
      - cell "Dropdown902 D"
      - cell "Test370"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0524 E2E478 E Test396  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0524"
      - cell "E2E478 E"
      - cell "Test396"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0600 E2E566 E Test117  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0600"
      - cell "E2E566 E"
      - cell "Test117"
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
      - button "4"
    - listitem:
      - button "5"
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