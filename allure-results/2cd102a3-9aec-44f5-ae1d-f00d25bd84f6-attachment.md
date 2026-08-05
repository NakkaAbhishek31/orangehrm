# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:1070:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-dialog-container')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-dialog-container')

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
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Meloni Narendra Modi
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (2) Records Selected
- button " Delete Selected"
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox "" [checked]
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " @12345ABC ESS sam joy Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "@12345ABC"
      - cell "ESS"
      - cell "sam joy"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Admin Admin Meloni Narendra Modi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Meloni Narendra Modi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Ajinath ESS Ajinath rathod Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ajinath"
      - cell "ESS"
      - cell "Ajinath rathod"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " armando.oreilly ESS Sebastian Frami Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "armando.oreilly"
      - cell "ESS"
      - cell "Sebastian Frami"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Charlene49 ESS Lindsay Jacobs Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Charlene49"
      - cell "ESS"
      - cell "Lindsay Jacobs"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Employee ESS Employee User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Employee"
      - cell "ESS"
      - cell "Employee User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess.glwuk7 ESS Harry Runolfssonhq1vam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess.glwuk7"
      - cell "ESS"
      - cell "Harry Runolfssonhq1vam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1785901382071149 ESS AutoA1785901382071149 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essA1785901382071149"
      - cell "ESS"
      - cell "AutoA1785901382071149 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1785901778590402 ESS AutoA1785901778590402 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essA1785901778590402"
      - cell "ESS"
      - cell "AutoA1785901778590402 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1785902242199489 ESS AutoA1785902242199489 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essA1785902242199489"
      - cell "ESS"
      - cell "AutoA1785902242199489 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1785901382071149 ESS AutoB1785901382071149 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essB1785901382071149"
      - cell "ESS"
      - cell "AutoB1785901382071149 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1785901778590402 ESS AutoB1785901778590402 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essB1785901778590402"
      - cell "ESS"
      - cell "AutoB1785901778590402 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1785902242199489 ESS AutoB1785902242199489 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essB1785902242199489"
      - cell "ESS"
      - cell "AutoB1785902242199489 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jay1234 Admin Meloni Narendra Modi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jay1234"
      - cell "Admin"
      - cell "Meloni Narendra Modi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " john.admin01 Admin John Smith_670614005 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "john.admin01"
      - cell "Admin"
      - cell "John Smith_670614005"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " JudeSir Admin Harry Runolfssonhq1vam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "JudeSir"
      - cell "Admin"
      - cell "Harry Runolfssonhq1vam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mercedes_Schroeder92 ESS Issac Nitzsche Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mercedes_Schroeder92"
      - cell "ESS"
      - cell "Issac Nitzsche"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Newuser ESS Meloni Narendra Modi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Newuser"
      - cell "ESS"
      - cell "Meloni Narendra Modi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Nmodijii ESS Meloni Narendra Modi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Nmodijii"
      - cell "ESS"
      - cell "Meloni Narendra Modi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Pat49 ESS Clair Leannon Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Pat49"
      - cell "ESS"
      - cell "Clair Leannon"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Roman ESS sam joy Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Roman"
      - cell "ESS"
      - cell "sam joy"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user_670614005 ESS John Smith_670614005 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user_670614005"
      - cell "ESS"
      - cell "John Smith_670614005"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Vaishnavi ESS Vaishnavi Auti Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Vaishnavi"
      - cell "ESS"
      - cell "Vaishnavi Auti"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- dialog:
  - document:
    - button "×"
    - paragraph: Are you Sure?
    - paragraph: The selected record will be permanently deleted. Are you sure you want to continue?
    - button "No, Cancel"
    - button " Yes, Delete"
