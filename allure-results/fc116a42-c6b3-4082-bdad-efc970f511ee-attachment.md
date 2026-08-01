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

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785572727919 test user' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785572727919 test user' })

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
  - option "Auto1785571893903 updatedTest updatedUser"
  - option "Auto1785572163181 updatedTest updatedUser"
  - option "Auto1785571819293 updatedTest updatedUser"
  - option "Auto1785572017407 updatedTest updatedUser"
  - option "Auto1785571903048 updatedTest updatedUser"
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
- text: (142) Records Found
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
    - row " 0406 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA BoundaryTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0406"
      - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      - cell "BoundaryTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 03909 ADNAN dffd kHAM  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "03909"
      - cell "ADNAN dffd"
      - cell "kHAM"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 733260 Aliyah North Quitzon  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "733260"
      - cell "Aliyah North"
      - cell "Quitzon"
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
    - row " 792 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "792"
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
    - row " 0370 Auto1785571204323 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0370"
      - cell "Auto1785571204323 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0372 Auto1785571630533 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0372"
      - cell "Auto1785571630533 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0375 Auto1785571675159 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0375"
      - cell "Auto1785571675159 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0390 Auto1785571819293 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0390"
      - cell "Auto1785571819293 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0393 Auto1785571856721 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0393"
      - cell "Auto1785571856721 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0396 Auto1785571877148 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0396"
      - cell "Auto1785571877148 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0397 Auto1785571893903 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0397"
      - cell "Auto1785571893903 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0398 Auto1785571903048 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0398"
      - cell "Auto1785571903048 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0408 Auto1785571997542 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0408"
      - cell "Auto1785571997542 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0410 Auto1785572017407 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0410"
      - cell "Auto1785572017407 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0413 Auto1785572085718 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0413"
      - cell "Auto1785572085718 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0414 Auto1785572093632 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0414"
      - cell "Auto1785572093632 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0416 Auto1785572129579 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0416"
      - cell "Auto1785572129579 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0415 Auto1785572130542 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0415"
      - cell "Auto1785572130542 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0417 Auto1785572163181 updatedTest updatedUser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0417"
      - cell "Auto1785572163181 updatedTest"
      - cell "updatedUser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0418 Auto1785572171040 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0418"
      - cell "Auto1785572171040 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0419 Auto1785572178516 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0419"
      - cell "Auto1785572178516 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0421 Auto1785572197255 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0421"
      - cell "Auto1785572197255 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0422 Auto1785572205071 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0422"
      - cell "Auto1785572205071 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0423 Auto1785572228736 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0423"
      - cell "Auto1785572228736 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0428 Auto1785572325468 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0428"
      - cell "Auto1785572325468 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0432 Auto1785572571302 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0432"
      - cell "Auto1785572571302 test"
      - cell "user"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0433 Auto1785572613318 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0433"
      - cell "Auto1785572613318 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0434 Auto1785572646561 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0434"
      - cell "Auto1785572646561 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0436 Auto1785572676916 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0436"
      - cell "Auto1785572676916 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0441 Auto1785572727919 test user  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0441"
      - cell "Auto1785572727919 test"
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
    - row " 0378 BulkA1785571714232 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0378"
      - cell "BulkA1785571714232 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0395 BulkA1785571865967 Test User  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0395"
      - cell "BulkA1785571865967 Test"
      - cell "User"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0431 CancelTest572575 AutoCancel  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0431"
      - cell "CancelTest572575"
      - cell "AutoCancel"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0440 CancelTest572727 AutoCancel  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0440"
      - cell "CancelTest572727"
      - cell "AutoCancel"
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
    - row " 1967 Custom IDTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1967"
      - cell "Custom"
      - cell "IDTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0429 DelTest572454 AutoDelete  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0429"
      - cell "DelTest572454"
      - cell "AutoDelete"
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
    - row " dfgsjsjdh EditedFirst 34 444444  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfgsjsjdh"
      - cell "EditedFirst 34"
      - cell "444444"
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
  577 | 
  578 |     await expect
  579 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  580 |       .not.toEqual(currentPageIds);
  581 |   }
  582 | 
  583 |   async openEmployeeById(employeeId: string): Promise<void> {
  584 |     const employeeRow = this.employeeRows.filter({
  585 |       has: this.page
  586 |         .locator(".oxd-table-cell")
  587 |         .nth(1)
  588 |         .filter({ hasText: employeeId }),
  589 |     });
  590 | 
  591 |     await expect(employeeRow).toHaveCount(1);
  592 | 
  593 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  594 | 
  595 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  596 |       timeout: 15_000,
  597 |     });
  598 |   }
  599 | 
  600 |   async cancelAddingEmployee(): Promise<void> {
  601 |     expect(this.cancelProfilepageButton).toBeVisible();
  602 |     expect(this.cancelProfilepageButton).toBeEnabled();
  603 |     this.cancelProfilepageButton.click();
  604 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  605 |   }
  606 | 
  607 |   async saveEmployeeWithoutRequiredDetails(
  608 |     details: AddEmployeeDetails,
  609 |   ): Promise<void> {
  610 |     await this.firstnameInput.fill(details.firstName);
  611 | 
  612 |     if (details.middleName !== undefined) {
  613 |       await this.middlenameInput.fill(details.middleName);
  614 |     }
  615 | 
  616 |     await this.lastnameInput.fill(details.lastName);
  617 | 
  618 |     if (details.employeeId !== undefined) {
  619 |       await this.employeeID.fill(details.employeeId);
  620 |     }
  621 | 
  622 |     if (details.profilePicturePath !== undefined) {
  623 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  624 |     }
  625 | 
  626 |     await this.SaveEmployeeButton.click();
  627 |   }
  628 | 
  629 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  630 |     if (details.firstName !== undefined) {
  631 |       await this.firstnameInput.fill(details.firstName);
  632 |     }
  633 | 
  634 |     if (details.middleName !== undefined) {
  635 |       await this.middlenameInput.fill(details.middleName);
  636 |     }
  637 | 
  638 |     if (details.lastName !== undefined) {
  639 |       await this.lastnameInput.fill(details.lastName);
  640 |     }
  641 | 
  642 |     if (details.employeeId !== undefined) {
  643 |       await this.employeeID.fill(details.employeeId);
  644 |       await this.employeeID.blur();
  645 |     }
  646 | 
  647 |     if (details.profilePicturePath !== undefined) {
  648 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  649 |     }
  650 |   }
  651 | 
  652 |   async resetEmployeeFilters(): Promise<void> {
  653 |     const employeeListResponse = this.page.waitForResponse(
  654 |       (response) =>
  655 |         response.url().includes("/api/v2/pim/employees") &&
  656 |         response.request().method() === "GET" &&
  657 |         response.ok(),
  658 |       { timeout: 15_000 },
  659 |     );
  660 | 
  661 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  662 | 
  663 |     await employeeListResponse;
  664 |     await expect(this.loadingSpinner).toBeHidden();
  665 |   }
  666 | 
  667 |   async selectEmployeeFromAutocomplete(
  668 |     partialName: string,
  669 |     expectedFullName: string,
  670 |   ): Promise<void> {
  671 |     await this.employeeNameFilterInput.fill(partialName);
  672 | 
  673 |     const matchingOption = this.page
  674 |       .locator(".oxd-autocomplete-option")
  675 |       .filter({ hasText: expectedFullName });
  676 | 
> 677 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
      |                                  ^ Error: expect(locator).toBeVisible() failed
  678 |     await matchingOption.click();
  679 |   }
  680 | 
  681 |   async addEmployeeWithLoginDetails(
  682 |     details: EmployeeWithLoginDetails,
  683 |   ): Promise<string> {
  684 |     await this.fillAddEmployeeForm({
  685 |       firstName: details.firstName,
  686 |       middleName: details.middleName,
  687 |       lastName: details.lastName,
  688 |       employeeId: details.employeeId,
  689 |       profilePicturePath: details.profilePicturePath,
  690 |     });
  691 | 
  692 |     const employeeId = await this.employeeID.inputValue();
  693 | 
  694 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  695 |       await this.createLoginDetailsSwitch.click();
  696 |     }
  697 | 
  698 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  699 | 
  700 |     await expect(this.employeeUsernameInput).toBeVisible();
  701 |     await expect(this.employeePasswordInput).toBeVisible();
  702 |     await expect(this.confirmPasswordInput).toBeVisible();
  703 | 
  704 |     await this.employeeUsernameInput.fill(details.username);
  705 |     await this.employeePasswordInput.fill(details.password);
  706 |     await this.confirmPasswordInput.fill(details.password);
  707 | 
  708 |     if (details.status === "Disabled") {
  709 |       await this.disabledStatusRadio.check({
  710 |         force: true,
  711 |       });
  712 | 
  713 |       await expect(this.disabledStatusRadio).toBeChecked();
  714 |     } else {
  715 |       await this.enabledStatusRadio.check({
  716 |         force: true,
  717 |       });
  718 | 
  719 |       await expect(this.enabledStatusRadio).toBeChecked();
  720 |     }
  721 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  722 | 
  723 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  724 | 
  725 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  726 | 
  727 |     const createEmployeeResponse = this.page.waitForResponse(
  728 |       (response) =>
  729 |         response.url().includes("/api/v2/pim/employees") &&
  730 |         response.request().method() === "POST" &&
  731 |         response.ok(),
  732 |       { timeout: 20_000 },
  733 |     );
  734 | 
  735 |     await this.SaveEmployeeButton.click();
  736 | 
  737 |     await createEmployeeResponse;
  738 | 
  739 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  740 |       timeout: 20_000,
  741 |     });
  742 | 
  743 |     await expect(this.loadingSpinner).toBeHidden();
  744 | 
  745 |     return employeeId;
  746 |   }
  747 | 
  748 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  749 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  750 | 
  751 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  752 |   }
  753 | 
  754 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  755 |     await expect(this.loadingSpinner).toBeHidden();
  756 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  757 |     await expect(matchingRow).toHaveCount(1);
  758 |     const deleteButton = matchingRow.locator("button").filter({
  759 |       has: this.page.locator("i.bi-trash"),
  760 |     });
  761 |     await deleteButton.click();
  762 | 
  763 |     const confirmationDilaog = this.page.getByRole("dialog");
  764 |     await expect(confirmationDilaog).toBeVisible();
  765 | 
  766 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  767 | 
  768 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  769 |   }
  770 | 
  771 |   async selectEmployeeById(employeeId: string): Promise<void> {
  772 |     const employeeRow = this.employeeRows.filter({
  773 |       has: this.page
  774 |         .locator(".oxd-table-cell")
  775 |         .nth(1)
  776 |         .getByText(employeeId, { exact: true }),
  777 |     });
```