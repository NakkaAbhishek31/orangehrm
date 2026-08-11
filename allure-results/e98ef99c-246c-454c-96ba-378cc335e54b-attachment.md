# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:171:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-input-field-error-message')
Timeout: 10000ms
- Expected  - 1
+ Received  + 1

@@ -2,7 +2,7 @@
    "Required",
    "Required",
    "Required",
    "Required",
    "Required",
-   "Required",
+   "Passwords do not match",
  ]

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    23 × locator resolved to 6 elements

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
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: mandaa user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Add User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e162]:
          - generic [ref=f4e164]:
            - generic [ref=f4e165]: User Role*
            - generic [ref=f4e169] [cursor=pointer]:
              - generic [ref=f4e170]: "-- Select --"
              - generic [ref=f4e171]: 
            - generic [ref=f4e173]: Required
          - generic [ref=f4e175]:
            - generic [ref=f4e176]: Employee Name*
            - textbox "Type for hints..." [ref=f4e181]
            - generic [ref=f4e182]: Required
          - generic [ref=f4e184]:
            - generic [ref=f4e185]: Status*
            - generic [ref=f4e189] [cursor=pointer]:
              - generic [ref=f4e190]: "-- Select --"
              - generic [ref=f4e191]: 
            - generic [ref=f4e193]: Required
          - generic [ref=f4e195]:
            - generic [ref=f4e196]: Username*
            - textbox [ref=f4e199]
            - generic [ref=f4e200]: Required
        - generic [ref=f4e202]:
          - generic [ref=f4e203]:
            - generic [ref=f4e204]:
              - generic [ref=f4e205]: Password*
              - textbox [ref=f4e208]
              - generic [ref=f4e209]: Required
            - paragraph [ref=f4e210]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e212]:
            - generic [ref=f4e213]: Confirm Password*
            - textbox [ref=f4e216]
            - generic [ref=f4e217]: Passwords do not match
        - separator [ref=f4e218]
        - generic [ref=f4e219]:
          - paragraph [ref=f4e220]: "* Required"
          - button "Cancel" [ref=f4e221] [cursor=pointer]
          - button "Save" [active] [ref=f4e222] [cursor=pointer]
    - generic [ref=f4e223]:
      - paragraph [ref=f4e224]: OrangeHRM OS 5.9
      - paragraph [ref=f4e225]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e226] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  84  |     expect(count).toBeGreaterThan(0);
  85  |     for (let i = 0; i < count; i++)
  86  |       await expect(
  87  |         adminPage.userRows.nth(i).locator(".oxd-table-cell").nth(2),
  88  |       ).toHaveText(data.userRole);
  89  |     await adminPage.resetSystemUserFilters();
  90  |     await expect(adminPage.userRoleDropdown).toContainText(
  91  |       data.defaultDropdownValue,
  92  |     );
  93  |   });
  94  | 
  95  |   test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  96  |     navigationPage,
  97  |     adminPage,
  98  |   }) => {
  99  |     const data = adminData.TC_ADMIN_045;
  100 |     await navigationPage.gotoAdmin();
  101 |     await adminPage.gotoUserManagementUsers();
  102 |     await adminPage.searchSystemUsers({ status: data.status });
  103 |     const count = await adminPage.userRows.count();
  104 |     expect(count).toBeGreaterThan(0);
  105 |     for (let i = 0; i < count; i++)
  106 |       await expect(
  107 |         adminPage.userRows.nth(i).locator(".oxd1-table-cell").nth(4),
  108 |       ).toHaveText(data.status);
  109 |     await adminPage.resetSystemUserFilters();
  110 |     await expect(adminPage.statusDropdown).toContainText(
  111 |       data.defaultDropdownValue,
  112 |     );
  113 |   });
  114 | 
  115 |   test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  116 |     navigationPage,
  117 |     adminPage,
  118 |   }) => {
  119 |     const data = adminData.TC_ADMIN_046;
  120 |     await navigationPage.gotoAdmin();
  121 |     await adminPage.gotoUserManagementUsers();
  122 |     await adminPage.searchSystemUsers(data.filters);
  123 |     await expect(adminPage.userRows.first()).toBeVisible();
  124 |     await adminPage.resetSystemUserFilters();
  125 |     await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
  126 |     await expect(adminPage.userRoleDropdown).toContainText(
  127 |       data.defaultDropdownValue,
  128 |     );
  129 |     await expect(adminPage.statusDropdown).toContainText(
  130 |       data.defaultDropdownValue,
  131 |     );
  132 |   });
  133 | 
  134 |   test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  135 |     navigationPage,
  136 |     pimPage,
  137 |     adminPage,
  138 |   }) => {
  139 |     const data = adminData.TC_ADMIN_047;
  140 |     const value = unique();
  141 |     const employee = employeeFrom(data.employee, value);
  142 |     const username = `${data.systemUser.usernamePrefix}${value}`;
  143 |     const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
  144 |     await navigationPage.gotoPIM();
  145 |     await pimPage.gotoAddEmployee();
  146 |     const employeeId = await pimPage.addEmployee(employee);
  147 |     await navigationPage.gotoAdmin();
  148 |     await adminPage.gotoUserManagementUsers();
  149 |     await adminPage.gotoAddSystemUser();
  150 |     await adminPage.fillSystemUserForm({
  151 |       ...data.systemUser,
  152 |       employeeName,
  153 |       username,
  154 |     });
  155 |     await adminPage.saveSystemUser();
  156 |     await adminPage.searchSystemUsers({ username });
  157 |     await adminPage.verifySystemUserResult({
  158 |       username,
  159 |       userRole: data.systemUser.userRole,
  160 |       employeeName: `${employee.firstName} ${employee.lastName}`,
  161 |       status: data.systemUser.status,
  162 |     });
  163 |     await adminPage.deleteSystemUserByUsername(username);
  164 |     await navigationPage.gotoPIM();
  165 |     await pimPage.gotoEmployeeList();
  166 |     await pimPage.filterEmployeeList({ employeeId });
  167 |     await pimPage.clickOnFilterSearch();
  168 |     await pimPage.deleteEmployeeById(employeeId);
  169 |   });
  170 | 
  171 |   test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
  172 |     page,
  173 |     navigationPage,
  174 |     adminPage,
  175 |   }) => {
  176 |     const data = adminData.TC_ADMIN_048;
  177 |     await navigationPage.gotoAdmin();
  178 |     await adminPage.gotoUserManagementUsers();
  179 |     await adminPage.gotoAddSystemUser();
  180 |     await adminPage.addUserSaveButton.click();
  181 |     await expect(adminPage.validationMessages).toHaveCount(
  182 |       data.expectedValidations.length,
  183 |     );
> 184 |     await expect(adminPage.validationMessages).toHaveText(
      |                                                ^ Error: expect(locator).toHaveText(expected) failed
  185 |       data.expectedValidations,
  186 |     );
  187 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  188 |   });
  189 | 
  190 |   test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
  191 |     page,
  192 |     navigationPage,
  193 |     adminPage,
  194 |   }) => {
  195 |     const data = adminData.TC_ADMIN_049;
  196 |     const username = `${data.usernamePrefix}${unique()}`;
  197 |     await navigationPage.gotoAdmin();
  198 |     await adminPage.gotoUserManagementUsers();
  199 |     await adminPage.gotoAddSystemUser();
  200 |     await adminPage.addUsernameInput.fill(username);
  201 |     await adminPage.addPasswordInput.fill(data.password);
  202 |     await adminPage.addConfirmPasswordInput.fill(data.password);
  203 |     await adminPage.addUserCancelButton.click();
  204 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  205 |     await adminPage.searchSystemUsers({ username });
  206 |     await expect(adminPage.userRows).toHaveCount(0);
  207 |   });
  208 | 
  209 |   test("TC_ADMIN_050 - Duplicate validation should appear for an existing username @negative @validation @regression", async ({
  210 |     navigationPage,
  211 |     pimPage,
  212 |     adminPage,
  213 |   }) => {
  214 |     const data = adminData.TC_ADMIN_050;
  215 |     const employee = employeeFrom(data.employee);
  216 |     await navigationPage.gotoPIM();
  217 |     await pimPage.gotoAddEmployee();
  218 |     const employeeId = await pimPage.addEmployee(employee);
  219 |     await navigationPage.gotoAdmin();
  220 |     await adminPage.gotoUserManagementUsers();
  221 |     await adminPage.gotoAddSystemUser();
  222 |     await adminPage.fillSystemUserForm({
  223 |       ...data.systemUser,
  224 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  225 |     });
  226 |     await adminPage.addUsernameInput.blur();
  227 |     await expect(adminPage.usernameValidation).toHaveText(
  228 |       new RegExp(data.expectedErrorPattern, "i"),
  229 |     );
  230 |     await adminPage.addUserCancelButton.click();
  231 |     await navigationPage.gotoPIM();
  232 |     await pimPage.gotoEmployeeList();
  233 |     await pimPage.filterEmployeeList({ employeeId });
  234 |     await pimPage.clickOnFilterSearch();
  235 |     await pimPage.deleteEmployeeById(employeeId);
  236 |   });
  237 | 
  238 |   test("TC_ADMIN_051 - Password mismatch validation should appear @negative @validation @regression", async ({
  239 |     navigationPage,
  240 |     pimPage,
  241 |     adminPage,
  242 |   }) => {
  243 |     const data = adminData.TC_ADMIN_051;
  244 |     const value = unique();
  245 |     const employee = employeeFrom(data.employee, value);
  246 |     await navigationPage.gotoPIM();
  247 |     await pimPage.gotoAddEmployee();
  248 |     const employeeId = await pimPage.addEmployee(employee);
  249 |     await navigationPage.gotoAdmin();
  250 |     await adminPage.gotoUserManagementUsers();
  251 |     await adminPage.gotoAddSystemUser();
  252 |     await adminPage.fillSystemUserForm({
  253 |       userRole: data.systemUser.userRole,
  254 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  255 |       status: data.systemUser.status,
  256 |       username: `${data.systemUser.usernamePrefix}${value}`,
  257 |       password: data.systemUser.password,
  258 |     });
  259 |     await adminPage.addConfirmPasswordInput.fill(
  260 |       data.systemUser.confirmPassword,
  261 |     );
  262 |     await adminPage.addConfirmPasswordInput.blur();
  263 |     await expect(adminPage.confirmPasswordValidation).toHaveText(
  264 |       data.expectedError,
  265 |     );
  266 |     await adminPage.addUserCancelButton.click();
  267 |     await navigationPage.gotoPIM();
  268 |     await pimPage.gotoEmployeeList();
  269 |     await pimPage.filterEmployeeList({ employeeId });
  270 |     await pimPage.clickOnFilterSearch();
  271 |     await pimPage.deleteEmployeeById(employeeId);
  272 |   });
  273 | 
  274 |   test("TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression", async ({
  275 |     page,
  276 |     navigationPage,
  277 |     adminPage,
  278 |   }) => {
  279 |     const data = adminData.TC_ADMIN_052;
  280 |     await navigationPage.gotoAdmin();
  281 |     await adminPage.gotoUserManagementUsers();
  282 |     await adminPage.gotoAddSystemUser();
  283 |     await adminPage.addUserSaveButton.click();
  284 |     await expect(adminPage.validationMessages).toHaveCount(
```