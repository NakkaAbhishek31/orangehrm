# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:281:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'First Name' })
Expected: "BulkB1786006987324"
Received: ""

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'First Name' })
    6 × locator resolved to <input name="firstName" data-v-1f99f73c="" placeholder="First Name" class="oxd-input oxd-input--active orangehrm-firstname"/>
      - unexpected value ""
  - Test timeout of 60000ms exceeded.

```

```yaml
- textbox "First Name"
```

# Test source

```ts
  233 |     await loginPage.visitPage();
  234 |     await loginPage.login('Admin', 'admin123');
  235 |     await loginPage.verifyLoginSuccessful();
  236 | 
  237 |     await navigationPage.gotoPIM();
  238 |     await pimPage.gotoAddEmployee();
  239 | 
  240 |     const employeeId = await pimPage.addEmployee({
  241 |       firstName,
  242 |       middleName,
  243 |       lastName,
  244 |     });
  245 | 
  246 |     await pimPage.gotoEmployeeList();
  247 | 
  248 |     await pimPage.filterEmployeeList({ employeeId });
  249 |     await pimPage.clickOnFilterSearch();
  250 | 
  251 |     await pimPage.verifyEmployeeSearchResult(
  252 |       employeeId,
  253 |       firstName,
  254 |       lastName
  255 |     );
  256 | 
  257 |     await pimPage.cancelEmployeeDeletion(
  258 |       employeeId
  259 |     );
  260 | 
  261 |     // Verify the employee remains after cancellation.
  262 |     await pimPage.verifyEmployeeSearchResult(
  263 |       employeeId,
  264 |       firstName,
  265 |       lastName
  266 |     );
  267 | 
  268 |     // Final cleanup.
  269 |     await pimPage.deleteEmployeeById(employeeId);
  270 | 
  271 |     await pimPage.filterEmployeeList({ employeeId });
  272 |     await pimPage.clickOnFilterSearch();
  273 | 
  274 |     await pimPage.verifyNoEmployeeRecordsFound(
  275 |       employeeId
  276 |     );
  277 |   }
  278 | );
  279 | 
  280 | 
  281 | test("TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression", async ({
  282 |   page,
  283 |   loginPage,
  284 |   navigationPage,dashboardPage,
  285 |   pimPage,
  286 | }) => {
  287 |   const uniqueValue = Date.now();
  288 | 
  289 |     const firstEmployee = {
  290 |       firstName: `BulkA${uniqueValue}`,
  291 |       middleName: 'Test',
  292 |       lastName: 'User',
  293 |     };
  294 | 
  295 |     const secondEmployee = {
  296 |       firstName: `BulkB${uniqueValue}`,
  297 |       middleName: 'Test',
  298 |       lastName: 'User',
  299 |     };
  300 | 
  301 |   await loginPage.visitPage();
  302 |   await loginPage.login("Admin", "admin123");
  303 |   await loginPage.verifyLoginSuccessful();
  304 | 
  305 |   await navigationPage.gotoPIM();
  306 |   await pimPage.gotoAddEmployee();
  307 | 
  308 |   const employeeId1 = await pimPage.addEmployee(firstEmployee);
  309 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  310 |     timeout: 15_000,
  311 |   });
  312 | 
  313 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  314 | 
  315 |   await expect(pimPage.firstnameInput).toHaveValue(firstEmployee.firstName);
  316 | 
  317 |   await expect(pimPage.middlenameInput).toHaveValue(firstEmployee.middleName);
  318 | 
  319 |   await expect(pimPage.lastnameInput).toHaveValue(firstEmployee.lastName);
  320 | 
  321 |   await expect(pimPage.employeeID).toHaveValue(employeeId1);
  322 | 
  323 |   await pimPage.gotoAddEmployee();
  324 | 
  325 |   const employeeId2 = await pimPage.addEmployee(secondEmployee);
  326 | 
  327 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  328 |     timeout: 15_000,
  329 |   });
  330 | 
  331 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  332 | 
> 333 |   await expect(pimPage.firstnameInput).toHaveValue(secondEmployee.firstName);
      |                                        ^ Error: expect(locator).toHaveValue(expected) failed
  334 | 
  335 |   await expect(pimPage.middlenameInput).toHaveValue(secondEmployee.middleName);
  336 | 
  337 |   await expect(pimPage.lastnameInput).toHaveValue(secondEmployee.lastName);
  338 | 
  339 |   await expect(pimPage.employeeID).toHaveValue(employeeId2);
  340 | 
  341 | 
  342 |   await pimPage.gotoEmployeeList();
  343 |   await expect(pimPage.loadingSpinner).toBeHidden();
  344 |       const firstRow = pimPage.employeeRows.filter({
  345 |       hasText: employeeId1,
  346 |     });
  347 | 
  348 |     const secondRow = pimPage.employeeRows.filter({
  349 |       hasText: employeeId2,
  350 |     });
  351 | 
  352 | //    await expect(firstRow).toHaveCount(1);
  353 | //   await expect(secondRow).toHaveCount(1);
  354 |  await pimPage.selectEmployeeById(employeeId1);
  355 |     await pimPage.selectEmployeeById(employeeId2);
  356 | 
  357 |     await pimPage.deleteSelectedEmployees();
  358 | 
  359 |     await pimPage.filterEmployeeList({
  360 |       employeeId: employeeId1,
  361 |     });
  362 | 
  363 |     await pimPage.clickOnFilterSearch();
  364 | 
  365 |     await pimPage.verifyNoEmployeeRecordsFound(
  366 |       employeeId1
  367 |     );
  368 | 
  369 |     await pimPage.filterEmployeeList({
  370 |       employeeId: employeeId2,
  371 |     });
  372 | 
  373 |     await pimPage.clickOnFilterSearch();
  374 | 
  375 |     await pimPage.verifyNoEmployeeRecordsFound(
  376 |       employeeId2
  377 |     );
  378 |   }
  379 | );
  380 | 
  381 | 
  382 | test("TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression", async ({
  383 |   page,
  384 |   loginPage,
  385 |   navigationPage,dashboardPage,
  386 |   pimPage,
  387 | }) => {
  388 |   const firstName = `Auto${Date.now()}`;
  389 |   const middleName = "Test";
  390 |   const lastName = "User";
  391 |  
  392 | 
  393 |   await loginPage.visitPage();
  394 |   await loginPage.login("Admin", "admin123");
  395 |   await loginPage.verifyLoginSuccessful();
  396 | 
  397 |   await navigationPage.gotoPIM();
  398 |   await pimPage.gotoAddEmployee();
  399 | 
  400 |   const employeeId = await pimPage.addEmployee({
  401 |     firstName,
  402 |     middleName,
  403 |     lastName,
  404 |   });
  405 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  406 |     timeout: 15_000,
  407 |   });
  408 | 
  409 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  410 | 
  411 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  412 | 
  413 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  414 | 
  415 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  416 | 
  417 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  418 | 
  419 |   await pimPage.gotoEmployeeList();
  420 | 
  421 |   await pimPage.filterEmployeeList({ employeeId });
  422 |   await pimPage.clickOnFilterSearch();
  423 | 
  424 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  425 | 
  426 |   await pimPage.openEmployeeById(employeeId);
  427 | 
  428 |   await expect(page).toHaveURL(
  429 |   /pim\/viewPersonalDetails\/empNumber\/\d+/
  430 | );
  431 | 
  432 | await pimPage.gotoEmployeeList();
  433 |   await pimPage.filterEmployeeList({ employeeId });
```