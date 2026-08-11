# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_087 - Employee should remain after deletion is cancelled @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:1186:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('0576', { exact: true }) })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('0576', { exact: true }) })
    23 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Daisy Nguyen
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: "0576"
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: No Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup
    - generic [ref=f4e267]:
      - paragraph [ref=f4e268]: OrangeHRM OS 5.9
      - paragraph [ref=f4e269]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e270] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  781 | 
  782 |   async deleteSelectedEmployees(): Promise<void> {
  783 |     const deleteSelectedButton = this.page.getByRole("button", {
  784 |       name: /Delete Selected/i,
  785 |     });
  786 | 
  787 |     await expect(deleteSelectedButton).toBeVisible();
  788 |     await deleteSelectedButton.click();
  789 | 
  790 |     const confirmationDialog = this.page.getByRole("dialog");
  791 | 
  792 |     await expect(confirmationDialog).toBeVisible();
  793 | 
  794 |     const deleteResponse = this.page.waitForResponse(
  795 |       (response) =>
  796 |         response.url().includes("/api/v2/pim/employees") &&
  797 |         response.request().method() === "DELETE" &&
  798 |         response.ok(),
  799 |       { timeout: 20_000 },
  800 |     );
  801 | 
  802 |     await confirmationDialog
  803 |       .getByRole("button", {
  804 |         name: /Yes, Delete/i,
  805 |       })
  806 |       .click();
  807 | 
  808 |     await deleteResponse;
  809 | 
  810 |     await expect(confirmationDialog).toBeHidden();
  811 | 
  812 |     await expect(this.successToast).toContainText("Successfully Deleted");
  813 | 
  814 |     await expect(this.loadingSpinner).toBeHidden();
  815 |   }
  816 | 
  817 |   async selectAllVisibleEmployees(): Promise<void> {
  818 |     await expect(this.loadingSpinner).toBeHidden({
  819 |       timeout: 20_000,
  820 |     });
  821 | 
  822 |     await expect(this.employeeRows.first()).toBeVisible({
  823 |       timeout: 20_000,
  824 |     });
  825 | 
  826 |     const headerCheckbox = this.page.locator(
  827 |       '.oxd-table-header input[type="checkbox"]',
  828 |     );
  829 | 
  830 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  831 | 
  832 |     await expect
  833 |       .poll(async () => rowCheckboxes.count(), {
  834 |         timeout: 20_000,
  835 |         message: "Waiting for Employee List rows to load",
  836 |       })
  837 |       .toBeGreaterThan(0);
  838 | 
  839 |     const rowCount = await rowCheckboxes.count();
  840 | 
  841 |     await headerCheckbox.check({
  842 |       force: true,
  843 |     });
  844 | 
  845 |     await expect(headerCheckbox).toBeChecked();
  846 | 
  847 |     for (let index = 0; index < rowCount; index++) {
  848 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  849 |     }
  850 |   }
  851 | 
  852 |   async deselectAllVisibleEmployees(): Promise<void> {
  853 |     const headerCheckbox = this.page.locator(
  854 |       '.oxd-table-header input[type="checkbox"]',
  855 |     );
  856 | 
  857 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  858 | 
  859 |     const rowCount = await rowCheckboxes.count();
  860 | 
  861 |     expect(rowCount).toBeGreaterThan(0);
  862 | 
  863 |     await headerCheckbox.uncheck({
  864 |       force: true,
  865 |     });
  866 | 
  867 |     await expect(headerCheckbox).not.toBeChecked();
  868 | 
  869 |     for (let index = 0; index < rowCount; index++) {
  870 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  871 |     }
  872 |   }
  873 | 
  874 |   async cancelEmployeeDeletion(employeeId: string): Promise<void> {
  875 |     const employeeRow = this.employeeRows.filter({
  876 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(employeeId, {
  877 |         exact: true,
  878 |       }),
  879 |     });
  880 | 
> 881 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  882 | 
  883 |     const deleteButton = employeeRow.locator("button").filter({
  884 |       has: this.page.locator("i.bi-trash"),
  885 |     });
  886 | 
  887 |     await expect(deleteButton).toBeVisible();
  888 |     await deleteButton.click();
  889 | 
  890 |     const confirmationDialog = this.page.getByRole("dialog");
  891 | 
  892 |     await expect(confirmationDialog).toBeVisible();
  893 | 
  894 |     await expect(confirmationDialog).toContainText("Are you Sure?");
  895 | 
  896 |     await confirmationDialog
  897 |       .getByRole("button", {
  898 |         name: /No, Cancel/i,
  899 |       })
  900 |       .click();
  901 | 
  902 |     await expect(confirmationDialog).toBeHidden();
  903 | 
  904 |     // Confirm the employee remains in the table.
  905 |     await expect(employeeRow).toHaveCount(1);
  906 | 
  907 |     await expect(employeeRow.locator(".oxd-table-cell").nth(1)).toHaveText(
  908 |       employeeId,
  909 |     );
  910 |   }
  911 | 
  912 |   private generateUniqueEmployeeId(): string {
  913 |     const timestamp = Date.now().toString(36).slice(-5);
  914 | 
  915 |     const randomValue = Math.random().toString(36).slice(2, 6);
  916 | 
  917 |     return `E${timestamp}${randomValue}`.toUpperCase().slice(0, 10);
  918 |   }
  919 | }
  920 | 
```