# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:400:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-input-field-error-message')
- Expected  - 1
+ Received  + 0

  Array [
    "Required",
-   "Required",
  ]

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    15 × locator resolved to 1 element
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

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
              - paragraph [ref=f3e127]: QjzLMXDrHQ Doe
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
                  - generic [ref=f3e169]:
                    - textbox "First Name" [ref=f3e171]
                    - generic [ref=f3e172]: Required
                  - textbox "Middle Name" [ref=f3e175]: Test
                  - textbox "Last Name" [ref=f3e178]: User1785479994998
              - generic [ref=f3e181]:
                - generic [ref=f3e182]: Employee Id
                - textbox [ref=f3e185]: "0446"
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [ref=f3e191]
        - separator [ref=f3e193]
        - generic [ref=f3e194]:
          - paragraph [ref=f3e195]: "* Required"
          - button "Cancel" [ref=f3e196] [cursor=pointer]
          - button "Save" [active] [ref=f3e197] [cursor=pointer]
    - generic [ref=f3e198]:
      - paragraph [ref=f3e199]: OrangeHRM OS 5.9
      - paragraph [ref=f3e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  359 | await expect(pimPage.requiredValidationMessages).toHaveCount(2);
  360 | await expect(pimPage.requiredValidationMessages).toHaveText([
  361 |   'Required',
  362 |   'Required',
  363 | ]);
  364 | 
  365 | });
  366 | 
  367 | 
  368 | test.only("TC_PIM_025 - Required validation should appear when employee last name is empty @negative @validation @regression", async ({
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
  391 |   'Required',
  392 | ]);
  393 | 
  394 | await expect(page).toHaveURL(/pim\/addEmployee/);
  395 | 
  396 | });
  397 | 
  398 | 
  399 | 
  400 | test.only("TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression", async ({
  401 |   page,
  402 |   loginPage,
  403 |   navigationPage,
  404 |   pimPage,
  405 | }) => {
  406 |   const middleName = 'Test';
  407 | const lastName = `User${Date.now()}`;
  408 |   
  409 |   await loginPage.visitPage();
  410 |   await loginPage.login("Admin", "admin123");
  411 |   await loginPage.verifyLoginSuccessful();
  412 |   await navigationPage.gotoPIM();
  413 |   await pimPage.gotoAddEmployee();
  414 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  415 |   firstName:" ",
  416 |   middleName:middleName,
  417 |   lastName:lastName,
  418 | 
  419 | });
  420 | await expect(pimPage.requiredValidationMessages).toHaveCount(1);
> 421 | await expect(pimPage.requiredValidationMessages).toHaveText([
      |                                                  ^ Error: expect(locator).toHaveText(expected) failed
  422 |   'Required',
  423 |   'Required',
  424 | ]);
  425 | 
  426 | await expect(page).toHaveURL(/pim\/addEmployee/);
  427 | 
  428 | });
```