```

# Test source

```ts
  748 |       'input[type="checkbox"]'
  749 |     );
  750 | 
  751 |   // Exclude disabled row checkboxes.
  752 |   const selectableRowCheckboxes =
  753 |     this.userRows.locator(
  754 |       'input[type="checkbox"]:not(:disabled)'
  755 |     );
  756 | 
  757 |   const selectableRowCount =
  758 |     await selectableRowCheckboxes.count();
  759 | 
  760 |   expect(
  761 |     selectableRowCount
  762 |   ).toBeGreaterThan(0);
  763 | 
  764 |   await headerCheckboxLabel.click();
  765 | 
  766 |   await expect(
  767 |     headerCheckbox
  768 |   ).toBeChecked();
  769 | 
  770 |   await expect
  771 |     .poll(
  772 |       async () =>
  773 |         selectableRowCheckboxes.evaluateAll(
  774 |           checkboxes =>
  775 |             checkboxes.filter(
  776 |               checkbox =>
  777 |                 (
  778 |                   checkbox as HTMLInputElement
  779 |                 ).checked
  780 |             ).length
  781 |         ),
  782 |       {
  783 |         timeout: 15_000,
  784 |       }
  785 |     )
  786 |     .toBe(selectableRowCount);
  787 | }
  788 | 
  789 | async deselectAllVisibleSystemUsers(): Promise<void> {
  790 |   const headerCheckboxLabel =
  791 |     this.page.locator(
  792 |       '.oxd-table-header ' +
  793 |       '.oxd-checkbox-wrapper label'
  794 |     );
  795 | 
  796 |   const headerCheckbox =
  797 |     this.page.locator(
  798 |       '.oxd-table-header ' +
  799 |       'input[type="checkbox"]'
  800 |     );
  801 | 
  802 |   const selectableRowCheckboxes =
  803 |     this.userRows.locator(
  804 |       'input[type="checkbox"]:not(:disabled)'
  805 |     );
  806 | 
  807 |   await headerCheckboxLabel.click();
  808 | 
  809 |   await expect(
  810 |     headerCheckbox
  811 |   ).not.toBeChecked();
  812 | 
  813 |   await expect
  814 |     .poll(
  815 |       async () =>
  816 |         selectableRowCheckboxes.evaluateAll(
  817 |           checkboxes =>
  818 |             checkboxes.filter(
  819 |               checkbox =>
  820 |                 (
  821 |                   checkbox as HTMLInputElement
  822 |                 ).checked
  823 |             ).length
  824 |         ),
  825 |       {
  826 |         timeout: 15_000,
  827 |       }
  828 |     )
  829 |     .toBe(0);
  830 | }
  831 | 
  832 | async deleteSelectedSystemUsers(): Promise<void> {
  833 |   await expect(
  834 |     this.deleteSelectedButton
  835 |   ).toBeVisible({
  836 |     timeout: 15_000,
  837 |   });
  838 | 
  839 |   await this.deleteSelectedButton.click();
  840 | 
  841 |   const confirmationDialog =
  842 |     this.page.locator(
  843 |       '.oxd-dialog-container'
  844 |     );
  845 | 
  846 |   await expect(
  847 |     confirmationDialog
> 848 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  849 | 
  850 |   const confirmDeleteButton =
  851 |     confirmationDialog.locator(
  852 |       'button.oxd-button--label-danger'
  853 |     );
  854 | 
  855 |   await expect(
  856 |     confirmDeleteButton
  857 |   ).toBeVisible();
  858 | 
  859 |   await confirmDeleteButton.click();
  860 | 
  861 |   await expect(
  862 |     confirmationDialog
  863 |   ).toBeHidden({
  864 |     timeout: 20_000,
  865 |   });
  866 | 
  867 |   await expect(
  868 |     this.toastMessage.filter({
  869 |       hasText: /Successfully Deleted/i,
  870 |     })
  871 |   ).toBeVisible({
  872 |     timeout: 20_000,
  873 |   });
  874 | 
  875 |   await expect(
  876 |     this.loadingSpinner
  877 |   ).toBeHidden();
  878 | }
  879 | 
  880 | }
  881 | 
```