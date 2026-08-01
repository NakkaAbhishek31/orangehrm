# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:195:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785570637577 test user' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785570637577 test user' })

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
      - paragraph: manda user
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
  - option "Auto1785568857529 updatedTest updatedUser"
  - option "Auto1785570540180 updatedTest updatedUser"
  - option "Auto1785568215668 updatedTest updatedUser"
  - option "Auto1785570577144 Test User"
  - option "Auto1785565309351 Test User"
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
- text: (180) Records Found
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
    - row " 0449 adghk ddghko  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0449"
      - cell "adghk"
      - cell "ddghko"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0410 Akhil Test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0410"
      - cell "Akhil"
      - cell "Test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0435 Akhil Vijay  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0435"
      - cell "Akhil"
      - cell "Vijay"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0425 Akhil Vijayan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0425"
      - cell "Akhil"
      - cell "Vijayan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0429 Akhil Vijay  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0429"
      - cell "Akhil"
      - cell "Vijay"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0418 Akhil Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0418"
      - cell "Akhil"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0438 Akhil Vijay  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0438"
      - cell "Akhil"
      - cell "Vijay"
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
    - row " 589 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "589"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 281 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "281"
      - cell "aniket Ashok"
      - cell "patil"
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
    - row " 0389 Auto1785565134247 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0389"
      - cell "Auto1785565134247 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0398 Auto1785565309351 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0398"
      - cell "Auto1785565309351 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0399 Auto1785565363535 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0399"
      - cell "Auto1785565363535 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0400 Auto1785565440039 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0400"
      - cell "Auto1785565440039 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0404 Auto1785566973657 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0404"
      - cell "Auto1785566973657 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0405 Auto1785567024902 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0405"
      - cell "Auto1785567024902 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0407 Auto1785567137976 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0407"
      - cell "Auto1785567137976 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0416 Auto1785568174014 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0416"
      - cell "Auto1785568174014 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0417 Auto1785568215668 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0417"
      - cell "Auto1785568215668 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0419 Auto1785568252881 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0419"
      - cell "Auto1785568252881 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0422 Auto1785568311063 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0422"
      - cell "Auto1785568311063 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0427 Auto1785568422342 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0427"
      - cell "Auto1785568422342 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0428 Auto1785568449372 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0428"
      - cell "Auto1785568449372 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0430 Auto1785568608646 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0430"
      - cell "Auto1785568608646 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0436 Auto1785568734554 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0436"
      - cell "Auto1785568734554 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0439 Auto1785568821904 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0439"
      - cell "Auto1785568821904 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0440 Auto1785568857529 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0440"
      - cell "Auto1785568857529 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0441 Auto1785568858333 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0441"
      - cell "Auto1785568858333 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0447 Auto1785569059156 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0447"
      - cell "Auto1785569059156 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0448 Auto1785569087256 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0448"
      - cell "Auto1785569087256 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0465 Auto1785570487520 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0465"
      - cell "Auto1785570487520 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0466 Auto1785570540180 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0466"
      - cell "Auto1785570540180 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0467 Auto1785570543664 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0467"
      - cell "Auto1785570543664 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0470 Auto1785570577144 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0470"
      - cell "Auto1785570577144 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0474 Auto1785570637577 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0474"
      - cell "Auto1785570637577 test"
      - cell "user"
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
    - row " f5qzlP Dallin Hugh Maggio  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "f5qzlP"
      - cell "Dallin Hugh"
      - cell "Maggio"
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
    - row " cJpCPeovmw Dianne Ireland Olson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "cJpCPeovmw"
      - cell "Dianne Ireland"
      - cell "Olson"
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
    - row " 23978 first_7lmou last_7lmou  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "23978"
      - cell "first_7lmou"
      - cell "last_7lmou"
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
  490 | 
  491 |     await expect
  492 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  493 |       .not.toEqual(currentPageIds);
  494 |   }
  495 | 
  496 |   async openEmployeeById(employeeId: string): Promise<void> {
  497 |     const employeeRow = this.employeeRows.filter({
  498 |       has: this.page
  499 |         .locator(".oxd-table-cell")
  500 |         .nth(1)
  501 |         .filter({ hasText: employeeId }),
  502 |     });
  503 | 
  504 |     await expect(employeeRow).toHaveCount(1);
  505 | 
  506 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  507 | 
  508 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  509 |       timeout: 15_000,
  510 |     });
  511 |   }
  512 | 
  513 |   async cancelAddingEmployee(): Promise<void> {
  514 |     expect(this.cancelProfilepageButton).toBeVisible();
  515 |     expect(this.cancelProfilepageButton).toBeEnabled();
  516 |     this.cancelProfilepageButton.click();
  517 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  518 |   }
  519 | 
  520 |   async saveEmployeeWithoutRequiredDetails(
  521 |     details: AddEmployeeDetails,
  522 |   ): Promise<void> {
  523 |     await this.firstnameInput.fill(details.firstName);
  524 | 
  525 |     if (details.middleName !== undefined) {
  526 |       await this.middlenameInput.fill(details.middleName);
  527 |     }
  528 | 
  529 |     await this.lastnameInput.fill(details.lastName);
  530 | 
  531 |     if (details.employeeId !== undefined) {
  532 |       await this.employeeID.fill(details.employeeId);
  533 |     }
  534 | 
  535 |     if (details.profilePicturePath !== undefined) {
  536 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  537 |     }
  538 | 
  539 |     await this.SaveEmployeeButton.click();
  540 |   }
  541 | 
  542 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  543 |     if (details.firstName !== undefined) {
  544 |       await this.firstnameInput.fill(details.firstName);
  545 |     }
  546 | 
  547 |     if (details.middleName !== undefined) {
  548 |       await this.middlenameInput.fill(details.middleName);
  549 |     }
  550 | 
  551 |     if (details.lastName !== undefined) {
  552 |       await this.lastnameInput.fill(details.lastName);
  553 |     }
  554 | 
  555 |     if (details.employeeId !== undefined) {
  556 |       await this.employeeID.fill(details.employeeId);
  557 |       await this.employeeID.blur();
  558 |     }
  559 | 
  560 |     if (details.profilePicturePath !== undefined) {
  561 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  562 |     }
  563 |   }
  564 | 
  565 |   async resetEmployeeFilters(): Promise<void> {
  566 |     const employeeListResponse = this.page.waitForResponse(
  567 |       (response) =>
  568 |         response.url().includes("/api/v2/pim/employees") &&
  569 |         response.request().method() === "GET" &&
  570 |         response.ok(),
  571 |       { timeout: 15_000 },
  572 |     );
  573 | 
  574 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  575 | 
  576 |     await employeeListResponse;
  577 |     await expect(this.loadingSpinner).toBeHidden();
  578 |   }
  579 | 
  580 |   async selectEmployeeFromAutocomplete(
  581 |     partialName: string,
  582 |     expectedFullName: string,
  583 |   ): Promise<void> {
  584 |     await this.employeeNameFilterInput.fill(partialName);
  585 | 
  586 |     const matchingOption = this.page
  587 |       .locator(".oxd-autocomplete-option")
  588 |       .filter({ hasText: expectedFullName });
  589 | 
> 590 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
      |                                  ^ Error: expect(locator).toBeVisible() failed
  591 |     await matchingOption.click();
  592 |   }
  593 | 
  594 |   async addEmployeeWithLoginDetails(
  595 |     details: EmployeeWithLoginDetails,
  596 |   ): Promise<string> {
  597 |     await this.fillAddEmployeeForm({
  598 |       firstName: details.firstName,
  599 |       middleName: details.middleName,
  600 |       lastName: details.lastName,
  601 |       employeeId: details.employeeId,
  602 |       profilePicturePath: details.profilePicturePath,
  603 |     });
  604 | 
  605 |     const employeeId = await this.employeeID.inputValue();
  606 | 
  607 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  608 |       await this.createLoginDetailsSwitch.click();
  609 |     }
  610 | 
  611 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  612 | 
  613 |     await expect(this.employeeUsernameInput).toBeVisible();
  614 |     await expect(this.employeePasswordInput).toBeVisible();
  615 |     await expect(this.confirmPasswordInput).toBeVisible();
  616 | 
  617 |     await this.employeeUsernameInput.fill(details.username);
  618 |     await this.employeePasswordInput.fill(details.password);
  619 |     await this.confirmPasswordInput.fill(details.password);
  620 | 
  621 |     if (details.status === "Disabled") {
  622 |       await this.disabledStatusRadio.check({
  623 |         force: true,
  624 |       });
  625 | 
  626 |       await expect(this.disabledStatusRadio).toBeChecked();
  627 |     } else {
  628 |       await this.enabledStatusRadio.check({
  629 |         force: true,
  630 |       });
  631 | 
  632 |       await expect(this.enabledStatusRadio).toBeChecked();
  633 |     }
  634 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  635 | 
  636 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  637 | 
  638 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  639 | 
  640 |     const createEmployeeResponse = this.page.waitForResponse(
  641 |       (response) =>
  642 |         response.url().includes("/api/v2/pim/employees") &&
  643 |         response.request().method() === "POST" &&
  644 |         response.ok(),
  645 |       { timeout: 20_000 },
  646 |     );
  647 | 
  648 |     await this.SaveEmployeeButton.click();
  649 | 
  650 |     await createEmployeeResponse;
  651 | 
  652 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  653 |       timeout: 20_000,
  654 |     });
  655 | 
  656 |     await expect(this.loadingSpinner).toBeHidden();
  657 | 
  658 |     return employeeId;
  659 |   }
  660 | 
  661 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  662 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  663 | 
  664 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  665 |   }
  666 | 
  667 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  668 |     await expect(this.loadingSpinner).toBeHidden();
  669 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  670 |     await expect(matchingRow).toHaveCount(1);
  671 |     const deleteButton = matchingRow.locator("button").filter({
  672 |       has: this.page.locator("i.bi-trash"),
  673 |     });
  674 |     await deleteButton.click();
  675 | 
  676 |     const confirmationDilaog = this.page.getByRole("dialog");
  677 |     await expect(confirmationDilaog).toBeVisible();
  678 | 
  679 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  680 | 
  681 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  682 |   }
  683 | 
  684 |   async selectEmployeeById(employeeId: string): Promise<void> {
  685 |     const employeeRow = this.employeeRows.filter({
  686 |       has: this.page
  687 |         .locator(".oxd-table-cell")
  688 |         .nth(1)
  689 |         .getByText(employeeId, { exact: true }),
  690 |     });
```