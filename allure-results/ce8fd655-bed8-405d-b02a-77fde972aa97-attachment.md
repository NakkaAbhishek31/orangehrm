# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression
- Location: tests\Admin\admin-users.spec.ts:429:6

# Error details

```
TimeoutError: locator.click: Timeout 25000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Add/i })

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: mandaa Name
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Today at 11:38 AM (GMT 5.5)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Aug 03 - Aug 09
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (2) Candidates to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
        - generic [ref=f1e257]:
          - generic [ref=f1e258]:
            - generic [ref=f1e259] [cursor=pointer]:
              - img "profile picture" [ref=f1e261]
              - generic [ref=f1e262]:
                - paragraph [ref=f1e263]: mandaa akhill Name
                - paragraph [ref=f1e264]: 2026-03-08 12:14 PM
            - separator [ref=f1e265]
            - paragraph [ref=f1e266]: Hi Rishi
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: mandaa akhill Name
                - paragraph [ref=f1e273]: 2026-03-08 12:08 PM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: Test Validation
          - generic [ref=f1e276]:
            - generic [ref=f1e277] [cursor=pointer]:
              - img "profile picture" [ref=f1e279]
              - generic [ref=f1e280]:
                - paragraph [ref=f1e281]: mandaa akhill Name
                - paragraph [ref=f1e282]: 2026-03-08 12:01 PM
            - separator [ref=f1e283]
            - paragraph [ref=f1e284]: test
          - generic [ref=f1e285]:
            - generic [ref=f1e286] [cursor=pointer]:
              - img "profile picture" [ref=f1e288]
              - generic [ref=f1e289]:
                - paragraph [ref=f1e290]: mandaa akhill Name
                - paragraph [ref=f1e291]: 2026-03-08 11:32 AM
            - separator [ref=f1e292]
            - paragraph [ref=f1e293]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f1e294]:
            - generic [ref=f1e295] [cursor=pointer]:
              - img "profile picture" [ref=f1e297]
              - generic [ref=f1e298]:
                - paragraph [ref=f1e299]: mandaa akhill Name
                - paragraph [ref=f1e300]: 2026-03-08 11:32 AM
            - separator [ref=f1e301]
            - paragraph [ref=f1e302]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=f1e304]:
        - generic [ref=f1e305]:
          - paragraph [ref=f1e310]: Employees on Leave Today
          - generic [ref=f1e311] [cursor=pointer]: 
        - separator [ref=f1e312]
        - generic [ref=f1e314]:
          - img "profile picture" [ref=f1e316]
          - generic [ref=f1e317]:
            - paragraph [ref=f1e318]: mandaa Name
            - paragraph [ref=f1e319]: US - Vacation
          - paragraph
      - generic [ref=f1e321]:
        - generic [ref=f1e323]:
          - generic [ref=f1e324]: 
          - paragraph [ref=f1e325]: Employee Distribution by Sub Unit
        - separator [ref=f1e326]
        - list [ref=f1e331]:
          - listitem [ref=f1e332] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e334]
          - listitem [ref=f1e335] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e337]
      - generic [ref=f1e339]:
        - generic [ref=f1e341]:
          - generic [ref=f1e342]: 
          - paragraph [ref=f1e343]: Employee Distribution by Location
        - separator [ref=f1e344]
        - list [ref=f1e349]:
          - listitem [ref=f1e350] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e352]
          - listitem [ref=f1e353] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e355]
    - generic [ref=f1e356]:
      - paragraph [ref=f1e357]: OrangeHRM OS 5.9
      - paragraph [ref=f1e358]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e359] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  279 |     await this.employeeNameInput.fill(
  280 |       filters.employeeName
  281 |     );
  282 | 
  283 |     const employeeOption = this.page
  284 |       .locator('.oxd-autocomplete-option')
  285 |       .filter({
  286 |         hasText: filters.employeeName,
  287 |       })
  288 |       .first();
  289 | 
  290 |     await expect(employeeOption).toBeVisible({
  291 |       timeout: 15_000,
  292 |     });
  293 | 
  294 |     await employeeOption.click();
  295 |   }
  296 | 
  297 |   if (filters.status !== undefined) {
  298 |     await this.selectDropdownOption(
  299 |       this.statusDropdown,
  300 |       filters.status
  301 |     );
  302 |   }
  303 | 
  304 |   const searchResponse =
  305 |     this.page.waitForResponse(
  306 |       response =>
  307 |         response.url().includes(
  308 |           '/api/v2/admin/users'
  309 |         ) &&
  310 |         response.request().method() === 'GET' &&
  311 |         response.ok(),
  312 |       {
  313 |         timeout: 20_000,
  314 |       }
  315 |     );
  316 | 
  317 |   await this.searchButton.click();
  318 |   await searchResponse;
  319 | 
  320 |   await expect(this.loadingSpinner).toBeHidden();
  321 | }
  322 | 
  323 | async verifySystemUserResult(
  324 |   expected: SystemUserFilters
  325 | ): Promise<void> {
  326 |   await expect(this.userRows.first()).toBeVisible();
  327 | 
  328 |   const matchingRow = expected.username
  329 |     ? this.userRows.filter({
  330 |         has: this.page
  331 |           .locator('.oxd-table-cell')
  332 |           .nth(1)
  333 |           .getByText(expected.username, {
  334 |             exact: true,
  335 |           }),
  336 |       })
  337 |     : this.userRows.first();
  338 | 
  339 |   await expect(matchingRow).toHaveCount(1);
  340 | 
  341 |   const cells = matchingRow.locator(
  342 |     '.oxd-table-cell'
  343 |   );
  344 | 
  345 |   if (expected.username !== undefined) {
  346 |     await expect(cells.nth(1)).toHaveText(
  347 |       expected.username
  348 |     );
  349 |   }
  350 | 
  351 |   if (expected.userRole !== undefined) {
  352 |     await expect(cells.nth(2)).toHaveText(
  353 |       expected.userRole
  354 |     );
  355 |   }
  356 | 
  357 |   if (expected.employeeName !== undefined) {
  358 |     await expect(cells.nth(3)).toContainText(
  359 |       expected.employeeName
  360 |     );
  361 |   }
  362 | 
  363 |   if (expected.status !== undefined) {
  364 |     await expect(cells.nth(4)).toHaveText(
  365 |       expected.status
  366 |     );
  367 |   }
  368 | }
  369 | 
  370 | async resetSystemUserFilters(): Promise<void> {
  371 |   await this.resetButton.click();
  372 | 
  373 |   await expect(this.usernameInput).toHaveValue('');
  374 |   await expect(this.employeeNameInput).toHaveValue('');
  375 | }
  376 | 
  377 | async gotoAddSystemUser():Promise<void>
  378 | {
> 379 |  await this.addButton.click();
      |                       ^ TimeoutError: locator.click: Timeout 25000ms exceeded.
  380 |  await this.page.waitForURL(
  381 |     /admin\/saveSystemUser/,
  382 |     {
  383 |       timeout: 20_000,
  384 |     }
  385 |   );
  386 | 
  387 |   await expect(this.addUserHeading).toBeVisible();
  388 | 
  389 | }
  390 | 
  391 | async fillSystemUserForm(
  392 |   details: AddSystemUserDetails
  393 | ): Promise<void> {
  394 |   await this.selectDropdownOption(
  395 |     this.addUserRoleDropdown,
  396 |     details.userRole
  397 |   );
  398 | 
  399 |   await this.addEmployeeNameInput.fill(
  400 |     details.employeeName
  401 |   );
  402 | 
  403 |   const matchingEmployee =
  404 |     this.autocompleteOptions
  405 |       .filter({
  406 |         hasText: details.employeeName,
  407 |       })
  408 |       .first();
  409 | 
  410 |   await expect(matchingEmployee).toBeVisible({
  411 |     timeout: 20_000,
  412 |   });
  413 | 
  414 |   await matchingEmployee.click();
  415 | 
  416 |   await this.selectDropdownOption(
  417 |     this.addStatusDropdown,
  418 |     details.status
  419 |   );
  420 | 
  421 |   await this.addUsernameInput.fill(
  422 |     details.username
  423 |   );
  424 | 
  425 |   await this.addPasswordInput.fill(
  426 |     details.password
  427 |   );
  428 | 
  429 |   await this.addConfirmPasswordInput.fill(
  430 |     details.password
  431 |   );
  432 | }
  433 | 
  434 | 
  435 | async saveSystemUser(): Promise<void> {
  436 |   const createUserResponse =
  437 |     this.page.waitForResponse(
  438 |       response =>
  439 |         response.url().includes(
  440 |           '/api/v2/admin/users'
  441 |         ) &&
  442 |         response.request().method() === 'POST' &&
  443 |         response.ok(),
  444 |       {
  445 |         timeout: 20_000,
  446 |       }
  447 |     );
  448 | 
  449 |   const systemUsersPage =
  450 |     this.page.waitForURL(
  451 |       /admin\/viewSystemUsers/,
  452 |       {
  453 |         timeout: 20_000,
  454 |       }
  455 |     );
  456 | 
  457 |   // Begin watching for the temporary toast
  458 |   // before clicking Save.
  459 |   const successToastAppears = expect(
  460 |     this.successToast
  461 |   ).toContainText(
  462 |     'Successfully Saved',
  463 |     {
  464 |       timeout: 20_000,
  465 |     }
  466 |   );
  467 | 
  468 |   await this.addUserSaveButton.click();
  469 | 
  470 |   await Promise.all([
  471 |     createUserResponse,
  472 |     systemUsersPage,
  473 |     successToastAppears,
  474 |   ]);
  475 | 
  476 |   await expect(
  477 |     this.systemUsersHeading
  478 |   ).toBeVisible();
  479 | }
```