# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_062 - Admin should filter System Users by employee name @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:1482:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f8e3]:
  - generic:
    - complementary [ref=f8e4]:
      - navigation "Sidepanel" [ref=f8e5]:
        - generic [ref=f8e6]:
          - link [ref=f8e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f8e9]
          - text: 
        - generic [ref=f8e10]:
          - generic [ref=f8e11]:
            - generic [ref=f8e12]:
              - textbox "Search" [ref=f8e15]
              - button "" [ref=f8e16] [cursor=pointer]
            - separator [ref=f8e18]
          - list [ref=f8e19]:
            - listitem [ref=f8e20]:
              - link "Admin" [ref=f8e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f8e25]:
              - link "PIM" [ref=f8e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f8e41]:
              - link "Leave" [ref=f8e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f8e46]:
              - link "Time" [ref=f8e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f8e54]:
              - link "Recruitment" [ref=f8e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f8e62]:
              - link "My Info" [ref=f8e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f8e70]:
              - link "Performance" [ref=f8e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f8e80]:
              - link "Dashboard" [ref=f8e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f8e85]:
              - link "Directory" [ref=f8e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f8e90]:
              - link "Maintenance" [ref=f8e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f8e96]:
              - link "Claim" [ref=f8e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f8e105]:
              - link "Buzz" [ref=f8e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f8e110]:
      - generic [ref=f8e111]:
        - generic [ref=f8e112]:
          - text: 
          - generic [ref=f8e113]:
            - heading "Admin" [level=6] [ref=f8e114]
            - heading "/ User Management" [level=6] [ref=f8e115]
        - link [ref=f8e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f8e118] [cursor=pointer]
        - list [ref=f8e124]:
          - listitem [ref=f8e125]:
            - generic [ref=f8e126] [cursor=pointer]:
              - img "profile picture" [ref=f8e127]
              - paragraph [ref=f8e128]: gjcGlDFTXw user
              - generic [ref=f8e129]: 
      - navigation "Topbar Menu" [ref=f8e131]:
        - list [ref=f8e132]:
          - listitem [ref=f8e133] [cursor=pointer]:
            - generic [ref=f8e134]:
              - text: User Management
              - generic [ref=f8e135]: 
          - listitem [ref=f8e136] [cursor=pointer]:
            - generic [ref=f8e137]:
              - text: Job
              - generic [ref=f8e138]: 
          - listitem [ref=f8e139] [cursor=pointer]:
            - generic [ref=f8e140]:
              - text: Organization
              - generic [ref=f8e141]: 
          - listitem [ref=f8e142] [cursor=pointer]:
            - generic [ref=f8e143]:
              - text: Qualifications
              - generic [ref=f8e144]: 
          - listitem [ref=f8e145] [cursor=pointer]:
            - link "Nationalities" [ref=f8e146]:
              - /url: "#"
          - listitem [ref=f8e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f8e148]:
              - /url: "#"
          - listitem [ref=f8e149] [cursor=pointer]:
            - generic [ref=f8e150]:
              - text: Configuration
              - generic [ref=f8e151]: 
          - button "" [ref=f8e153] [cursor=pointer]
  - generic [ref=f8e155]:
    - generic [ref=f8e157]:
      - generic [ref=f8e158]:
        - generic [ref=f8e159]:
          - heading "System Users" [level=5] [ref=f8e161]
          - button "" [ref=f8e164] [cursor=pointer]
        - separator [ref=f8e166]
        - generic [ref=f8e168]:
          - generic [ref=f8e170]:
            - generic [ref=f8e172]:
              - generic [ref=f8e173]: Username
              - textbox [ref=f8e176]: ess1785911275856663
            - generic [ref=f8e178]:
              - generic [ref=f8e179]: User Role
              - generic [ref=f8e183] [cursor=pointer]:
                - generic [ref=f8e184]: "-- Select --"
                - generic [ref=f8e185]: 
            - generic [ref=f8e188]:
              - generic [ref=f8e189]: Employee Name
              - textbox "Type for hints..." [ref=f8e194]
            - generic [ref=f8e196]:
              - generic [ref=f8e197]: Status
              - generic [ref=f8e201] [cursor=pointer]:
                - generic [ref=f8e202]: "-- Select --"
                - generic [ref=f8e203]: 
          - separator [ref=f8e205]
          - generic [ref=f8e206]:
            - button "Reset" [ref=f8e207] [cursor=pointer]
            - button "Search" [active] [ref=f8e208] [cursor=pointer]
      - generic [ref=f8e209]:
        - button " Add" [ref=f8e211] [cursor=pointer]:
          - generic [ref=f8e212]: 
          - text: Add
        - table [ref=f8e214]
    - generic [ref=f8e219]:
      - paragraph [ref=f8e220]: OrangeHRM OS 5.9
      - paragraph [ref=f8e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f8e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  247 |     });
  248 | 
  249 |  this.deleteSelectedButton = page
  250 |   .locator(
  251 |     '.orangehrm-horizontal-padding ' +
  252 |     'button.oxd-button--label-danger'
  253 |   )
  254 |   .filter({
  255 |     has: page.locator(
  256 |       'i.bi-trash-fill'
  257 |     ),
  258 |   });
  259 | 
  260 | 
  261 |     this.nextPageButton = page.locator(
  262 |   'button.oxd-pagination-page-item--previous-next'
  263 | ).filter({
  264 |   has: page.locator('i.bi-chevron-right'),
  265 | });
  266 | 
  267 | this.previousPageButton = page.locator(
  268 |   'button.oxd-pagination-page-item--previous-next'
  269 | ).filter({
  270 |   has: page.locator('i.bi-chevron-left'),
  271 | });
  272 | 
  273 | this.passwordValidation = page
  274 |   .locator('.oxd-input-group')
  275 |   .filter({
  276 |     has: page.getByText('Password', {
  277 |       exact: true,
  278 |     }),
  279 |   })
  280 |   .locator('.oxd-input-field-error-message');
  281 | 
  282 | this.employeeNameValidation = page
  283 |   .locator('.oxd-input-group')
  284 |   .filter({
  285 |     has: page
  286 |       .locator('label')
  287 |       .getByText('Employee Name', {
  288 |         exact: true,
  289 |       }),
  290 |   })
  291 |   .locator('.oxd-input-field-error-message');
  292 | 
  293 | 
  294 |   }
  295 | 
  296 |   async gotoUserManagementUsers(): Promise<void> {
  297 |     await this.userManagementMenu.click();
  298 |     await this.usersMenuItem.click();
  299 |   }
  300 | 
  301 |   private async selectDropdownOption(
  302 |     dropdown: Locator,
  303 |     option: string,
  304 |   ): Promise<void> {
  305 |     await dropdown.click();
  306 | 
  307 |     const dropdownOption = this.page
  308 |       .locator(".oxd-select-option")
  309 |       .getByText(option, {
  310 |         exact: true,
  311 |       });
  312 | 
  313 |     await expect(dropdownOption).toBeVisible();
  314 |     await dropdownOption.click();
  315 |   }
  316 | 
  317 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  318 |     if (filters.username !== undefined) {
  319 |       await this.usernameInput.fill(filters.username);
  320 |     }
  321 | 
  322 |     if (filters.userRole !== undefined) {
  323 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  324 |     }
  325 | 
  326 |     if (filters.employeeName !== undefined) {
  327 |       await this.employeeNameInput.fill(filters.employeeName);
  328 | 
  329 |       const employeeOption = this.page
  330 |         .locator(".oxd-autocomplete-option")
  331 |         .filter({
  332 |           hasText: filters.employeeName,
  333 |         })
  334 |         .first();
  335 | 
  336 |       await expect(employeeOption).toBeVisible({
  337 |         timeout: 15_000,
  338 |       });
  339 | 
  340 |       await employeeOption.click();
  341 |     }
  342 | 
  343 |     if (filters.status !== undefined) {
  344 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  345 |     }
  346 | 
