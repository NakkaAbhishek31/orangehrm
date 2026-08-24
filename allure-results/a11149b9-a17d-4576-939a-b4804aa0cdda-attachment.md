# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_200 - Duplicate validation should appear for an existing project name under the same customer @negative @validation @project-info @regression
- Location: tests\Time\time.spec.ts:1739:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Customers', exact: true, level: 5 })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('heading', { name: 'Customers', exact: true, level: 5 })

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
  - heading "Time" [level=6]
  - heading "/ Project Info" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Timothy Rice
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Customers" [level=6]
- button " Add"
- separator
- text: (11) Records Found
- table:
  - rowgroup:
    - row " Name  Description Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Name "
      - columnheader "Description"
      - columnheader "Actions"
  - rowgroup:
    - row " ACME Ltd Leading apparel manufacturing chain.  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ACME Ltd"
      - cell "Leading apparel manufacturing chain."
      - cell " ":
        - button ""
        - button ""
    - row " Apache Software Foundation non-profit corporation to support Apache software projects  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Apache Software Foundation"
      - cell "non-profit corporation to support Apache software projects"
      - cell " ":
        - button ""
        - button ""
    - row " FilterCustomer1787545119909 Customer filter test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FilterCustomer1787545119909"
      - cell "Customer filter test"
      - cell " ":
        - button ""
        - button ""
    - row " FreeWave Technologies, Inc. Its wireless data radios are utilized in industrial, government and defense, scientific, and commercial applications  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FreeWave Technologies, Inc."
      - cell "Its wireless data radios are utilized in industrial, government and defense, scientific, and commercial applications"
      - cell " ":
        - button ""
        - button ""
    - row " Fresh Books Software Ltd  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Fresh Books Software Ltd"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Global Corp and Co Global Corp introduces itself as a leading manufacturer and exporter of a large number of products catering to high precision equipment, Scientific Laboratory Equipments & Institutional Health Care Products.  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Global Corp and Co"
      - cell "Global Corp introduces itself as a leading manufacturer and exporter of a large number of products catering to high precision equipment, Scientific Laboratory Equipments & Institutional Health Care Products."
      - cell " ":
        - button ""
        - button ""
    - row " Internal  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ProjectCustomer1787545006514 Customer created for a project test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ProjectCustomer1787545006514"
      - cell "Customer created for a project test"
      - cell " ":
        - button ""
        - button ""
    - row " SearchCustomer1787545063045 Customer for project search  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "SearchCustomer1787545063045"
      - cell "Customer for project search"
      - cell " ":
        - button ""
        - button ""
    - row " The Coca-Cola Company Multinational beverage corporation and manufacturer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Coca-Cola Company"
      - cell "Multinational beverage corporation and manufacturer"
      - cell " ":
        - button ""
        - button ""
    - row " The Priceline Group American-based provider of travel and related online services to consumers  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Priceline Group"
      - cell "American-based provider of travel and related online services to consumers"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  828  |       exact: true,
  829  |     });
  830  | 
  831  |     await expect(employeeRecordsLink).toBeVisible();
  832  | 
  833  |     await employeeRecordsLink.click();
  834  | 
  835  |     await this.page.waitForURL(/\/attendance\/viewAttendanceRecord$/, {
  836  |       timeout: 30_000,
  837  |     });
  838  | 
  839  |     await expect(this.attendanceHeading).toBeVisible();
  840  |   }
  841  | 
  842  |   async gotoProjectReports(): Promise<void> {
  843  |     await this.reportsMenu.click();
  844  | 
  845  |     const projectReportsLink = this.page.getByRole("menuitem", {
  846  |       name: "Project Reports",
  847  |       exact: true,
  848  |     });
  849  | 
  850  |     await expect(projectReportsLink).toBeVisible();
  851  | 
  852  |     await projectReportsLink.click();
  853  | 
  854  |     await this.page.waitForURL(/\/time\/displayProjectReportCriteria$/, {
  855  |       timeout: 30_000,
  856  |     });
  857  | 
  858  |     await expect(this.projectReportHeading).toBeVisible();
  859  |   }
  860  |     async gotoAttendanceSummary(): Promise<void> {
  861  |     await this.reportsMenu.click();
  862  | 
  863  |     const attendanceSummaryLink = this.page.getByRole("menuitem", {
  864  |       name: "Attendance Summary",
  865  |       exact: true,
  866  |     });
  867  | 
  868  |     await expect(attendanceSummaryLink).toBeVisible();
  869  | 
  870  |     await attendanceSummaryLink.click();
  871  | 
  872  |    await this.page.waitForURL(/time\/displayAttendanceSummaryReportCriteria$/, {
  873  |   timeout: 30000, // 30 seconds
  874  | });
  875  | 
  876  | 
  877  |     await expect(this.attendanceSummaryReportHeading).toBeVisible();
  878  |   }
  879  | 
  880  |       async gotoEmployeeReport(): Promise<void> {
  881  |     await this.reportsMenu.click();
  882  | 
  883  |     const employeeReportLink = this.page.getByRole("menuitem", {
  884  |      name: "Employee Reports",
  885  |       exact: true,
  886  |     });
  887  | 
  888  |     await expect(employeeReportLink).toBeVisible();
  889  | 
  890  |     await employeeReportLink.click();
  891  | 
  892  |    await this.page.waitForURL(/time\/displayEmployeeReportCriteria$/, {
  893  |   timeout: 30000, // 30 seconds
  894  | });
  895  | 
  896  | 
  897  |     await expect(this.employeeReportHeading).toBeVisible();
  898  |   }
  899  | 
  900  |  async gotoCustomers(): Promise<void> {
  901  |   await expect(
  902  |     this.projectInfoMenu
  903  |   ).toBeVisible();
  904  | 
  905  |   await this.projectInfoMenu.click();
  906  | 
  907  |   const customersLink = this.page
  908  |     .locator('.oxd-dropdown-menu:visible')
  909  |     .getByText('Customers', {
  910  |       exact: true,
  911  |     });
  912  | 
  913  |   await expect(
  914  |     customersLink
  915  |   ).toBeVisible();
  916  | 
  917  |   await customersLink.click();
  918  | 
  919  |   await this.page.waitForURL(
  920  |     /\/time\/viewCustomers$/,
  921  |     {
  922  |       timeout: 30_000,
  923  |     }
  924  |   );
  925  | 
  926  |   await expect(
  927  |     this.customersHeading
> 928  |   ).toBeVisible();
       |     ^ Error: expect(locator).toBeVisible() failed
  929  | }
  930  | async gotoProjects(): Promise<void> {
  931  |   await expect(
  932  |     this.projectInfoMenu
  933  |   ).toBeVisible();
  934  | 
  935  |   await this.projectInfoMenu.click();
  936  | 
  937  |   const projectsLink = this.page
  938  |     .locator('.oxd-dropdown-menu:visible')
  939  |     .getByText('Projects', {
  940  |       exact: true,
  941  |     });
  942  | 
  943  |   await expect(
  944  |     projectsLink
  945  |   ).toBeVisible();
  946  | 
  947  |   await projectsLink.click();
  948  | 
  949  |   await this.page.waitForURL(
  950  |     /\/time\/viewProjects$/,
  951  |     {
  952  |       timeout: 30_000,
  953  |     }
  954  |   );
  955  | 
  956  |   await expect(
  957  |     this.projectsHeading
  958  |   ).toBeVisible();
  959  | }
  960  |   async selectEmployeeFromAutocomplete(searchText: string): Promise<string> {
  961  |     return this.selectAutocompleteOption(
  962  |       this.employeeNameInput,
  963  |       searchText,
  964  |       searchText,
  965  |     );
  966  |   }
  967  | 
  968  |   async waitForLoadingToFinish(): Promise<void> {
  969  |     await expect(this.loadingSpinner).toBeHidden({
  970  |       timeout: 30_000,
  971  |     });
  972  |   }
  973  | 
  974  |   async selectAttendanceEmployeeFromAutocomplete(
  975  |     searchText: string,
  976  |   ): Promise<string> {
  977  |     const maxAttempts = 3;
  978  | 
  979  |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  980  |       await this.attendanceEmployeeInput.fill(searchText);
  981  | 
  982  |       const dropdown = this.page.locator(
  983  |         ".oxd-autocomplete-dropdown:visible",
  984  |       );
  985  | 
  986  |       await expect(dropdown).toBeVisible({ timeout: 15_000 });
  987  | 
  988  |       const validOptions = dropdown
  989  |         .locator(".oxd-autocomplete-option")
  990  |         .filter({ hasNotText: /Searching|No Records Found/i });
  991  | 
  992  |       const noRecords = dropdown.getByText("No Records Found", {
  993  |         exact: true,
  994  |       });
  995  | 
  996  |       // Do not inspect the option count while the autocomplete is still in
  997  |       // its transient "Searching..." state.
  998  |       await validOptions.first().or(noRecords).waitFor({
  999  |         state: "visible",
  1000 |         timeout: 15_000,
  1001 |       });
  1002 | 
  1003 |       if (await validOptions.first().isVisible()) {
  1004 |         const firstOption = validOptions.first();
  1005 |         const selectedEmployee = (await firstOption.innerText()).trim();
  1006 | 
  1007 |         await firstOption.click();
  1008 |         await expect(this.attendanceEmployeeInput).toHaveValue(
  1009 |           selectedEmployee,
  1010 |         );
  1011 | 
  1012 |         return selectedEmployee;
  1013 |       }
  1014 | 
  1015 |       await this.attendanceEmployeeInput.press("Escape");
  1016 | 
  1017 |       if (attempt < maxAttempts) {
  1018 |         await this.page.waitForTimeout(1_000);
  1019 |         await this.attendanceEmployeeInput.clear();
  1020 |       }
  1021 |     }
  1022 | 
  1023 |     throw new Error(
  1024 |       `No attendance employee found for: ${searchText} after ${maxAttempts} attempts`,
  1025 |     );
  1026 |   }
  1027 |   
  1028 |   async gotoMyAttendanceRecords():
```