# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:333:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-field-error-message')
Expected: 2
Received: 0

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    5 × locator resolved to 0 elements
      - unexpected value "0"
  - Test timeout of 60000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: Joseph Garcia
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]
                  - textbox "Middle Name" [ref=f3e174]: test
                  - textbox "Last Name" [ref=f3e177]
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0388"
            - separator [ref=f3e185]
            - generic [ref=f3e186]:
              - paragraph [ref=f3e187]: Create Login Details
              - checkbox [ref=f3e190]
        - separator [ref=f3e192]
        - generic [ref=f3e193]:
          - paragraph [ref=f3e194]: "* Required"
          - button "Cancel" [ref=f3e195] [cursor=pointer]
          - button "Save" [active] [ref=f3e196] [cursor=pointer]
    - generic [ref=f3e197]:
      - paragraph [ref=f3e198]: OrangeHRM OS 5.9
      - paragraph [ref=f3e199]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e200] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  259 | 
  260 |   await navigationPage.gotoPIM();
  261 |   await pimPage.gotoAddEmployee();
  262 | 
  263 |   const employeeId = await pimPage.addEmployee({
  264 |     firstName: firstName,
  265 |     middleName: middleName,
  266 |     lastName: lastName,
  267 |     profilePicturePath: profilePicturePath,
  268 |   });
  269 | 
  270 |   // await page.waitForURL(
  271 |   //   /pim\/viewPersonalDetails\/empNumber\/\d+/,
  272 |   //   { timeout: 15_000 }
  273 |   // );
  274 | 
  275 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  276 |   await expect(pimPage.profilePicturePreview).toBeVisible();
  277 |   await pimPage.gotoEmployeeList();
  278 |   await pimPage.filterEmployeeList({ employeeId });
  279 |   await pimPage.clickOnFilterSearch();
  280 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  281 |   await pimPage.deleteEmployeeById(employeeId);
  282 |   await pimPage.filterEmployeeList({ employeeId });
  283 |   await pimPage.clickOnFilterSearch();
  284 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  285 | });
  286 | 
  287 | test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({
  288 |   page,
  289 |   loginPage,
  290 |   navigationPage,
  291 |   pimPage,
  292 | }) => {
  293 |   const profilePicturePath = path.resolve("test-data/txt_crlf_log_sample.txt");
  294 | 
  295 |   await loginPage.visitPage();
  296 |   await loginPage.login("Admin", "admin123");
  297 |   await loginPage.verifyLoginSuccessful();
  298 |   await navigationPage.gotoPIM();
  299 |   await pimPage.gotoAddEmployee();
  300 |   await expect(pimPage.profilePictureInput).toBeAttached();
  301 |   await pimPage.verifyInvalidProfilePicture(profilePicturePath);
  302 | });
  303 | 
  304 | test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({
  305 |   page,
  306 |   loginPage,
  307 |   navigationPage,
  308 |   pimPage,
  309 | }) => {
  310 |   const firstName = `Auto${Date.now()}`;
  311 |   const middleName = "test";
  312 |   const lastName = "user";
  313 |   await loginPage.visitPage();
  314 | 
  315 |   await loginPage.login("Admin", "admin123");
  316 | 
  317 |   await loginPage.verifyLoginSuccessful();
  318 | 
  319 |   await navigationPage.gotoPIM();
  320 | 
  321 |   await pimPage.gotoAddEmployee();
  322 | 
  323 |   let employeeId = await pimPage.fillAddEmployeeForm({
  324 |     firstName: firstName,
  325 |     middleName: middleName,
  326 |     lastName: lastName,
  327 |   });
  328 | 
  329 |   await pimPage.cancelAddingEmployee();
  330 | });
  331 | 
  332 | 
  333 | test("TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression", async ({
  334 |   page,
  335 |   loginPage,
  336 |   navigationPage,
  337 |   pimPage,
  338 | }) => {
  339 |   const firstName = `Auto${Date.now()}`;
  340 |   const middleName = "test";
  341 |   const lastName = "user";
  342 |   await loginPage.visitPage();
  343 | 
  344 |   await loginPage.login("Admin", "admin123");
  345 | 
  346 |   await loginPage.verifyLoginSuccessful();
  347 | 
  348 |   await navigationPage.gotoPIM();
  349 | 
  350 |   await pimPage.gotoAddEmployee();
  351 | 
  352 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  353 |    firstName: "",
  354 |   lastName: "",
  355 |   middleName:middleName
  356 | 
  357 | });
  358 | 