> 347 |     const searchResponse = this.page.waitForResponse(
      |                                      ^ Error: page.waitForResponse: Test timeout of 60000ms exceeded.
  348 |       (response) =>
  349 |         response.url().includes("/api/v2/admin/users") &&
  350 |         response.request().method() === "GET" &&
  351 |         response.ok(),
  352 |       {
  353 |         timeout: 20_000,
  354 |       },
  355 |     );
  356 | 
  357 |     await this.searchButton.click();
  358 |     await searchResponse;
  359 | 
  360 |     await expect(this.loadingSpinner).toBeHidden();
  361 |   }
  362 | 
  363 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  364 |     await expect(this.userRows.first()).toBeVisible();
  365 | 
  366 |     const matchingRow = expected.username
  367 |       ? this.userRows.filter({
  368 |           has: this.page
  369 |             .locator(".oxd-table-cell")
  370 |             .nth(1)
  371 |             .getByText(expected.username, {
  372 |               exact: true,
  373 |             }),
  374 |         })
  375 |       : this.userRows.first();
  376 | 
  377 |     await expect(matchingRow).toHaveCount(1);
  378 | 
  379 |     const cells = matchingRow.locator(".oxd-table-cell");
  380 | 
  381 |     if (expected.username !== undefined) {
  382 |       await expect(cells.nth(1)).toHaveText(expected.username);
  383 |     }
  384 | 
  385 |     if (expected.userRole !== undefined) {
  386 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  387 |     }
  388 | 
  389 |     if (expected.employeeName !== undefined) {
  390 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  391 |     }
  392 | 
  393 |     if (expected.status !== undefined) {
  394 |       await expect(cells.nth(4)).toHaveText(expected.status);
  395 |     }
  396 |   }
  397 | 
  398 |   async resetSystemUserFilters(): Promise<void> {
  399 |     await this.resetButton.click();
  400 | 
  401 |     await expect(this.usernameInput).toHaveValue("");
  402 |     await expect(this.employeeNameInput).toHaveValue("");
  403 |   }
  404 | 
  405 |   async gotoAddSystemUser(): Promise<void> {
  406 |     await this.addButton.click();
  407 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  408 |       timeout: 20_000,
  409 |     });
  410 | 
  411 |     await expect(this.addUserHeading).toBeVisible();
  412 |   }
  413 | 
  414 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  415 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  416 | 
  417 |     await this.addEmployeeNameInput.fill(details.employeeName);
  418 | 
  419 |     const matchingEmployee = this.autocompleteOptions
  420 |       .filter({
  421 |         hasText: details.employeeName,
  422 |       })
  423 |       .first();
  424 | 
  425 |     await expect(matchingEmployee).toBeVisible({
  426 |       timeout: 20_000,
  427 |     });
  428 | 
  429 |     await matchingEmployee.click();
  430 | 
  431 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  432 | 
  433 |     await this.addUsernameInput.fill(details.username);
  434 | 
  435 |     await this.addPasswordInput.fill(details.password);
  436 | 
  437 |     await this.addConfirmPasswordInput.fill(details.password);
  438 |   }
  439 | 
  440 |   async saveSystemUser(): Promise<void> {
  441 |     const createUserResponse = this.page.waitForResponse(
  442 |       (response) =>
  443 |         response.url().includes("/api/v2/admin/users") &&
  444 |         response.request().method() === "POST" &&
  445 |         response.ok(),
  446 |       {
  447 |         timeout: 20_000,
```