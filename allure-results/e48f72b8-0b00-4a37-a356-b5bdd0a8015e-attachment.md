# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:332:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-input-field-error-message')
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
    14 × locator resolved to 6 elements
  - Test timeout of 60000ms exceeded.

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
    - banner [ref=f4e105]:
      - generic [ref=f4e106]:
        - generic [ref=f4e107]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e109]
        - link [ref=f4e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e112] [cursor=pointer]
        - list [ref=f4e118]:
          - listitem [ref=f4e119]:
            - generic [ref=f4e120] [cursor=pointer]:
              - img "profile picture" [ref=f4e121]
              - paragraph [ref=f4e122]: sd i
              - generic [ref=f4e123]: 
      - navigation "Topbar Menu" [ref=f4e125]:
        - list [ref=f4e126]:
          - listitem [ref=f4e127] [cursor=pointer]:
            - generic [ref=f4e128]:
              - text: User Management
              - generic [ref=f4e129]: 
          - listitem [ref=f4e130] [cursor=pointer]:
            - generic [ref=f4e131]:
              - text: Job
              - generic [ref=f4e132]: 
          - listitem [ref=f4e133] [cursor=pointer]:
            - generic [ref=f4e134]:
              - text: Organization
              - generic [ref=f4e135]: 
          - listitem [ref=f4e136] [cursor=pointer]:
            - generic [ref=f4e137]:
              - text: Qualifications
              - generic [ref=f4e138]: 
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Nationalities" [ref=f4e140]:
              - /url: "#"
          - listitem [ref=f4e141] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e142]:
              - /url: "#"
          - listitem [ref=f4e143] [cursor=pointer]:
            - generic [ref=f4e144]:
              - text: Configuration
              - generic [ref=f4e145]: 
          - button "" [ref=f4e147] [cursor=pointer]
  - generic [ref=f4e149]:
    - generic [ref=f4e152]:
      - heading "Add User" [level=6] [ref=f4e153]
      - separator [ref=f4e154]
      - generic [ref=f4e155]:
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e160]: User Role*
            - generic [ref=f4e164] [cursor=pointer]:
              - generic [ref=f4e165]: "-- Select --"
              - generic [ref=f4e166]: 
            - generic [ref=f4e168]: Required
          - generic [ref=f4e170]:
            - generic [ref=f4e171]: Employee Name*
            - textbox "Type for hints..." [ref=f4e176]
            - generic [ref=f4e177]: Required
          - generic [ref=f4e179]:
            - generic [ref=f4e180]: Status*
            - generic [ref=f4e184] [cursor=pointer]:
              - generic [ref=f4e185]: "-- Select --"
              - generic [ref=f4e186]: 
            - generic [ref=f4e188]: Required
          - generic [ref=f4e190]:
            - generic [ref=f4e191]: Username*
            - textbox [ref=f4e194]
            - generic [ref=f4e195]: Required
        - generic [ref=f4e197]:
          - generic [ref=f4e198]:
            - generic [ref=f4e199]:
              - generic [ref=f4e200]: Password*
              - textbox [ref=f4e203]
              - generic [ref=f4e204]: Required
            - paragraph [ref=f4e205]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e207]:
            - generic [ref=f4e208]: Confirm Password*
            - textbox [ref=f4e211]
            - generic [ref=f4e212]: Passwords do not match
        - separator [ref=f4e213]
        - generic [ref=f4e214]:
          - paragraph [ref=f4e215]: "* Required"
          - button "Cancel" [ref=f4e216] [cursor=pointer]
          - button "Save" [active] [ref=f4e217] [cursor=pointer]
    - generic [ref=f4e218]:
      - paragraph [ref=f4e219]: OrangeHRM OS 5.9
      - paragraph [ref=f4e220]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e221] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  252 |   // Click Add.
  253 |   await navigationPage.gotoAdmin();
  254 |   await adminPage.gotoUserManagementUsers();
  255 |   await adminPage.gotoAddSystemUser();
  256 |   await expect(adminPage.addUserHeading).toBeVisible();
  257 |   // Select “ESS” as User Role.
  258 |   // Select the newly created employee.
  259 |   // Select “Enabled” as Status.
  260 |   // Enter a unique username.
  261 |   // Enter and confirm a valid password.
  262 |   await adminPage.fillSystemUserForm({
  263 |     userRole: "ESS",
  264 |     employeeName,
  265 |     status: "Enabled",
  266 |     username,
  267 |     password,
  268 |   });
  269 |   await expect(adminPage.addUsernameInput).toHaveValue(username);
  270 | 
  271 |   await expect(adminPage.addEmployeeNameInput).toContainText;
  272 |   await expect(adminPage.addEmployeeNameInput).not.toHaveValue("");
  273 | 
  274 |   await expect(adminPage.addPasswordInput).toHaveValue(password);
  275 | 
  276 |   await expect(adminPage.addConfirmPasswordInput).toHaveValue(password);
  277 | 
  278 |   await adminPage.saveSystemUser();
  279 |   // Save the system user.
  280 |   // Verify the success notification.
  281 |   // Search using the new username.
  282 |   // Verify username, role, employee name, and status.
  283 |   // Delete the system user during cleanup.
  284 |   // Delete the employee during cleanup.
  285 | 
  286 |   await adminPage.searchSystemUsers({
  287 |     username,
  288 |   });
  289 | 
  290 |   await expect(adminPage.userRows).toHaveCount(1);
  291 | 
  292 |   await adminPage.verifySystemUserResult({
  293 |     username,
  294 |     userRole: "ESS",
  295 |     employeeName: employeeTableName,
  296 |     status: "Enabled",
  297 |   });
  298 | 
  299 |   // Delete the system user.
  300 |   await adminPage.deleteSystemUserByUsername(username);
  301 | 
  302 |   // Verify the system user was deleted.
  303 |   await adminPage.searchSystemUsers({
  304 |     username,
  305 |   });
  306 | 
  307 |   await expect(adminPage.userRows).toHaveCount(0);
  308 | 
  309 |   await expect(adminPage.noRecordsFound).toBeVisible();
  310 | 
  311 |   // Delete the employee.
  312 |   await navigationPage.gotoPIM();
  313 |   await pimPage.gotoEmployeeList();
  314 | 
  315 |   await pimPage.filterEmployeeList({
  316 |     employeeId,
  317 |   });
  318 | 
  319 |   await pimPage.clickOnFilterSearch();
  320 | 
  321 |   await pimPage.deleteEmployeeById(employeeId);
  322 | 
  323 |   await pimPage.filterEmployeeList({
  324 |     employeeId,
  325 |   });
  326 | 
  327 |   await pimPage.clickOnFilterSearch();
  328 | 
  329 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  330 | });
  331 | 
  332 | test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
  333 |   page,
  334 |   loginPage,
  335 |   navigationPage,
  336 |   adminPage,
  337 | }) => {
  338 |   await loginPage.visitPage();
  339 |   await loginPage.login("Admin", "admin123");
  340 |   await loginPage.verifyLoginSuccessful();
  341 | 
  342 |   await navigationPage.gotoAdmin();
  343 |   await adminPage.gotoUserManagementUsers();
  344 |   await adminPage.gotoAddSystemUser();
  345 | 
  346 |   await expect(adminPage.addUserHeading).toBeVisible();
  347 | 
  348 |   await adminPage.addUserSaveButton.click();
  349 | 
  350 |   await expect(adminPage.validationMessages).toHaveCount(6);
  351 | 
> 352 |   await expect(adminPage.validationMessages).toHaveText([
      |                                              ^ Error: expect(locator).toHaveText(expected) failed
  353 |     "Required",
  354 |     "Required",
  355 |     "Required",
  356 |     "Required",
  357 |     "Required",
  358 |     "Required",
  359 |   ]);
  360 | 
  361 |   await expect(page).toHaveURL(/admin\/saveSystemUser/);
  362 | 
  363 |   await expect(adminPage.addUserHeading).toBeVisible();
  364 | });
  365 | 
  366 | test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
  367 |   page,
  368 |   loginPage,
  369 |   navigationPage,
  370 |   adminPage,
  371 | }) => {
  372 |   const username = `cancel${Date.now()}`;
  373 |   const password = "Test@12345";
  374 |   await loginPage.visitPage();
  375 |   await loginPage.login("Admin", "admin123");
  376 |   await loginPage.verifyLoginSuccessful();
  377 |   await navigationPage.gotoAdmin();
  378 |   await adminPage.gotoUserManagementUsers();
  379 |   // Click Add.
  380 |   await adminPage.gotoAddSystemUser();
  381 |   // Enter a unique username and password.
  382 |   // Click Cancel without saving.
  383 |   // Verify navigation back to System Users.
  384 |   // Search using the entered username.
  385 |   // Verify no user record was created.
  386 |   await adminPage.addUsernameInput.fill(username);
  387 |   await adminPage.addPasswordInput.fill(password);
  388 |   await adminPage.addConfirmPasswordInput.fill(password);
  389 |   await adminPage.addUserCancelButton.click();
  390 | 
  391 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  392 | 
  393 |   await expect(adminPage.systemUsersHeading).toBeVisible();
  394 | 
  395 |   await adminPage.searchSystemUsers({
  396 |     username,
  397 |   });
  398 | 
  399 |   await expect(adminPage.userRows).toHaveCount(0);
  400 | 
  401 |   await expect(adminPage.noRecordsFound).toBeVisible();
  402 | 
  403 |   await adminPage.resetSystemUserFilters();
  404 | });
  405 | 
  406 | test("TC_ADMIN_050 - Duplicate validation should appear for an existing System User username @negative @validation @regression", async ({
  407 |   page,
  408 |   loginPage,
  409 |   navigationPage,
  410 |   pimPage,
  411 |   adminPage,
  412 | }) => {
  413 |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  414 | 
  415 |   const firstName = `Auto${uniqueValue}`;
  416 |   const middleName = "Test";
  417 |   const lastName = "User";
  418 | 
  419 |   const existingUsername = "Admin";
  420 |   const password = "Test@12345";
  421 | 
  422 |   await loginPage.visitPage();
  423 |   await loginPage.login("Admin", "admin123");
  424 |   await loginPage.verifyLoginSuccessful();
  425 | 
  426 |   // Create an employee without login details.
  427 |   await navigationPage.gotoPIM();
  428 |   await pimPage.gotoAddEmployee();
  429 | 
  430 |   const employeeId = await pimPage.addEmployee({
  431 |     firstName,
  432 |     middleName,
  433 |     lastName,
  434 |   });
  435 | 
  436 |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  437 | 
  438 |   // Navigate to Add System User.
  439 |   await navigationPage.gotoAdmin();
  440 |   await adminPage.gotoUserManagementUsers();
  441 |   await adminPage.gotoAddSystemUser();
  442 | 
  443 |   await expect(adminPage.addUserHeading).toBeVisible();
  444 | 
  445 |   // Fill the form with an existing username.
  446 |   await adminPage.fillSystemUserForm({
  447 |     userRole: "ESS",
  448 |     employeeName,
  449 |     status: "Enabled",
  450 |     username: existingUsername,
  451 |     password,
  452 |   });
```