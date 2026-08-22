# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_189 - Admin should navigate to the Projects page @smoke @navigation @project-info @regression
- Location: tests\Time\time.spec.ts:1136:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-text--h6').filter({ hasText: /^Projects$/ }).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-text--h6').filter({ hasText: /^Projects$/ }).first()

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
      - paragraph: Emp_DnNgRA User_ATyraJfk
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Timesheets 
      - listitem: Attendance 
      - listitem: Reports 
      - listitem: Project Info 
      - button ""
- heading "Projects" [level=5]
- button ""
- separator
- text: Customer Name
- textbox "Type for hints..."
- text: Project
- textbox "Type for hints..."
- text: Project Admin
- textbox "Type for hints..."
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (12) Records Found
- table:
  - rowgroup:
    - row " Customer Name  Project  Project Admins Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Customer Name "
      - columnheader "Project "
      - columnheader "Project Admins"
      - columnheader "Actions"
  - rowgroup:
    - row " ACME Ltd ACME Ltd  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ACME Ltd"
      - cell "ACME Ltd"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Apache Software Foundation ASF - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Apache Software Foundation"
      - cell "ASF - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " The Coca-Cola Company Coke - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Coca-Cola Company"
      - cell "Coke - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Fresh Books Software Ltd Fresh Books Software Ltd - Phase I  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Fresh Books Software Ltd"
      - cell "Fresh Books Software Ltd - Phase I"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " FreeWave Technologies, Inc. FWT - Phase 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FreeWave Technologies, Inc."
      - cell "FWT - Phase 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Internal General HR Tasks Emp_DnNgRA User_ATyraJfk  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "General HR Tasks"
      - cell "Emp_DnNgRA User_ATyraJfk"
      - cell " ":
        - button ""
        - button ""
    - row " Global Corp and Co Global Software phase - 1  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Global Corp and Co"
      - cell "Global Software phase - 1"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Global Corp and Co Global Software phase - 2  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Global Corp and Co"
      - cell "Global Software phase - 2"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Synexa Nxtagent.ai kaswika nekkanti  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Synexa"
      - cell "Nxtagent.ai"
      - cell "kaswika nekkanti"
      - cell " ":
        - button ""
        - button ""
    - row " The Priceline Group Priceline Group - Phase 1 Emp_DnNgRA User_ATyraJfk  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "The Priceline Group"
      - cell "Priceline Group - Phase 1"
      - cell "Emp_DnNgRA User_ATyraJfk"
      - cell " ":
        - button ""
        - button ""
    - row " Internal Recruitment Emp_DnNgRA User_ATyraJfk  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "Recruitment"
      - cell "Emp_DnNgRA User_ATyraJfk"
      - cell " ":
        - button ""
        - button ""
    - row " Internal Training and Development Emp_DnNgRA User_ATyraJfk  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Internal"
      - cell "Training and Development"
      - cell "Emp_DnNgRA User_ATyraJfk"
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
  731 |     await expect(this.projectReportHeading).toBeVisible();
  732 |   }
  733 |     async gotoAttendanceSummary(): Promise<void> {
  734 |     await this.reportsMenu.click();
  735 | 
  736 |     const attendanceSummaryLink = this.page.getByRole("menuitem", {
  737 |       name: "Attendance Summary",
  738 |       exact: true,
  739 |     });
  740 | 
  741 |     await expect(attendanceSummaryLink).toBeVisible();
  742 | 
  743 |     await attendanceSummaryLink.click();
  744 | 
  745 |    await this.page.waitForURL(/time\/displayAttendanceSummaryReportCriteria$/, {
  746 |   timeout: 30000, // 30 seconds
  747 | });
  748 | 
  749 | 
  750 |     await expect(this.attendanceSummaryReportHeading).toBeVisible();
  751 |   }
  752 | 
  753 |       async gotoEmployeeReport(): Promise<void> {
  754 |     await this.reportsMenu.click();
  755 | 
  756 |     const employeeReportLink = this.page.getByRole("menuitem", {
  757 |      name: "Employee Reports",
  758 |       exact: true,
  759 |     });
  760 | 
  761 |     await expect(employeeReportLink).toBeVisible();
  762 | 
  763 |     await employeeReportLink.click();
  764 | 
  765 |    await this.page.waitForURL(/time\/displayEmployeeReportCriteria$/, {
  766 |   timeout: 30000, // 30 seconds
  767 | });
  768 | 
  769 | 
  770 |     await expect(this.employeeReportHeading).toBeVisible();
  771 |   }
  772 | 
  773 |  async gotoCustomers(): Promise<void> {
  774 |   await expect(
  775 |     this.projectInfoMenu
  776 |   ).toBeVisible();
  777 | 
  778 |   await this.projectInfoMenu.click();
  779 | 
  780 |   const customersLink = this.page
  781 |     .locator('.oxd-dropdown-menu:visible')
  782 |     .getByText('Customers', {
  783 |       exact: true,
  784 |     });
  785 | 
  786 |   await expect(
  787 |     customersLink
  788 |   ).toBeVisible();
  789 | 
  790 |   await customersLink.click();
  791 | 
  792 |   await this.page.waitForURL(
  793 |     /\/time\/viewCustomers$/,
  794 |     {
  795 |       timeout: 30_000,
  796 |     }
  797 |   );
  798 | 
  799 |   await expect(
  800 |     this.customersHeading
  801 |   ).toBeVisible();
  802 | }
  803 | async gotoProjects(): Promise<void> {
  804 |   await expect(
  805 |     this.projectInfoMenu
  806 |   ).toBeVisible();
  807 | 
  808 |   await this.projectInfoMenu.click();
  809 | 
  810 |   const projectsLink = this.page
  811 |     .locator('.oxd-dropdown-menu:visible')
  812 |     .getByText('Projects', {
  813 |       exact: true,
  814 |     });
  815 | 
  816 |   await expect(
  817 |     projectsLink
  818 |   ).toBeVisible();
  819 | 
  820 |   await projectsLink.click();
  821 | 
  822 |   await this.page.waitForURL(
  823 |     /\/time\/viewProjects$/,
  824 |     {
  825 |       timeout: 30_000,
  826 |     }
  827 |   );
  828 | 
  829 |   await expect(
  830 |     this.projectsHeading
> 831 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  832 | }
  833 |   async selectEmployeeFromAutocomplete(searchText: string): Promise<string> {
  834 |     await this.employeeNameInput.fill(searchText);
  835 | 
  836 |     await expect(this.employeeAutocompleteDropdown).toBeVisible({
  837 |       timeout: 15_000,
  838 |     });
  839 | 
  840 |     const validOptions = this.employeeAutocompleteOptions.filter({
  841 |       hasNotText: /Searching|No Records Found/i,
  842 |     });
  843 | 
  844 |     const optionCount = await validOptions.count();
  845 | 
  846 |     if (optionCount === 0) {
  847 |       throw new Error(`No employee was found for: ${searchText}`);
  848 |     }
  849 | 
  850 |     const firstOption = validOptions.first();
  851 | 
  852 |     const employeeName = (await firstOption.innerText()).trim();
  853 | 
  854 |     await firstOption.click();
  855 | 
  856 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  857 | 
  858 |     return employeeName;
  859 |   }
  860 | 
  861 |   async waitForLoadingToFinish(): Promise<void> {
  862 |     await expect(this.loadingSpinner).toBeHidden({
  863 |       timeout: 30_000,
  864 |     });
  865 |   }
  866 | 
  867 |   async selectAttendanceEmployeeFromAutocomplete(
  868 |     searchText: string,
  869 |   ): Promise<string> {
  870 |     const maxAttempts = 3;
  871 | 
  872 |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  873 |       await this.attendanceEmployeeInput.fill(searchText);
  874 | 
  875 |       const dropdown = this.page.locator(
  876 |         ".oxd-autocomplete-dropdown:visible",
  877 |       );
  878 | 
  879 |       await expect(dropdown).toBeVisible({ timeout: 15_000 });
  880 | 
  881 |       const validOptions = dropdown
  882 |         .locator(".oxd-autocomplete-option")
  883 |         .filter({ hasNotText: /Searching|No Records Found/i });
  884 | 
  885 |       const noRecords = dropdown.getByText("No Records Found", {
  886 |         exact: true,
  887 |       });
  888 | 
  889 |       // Do not inspect the option count while the autocomplete is still in
  890 |       // its transient "Searching..." state.
  891 |       await validOptions.first().or(noRecords).waitFor({
  892 |         state: "visible",
  893 |         timeout: 15_000,
  894 |       });
  895 | 
  896 |       if (await validOptions.first().isVisible()) {
  897 |         const firstOption = validOptions.first();
  898 |         const selectedEmployee = (await firstOption.innerText()).trim();
  899 | 
  900 |         await firstOption.click();
  901 |         await expect(this.attendanceEmployeeInput).toHaveValue(
  902 |           selectedEmployee,
  903 |         );
  904 | 
  905 |         return selectedEmployee;
  906 |       }
  907 | 
  908 |       await this.attendanceEmployeeInput.press("Escape");
  909 | 
  910 |       if (attempt < maxAttempts) {
  911 |         await this.page.waitForTimeout(1_000);
  912 |         await this.attendanceEmployeeInput.clear();
  913 |       }
  914 |     }
  915 | 
  916 |     throw new Error(
  917 |       `No attendance employee found for: ${searchText} after ${maxAttempts} attempts`,
  918 |     );
  919 |   }
  920 |   
  921 |   async gotoMyAttendanceRecords():
  922 | Promise<void> {
  923 |   await this.attendanceMenu.click();
  924 | 
  925 |   const myRecordsLink = this.page
  926 |     .locator('.oxd-dropdown-menu:visible')
  927 |     .getByText('My Records', {
  928 |       exact: true,
  929 |     });
  930 | 
  931 |   await expect(
```