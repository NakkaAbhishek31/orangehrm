# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:90:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').nth(1).locator('.oxd-table-cell').nth(2)
Expected: "Admin"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').nth(1).locator('.oxd-table-cell').nth(2)
    3 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
      - unexpected value "ESS"

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
      - paragraph: manda user
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
- text: User Role Admin  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda user"
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
```

# Test source

```ts
  18  |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  19  | 
  20  |   // Verify the System Users heading.
  21  |   await expect(adminPage.systemUsersHeading).toBeVisible();
  22  |   // Verify the Username filter.
  23  |   await expect(adminPage.usernameInput).toBeVisible();
  24  |   // Verify the User Role filter.
  25  |   await expect(adminPage.userRoleDropdown).toBeVisible();
  26  |   // Verify the Employee Name filter.
  27  |   await expect(adminPage.employeeNameInput).toBeVisible();
  28  |   // Verify the Status filter.
  29  |   await expect(adminPage.statusDropdown).toBeVisible();
  30  |   // Verify Search, Reset, and Add buttons.
  31  |   await expect(adminPage.searchButton).toBeVisible();
  32  |   await expect(adminPage.resetButton).toBeVisible();
  33  |   await expect(adminPage.addButton).toBeVisible();
  34  |   // Verify the System Users table is visible.
  35  |   await expect(adminPage.systemUsersTable).toBeVisible();
  36  | });
  37  | 
  38  | test("TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression", async ({
  39  |   loginPage,
  40  |   navigationPage,
  41  |   adminPage,
  42  | }) => {
  43  |   await loginPage.visitPage();
  44  |   await loginPage.login("Admin", "admin123");
  45  |   await loginPage.verifyLoginSuccessful();
  46  | 
  47  |   await navigationPage.gotoAdmin();
  48  |   await adminPage.gotoUserManagementUsers();
  49  | 
  50  |   await adminPage.searchSystemUsers({
  51  |     username: "Admin",
  52  |   });
  53  | 
  54  |   await adminPage.verifySystemUserResult({
  55  |     username: "Admin",
  56  |   });
  57  | 
  58  |   await adminPage.resetSystemUserFilters();
  59  | });
  60  | 
  61  | test("TC_ADMIN_043 - Admin should see no records for a nonexistent username @negative @search @regression", async ({
  62  |   loginPage,
  63  |   navigationPage,
  64  |   adminPage,
  65  | }) => {
  66  |   // Login as Admin.
  67  |   const username = `Unknown${Date.now()}`;
  68  |   await loginPage.visitPage();
  69  |   await loginPage.login("Admin", "admin123");
  70  |   await loginPage.verifyLoginSuccessful();
  71  |   // Navigate to Admin → User Management → Users.
  72  |   await navigationPage.gotoAdmin();
  73  |   await adminPage.gotoUserManagementUsers();
  74  |   // Enter a unique nonexistent username.
  75  |   await adminPage.searchSystemUsers({
  76  |     username,
  77  |   });
  78  | 
  79  |   // Verify “No Records Found” is displayed.
  80  |   // Verify the users table contains zero rows.
  81  |   // Verify the Username filter keeps the entered value.
  82  |   // Reset the search filters.
  83  |   await expect(adminPage.noRecordsFound).toBeVisible();
  84  |   await expect(adminPage.userRows).toHaveCount(0);
  85  |   await expect(adminPage.usernameInput).toHaveValue(username);
  86  |   await adminPage.resetSystemUserFilters();
  87  |   await expect(adminPage.usernameInput).toHaveValue("");
  88  | });
  89  | 
  90  | test('TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression',
  91  |   async ({ loginPage, navigationPage, adminPage }) => {
  92  |     const userRole = 'Admin';
  93  |      // Login as Admin.
  94  |   await loginPage.visitPage();
  95  |   await loginPage.login("Admin", "admin123");
  96  |   await loginPage.verifyLoginSuccessful();
  97  |   // Navigate to Admin → User Management → Users.
  98  |   await navigationPage.gotoAdmin();
  99  |   await adminPage.gotoUserManagementUsers();
  100 |     // Select “Admin” from the User Role filter.
  101 |     await adminPage.searchSystemUsers({
  102 |       userRole
  103 |     })
  104 |     // Verify at least one user record appears.
  105 |        await expect(
  106 |       adminPage.userRows.first()
  107 |     ).toBeVisible({
  108 |       timeout: 15_000,
  109 |     });
  110 |     const rowCount=await adminPage.userRows.count();
  111 |     expect(rowCount).toBeGreaterThan(0);
  112 | 
  113 |     for(let index=0;index<rowCount;index++)
  114 |     {
  115 |        const rolcell=adminPage.userRows.nth(index).locator('.oxd-table-cell')
  116 |     .nth(2);
  117 | 
> 118 |      await expect(rolcell).toHaveText(userRole);
      |                            ^ Error: expect(locator).toHaveText(expected) failed
  119 |     }
  120 |     // Verify “No Records Found” is not displayed.
  121 |  await expect(adminPage.noRecordsFound).not.toBeVisible();
  122 | 
  123 |     // Reset the filters.
  124 |     await adminPage.resetSystemUserFilters();
  125 |        await expect(
  126 |       adminPage.userRoleDropdown
  127 |     ).toContainText('Select');
  128 |   }
  129 | );
  130 | 
  131 | 
  132 | test('TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression',
  133 |   async ({ loginPage, navigationPage, adminPage }) => {
  134 |     const status = 'Enabled';
  135 |     // Login as Admin.
  136 |    await loginPage.visitPage();
  137 |    await loginPage.login("Admin", "admin123");
  138 |    await loginPage.verifyLoginSuccessful();
  139 |     // Navigate to Admin → User Management → Users.
  140 |       await navigationPage.gotoAdmin();
  141 |   await adminPage.gotoUserManagementUsers();
  142 |     // Select “Enabled” from the Status filter.
  143 |     // Click Search.
  144 |      await adminPage.searchSystemUsers({
  145 |       status
  146 |      });
  147 |     await expect(
  148 |       adminPage.userRows.first()
  149 |     ).toBeVisible({
  150 |       timeout: 15_000,
  151 |     });
  152 | 
  153 |     const rowCount =
  154 |       await adminPage.userRows.count();
  155 | 
  156 |     expect(rowCount).toBeGreaterThan(0);
  157 | 
  158 |     for (
  159 |       let index = 0;
  160 |       index < rowCount;
  161 |       index++
  162 |     ) {
  163 |       const statusCell = adminPage.userRows
  164 |         .nth(index)
  165 |         .locator('.oxd-table-cell')
  166 |         .nth(4);
  167 | 
  168 |       await expect(statusCell).toHaveText(
  169 |         status
  170 |       );
  171 |     }
  172 | 
  173 |     await expect(
  174 |       adminPage.noRecordsFound
  175 |     ).not.toBeVisible();
  176 | 
  177 |     await adminPage.resetSystemUserFilters();
  178 | 
  179 |     await expect(
  180 |       adminPage.statusDropdown
  181 |     ).toContainText('Select');
  182 |   
  183 |   }
  184 | );
  185 | 
  186 | test('TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression',
  187 |   async ({ loginPage, navigationPage, adminPage }) => {
  188 |     const filters = {
  189 |   username: 'Admin',
  190 |   userRole: 'Admin',
  191 |   status: 'Enabled',
  192 | } as const;
  193 |      await loginPage.visitPage();
  194 |    await loginPage.login("Admin", "admin123");
  195 |    await loginPage.verifyLoginSuccessful();
  196 |     // Navigate to Admin → User Management → Users.
  197 |       await navigationPage.gotoAdmin();
  198 |   await adminPage.gotoUserManagementUsers();
  199 |     // Select “Enabled” from the Status filter.
  200 |     // Click Search.
  201 |     // Enter “Admin” in the Username filter.
  202 |     // Select “Admin” as User Role.
  203 |     // Select “Enabled” as Status.
  204 |     // Click Search.
  205 |      await adminPage.searchSystemUsers(filters);
  206 |     // Verify exactly one matching row appears.
  207 |     // Verify Username is “Admin”.
  208 |     // Verify User Role is “Admin”.
  209 |     // Verify Status is “Enabled”.
  210 |     // Reset all filters.
  211 |        await expect(
  212 |       adminPage.userRows.first()
  213 |     ).toBeVisible({
  214 |       timeout: 15_000,
  215 |     });
  216 | 
  217 |    const rowCount =
  218 |       await adminPage.userRows.count();
```