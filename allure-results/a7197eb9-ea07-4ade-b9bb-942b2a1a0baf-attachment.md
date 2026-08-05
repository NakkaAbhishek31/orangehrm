# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:130:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').nth(18).locator('.oxd-table-cell').nth(4)
Expected: "Enabled"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').nth(18).locator('.oxd-table-cell').nth(4)

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
      - paragraph: mandaa user
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
- text: Status Enabled 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (18) Records Found
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
    - row " Admin Admin mandaa user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "mandaa user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Akshvi ESS Akshvi test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Akshvi"
      - cell "ESS"
      - cell "Akshvi test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " AutoUser_2335 Admin Manoj B Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUser_2335"
      - cell "Admin"
      - cell "Manoj B"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ayush123 Admin Ayush Saha Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ayush123"
      - cell "Admin"
      - cell "Ayush Saha"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhaskar123 ESS Bhaskar Gupta Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhaskar123"
      - cell "ESS"
      - cell "Bhaskar Gupta"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavesh123 ESS Bhavesh Sahu Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavesh123"
      - cell "ESS"
      - cell "Bhavesh Sahu"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Chester.Jast ESS Lindsay Ratke Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Chester.Jast"
      - cell "ESS"
      - cell "Lindsay Ratke"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Dayne_Breitenberg65 ESS Orrin Hettinger Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Dayne_Breitenberg65"
      - cell "ESS"
      - cell "Orrin Hettinger"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Geraldine_Schmitt86 ESS Mertie Mueller Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Geraldine_Schmitt86"
      - cell "ESS"
      - cell "Mertie Mueller"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hilbert.Gerhold2 ESS Howard Hand Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hilbert.Gerhold2"
      - cell "ESS"
      - cell "Howard Hand"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Krystal.Swift83 ESS Luella Turcotte Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Krystal.Swift83"
      - cell "ESS"
      - cell "Luella Turcotte"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pallove@gmail.com Admin Pallove Jain Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pallove@gmail.com"
      - cell "Admin"
      - cell "Pallove Jain"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Phillip.Sporer ESS Mohammed Champlin Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Phillip.Sporer"
      - cell "ESS"
      - cell "Mohammed Champlin"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser10351093 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser10351093"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser10560654 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser10560654"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sharif@gmail.com ESS MD Sharif Nawaz Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sharif@gmail.com"
      - cell "ESS"
      - cell "MD Sharif Nawaz"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " sudhir@gmail.com ESS Sudhir Kalmegh Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sudhir@gmail.com"
      - cell "ESS"
      - cell "Sudhir Kalmegh"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " vijay123 ESS Vijay Chadayan Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "vijay123"
      - cell "ESS"
      - cell "Vijay Chadayan"
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
  90  | test("TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression", async ({
  91  |   loginPage,
  92  |   navigationPage,
  93  |   adminPage,
  94  | }) => {
  95  |   const userRole = "Admin";
  96  |   // Login as Admin.
  97  |   await loginPage.visitPage();
  98  |   await loginPage.login("Admin", "admin123");
  99  |   await loginPage.verifyLoginSuccessful();
  100 |   // Navigate to Admin → User Management → Users.
  101 |   await navigationPage.gotoAdmin();
  102 |   await adminPage.gotoUserManagementUsers();
  103 |   // Select “Admin” from the User Role filter.
  104 |   await adminPage.searchSystemUsers({
  105 |     userRole,
  106 |   });
  107 |   // Verify at least one user record appears.
  108 |   await expect(adminPage.userRows.first()).toBeVisible({
  109 |     timeout: 15_000,
  110 |   });
  111 |   const rowCount = await adminPage.userRows.count();
  112 |   expect(rowCount).toBeGreaterThan(0);
  113 | 
  114 |   for (let index = 0; index < rowCount; index++) {
  115 |     const rolcell = adminPage.userRows
  116 |       .nth(index)
  117 |       .locator(".oxd-table-cell")
  118 |       .nth(2);
  119 | 
  120 |     await expect(rolcell).toHaveText(userRole);
  121 |   }
  122 |   // Verify “No Records Found” is not displayed.
  123 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  124 | 
  125 |   // Reset the filters.
  126 |   await adminPage.resetSystemUserFilters();
  127 |   await expect(adminPage.userRoleDropdown).toContainText("Select");
  128 | });
  129 | 
  130 | test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  131 |   loginPage,
  132 |   navigationPage,
  133 |   adminPage,
  134 | }) => {
  135 |   const status = "Enabled";
  136 |   // Login as Admin.
  137 |   await loginPage.visitPage();
  138 |   await loginPage.login("Admin", "admin123");
  139 |   await loginPage.verifyLoginSuccessful();
  140 |   // Navigate to Admin → User Management → Users.
  141 |   await navigationPage.gotoAdmin();
  142 |   await adminPage.gotoUserManagementUsers();
  143 |   // Select “Enabled” from the Status filter.
  144 |   // Click Search.
  145 |   await adminPage.searchSystemUsers({
  146 |     status,
  147 |   });
  148 |   await expect(adminPage.userRows.first()).toBeVisible({
  149 |     timeout: 15_000,
  150 |   });
  151 | 
  152 |   const rowCount = await adminPage.userRows.count();
  153 | 
  154 |   expect(rowCount).toBeGreaterThan(0);
  155 | 
  156 |   for (let index = 0; index < rowCount; index++) {
  157 |     const statusCell = adminPage.userRows
  158 |       .nth(index)
  159 |       .locator(".oxd-table-cell")
  160 |       .nth(4);
  161 | 
> 162 |     await expect(statusCell).toHaveText(status);
      |                              ^ Error: expect(locator).toHaveText(expected) failed
  163 |   }
  164 | 
  165 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  166 | 
  167 |   await adminPage.resetSystemUserFilters();
  168 | 
  169 |   await expect(adminPage.statusDropdown).toContainText("Select");
  170 | });
  171 | 
  172 | test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  173 |   loginPage,
  174 |   navigationPage,
  175 |   adminPage,
  176 | }) => {
  177 |   const filters = {
  178 |     username: "Admin",
  179 |     userRole: "Admin",
  180 |     status: "Enabled",
  181 |   } as const;
  182 |   await loginPage.visitPage();
  183 |   await loginPage.login("Admin", "admin123");
  184 |   await loginPage.verifyLoginSuccessful();
  185 |   // Navigate to Admin → User Management → Users.
  186 |   await navigationPage.gotoAdmin();
  187 |   await adminPage.gotoUserManagementUsers();
  188 |   // Select “Enabled” from the Status filter.
  189 |   // Click Search.
  190 |   // Enter “Admin” in the Username filter.
  191 |   // Select “Admin” as User Role.
  192 |   // Select “Enabled” as Status.
  193 |   // Click Search.
  194 |   await adminPage.searchSystemUsers(filters);
  195 |   // Verify exactly one matching row appears.
  196 |   // Verify Username is “Admin”.
  197 |   // Verify User Role is “Admin”.
  198 |   // Verify Status is “Enabled”.
  199 |   // Reset all filters.
  200 |   await expect(adminPage.userRows.first()).toBeVisible({
  201 |     timeout: 15_000,
  202 |   });
  203 | 
  204 |   const rowCount = await adminPage.userRows.count();
  205 |   expect(rowCount).toBeGreaterThan(0);
  206 | 
  207 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  208 | 
  209 |   await adminPage.resetSystemUserFilters();
  210 |   await expect(adminPage.usernameInput).toHaveValue("");
  211 | 
  212 |   await expect(adminPage.userRoleDropdown).toContainText("Select");
  213 | 
  214 |   await expect(adminPage.statusDropdown).toContainText("Select");
  215 | });
  216 | 
  217 | test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  218 |   loginPage,
  219 |   navigationPage,
  220 |   pimPage,
  221 |   adminPage,
  222 | }) => {
  223 |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  224 | 
  225 |   const firstName = `Auto${uniqueValue}`;
  226 |   const middleName = "Test";
  227 |   const lastName = "User";
  228 | 
  229 |   const username = `ess${uniqueValue}`;
  230 |   const password = "Test@12345";
  231 |   // Login as Admin.
  232 |   await loginPage.visitPage();
  233 |   await loginPage.login("Admin", "admin123");
  234 |   await loginPage.verifyLoginSuccessful();
  235 | 
  236 |   await navigationPage.gotoPIM();
  237 |   await pimPage.gotoAddEmployee();
  238 |   // Create a unique employee without login details.
  239 |   // Store the employee ID and full name.
  240 | 
  241 |   const employeeId = await pimPage.addEmployee({
  242 |     firstName,
  243 |     middleName,
  244 |     lastName,
  245 |   });
  246 | 
  247 |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  248 |   const employeeTableName = `${firstName} ${lastName}`;
  249 | 
  250 |   // Navigate to Admin → User Management → Users.
  251 |   // Click Add.
  252 |   await navigationPage.gotoAdmin();
  253 |   await adminPage.gotoUserManagementUsers();
  254 |   await adminPage.gotoAddSystemUser();
  255 |   await expect(adminPage.addUserHeading).toBeVisible();
  256 |   // Select “ESS” as User Role.
  257 |   // Select the newly created employee.
  258 |   // Select “Enabled” as Status.
  259 |   // Enter a unique username.
  260 |   // Enter and confirm a valid password.
  261 |   await adminPage.fillSystemUserForm({
  262 |     userRole: "ESS",
```