> 359 | await expect(pimPage.requiredValidationMessages).toHaveCount(2);
      |                                                  ^ Error: expect(locator).toHaveCount(expected) failed
  360 | await expect(pimPage.requiredValidationMessages).toHaveText([
  361 |   'Required',
  362 |   'Required',
  363 | ]);
  364 | 
  365 | });
  366 | 
  367 | 
  368 | test("TC_PIM_025 - Required validation should appear when employee last name is empty @negative @validation @regression", async ({
  369 |   page,
  370 |   loginPage,
  371 |   navigationPage,
  372 |   pimPage,
  373 | }) => {
  374 |   const firstName = `Auto${Date.now()}`;
  375 |   const middleName = "test";
  376 |   
  377 |   await loginPage.visitPage();
  378 |   await loginPage.login("Admin", "admin123");
  379 |   await loginPage.verifyLoginSuccessful();
  380 |   await navigationPage.gotoPIM();
  381 |   await pimPage.gotoAddEmployee();
  382 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  383 |    firstName:firstName,
  384 |   lastName: " ",
  385 |   middleName:middleName
  386 | 
  387 | });
  388 | await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  389 | await expect(pimPage.requiredValidationMessages).toHaveText([
  390 |   'Required',
  391 | ]);
  392 | 
  393 | await expect(page).toHaveURL(/pim\/addEmployee/);
  394 | 
  395 | });
  396 | 
  397 | 
  398 | 
  399 | test("TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression", async ({
  400 |   page,
  401 |   loginPage,
  402 |   navigationPage,
  403 |   pimPage,
  404 | }) => {
  405 |   const middleName = 'Test';
  406 | const lastName = `User${Date.now()}`;
  407 |   
  408 |   await loginPage.visitPage();
  409 |   await loginPage.login("Admin", "admin123");
  410 |   await loginPage.verifyLoginSuccessful();
  411 |   await navigationPage.gotoPIM();
  412 |   await pimPage.gotoAddEmployee();
  413 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  414 |   firstName:" ",
  415 |   middleName:middleName,
  416 |   lastName:lastName,
  417 | 
  418 | });
  419 | await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  420 | await expect(pimPage.requiredValidationMessages).toHaveText([
  421 |   'Required',
  422 | ]);
  423 | 
  424 | await expect(page).toHaveURL(/pim\/addEmployee/);
  425 | 
  426 | });
  427 | 
  428 | 
  429 | test("'TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  430 |   page,
  431 |   loginPage,
  432 |   navigationPage,
  433 |   pimPage,
  434 | }) => {
  435 |   const middleName = 'Test';
  436 | const lastName = `User${Date.now()}`;
  437 |   
  438 |   await loginPage.visitPage();
  439 |   await loginPage.login("Admin", "admin123");
  440 |   await loginPage.verifyLoginSuccessful();
  441 |   await navigationPage.gotoPIM();
  442 |   await pimPage.gotoAddEmployee();
  443 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  444 |   firstName:" ",
  445 |   middleName:middleName,
  446 |   lastName:lastName,
  447 | 
  448 | });
  449 | await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  450 | await expect(pimPage.requiredValidationMessages).toHaveText([
  451 |   'Required',
  452 | ]);
  453 | 
  454 | await expect(page).toHaveURL(/pim\/addEmployee/);
  455 | 
  456 | });
  457 | 
  458 | 
  459 | test(
```