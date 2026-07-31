# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee.spec.ts:551:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785497481929 test user' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785497481929 test user' })

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
      - paragraph: Noor Eman
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
- textbox "Type for hints...": Auto1785
- listbox:
  - option "Auto1785493831911 updatedTest updatedUser"
  - option "Auto1785497149729 updatedTest updatedUser"
  - option "Auto1785494817627 updatedTest updatedUser"
  - option "Auto1785496287754 updatedTest updatedUser"
  - option "Auto1785493274302 updatedTest updatedUser"
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (271) Records Found
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
    - row " dfgsjsjdh 123445 34 444444  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfgsjsjdh"
      - cell "123445 34"
      - cell "444444"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0447 567 tyu cvfgb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0447"
      - cell "567 tyu"
      - cell "cvfgb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0295 99N75 425 5TlV  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0295"
      - cell "99N75 425"
      - cell "5TlV"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 6060 @#!%^!$%!^ %#$%#%#$%#  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "6060"
      - cell "@#!%^!$%!^"
      - cell "%#$%#%#$%#"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
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
    - row " FT97410 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FT97410"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " FT97476 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FT97476"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0421 Aarti Kittu Gupta  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0421"
      - cell "Aarti Kittu"
      - cell "Gupta"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0426 Aarti Kittu Gupta  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0426"
      - cell "Aarti Kittu"
      - cell "Gupta"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0403 Aarti Kittu Gupta  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0403"
      - cell "Aarti Kittu"
      - cell "Gupta"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 8401 Aarti rajput kittu  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "8401"
      - cell "Aarti rajput"
      - cell "kittu"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0406 AddFirst_1785493091474_9xbxi Mid AddLast_1785493091474_9xbxi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0406"
      - cell "AddFirst_1785493091474_9xbxi Mid"
      - cell "AddLast_1785493091474_9xbxi"
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
    - row " 0390 Andreane Robin Rempel Test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0390"
      - cell "Andreane Robin"
      - cell "Rempel Test"
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
    - row " 534 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "534"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 160 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "160"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 54365437 asef qwefd  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "54365437"
      - cell "asef"
      - cell "qwefd"
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
    - row " 0375 Auto1785492244722 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0375"
      - cell "Auto1785492244722 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0378 Auto1785492318086 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0378"
      - cell "Auto1785492318086 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0392 Auto1785492707984 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0392"
      - cell "Auto1785492707984 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0411 Auto1785493177827 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0411"
      - cell "Auto1785493177827 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0412 Auto1785493180474 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0412"
      - cell "Auto1785493180474 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0413 Auto1785493223652 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0413"
      - cell "Auto1785493223652 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0415 Auto1785493253802 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0415"
      - cell "Auto1785493253802 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0418 Auto1785493274302 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0418"
      - cell "Auto1785493274302 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0425 Auto1785493480966 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0425"
      - cell "Auto1785493480966 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0430 Auto1785493703532 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0430"
      - cell "Auto1785493703532 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0431 Auto1785493725296 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0431"
      - cell "Auto1785493725296 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0433 Auto1785493785533 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0433"
      - cell "Auto1785493785533 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0435 Auto1785493810564 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0435"
      - cell "Auto1785493810564 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0436 Auto1785493831911 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0436"
      - cell "Auto1785493831911 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0442 Auto1785493995139 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0442"
      - cell "Auto1785493995139 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0450 Auto1785494581100 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0450"
      - cell "Auto1785494581100 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0455 Auto1785494708535 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0455"
      - cell "Auto1785494708535 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0458 Auto1785494766068 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0458"
      - cell "Auto1785494766068 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0460 Auto1785494791606 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0460"
      - cell "Auto1785494791606 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0464 Auto1785494817627 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0464"
      - cell "Auto1785494817627 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0474 Auto1785495018296 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0474"
      - cell "Auto1785495018296 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0487 Auto1785495211308 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0487"
      - cell "Auto1785495211308 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0499 Auto1785495578656 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0499"
      - cell "Auto1785495578656 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0506 Auto1785495880381 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0506"
      - cell "Auto1785495880381 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0509 Auto1785495967752 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0509"
      - cell "Auto1785495967752 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0513 Auto1785496017911 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0513"
      - cell "Auto1785496017911 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0514 Auto1785496055836 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0514"
      - cell "Auto1785496055836 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0522 Auto1785496196420 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0522"
      - cell "Auto1785496196420 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0523 Auto1785496205788 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0523"
      - cell "Auto1785496205788 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0524 Auto1785496237729 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0524"
      - cell "Auto1785496237729 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0525 Auto1785496259117 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0525"
      - cell "Auto1785496259117 Test"
      - cell "User"
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
  461 |         .filter({ hasText: employeeId }),
  462 |     });
  463 | 
  464 |     await expect(employeeRow).toHaveCount(1);
  465 | 
  466 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  467 | 
  468 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  469 |       timeout: 15_000,
  470 |     });
  471 |   }
  472 | 
  473 |   async cancelAddingEmployee(): Promise<void> {
  474 |     expect(this.cancelProfilepageButton).toBeVisible();
  475 |     expect(this.cancelProfilepageButton).toBeEnabled();
  476 |     this.cancelProfilepageButton.click();
  477 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  478 |   }
  479 | 
  480 | 
  481 |  async saveEmployeeWithoutRequiredDetails(details: AddEmployeeDetails): Promise<void>
  482 |  {
  483 | 
  484 |   await this.firstnameInput.fill(details.firstName);
  485 | 
  486 |     if (details.middleName !== undefined) {
  487 |       await this.middlenameInput.fill(details.middleName);
  488 |     }
  489 | 
  490 |     await this.lastnameInput.fill(details.lastName);
  491 | 
  492 |     if (details.employeeId !== undefined) {
  493 |       await this.employeeID.fill(details.employeeId);
  494 |     }
  495 | 
  496 |     if (details.profilePicturePath !== undefined) {
  497 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  498 |     }
  499 |  
  500 |     await this.SaveEmployeeButton.click(); 
  501 |  }
  502 | 
  503 | 
  504 |  async fillAddEmployeeForm(
  505 |   details: AddEmployeeDetails
  506 | ): Promise<void> {
  507 |   
  508 |     if (details.firstName !== undefined) {
  509 |     await this.firstnameInput.fill(details.firstName);
  510 |   }
  511 | 
  512 |   if (details.middleName !== undefined) {
  513 |     await this.middlenameInput.fill(details.middleName);
  514 |   }
  515 | 
  516 | 
  517 |     if (details.lastName !== undefined) {
  518 |     await this.lastnameInput.fill(details.lastName);
  519 |   }
  520 | 
  521 |   if (details.employeeId !== undefined) {
  522 |     await this.employeeID.fill(details.employeeId);
  523 |     await this.employeeID.blur();
  524 |   }
  525 | 
  526 |   if (details.profilePicturePath !== undefined) {
  527 |     await this.profilePictureInput.setInputFiles(
  528 |       details.profilePicturePath
  529 |     );
  530 |   }
  531 | }
  532 | 
  533 | 
  534 | async resetEmployeeFilters(): Promise<void> {
  535 |   const employeeListResponse = this.page.waitForResponse(
  536 |     response =>
  537 |       response.url().includes('/api/v2/pim/employees') &&
  538 |       response.request().method() === 'GET' &&
  539 |       response.ok(),
  540 |     { timeout: 15_000 }
  541 |   );
  542 | 
  543 |   await this.page
  544 |     .getByRole('button', { name: 'Reset', exact: true })
  545 |     .click();
  546 | 
  547 |   await employeeListResponse;
  548 |   await expect(this.loadingSpinner).toBeHidden();
  549 | }
  550 | 
  551 | async selectEmployeeFromAutocomplete(
  552 |   partialName: string,
  553 |   expectedFullName: string
  554 | ): Promise<void> {
  555 |   await this.employeeNameFilterInput.fill(partialName);
  556 | 
  557 |   const matchingOption = this.page
  558 |     .locator('.oxd-autocomplete-option')
  559 |     .filter({ hasText: expectedFullName });
  560 | 
> 561 |   await expect(matchingOption).toBeVisible({ timeout: 15000 });
      |                                ^ Error: expect(locator).toBeVisible() failed
  562 |   await matchingOption.click();
  563 | }
  564 | 
  565 | 
  566 | async addEmployeeWithLoginDetails(
  567 |   details: EmployeeWithLoginDetails
  568 | ): Promise<string> {
  569 |   await this.fillAddEmployeeForm({
  570 |     firstName: details.firstName,
  571 |     middleName: details.middleName,
  572 |     lastName: details.lastName,
  573 |     employeeId: details.employeeId,
  574 |     profilePicturePath: details.profilePicturePath,
  575 |   });
  576 | 
  577 |   const employeeId = await this.employeeID.inputValue();
  578 | 
  579 |   await this.createLoginDetailsSwitch.check();
  580 | 
  581 |   await expect(this.employeeUsernameInput).toBeVisible();
  582 |   await expect(this.employeePasswordInput).toBeVisible();
  583 |   await expect(this.confirmPasswordInput).toBeVisible();
  584 | 
  585 |   await this.employeeUsernameInput.fill(details.username);
  586 |   await this.employeePasswordInput.fill(details.password);
  587 |   await this.confirmPasswordInput.fill(details.password);
  588 | 
  589 |   if (details.status === 'Disabled') {
  590 |     await this.disabledStatusRadio.check();
  591 |   } else {
  592 |     await this.enabledStatusRadio.check();
  593 |   }
  594 | 
  595 |   await expect(this.employeeUsernameInput).toHaveValue(
  596 |     details.username
  597 |   );
  598 | 
  599 |   await expect(this.employeePasswordInput).toHaveValue(
  600 |     details.password
  601 |   );
  602 | 
  603 |   await expect(this.confirmPasswordInput).toHaveValue(
  604 |     details.password
  605 |   );
  606 | 
  607 |   const createEmployeeResponse = this.page.waitForResponse(
  608 |     response =>
  609 |       response.url().includes('/api/v2/pim/employees') &&
  610 |       response.request().method() === 'POST' &&
  611 |       response.ok(),
  612 |     { timeout: 20_000 }
  613 |   );
  614 | 
  615 |   await this.SaveEmployeeButton.click();
  616 | 
  617 |   await createEmployeeResponse;
  618 | 
  619 |   await this.page.waitForURL(
  620 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  621 |     { timeout: 20_000 }
  622 |   );
  623 | 
  624 |   await expect(this.loadingSpinner).toBeHidden();
  625 | 
  626 |   return employeeId;
  627 | }
  628 | 
  629 | }
  630 | 
```