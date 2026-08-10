# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:91:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').nth(3).locator('.oxd-table-cell').nth(2)
Expected: "Admin"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').nth(3).locator('.oxd-table-cell').nth(2)

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
      - paragraph: Ge orged Russe lld
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
- text: (3) Records Found
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
    - row " Admin Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Ge orged Russe lld"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Ravinder Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ravinder"
      - cell "Admin"
      - cell "Ge orged Russe lld"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Ravinder@123 Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ravinder@123"
      - cell "Admin"
      - cell "Ge orged Russe lld"
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
  21  |   // Verify the System Users heading.
  22  |   await expect(adminPage.systemUsersHeading).toBeVisible();
  23  |   // Verify the Username filter.
  24  |   await expect(adminPage.usernameInput).toBeVisible();
  25  |   // Verify the User Role filter.
  26  |   await expect(adminPage.userRoleDropdown).toBeVisible();
  27  |   // Verify the Employee Name filter.
  28  |   await expect(adminPage.employeeNameInput).toBeVisible();
  29  |   // Verify the Status filter.
  30  |   await expect(adminPage.statusDropdown).toBeVisible();
  31  |   // Verify Search, Reset, and Add buttons.
  32  |   await expect(adminPage.searchButton).toBeVisible();
  33  |   await expect(adminPage.resetButton).toBeVisible();
  34  |   await expect(adminPage.addButton).toBeVisible();
  35  |   // Verify the System Users table is visible.
  36  |   await expect(adminPage.systemUsersTable).toBeVisible();
  37  | });
  38  | 
  39  | test("TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression", async ({
  40  |   loginPage,
  41  |   navigationPage,
  42  |   adminPage,
  43  | }) => {
  44  |   await loginPage.visitPage();
  45  |   await loginPage.login("Admin", "admin123");
  46  |   await loginPage.verifyLoginSuccessful();
  47  | 
  48  |   await navigationPage.gotoAdmin();
  49  |   await adminPage.gotoUserManagementUsers();
  50  | 
  51  |   await adminPage.searchSystemUsers({
  52  |     username: "Admin",
  53  |   });
  54  | 
  55  |   await adminPage.verifySystemUserResult({
  56  |     username: "Admin",
  57  |   });
  58  | 
  59  |   await adminPage.resetSystemUserFilters();
  60  | });
  61  | 
  62  | test("TC_ADMIN_043 - Admin should see no records for a nonexistent username @negative @search @regression", async ({
  63  |   loginPage,
  64  |   navigationPage,
  65  |   adminPage,
  66  | }) => {
  67  |   // Login as Admin.
  68  |   const username = `Unknown${Date.now()}`;
  69  |   await loginPage.visitPage();
  70  |   await loginPage.login("Admin", "admin123");
  71  |   await loginPage.verifyLoginSuccessful();
  72  |   // Navigate to Admin → User Management → Users.
  73  |   await navigationPage.gotoAdmin();
  74  |   await adminPage.gotoUserManagementUsers();
  75  |   // Enter a unique nonexistent username.
  76  |   await adminPage.searchSystemUsers({
  77  |     username,
  78  |   });
  79  | 
  80  |   // Verify “No Records Found” is displayed.
  81  |   // Verify the users table contains zero rows.
  82  |   // Verify the Username filter keeps the entered value.
  83  |   // Reset the search filters.
  84  |   await expect(adminPage.noRecordsFound).toBeVisible();
  85  |   await expect(adminPage.userRows).toHaveCount(0);
  86  |   await expect(adminPage.usernameInput).toHaveValue(username);
  87  |   await adminPage.resetSystemUserFilters();
  88  |   await expect(adminPage.usernameInput).toHaveValue("");
  89  | });
  90  | 
  91  | test("TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression", async ({
  92  |   loginPage,
  93  |   navigationPage,
  94  |   adminPage,
  95  | }) => {
  96  |   const userRole = "Admin";
  97  |   // Login as Admin.
  98  |   await loginPage.visitPage();
  99  |   await loginPage.login("Admin", "admin123");
  100 |   await loginPage.verifyLoginSuccessful();
  101 |   // Navigate to Admin → User Management → Users.
  102 |   await navigationPage.gotoAdmin();
  103 |   await adminPage.gotoUserManagementUsers();
  104 |   // Select “Admin” from the User Role filter.
  105 |   await adminPage.searchSystemUsers({
  106 |     userRole,
  107 |   });
  108 |   // Verify at least one user record appears.
  109 |   await expect(adminPage.userRows.first()).toBeVisible({
  110 |     timeout: 15_000,
  111 |   });
  112 |   const rowCount = await adminPage.userRows.count();
  113 |   expect(rowCount).toBeGreaterThan(0);
  114 | 
  115 |   for (let index = 0; index < rowCount; index++) {
  116 |     const rolcell = adminPage.userRows
  117 |       .nth(index)
  118 |       .locator(".oxd-table-cell")
  119 |       .nth(2);
  120 | 
> 121 |     await expect(rolcell).toHaveText(userRole);
      |                           ^ Error: expect(locator).toHaveText(expected) failed
  122 |   }
  123 |   // Verify “No Records Found” is not displayed.
  124 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  125 | 
  126 |   // Reset the filters.
  127 |   await adminPage.resetSystemUserFilters();
  128 |   await expect(adminPage.userRoleDropdown).toContainText("Select");
  129 | });
  130 | 
  131 | test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  132 |   loginPage,
  133 |   navigationPage,
  134 |   adminPage,
  135 | }) => {
  136 |   const status = "Enabled";
  137 |   // Login as Admin.
  138 |   await loginPage.visitPage();
  139 |   await loginPage.login("Admin", "admin123");
  140 |   await loginPage.verifyLoginSuccessful();
  141 |   // Navigate to Admin → User Management → Users.
  142 |   await navigationPage.gotoAdmin();
  143 |   await adminPage.gotoUserManagementUsers();
  144 |   // Select “Enabled” from the Status filter.
  145 |   // Click Search.
  146 |   await adminPage.searchSystemUsers({
  147 |     status,
  148 |   });
  149 |   await expect(adminPage.userRows.first()).toBeVisible({
  150 |     timeout: 15_000,
  151 |   });
  152 | 
  153 |   const rowCount = await adminPage.userRows.count();
  154 | 
  155 |   expect(rowCount).toBeGreaterThan(0);
  156 | 
  157 |   for (let index = 0; index < rowCount; index++) {
  158 |     const statusCell = adminPage.userRows
  159 |       .nth(index)
  160 |       .locator(".oxd-table-cell")
  161 |       .nth(4);
  162 | 
  163 |     await expect(statusCell).toHaveText(status);
  164 |   }
  165 | 
  166 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  167 | 
  168 |   await adminPage.resetSystemUserFilters();
  169 | 
  170 |   await expect(adminPage.statusDropdown).toContainText("Select");
  171 | });
  172 | 
  173 | test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  174 |   loginPage,
  175 |   navigationPage,
  176 |   adminPage,
  177 | }) => {
  178 |   const filters = {
  179 |     username: "Admin",
  180 |     userRole: "Admin",
  181 |     status: "Enabled",
  182 |   } as const;
  183 |   await loginPage.visitPage();
  184 |   await loginPage.login("Admin", "admin123");
  185 |   await loginPage.verifyLoginSuccessful();
  186 |   // Navigate to Admin → User Management → Users.
  187 |   await navigationPage.gotoAdmin();
  188 |   await adminPage.gotoUserManagementUsers();
  189 |   // Select “Enabled” from the Status filter.
  190 |   // Click Search.
  191 |   // Enter “Admin” in the Username filter.
  192 |   // Select “Admin” as User Role.
  193 |   // Select “Enabled” as Status.
  194 |   // Click Search.
  195 |   await adminPage.searchSystemUsers(filters);
  196 |   // Verify exactly one matching row appears.
  197 |   // Verify Username is “Admin”.
  198 |   // Verify User Role is “Admin”.
  199 |   // Verify Status is “Enabled”.
  200 |   // Reset all filters.
  201 |   await expect(adminPage.userRows.first()).toBeVisible({
  202 |     timeout: 15_000,
  203 |   });
  204 | 
  205 |   const rowCount = await adminPage.userRows.count();
  206 |   expect(rowCount).toBeGreaterThan(0);
  207 | 
  208 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  209 | 
  210 |   await adminPage.resetSystemUserFilters();
  211 |   await expect(adminPage.usernameInput).toHaveValue("");
  212 | 
  213 |   await expect(adminPage.userRoleDropdown).toContainText("Select");
  214 | 
  215 |   await expect(adminPage.statusDropdown).toContainText("Select");
  216 | });
  217 | 
  218 | test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  219 |   loginPage,
  220 |   navigationPage,
  221 |   pimPage,
```