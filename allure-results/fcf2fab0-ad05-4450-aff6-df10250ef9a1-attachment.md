# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> 'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'
- Location: tests\PIM\pim-employee.spec.ts:306:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'First Name' })
Expected: "Auto1785914736790"
Received: ""
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'First Name' })
    23 × locator resolved to <input name="firstName" data-v-1f99f73c="" placeholder="First Name" class="oxd-input oxd-input--active orangehrm-firstname"/>
       - unexpected value ""

```

```yaml
- textbox "First Name"
```

# Test source

```ts
  239 |   await pimPage.gotoAddEmployee();
  240 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  241 |     firstName: " ",
  242 |     middleName: middleName,
  243 |     lastName: lastName,
  244 |   });
  245 |   await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  246 |   await expect(pimPage.requiredValidationMessages).toHaveText(["Required"]);
  247 | 
  248 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  249 | });
  250 | 
  251 | test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  252 |   page,
  253 |   loginPage,
  254 |   navigationPage,
  255 |   pimPage,
  256 | }) => {
  257 |   const firstName = `Auto${Date.now()}`;
  258 |   const secondFirstName = `Duplicate${Date.now()}`;
  259 | 
  260 |   await loginPage.visitPage();
  261 |   await loginPage.login("Admin", "admin123");
  262 |   await loginPage.verifyLoginSuccessful();
  263 | 
  264 |   await navigationPage.gotoPIM();
  265 |   await pimPage.gotoAddEmployee();
  266 |   const employeeId = await pimPage.addEmployee({
  267 |     firstName,
  268 |     middleName: "Test",
  269 |     lastName: "User",
  270 |   });
  271 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  272 |     timeout: 15_000,
  273 |   });
  274 | 
  275 |   await pimPage.gotoAddEmployee();
  276 | 
  277 |   await pimPage.fillAddEmployeeForm({
  278 |     firstName: secondFirstName,
  279 |     middleName: "Test",
  280 |     lastName: "User",
  281 |     employeeId,
  282 |   });
  283 | 
  284 |   await expect(pimPage.employeeIdValidation).toBeVisible();
  285 | 
  286 |   await expect(pimPage.employeeIdValidation).toHaveText(
  287 |     "Employee Id already exists",
  288 |   );
  289 | 
  290 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  291 | 
  292 |   await pimPage.cancelAddingEmployee();
  293 |   await pimPage.filterEmployeeList({ employeeId });
  294 |   await pimPage.clickOnFilterSearch();
  295 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, "User");
  296 | 
  297 |   await pimPage.deleteEmployeeById(employeeId);
  298 | 
  299 |   await pimPage.filterEmployeeList({ employeeId });
  300 |   await pimPage.clickOnFilterSearch();
  301 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  302 | });
  303 | 
  304 | 
  305 | 
  306 | test("'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'", async ({
  307 |   page,
  308 |   loginPage,
  309 |   navigationPage,
  310 |   pimPage,
  311 | }) => {
  312 |   const firstName = `Auto${Date.now()}`;
  313 |   const middleName = "Test";
  314 |   const lastName = "User";
  315 |   const username = `user${Date.now()}`;
  316 |   const password = "Test@12345";
  317 | 
  318 |   await loginPage.visitPage();
  319 |   await loginPage.login("Admin", "admin123");
  320 |   await loginPage.verifyLoginSuccessful();
  321 | 
  322 |   await navigationPage.gotoPIM();
  323 |   await pimPage.gotoAddEmployee();
  324 | 
  325 |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  326 |     firstName,
  327 |     middleName,
  328 |     lastName,
  329 |     username,
  330 |     password,
  331 |     status: "Enabled",
  332 |   });
  333 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  334 |     timeout: 15_000,
  335 |   });
  336 | 
  337 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  338 | 
> 339 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
      |                                        ^ Error: expect(locator).toHaveValue(expected) failed
  340 | 
  341 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  342 | 
  343 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  344 | 
  345 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  346 | 
  347 |   await pimPage.gotoEmployeeList();
  348 | 
  349 |   await pimPage.filterEmployeeList({ employeeId });
  350 |   await pimPage.clickOnFilterSearch();
  351 | 
  352 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  353 | 
  354 |   // Cleanup.
  355 |   await pimPage.deleteEmployeeById(employeeId);
  356 | 
  357 |   await pimPage.filterEmployeeList({ employeeId });
  358 |   await pimPage.clickOnFilterSearch();
  359 | 
  360 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  361 | });
  362 | 
  363 | test("TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression", async ({
  364 |   page,
  365 |   loginPage,
  366 |   navigationPage,
  367 |   pimPage,
  368 | }) => {
  369 |   const firstName = `Auto${Date.now()}`;
  370 |   const username = `user${Date.now()}`;
  371 |   const password = "Test@12345";
  372 |   const confirmPassword = "Wrong@12345";
  373 | 
  374 |   await loginPage.visitPage();
  375 |   await loginPage.login("Admin", "admin123");
  376 |   await loginPage.verifyLoginSuccessful();
  377 | 
  378 |   await navigationPage.gotoPIM();
  379 |   await pimPage.gotoAddEmployee();
  380 | 
  381 |   await pimPage.fillAddEmployeeForm({
  382 |     firstName,
  383 |     middleName: "Test",
  384 |     lastName: "User",
  385 |   });
  386 | 
  387 |   await pimPage.createLoginDetailsSwitch.click();
  388 | 
  389 |   await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();
  390 | 
  391 |   await pimPage.employeeUsernameInput.fill(username);
  392 |   await pimPage.employeePasswordInput.fill(password);
  393 |   await pimPage.confirmPasswordInput.fill(confirmPassword);
  394 | 
  395 |   await pimPage.confirmPasswordInput.blur();
  396 | 
  397 |   await expect(pimPage.confirmPasswordValidation).toBeVisible();
  398 | 
  399 |   await expect(pimPage.confirmPasswordValidation).toHaveText(
  400 |     "Passwords do not match",
  401 |   );
  402 | 
  403 |   await pimPage.SaveEmployeeButton.click();
  404 | 
  405 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  406 | 
  407 |   await expect(pimPage.confirmPasswordValidation).toHaveText(
  408 |     "Passwords do not match",
  409 |   );
  410 | });
  411 | 
  412 | test("TC_PIM_032 - Weak password validation should appear while creating employee login details @negative @validation @account @regression", async ({
  413 |   page,
  414 |   loginPage,
  415 |   navigationPage,
  416 |   pimPage,
  417 | }) => {
  418 |   const firstName = `Auto${Date.now()}`;
  419 |   const username = `user${Date.now()}`;
  420 |   const weakPassword = "12345";
  421 | 
  422 |   await loginPage.visitPage();
  423 |   await loginPage.login("Admin", "admin123");
  424 |   await loginPage.verifyLoginSuccessful();
  425 | 
  426 |   await navigationPage.gotoPIM();
  427 |   await pimPage.gotoAddEmployee();
  428 | 
  429 |   await pimPage.fillAddEmployeeForm({
  430 |     firstName,
  431 |     middleName: "Test",
  432 |     lastName: "User",
  433 |   });
  434 | 
  435 |   // Click the visible switch.
  436 |   await pimPage.createLoginDetailsSwitch.click();
  437 | 
  438 |   // Verify the hidden checkbox is checked.
  439 |   await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();
```