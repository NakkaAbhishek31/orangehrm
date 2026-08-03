# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:242:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('ess1785738763781908', { exact: true }) }).locator('.oxd-table-cell').nth(3)
Expected substring: "Auto1785738763781908 Test User"
Received string:    "Auto1785738763781908 User"
Timeout: 10000ms

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('ess1785738763781908', { exact: true }) }).locator('.oxd-table-cell').nth(3)
    23 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "Auto1785738763781908 User"

```

```yaml
- cell "Auto1785738763781908 User"
```

# Test source

```ts
  253 |   await dropdownOption.click();
  254 | }
  255 | 
  256 | 
  257 | async searchSystemUsers(
  258 |   filters: SystemUserFilters
  259 | ): Promise<void> {
  260 |   if (filters.username !== undefined) {
  261 |     await this.usernameInput.fill(
  262 |       filters.username
  263 |     );
  264 |   }
  265 | 
  266 |   if (filters.userRole !== undefined) {
  267 |     await this.selectDropdownOption(
  268 |       this.userRoleDropdown,
  269 |       filters.userRole
  270 |     );
  271 |   }
  272 | 
  273 |   if (filters.employeeName !== undefined) {
  274 |     await this.employeeNameInput.fill(
  275 |       filters.employeeName
  276 |     );
  277 | 
  278 |     const employeeOption = this.page
  279 |       .locator('.oxd-autocomplete-option')
  280 |       .filter({
  281 |         hasText: filters.employeeName,
  282 |       })
  283 |       .first();
  284 | 
  285 |     await expect(employeeOption).toBeVisible({
  286 |       timeout: 15_000,
  287 |     });
  288 | 
  289 |     await employeeOption.click();
  290 |   }
  291 | 
  292 |   if (filters.status !== undefined) {
  293 |     await this.selectDropdownOption(
  294 |       this.statusDropdown,
  295 |       filters.status
  296 |     );
  297 |   }
  298 | 
  299 |   const searchResponse =
  300 |     this.page.waitForResponse(
  301 |       response =>
  302 |         response.url().includes(
  303 |           '/api/v2/admin/users'
  304 |         ) &&
  305 |         response.request().method() === 'GET' &&
  306 |         response.ok(),
  307 |       {
  308 |         timeout: 20_000,
  309 |       }
  310 |     );
  311 | 
  312 |   await this.searchButton.click();
  313 |   await searchResponse;
  314 | 
  315 |   await expect(this.loadingSpinner).toBeHidden();
  316 | }
  317 | 
  318 | async verifySystemUserResult(
  319 |   expected: SystemUserFilters
  320 | ): Promise<void> {
  321 |   await expect(this.userRows.first()).toBeVisible();
  322 | 
  323 |   const matchingRow = expected.username
  324 |     ? this.userRows.filter({
  325 |         has: this.page
  326 |           .locator('.oxd-table-cell')
  327 |           .nth(1)
  328 |           .getByText(expected.username, {
  329 |             exact: true,
  330 |           }),
  331 |       })
  332 |     : this.userRows.first();
  333 | 
  334 |   await expect(matchingRow).toHaveCount(1);
  335 | 
  336 |   const cells = matchingRow.locator(
  337 |     '.oxd-table-cell'
  338 |   );
  339 | 
  340 |   if (expected.username !== undefined) {
  341 |     await expect(cells.nth(1)).toHaveText(
  342 |       expected.username
  343 |     );
  344 |   }
  345 | 
  346 |   if (expected.userRole !== undefined) {
  347 |     await expect(cells.nth(2)).toHaveText(
  348 |       expected.userRole
  349 |     );
  350 |   }
  351 | 
  352 |   if (expected.employeeName !== undefined) {
> 353 |     await expect(cells.nth(3)).toContainText(
      |                                ^ Error: expect(locator).toContainText(expected) failed
  354 |       expected.employeeName
  355 |     );
  356 |   }
  357 | 
  358 |   if (expected.status !== undefined) {
  359 |     await expect(cells.nth(4)).toHaveText(
  360 |       expected.status
  361 |     );
  362 |   }
  363 | }
  364 | 
  365 | async resetSystemUserFilters(): Promise<void> {
  366 |   await this.resetButton.click();
  367 | 
  368 |   await expect(this.usernameInput).toHaveValue('');
  369 |   await expect(this.employeeNameInput).toHaveValue('');
  370 | }
  371 | 
  372 | async gotoAddSystemUser():Promise<void>
  373 | {
  374 |  await this.addButton.click();
  375 |  await this.page.waitForURL(
  376 |     /admin\/saveSystemUser/,
  377 |     {
  378 |       timeout: 20_000,
  379 |     }
  380 |   );
  381 | 
  382 |   await expect(this.addUserHeading).toBeVisible();
  383 | 
  384 | }
  385 | 
  386 | async fillSystemUserForm(
  387 |   details: AddSystemUserDetails
  388 | ): Promise<void> {
  389 |   await this.selectDropdownOption(
  390 |     this.addUserRoleDropdown,
  391 |     details.userRole
  392 |   );
  393 | 
  394 |   await this.addEmployeeNameInput.fill(
  395 |     details.employeeName
  396 |   );
  397 | 
  398 |   const matchingEmployee =
  399 |     this.autocompleteOptions
  400 |       .filter({
  401 |         hasText: details.employeeName,
  402 |       })
  403 |       .first();
  404 | 
  405 |   await expect(matchingEmployee).toBeVisible({
  406 |     timeout: 20_000,
  407 |   });
  408 | 
  409 |   await matchingEmployee.click();
  410 | 
  411 |   await this.selectDropdownOption(
  412 |     this.addStatusDropdown,
  413 |     details.status
  414 |   );
  415 | 
  416 |   await this.addUsernameInput.fill(
  417 |     details.username
  418 |   );
  419 | 
  420 |   await this.addPasswordInput.fill(
  421 |     details.password
  422 |   );
  423 | 
  424 |   await this.addConfirmPasswordInput.fill(
  425 |     details.password
  426 |   );
  427 | }
  428 | 
  429 | 
  430 | async saveSystemUser(): Promise<void> {
  431 |   const createUserResponse =
  432 |     this.page.waitForResponse(
  433 |       response =>
  434 |         response.url().includes(
  435 |           '/api/v2/admin/users'
  436 |         ) &&
  437 |         response.request().method() === 'POST' &&
  438 |         response.ok(),
  439 |       {
  440 |         timeout: 20_000,
  441 |       }
  442 |     );
  443 | 
  444 |   const systemUsersPage =
  445 |     this.page.waitForURL(
  446 |       /admin\/viewSystemUsers/,
  447 |       {
  448 |         timeout: 20_000,
  449 |       }
  450 |     );
  451 | 
  452 |   // Begin watching for the temporary toast
  453 |   // before clicking Save.
```