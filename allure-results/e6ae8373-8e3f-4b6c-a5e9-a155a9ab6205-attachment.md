# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression
- Location: tests\PIM\pim-employee-list.spec.ts:385:6

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })

```

# Test source

```ts
  329 | 
  330 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  331 |     timeout: 15_000,
  332 |   });
  333 | 
  334 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  335 | 
  336 |   await expect(pimPage.firstnameInput).toHaveValue(secondEmployee.firstName);
  337 | 
  338 |   await expect(pimPage.middlenameInput).toHaveValue(secondEmployee.middleName);
  339 | 
  340 |   await expect(pimPage.lastnameInput).toHaveValue(secondEmployee.lastName);
  341 | 
  342 |   await expect(pimPage.employeeID).toHaveValue(employeeId2);
  343 | 
  344 | 
  345 |   await pimPage.gotoEmployeeList();
  346 |   await expect(pimPage.loadingSpinner).toBeHidden();
  347 |       const firstRow = pimPage.employeeRows.filter({
  348 |       hasText: employeeId1,
  349 |     });
  350 | 
  351 |     const secondRow = pimPage.employeeRows.filter({
  352 |       hasText: employeeId2,
  353 |     });
  354 | 
  355 |    await expect(firstRow).toHaveCount(1);
  356 |   await expect(secondRow).toHaveCount(1);
  357 |  await pimPage.selectEmployeeById(employeeId1);
  358 |     await pimPage.selectEmployeeById(employeeId2);
  359 | 
  360 |     await pimPage.deleteSelectedEmployees();
  361 | 
  362 |     await pimPage.filterEmployeeList({
  363 |       employeeId: employeeId1,
  364 |     });
  365 | 
  366 |     await pimPage.clickOnFilterSearch();
  367 | 
  368 |     await pimPage.verifyNoEmployeeRecordsFound(
  369 |       employeeId1
  370 |     );
  371 | 
  372 |     await pimPage.filterEmployeeList({
  373 |       employeeId: employeeId2,
  374 |     });
  375 | 
  376 |     await pimPage.clickOnFilterSearch();
  377 | 
  378 |     await pimPage.verifyNoEmployeeRecordsFound(
  379 |       employeeId2
  380 |     );
  381 |   }
  382 | );
  383 | 
  384 | 
  385 | test.only("TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression", async ({
  386 |   page,
  387 |   loginPage,
  388 |   navigationPage,dashboardPage,
  389 |   pimPage,
  390 | }) => {
  391 |   const firstName = `Auto${Date.now()}`;
  392 |   const middleName = "Test";
  393 |   const lastName = "User";
  394 |  
  395 | 
  396 |   await loginPage.visitPage();
  397 |   await loginPage.login("Admin", "admin123");
  398 |   await loginPage.verifyLoginSuccessful();
  399 | 
  400 |   await navigationPage.gotoPIM();
  401 |   await pimPage.gotoAddEmployee();
  402 | 
  403 |   const employeeId = await pimPage.addEmployee({
  404 |     firstName,
  405 |     middleName,
  406 |     lastName,
  407 |   });
  408 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  409 |     timeout: 15_000,
  410 |   });
  411 | 
  412 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  413 | 
  414 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  415 | 
  416 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  417 | 
  418 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  419 | 
  420 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  421 | 
  422 |   await pimPage.gotoEmployeeList();
  423 | 
  424 |   await pimPage.filterEmployeeList({ employeeId });
  425 |   await pimPage.clickOnFilterSearch();
  426 | 
  427 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  428 | 
> 429 |   pimPage.firstnameInput.click();
      |                          ^ Error: locator.click: Test ended.
  430 | 
  431 |   // await pimPage.deleteEmployeeById(employeeId);
  432 | 
  433 |   // await pimPage.filterEmployeeList({ employeeId });
  434 |   // await pimPage.clickOnFilterSearch();
  435 | 
  436 |   // await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  437 | });
  438 | 
  439 | 
  440 | 
  441 | 
  442 | 
```