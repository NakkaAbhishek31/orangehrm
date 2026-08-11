# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_083 - Admin should search using matching employee ID and name @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:1094:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Match1786453845077910' }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Match1786453845077910' }).first()

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
      - paragraph: Daisy Nguyen
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
- textbox "Type for hints...": Match1786453845077910
- listbox:
  - option "No Records Found"
- text: Employee Id
- textbox: "0572"
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (206) Records Found
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
    - row " 05137 66 6 6  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "05137"
      - cell "66 6"
      - cell "6"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " idtest A8DCo middle_name_testing 010Z Chief Technical Officer Full-Time Contract Administration  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "idtest"
      - cell "A8DCo middle_name_testing"
      - cell "010Z"
      - cell "Chief Technical Officer"
      - cell "Full-Time Contract"
      - cell "Administration"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " dfa2ea3a AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfa2ea3a"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0998 ABC Abhinay Account Assistant Full-Time Permanent Engineering  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0998"
      - cell "ABC"
      - cell "Abhinay"
      - cell "Account Assistant"
      - cell "Full-Time Permanent"
      - cell "Engineering"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0999 Abhinay ABC Payroll Administrator Part-Time Internship Sales & Marketing  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0999"
      - cell "Abhinay"
      - cell "ABC"
      - cell "Payroll Administrator"
      - cell "Part-Time Internship"
      - cell "Sales & Marketing"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0445 aksh1786451195039 patil1786451195039 Finance Manager Full-Time Permanent Administration  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0445"
      - cell "aksh1786451195039"
      - cell "patil1786451195039"
      - cell "Finance Manager"
      - cell "Full-Time Permanent"
      - cell "Administration"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown Customer Success Manager Full-Time Permanent Development  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell "Customer Success Manager"
      - cell "Full-Time Permanent"
      - cell "Development"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0372 AMIT BURLI Human Resources  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0372"
      - cell "AMIT"
      - cell "BURLI"
      - cell
      - cell
      - cell "Human Resources"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 229 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "229"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 524 aniket Ashok patil Administration  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "524"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell "Administration"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t Development  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell "Development"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0454 Ash M Dup  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0454"
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
    - row " 0477 Ash M Dup Quality Assurance  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0477"
      - cell "Ash M"
      - cell "Dup"
      - cell
      - cell
      - cell "Quality Assurance"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0451 Ash M Dup  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0451"
      - cell "Ash M"
      - cell "Dup"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0476 Ash M Dup  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0476"
      - cell "Ash M"
      - cell "Dup"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0440 Auto Employee  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0440"
      - cell "Auto"
      - cell "Employee"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0470 Auto Employee  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0470"
      - cell "Auto"
      - cell "Employee"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0461 Auto Member  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0461"
      - cell "Auto"
      - cell "Member"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0467 Auto1786452007650 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0467"
      - cell "Auto1786452007650 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0468 Auto1786452073703769 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0468"
      - cell "Auto1786452073703769 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0471 Auto1786452132919706 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0471"
      - cell "Auto1786452132919706 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0473 Auto178645217228429 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0473"
      - cell "Auto178645217228429 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0481 Auto1786452475162202 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0481"
      - cell "Auto1786452475162202 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0483 Auto1786452485051794 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0483"
      - cell "Auto1786452485051794 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0485 Auto1786452533177545 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0485"
      - cell "Auto1786452533177545 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0486 Auto1786452552165343 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0486"
      - cell "Auto1786452552165343 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0487 Auto1786452568494731 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0487"
      - cell "Auto1786452568494731 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0488 Auto178645258358484 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0488"
      - cell "Auto178645258358484 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0489 Auto1786452679577983 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0489"
      - cell "Auto1786452679577983 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0492 Auto1786452711085105 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0492"
      - cell "Auto1786452711085105 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0493 Auto178645273895678 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0493"
      - cell "Auto178645273895678 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0499 Auto178645294208846 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0499"
      - cell "Auto178645294208846 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0501 Auto1786452964115742 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0501"
      - cell "Auto1786452964115742 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0504 Auto1786452994658914 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0504"
      - cell "Auto1786452994658914 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0507 Auto1786453048790771 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0507"
      - cell "Auto1786453048790771 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0519 Auto1786453350789413 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0519"
      - cell "Auto1786453350789413 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0522 Auto1786453397200280 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0522"
      - cell "Auto1786453397200280 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0495 AutoB1786452900477108 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0495"
      - cell "AutoB1786452900477108 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0498 AutoB1786452936019378 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0498"
      - cell "AutoB1786452936019378 Test"
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
    - row " 3447488 BNPUJl hXFJL rCrLNEtb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "3447488"
      - cell "BNPUJl hXFJL"
      - cell "rCrLNEtb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0453 charifa bel belgueroua  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0453"
      - cell "charifa bel"
      - cell "belgueroua"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0419 charifa bel belgueroua  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0419"
      - cell "charifa bel"
      - cell "belgueroua"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0452 charifa bel belgueroua  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0452"
      - cell "charifa bel"
      - cell "belgueroua"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0371 charifa bel belgueroua  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0371"
      - cell "charifa bel"
      - cell "belgueroua"
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
  388 |     await this.SaveEmployeeButton.click();
  389 | 
  390 |     return await this.employeeID.inputValue();
  391 |   }
  392 | 
  393 |   async gotoEmployeeList(): Promise<void> {
  394 |     await this.employeeListLink.click();
  395 |   }
  396 | 
  397 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  398 |     if (filters.employeeId !== undefined) {
  399 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  400 |     }
  401 | 
  402 |     if (filters.employeeName !== undefined) {
  403 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  404 | 
  405 |       const matchingOption = this.autocompleteOptions
  406 |         .filter({ hasText: filters.employeeName })
  407 |         .first();
  408 | 
> 409 |       await expect(matchingOption).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
  410 |       await matchingOption.click();
  411 |     }
  412 |   }
  413 | 
  414 |   async clickOnFilterSearch(): Promise<void> {
  415 |     await this.filterSearchButton.click();
  416 |   }
  417 | 
  418 |   async verifyEmployeeSearchResult(
  419 |     employeeId: string,
  420 |     firstName: string,
  421 |     lastName: string,
  422 |   ): Promise<void> {
  423 |     await expect(this.loadingSpinner).toBeHidden();
  424 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  425 |     const cells = matchingRow.locator(".oxd-table-cell");
  426 |     const fullName = await cells.nth(2).innerText();
  427 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  428 |     await expect(cells.nth(1)).toHaveText(employeeId);
  429 |     expect(actualFirstName).toBe(firstName);
  430 |     await expect(cells.nth(3)).toHaveText(lastName);
  431 |     await expect(this.noRecordsFound).not.toBeVisible();
  432 |   }
  433 | 
  434 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  435 |     await expect(this.loadingSpinner).toBeHidden({
  436 |       timeout: 15_000,
  437 |     });
  438 | 
  439 |     await expect(this.employeeRows).toHaveCount(0, {
  440 |       timeout: 15_000,
  441 |     });
  442 | 
  443 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  444 |   }
  445 | 
  446 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  447 |     await expect(this.personalDetailsHeading).toBeVisible();
  448 |     await expect(this.loadingSpinner).toBeHidden();
  449 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  450 | 
  451 |     if (details.middleName !== undefined) {
  452 |       await this.middlenameInput.fill(details.middleName);
  453 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  454 |     }
  455 | 
  456 |     if (details.lastName !== undefined) {
  457 |       await this.lastnameInput.fill(details.lastName);
  458 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  459 |     }
  460 | 
  461 |     const updateResponse = this.page.waitForResponse(
  462 |       (response) =>
  463 |         response.url().includes("/personal-details") &&
  464 |         response.request().method() === "PUT" &&
  465 |         response.ok(),
  466 |       { timeout: 20_000 },
  467 |     );
  468 | 
  469 |     await this.personalDetailsSaveButton.click();
  470 |     await updateResponse;
  471 | 
  472 |     await expect(this.successToast).toContainText("Successfully Updated");
  473 | 
  474 |     await expect(this.loadingSpinner).toBeHidden();
  475 | 
  476 |     if (details.middleName !== undefined) {
  477 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  478 |     }
  479 | 
  480 |     if (details.lastName !== undefined) {
  481 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  482 |     }
  483 |   }
  484 |   //deleting the Records
  485 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  486 |     await expect(this.loadingSpinner).toBeHidden();
  487 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  488 |     await expect(matchingRow).toHaveCount(1);
  489 |     const deleteButton = matchingRow.locator("button").filter({
  490 |       has: this.page.locator("i.bi-trash"),
  491 |     });
  492 |     await deleteButton.click();
  493 | 
  494 |     const confirmationDilaog = this.page.getByRole("dialog");
  495 |     await expect(confirmationDilaog).toBeVisible();
  496 |     const deleteResponse = this.page.waitForResponse(
  497 |       (response) =>
  498 |         response.url().includes("/api/v2/pim/employees") &&
  499 |         response.request().method() === "DELETE" &&
  500 |         response.ok(),
  501 |       { timeout: 20_000 },
  502 |     );
  503 | 
  504 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  505 | 
  506 |     await deleteResponse;
  507 | 
  508 |     await expect(this.successToast).toContainText("Successfully Deleted");
  509 | 
```