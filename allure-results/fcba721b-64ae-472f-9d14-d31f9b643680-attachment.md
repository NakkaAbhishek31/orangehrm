# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:172:7

# Error details

```
Test timeout of 60000ms exceeded.
```

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
    18 × locator resolved to 6 elements

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
              - paragraph [ref=f4e127]: mandaa Doe
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
  85  |     expect(count).toBeGreaterThan(0);
  86  |     for (let i = 0; i < count; i++)
  87  |       await expect(
  88  |         adminPage.userRows.nth(i).locator(".oxd-table-cell").nth(2),
  89  |       ).toHaveText(data.userRole);
  90  |     await adminPage.resetSystemUserFilters();
  91  |     await expect(adminPage.userRoleDropdown).toContainText(
  92  |       data.defaultDropdownValue,
  93  |     );
  94  |   });
  95  | 
  96  |   test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  97  |     navigationPage,
  98  |     adminPage,
  99  |   }) => {
  100 |     const data = adminData.TC_ADMIN_045;
  101 |     await navigationPage.gotoAdmin();
  102 |     await adminPage.gotoUserManagementUsers();
  103 |     await adminPage.searchSystemUsers({ status: data.status });
  104 |     const count = await adminPage.userRows.count();
  105 |     expect(count).toBeGreaterThan(0);
  106 |     for (let i = 0; i < count; i++)
  107 |       await expect(
  108 |         adminPage.userRows.nth(i).locator(".oxd1-table-cell").nth(4),
  109 |       ).toHaveText(data.status);
  110 |     await adminPage.resetSystemUserFilters();
  111 |     await expect(adminPage.statusDropdown).toContainText(
  112 |       data.defaultDropdownValue,
  113 |     );
  114 |   });
  115 | 
  116 |   test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  117 |     navigationPage,
  118 |     adminPage,
  119 |   }) => {
  120 |     const data = adminData.TC_ADMIN_046;
  121 |     await navigationPage.gotoAdmin();
  122 |     await adminPage.gotoUserManagementUsers();
  123 |     await adminPage.searchSystemUsers(data.filters);
  124 |     await expect(adminPage.userRows.first()).toBeVisible();
  125 |     await adminPage.resetSystemUserFilters();
  126 |     await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
  127 |     await expect(adminPage.userRoleDropdown).toContainText(
  128 |       data.defaultDropdownValue,
  129 |     );
  130 |     await expect(adminPage.statusDropdown).toContainText(
  131 |       data.defaultDropdownValue,
  132 |     );
  133 |   });
  134 | 
  135 |   test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  136 |     navigationPage,
  137 |     pimPage,
  138 |     adminPage,
  139 |   }) => {
  140 |     const data = adminData.TC_ADMIN_047;
  141 |     const value = unique();
  142 |     const employee = employeeFrom(data.employee, value);
  143 |     const username = `${data.systemUser.usernamePrefix}${value}`;
  144 |     const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
  145 |     await navigationPage.gotoPIM();
  146 |     await pimPage.gotoAddEmployee();
  147 |     const employeeId = await pimPage.addEmployee(employee);
  148 |     await navigationPage.gotoAdmin();
  149 |     await adminPage.gotoUserManagementUsers();
  150 |     await adminPage.gotoAddSystemUser();
  151 |     await adminPage.fillSystemUserForm({
  152 |       ...data.systemUser,
  153 |       employeeName,
  154 |       username,
  155 |     });
  156 |     await adminPage.saveSystemUser();
  157 |     await adminPage.searchSystemUsers({ username });
  158 |     await adminPage.verifySystemUserResult({
  159 |       username,
  160 |       userRole: data.systemUser.userRole,
  161 |       employeeName: `${employee.firstName} ${employee.lastName}`,
  162 |       status: data.systemUser.status,
  163 |     });
  164 |     await adminPage.deleteSystemUserByUsername(username);
  165 |     await navigationPage.gotoPIM();
  166 |     await pimPage.gotoEmployeeList();
  167 |     await pimPage.filterEmployeeList({ employeeId });
  168 |     await pimPage.clickOnFilterSearch();
  169 |     await pimPage.deleteEmployeeById(employeeId);
  170 |   });
  171 | 
  172 |   test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
  173 |     page,
  174 |     navigationPage,
  175 |     adminPage,
  176 |   }) => {
  177 |     const data = adminData.TC_ADMIN_048;
  178 |     await navigationPage.gotoAdmin();
  179 |     await adminPage.gotoUserManagementUsers();
  180 |     await adminPage.gotoAddSystemUser();
  181 |     await adminPage.addUserSaveButton.click();
  182 |     await expect(adminPage.validationMessages).toHaveCount(
  183 |       data.expectedValidations.length,
  184 |     );
> 185 |     await expect(adminPage.validationMessages).toHaveText(
      |                                                ^ Error: expect(locator).toHaveText(expected) failed
  186 |       data.expectedValidations,
  187 |     );
  188 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  189 |   });
  190 | 
  191 |   test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
  192 |     page,
  193 |     navigationPage,
  194 |     adminPage,
  195 |   }) => {
  196 |     const data = adminData.TC_ADMIN_049;
  197 |     const username = `${data.usernamePrefix}${unique()}`;
  198 |     await navigationPage.gotoAdmin();
  199 |     await adminPage.gotoUserManagementUsers();
  200 |     await adminPage.gotoAddSystemUser();
  201 |     await adminPage.addUsernameInput.fill(username);
  202 |     await adminPage.addPasswordInput.fill(data.password);
  203 |     await adminPage.addConfirmPasswordInput.fill(data.password);
  204 |     await adminPage.addUserCancelButton.click();
  205 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  206 |     await adminPage.searchSystemUsers({ username });
  207 |     await expect(adminPage.userRows).toHaveCount(0);
  208 |   });
  209 | 
  210 |   test("TC_ADMIN_050 - Duplicate validation should appear for an existing username @negative @validation @regression", async ({
  211 |     navigationPage,
  212 |     pimPage,
  213 |     adminPage,
  214 |   }) => {
  215 |     const data = adminData.TC_ADMIN_050;
  216 |     const employee = employeeFrom(data.employee);
  217 |     await navigationPage.gotoPIM();
  218 |     await pimPage.gotoAddEmployee();
  219 |     const employeeId = await pimPage.addEmployee(employee);
  220 |     await navigationPage.gotoAdmin();
  221 |     await adminPage.gotoUserManagementUsers();
  222 |     await adminPage.gotoAddSystemUser();
  223 |     await adminPage.fillSystemUserForm({
  224 |       ...data.systemUser,
  225 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  226 |     });
  227 |     await adminPage.addUsernameInput.blur();
  228 |     await expect(adminPage.usernameValidation).toHaveText(
  229 |       new RegExp(data.expectedErrorPattern, "i"),
  230 |     );
  231 |     await adminPage.addUserCancelButton.click();
  232 |     await navigationPage.gotoPIM();
  233 |     await pimPage.gotoEmployeeList();
  234 |     await pimPage.filterEmployeeList({ employeeId });
  235 |     await pimPage.clickOnFilterSearch();
  236 |     await pimPage.deleteEmployeeById(employeeId);
  237 |   });
  238 | 
  239 |   test("TC_ADMIN_051 - Password mismatch validation should appear @negative @validation @regression", async ({
  240 |     navigationPage,
  241 |     pimPage,
  242 |     adminPage,
  243 |   }) => {
  244 |     const data = adminData.TC_ADMIN_051;
  245 |     const value = unique();
  246 |     const employee = employeeFrom(data.employee, value);
  247 |     await navigationPage.gotoPIM();
  248 |     await pimPage.gotoAddEmployee();
  249 |     const employeeId = await pimPage.addEmployee(employee);
  250 |     await navigationPage.gotoAdmin();
  251 |     await adminPage.gotoUserManagementUsers();
  252 |     await adminPage.gotoAddSystemUser();
  253 |     await adminPage.fillSystemUserForm({
  254 |       userRole: data.systemUser.userRole,
  255 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  256 |       status: data.systemUser.status,
  257 |       username: `${data.systemUser.usernamePrefix}${value}`,
  258 |       password: data.systemUser.password,
  259 |     });
  260 |     await adminPage.addConfirmPasswordInput.fill(
  261 |       data.systemUser.confirmPassword,
  262 |     );
  263 |     await adminPage.addConfirmPasswordInput.blur();
  264 |     await expect(adminPage.confirmPasswordValidation).toHaveText(
  265 |       data.expectedError,
  266 |     );
  267 |     await adminPage.addUserCancelButton.click();
  268 |     await navigationPage.gotoPIM();
  269 |     await pimPage.gotoEmployeeList();
  270 |     await pimPage.filterEmployeeList({ employeeId });
  271 |     await pimPage.clickOnFilterSearch();
  272 |     await pimPage.deleteEmployeeById(employeeId);
  273 |   });
  274 | 
  275 |   test("TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression", async ({
  276 |     page,
  277 |     navigationPage,
  278 |     adminPage,
  279 |   }) => {
  280 |     const data = adminData.TC_ADMIN_052;
  281 |     await navigationPage.gotoAdmin();
  282 |     await adminPage.gotoUserManagementUsers();
  283 |     await adminPage.gotoAddSystemUser();
  284 |     await adminPage.addUserSaveButton.click();
  285 |     await expect(adminPage.validationMessages).toHaveCount(
```